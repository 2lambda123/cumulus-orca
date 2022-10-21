"""
Name: extract_filepaths_for_granule.py

Description:  Extracts the keys (filepaths) for a granule's files from a Cumulus Message.
"""

import json
import re
from http import HTTPStatus
from typing import Any, Dict, List, Union

import fastjsonschema as fastjsonschema
from aws_lambda_powertools import Logger
from aws_lambda_powertools.utilities.typing import LambdaContext
from fastjsonschema import JsonSchemaException

# Set AWS powertools logger
LOGGER = Logger()

CONFIG_EXCLUDED_FILE_EXTENSIONS_KEY = "excludedFileExtensions"
CONFIG_FILE_BUCKETS_KEY = "fileBucketMaps"

OUTPUT_DESTINATION_BUCKET_KEY = "destBucket"
OUTPUT_KEY_KEY = "key"


class ExtractFilePathsError(Exception):
    """Exception to be raised if any errors occur"""


def task(event, context):  # pylint: disable-msg=unused-argument
    """
    Task called by the handler to perform the work.

    This task will parse the input, removing the granuleId and file keys for a granule.

        Args:
            event (dict): passed through from the handler
            context (Object): passed through from the handler

        Returns:
            dict: dict containing granuleId and keys. See handler for detail.

        Raises:
            ExtractFilePathsError: An error occurred parsing the input.
    """
    LOGGER.debug(f"event: {event}")
    try:
        config = event["config"]
        exclude_file_types = config.get(CONFIG_EXCLUDED_FILE_EXTENSIONS_KEY, None)
        if exclude_file_types is None:
            exclude_file_types = []
        if len(exclude_file_types) == 0:
            LOGGER.debug(
                f"The configuration list {CONFIG_EXCLUDED_FILE_EXTENSIONS_KEY} is empty."
            )
        else:
            LOGGER.debug(
                f"The configuration {CONFIG_EXCLUDED_FILE_EXTENSIONS_KEY} "
                f"list {exclude_file_types} was found."
            )
    except KeyError as ke:
        message = f"Key {ke} is missing from the event configuration: {config}"
        LOGGER.error(message)
        raise KeyError(message)
    result = {}
    try:
        regex_buckets = get_regex_buckets(event)
        level = "event['input']"
        grans = []
        for ev_granule in event["input"]["granules"]:
            gran = ev_granule.copy()
            files = []
            level = "event['input']['granules'][]"
            gran["granuleId"] = ev_granule["granuleId"]
            for afile in ev_granule["files"]:
                level = "event['input']['granules'][]['files']"
                file_name = afile["fileName"]
                LOGGER.debug(f"Validating file {file_name}")
                # filtering excludedFileExtensions
                if not should_exclude_files_type(file_name, exclude_file_types):
                    LOGGER.debug(f"File {file_name} will be restored")
                    file_key = afile["key"]
                    LOGGER.debug(f"Retrieving information for {file_key}")
                    matching_regex = next(
                        filter(lambda key: re.compile(key).match(file_name), regex_buckets),
                        None
                    )
                    if matching_regex is None:
                        raise ExtractFilePathsError(f"No matching regex for '{file_key}'")
                    destination_bucket = regex_buckets[matching_regex]
                    LOGGER.debug(
                        f"Found retrieval destination {destination_bucket} for {file_name}"
                    )

                    files.append(
                        {
                            OUTPUT_KEY_KEY: file_key,
                            OUTPUT_DESTINATION_BUCKET_KEY: destination_bucket,
                        }
                    )
            gran["keys"] = files
            grans.append(gran)
        result["granules"] = grans
    except KeyError as err:
        raise ExtractFilePathsError(f'KeyError: "{level}[{str(err)}]" is required')
    return result


def get_regex_buckets(event) -> Dict[str, str]:
    """
    Gets a dict of regular expressions and the corresponding archive bucket for files
    matching the regex.

        Args:
            event (dict): passed through from the handler

        Returns:
            dict: dict containing regex and bucket.

        Raises:
            ExtractFilePathsError: An error occurred parsing the input.
    """
    try:
        file_buckets = event["config"][CONFIG_FILE_BUCKETS_KEY]
        # file_buckets example:
        # [{'regex': '.*.h5$', 'sampleFileName': 'L0A_0420.h5', 'bucket': 'protected'},
        # {'regex': '.*.iso.xml$', 'sampleFileName': 'L0A_0420.iso.xml', 'bucket': 'protected'},
        # {'regex': '.*.h5.mp$', 'sampleFileName': 'L0A_0420.h5.mp', 'bucket': 'public'},
        # {'regex': '.*.cmr.json$', 'sampleFileName': 'L0A_0420.cmr.json', 'bucket': 'public'}]
        buckets = event["config"]["buckets"]
        # buckets example:
        # {"protected": {"name": "sndbx-cumulus-protected", "type": "protected"},
        # "internal": {"name": "sndbx-cumulus-internal", "type": "internal"},
        # "private": {"name": "sndbx-cumulus-private", "type": "private"},
        # "public": {"name": "sndbx-cumulus-public", "type": "public"}}
        regex_buckets = {}
        for regx in file_buckets:
            regex_buckets[regx["regex"]] = buckets[regx["bucket"]]["name"]
        # regex_buckets example:
        # {'.*.h5$': 'podaac-sndbx-cumulus-protected',
        #  '.*.iso.xml$': 'podaac-sndbx-cumulus-protected',
        #  '.*.h5.mp$': 'podaac-sndbx-cumulus-public',
        #  '.*.cmr.json$': 'podaac-sndbx-cumulus-public'}
    except KeyError as err:
        level = "event['config']"
        message = f'KeyError: "{level}[{str(err)}]" is required'
        LOGGER.error(message)
        raise ExtractFilePathsError(message)
    return regex_buckets


