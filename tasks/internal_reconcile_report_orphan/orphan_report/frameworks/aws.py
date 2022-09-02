import json
import os
from http import HTTPStatus
from typing import Dict, Union, Any, List

from cumulus_logger import CumulusLogger
import fastjsonschema as fastjsonschema
from fastjsonschema import JsonSchemaException
from orca_shared.database import shared_db

from orphan_report.use_cases import OrphanListUseCase
from orphan_report.entities import OrphanRecordFilter
from orphan_report.adapters.api import CumulusApi
from orphan_report.adapters.storage import AwsPostgresqlStorage

INPUT_JOB_ID_KEY = "jobId"
INPUT_PAGE_INDEX_KEY = "pageIndex"

LOGGER = CumulusLogger()

# Generating schema validators can take time, so do it once and reuse.
try:
    with open("schemas/input.json", "r") as raw_schema:
        input_schema = json.loads(raw_schema.read())
        _VALIDATE_INPUT = fastjsonschema.compile(input_schema)
    with open("schemas/output.json", "r") as raw_schema:
        output_schema = json.loads(raw_schema.read())
        _VALIDATE_OUTPUT = fastjsonschema.compile(output_schema)
except Exception as ex:
    LOGGER.error(f"Could not build schema validator: {ex}")
    raise


def check_env_variable(env_name: str) -> str:
    """
    Checks for the lambda environment variable.
    Args:
        env_name (str): The environment variable name set in lambda configuration.
    Raises: KeyError in case the environment variable is not found.
    """
    try:
        env_value = os.environ[env_name]
        if len(env_value) == 0 or env_value is None:
            raise KeyError(f"Empty value for {env_name}")
    except KeyError:
        LOGGER.error(f"{env_name} environment value not found.")
        raise

    return env_value


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


OS_ENVIRON_DB_CONNECT_INFO_SECRET_ARN_KEY = "DB_CONNECT_INFO_SECRET_ARN"  # nosec


def handler(
        event: Dict[str, Union[str, int]], context: Any
) -> Union[List[Dict[str, Any]], Dict[str, Any]]:
    """
    Entry point for the internal_reconcile_report_orphan Lambda.
    Args:
        event: See schemas/input.json for details.
        context: An object provided by AWS Lambda. Used for context tracking.

    Environment Vars:
        DB_CONNECT_INFO_SECRET_ARN (string): Secret ARN of the AWS secretsmanager secret for connecting to the database.
        See shared_db.py's get_configuration for further details.

    Returns:
        See schemas/output.json
        Or, if an error occurs, see create_http_error_dict
            400 if input does not match schemas/input.json. 500 if an error occurs when querying the database.
    """
    try:
        LOGGER.setMetadata(event, context)

        # Get the Filter
        try:
            _VALIDATE_INPUT(event)
        except JsonSchemaException as json_schema_exception:
            return create_http_error_dict(
                "BadRequest",
                HTTPStatus.BAD_REQUEST,
                context.aws_request_id,
                json_schema_exception.__str__(),
            )

        record_filter = OrphanRecordFilter(event[INPUT_JOB_ID_KEY], event[INPUT_PAGE_INDEX_KEY])

        # Get the Storage Adapter
        db_connect_info = shared_db.get_configuration(
            check_env_variable(OS_ENVIRON_DB_CONNECT_INFO_SECRET_ARN_KEY)
        )
        storage_adapter = AwsPostgresqlStorage(db_connect_info["host"], db_connect_info["port"], db_connect_info["user_database"], db_connect_info["user_username"], db_connect_info["user_password"])

        # Get the API adapter
        api_adapter = CumulusApi()
        
        # Get the use case
        orphan_record = OrphanListUseCase(storage_adapter, api_adapter)

        # Run the logic
        orphan_record_page = orphan_record.show_orphans(record_filter)

        _VALIDATE_OUTPUT(orphan_record_page)

        return orphan_record_page

    except Exception as error:
        return create_http_error_dict(
            "InternalServerError",
            HTTPStatus.INTERNAL_SERVER_ERROR,
            context.aws_request_id,
            error.__str__(),
        )
