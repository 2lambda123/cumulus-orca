# Table of Contents

* [copy\_from\_archive](#copy_from_archive)
  * [CopyRequestError](#copy_from_archive.CopyRequestError)
  * [task](#copy_from_archive.task)
  * [get\_files\_from\_records](#copy_from_archive.get_files_from_records)
  * [copy\_object](#copy_from_archive.copy_object)
  * [handler](#copy_from_archive.handler)

<a id="copy_from_archive"></a>

# copy\_from\_archive

Name: copy_from_archive.py
Description:  Lambda function that copies files from one s3 bucket
to another s3 bucket.

<a id="copy_from_archive.CopyRequestError"></a>

## CopyRequestError Objects

```python
class CopyRequestError(Exception)
```

Exception to be raised if the copy request fails for any of the files.

<a id="copy_from_archive.task"></a>

#### task

```python
def task(records: List[Dict[str, Any]], max_retries: int,
         retry_sleep_secs: float, status_update_queue_url: str,
         default_multipart_chunksize_mb: int, recovery_queue_url: str) -> None
```

Task called by the handler to perform the work.
This task will call copy_object for each file. A copy will be tried
up to {retries} times if it fails, waiting {retry_sleep_secs}
between each attempt.

**Arguments**:

- `records` - Passed through from the handler.
- `max_retries` - The number of attempts to retry a failed copy.
- `retry_sleep_secs` - The number of seconds
  to sleep between retry attempts.
- `status_update_queue_url` - The URL of the queue that posts status entries.
- `default_multipart_chunksize_mb` - The multipart_chunksize to use if not set on file.
- `recovery_queue_url` - The URL of the queue that this lambda is receiving messages from.

**Raises**:

- `CopyRequestError` - Thrown if there are errors with the input records or the copy failed.

<a id="copy_from_archive.get_files_from_records"></a>

#### get\_files\_from\_records

```python
def get_files_from_records(
        records: List[Dict[str, Any]]) -> List[Dict[str, Union[str, bool]]]
```

Parses the input records and returns the files to be restored.

**Arguments**:

- `records` - passed through from the handler.

**Returns**:

  records, parsed into Dicts, with the additional KVP 'success' = False

<a id="copy_from_archive.copy_object"></a>

#### copy\_object

```python
def copy_object(s3_cli: BaseClient,
                src_bucket_name: str,
                src_object_name: str,
                dest_bucket_name: str,
                multipart_chunksize_mb: int,
                dest_object_name: str = None) -> Optional[str]
```

Copy an Amazon S3 bucket object

**Arguments**:

- `s3_cli` - An instance of boto3 s3 client.
- `src_bucket_name` - The source S3 bucket name.
- `src_object_name` - The key of the s3 object being copied.
- `dest_bucket_name` - The target S3 bucket name.
- `multipart_chunksize_mb` - The maximum size of chunks to use when copying.
- `dest_object_name` - Optional; The key of the destination object.
  If an object with the same name exists in the given bucket, the object is overwritten.
  Defaults to {src_object_name}.

**Returns**:

  None if object was copied, otherwise contains error message.

<a id="copy_from_archive.handler"></a>

#### handler

```python
@LOGGER.inject_lambda_context
def handler(event: Dict[str, Any], context: LambdaContext) -> None
```

Lambda handler. Copies a file from its temporary s3 bucket to the s3 archive.
If the copy for a file in the request fails, the lambda
throws an exception. Environment variables can be set to override how many
times to retry a copy before failing, and how long to wait between retries.
Environment Vars:
COPY_RETRIES (number, optional, default = 3): The number of
attempts to retry a copy that failed.
COPY_RETRY_SLEEP_SECS (number, optional, default = 0): The number of seconds
to sleep between retry attempts.
DATABASE_PORT (string): the database port. The standard is 5432.
DATABASE_NAME (string): the name of the database.
DATABASE_USER (string): the name of the application user.
STATUS_UPDATE_QUEUE_URL (string): The URL of the SQS queue to post status to.
Parameter Store:
drdb-user-pass (string): the password for the application user (DATABASE_USER).
drdb-host (string): the database host

**Arguments**:

  event:
  A dict from the SQS queue. See schemas/input.json for more information.
- `context` - This object provides information about the lambda invocation, function,
  and execution env.

**Raises**:

- `CopyRequestError` - An error occurred calling copy for one or more files.
  The same dict that is returned for a successful copy will be included in the
  message, with 'success' = False for the files for which the copy failed.