def should_exclude_files_type(file_key: str, exclude_file_types: List[str]) -> bool:
    """
    Tests whether or not file is included in {excludedFileExtensions} from copy_to_archive.
    Args:
        file_key: The key of the file within the s3 bucket.
        exclude_file_types: List of extensions to exclude in the backup.
    Returns:
        True if file should be excluded from copy, False otherwise.
    """
    for file_type in exclude_file_types:
        # Returns the first instance in the string that matches .ext or None if no match was found.
        if re.search(f"^.*{file_type}$", file_key) is not None:
            LOGGER.warn(
                f"The file {file_key} will not be restored "
                f"because it matches the excluded file type {file_type}."
            )
            return True
    return False


def create_http_error_dict(
        error_type: str, http_status_code: int, request_id: str, message: str
) -> Dict[str, Any]:
    """
    Creates a standardized dictionary for error reporting.
    Args:
        error_type: The string representation of http_status_code.
        http_status_code: The integer representation of the http error.
        request_id: The incoming request's id.
        message: The message to display to the user and to record for debugging.
    Returns:
        A dict with the following keys:
            'errorType' (str)
            'httpStatus' (int)
            'requestId' (str)
            'message' (str)
    """
    LOGGER.error(message)
    return {
        "errorType": error_type,
        "httpStatus": http_status_code,
        "requestId": request_id,
        "message": message,
    }


@LOGGER.inject_lambda_context
def handler(event: Dict[str, Union[str, int]],
            context: LambdaContext):  # pylint: disable-msg=unused-argument
    """Lambda handler. Extracts the key's for a granule from an input dict.

    Args:
        event (dict): A dict with the following keys:

            granules (list(dict)): A list of dict with the following keys:
                granuleId (string): The id of a granule.
                files (list(dict)): list of dict with the following keys:
                    key (string): The key of the file to be returned.
                    other dictionary keys may be included, but are not used.
                other dictionary keys may be included, but are not used.

            Example: {
                        "event":{
                            "granules":[
                                {
                                    "granuleId":"granxyz",
                                    "version":"006",
                                    "files":[
                                    {
                                        "fileName":"file1",
                                        "key":"key1",
                                        "source":"s3://dr-test-sandbox-protected/file1",
                                        "type":"metadata"
                                    }
                                    ]
                                }
                            ]
                        }
                        }

        context: This object provides information about the lambda invocation, function,
            and execution env.

    Returns:
        dict: A dict with the following keys:

            'granules' (list(dict)): list of dict with the following keys:
                'granuleId' (string): The id of a granule.
                'keys' (list(string)): list of keys for the granule.

        Example:
            {"granules": [{"granuleId": "granxyz",
                         "keys": ["key1",
                                       "key2"]}]}

    Raises:
        ExtractFilePathsError: An error occurred parsing the input.
    """

    # Generating schema validators can take time, so do it once and reuse.
    try:
        with open("schemas/input.json", "r") as raw_schema:
            input_schema = json.loads(raw_schema.read())
            _VALIDATE_INPUT = fastjsonschema.compile(input_schema)
        # with open("schemas/config.json", "r") as raw_schema:
        #     config_schema = json.loads(raw_schema.read())
        #     _VALIDATE_CONFIG = fastjsonschema.compile(config_schema)
    except Exception as ex:
        LOGGER.error(f"Could not build schema validator: {ex}")
        raise

    try:
        _VALIDATE_INPUT(event["payload"])
    except JsonSchemaException as json_schema_exception:
        return create_http_error_dict(
            "BadRequest",
            HTTPStatus.BAD_REQUEST,
            context.aws_request_id,
            json_schema_exception.__str__(),
        )

    # try:
    #     _VALIDATE_CONFIG(event["meta"]["collection"]["files"])
    # except JsonSchemaException as json_schema_exception:
    #     return create_http_error_dict(
    #         "BadRequest",
    #         HTTPStatus.BAD_REQUEST,
    #         context.aws_request_id,
    #         json_schema_exception.__str__(),
    #     )

    result = task(event, context)
    return result
