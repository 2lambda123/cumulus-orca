from orphan_report.entities import OrphanReportStorage, OrphanRecordFilter, OrphanRecordPage, OrphanRecord

import functools
import json
import os
import random
import time
from typing import Any, Callable, Dict, TypeVar

import boto3
from cumulus_logger import CumulusLogger
from sqlalchemy import create_engine
from sqlalchemy.engine import URL
from sqlalchemy.exc import OperationalError
from sqlalchemy.future import Engine


# instantiate CumulusLogger
logger = CumulusLogger(name="ORCA")
MAX_RETRIES = 3  # number of times to retry.
BACKOFF_FACTOR = 2  # Value of the factor used to backoff
INITIAL_BACKOFF_IN_SECONDS = 1  # Number of seconds to sleep the first time through.
RT = TypeVar("RT")  # return type


class AwsPostgresqlStorage(OrphanReportStorage):
    """
    Extends OrphanReportStorage as an adapter specific to an AWD RDS PostgreSQL instance.
    """

    def __init__(self, host: str, port: int, database: str, username: str, password: str):
        self._db_connection_info = {
            "host": host,
            "port": port,
            "database": database,
            "username": username,
            "password": password
        }
        self._connection_url = URL.create(drivername="postgresql", **self._db_connection_info)
        self._engine = create_engine(self._connection_url, future=True)

    def _get_orphans_sql() -> text:  # pragma: no cover
        """
        SQL for getting orphan report entries for a given job_id, page_size, and page_index.
        Formats datetimes in milliseconds since 1 January 1970 UTC.
        """
        return text(
            """
            SELECT
                key_path,
                etag,
                (EXTRACT(EPOCH FROM date_trunc('milliseconds', last_update) AT TIME ZONE 'UTC') * 1000)::bigint as last_update,
                size_in_bytes,
                storage_class
            FROM
                reconcile_orphan_report
            WHERE
                job_id = :job_id
            ORDER BY
                key_path,
                etag
            OFFSET
                :page_index*:page_size
            LIMIT
                :page_size+1
            """
        )

    def _retry_operational_error(
        max_retries: int = MAX_RETRIES,
        backoff_in_seconds: int = INITIAL_BACKOFF_IN_SECONDS,
        backoff_factor: int = BACKOFF_FACTOR,
    ) -> Callable[[Callable[[], RT]], Callable[[], RT]]:
        """
        Decorator takes arguments to adjust number of retries and backoff strategy.
        Args:
            max_retries (int): number of times to retry in case of failure.
            backoff_in_seconds (int): Number of seconds to sleep the first time through.
            backoff_factor (int): Value of the factor used for backoff.
        """

        def decorator_retry_operational_error(func: Callable[[], RT]) -> Callable[[], RT]:
            """
            Main Decorator that takes our function as an argument
            """

            @functools.wraps(func)  # Use built in for decorators
            def wrapper_retry_operational_error(*args, **kwargs) -> RT:
                """
                Wrapper that performs our extra tasks on the function
                """
                # Initialize the retry loop
                total_retries = 0

                # Enter loop
                while True:
                    # Try the function and catch the expected error
                    try:
                        return func(*args, **kwargs)
                    except OperationalError:
                        if total_retries == max_retries:
                            # Log it and re-raise if we maxed our retries + initial attempt
                            logger.error(
                                "Encountered Errors {total_attempts} times. Reached max retry limit.",
                                total_attempts=total_retries,
                            )
                            raise
                        else:
                            # perform exponential delay
                            backoff_time = (
                                backoff_in_seconds * backoff_factor ** total_retries
                                + random.uniform(0, 1)  # nosec
                            )
                            logger.error(
                                "Encountered OperationalError on attempt {total_attempts}. "
                                "Sleeping {backoff_time} seconds.",
                                total_attempts=total_retries,
                                backoff_time=backoff_time,
                            )
                            time.sleep(backoff_time)
                            total_retries += 1
                    except Exception as ex:
                        logger.error("Encountered a non-retriable error: {ex}", ex=ex)
                        raise ex

            # Return our wrapper
            return wrapper_retry_operational_error

        # Return our decorator
        return decorator_retry_operational_error

    @_retry_operational_error()
    def get_orphans(self, filters: OrphanRecordFilter) -> OrphanRecordPage:
        logger.info(f"Retrieving page '{page_index}' of reports for job '{job_id}'")
        with self._engine.begin() as connection:
            sql_results = connection.execute(
                self.__get_orphans_sql(),
                [
                    {
                        "job_id": filters.job_id,
                        "page_index": filters.page_index,
                        "page_size": filters.page_size,
                    }
                ],
            )

            orphans = []
            for sql_result in sql_results:
                orphans.append(
                    OrphanRecord(sql_result["key_path"],
                                 sql_result["etag"],
                                 sql_result["last_update"],
                                 sql_result["size_in_bytes"],
                                 sql_result["storage_class"], )
                )

            # we get one extra for anotherPage calculation.
            return OrphanRecordPage(filters.job_id, orphans[0:page_size], len(orphans) > page_size)
