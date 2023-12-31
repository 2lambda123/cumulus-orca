import dataclasses
from enum import Enum
from typing import Optional

import pydantic

# noinspection PyPackageRequirements
import strawberry

from src.adapters.graphql.dataTypes.common import int8
from src.use_cases.helpers.edge_cursor import EdgeCursor


# Copied from shared_libraries/reconciliation
@strawberry.enum  # Not strictly clean, but alternative is duplicating classes in graphql adapter.
class ReconciliationStatus(Enum):
    """
    An enumeration.
    Defines the status value used in the ORCA Reconciliation database
    for use by the reconciliation functions.
    """
    GETTING_S3_LIST = 1
    STAGED = 2
    GENERATING_REPORTS = 3
    ERROR = 4
    SUCCESS = 5


@dataclasses.dataclass
class InternalReconcileReportCursor(pydantic.BaseModel):
    # IMPORTANT: Whenever properties are added/removed/modified/renamed, update constructor.
    # Python doesn't cap 32 bit/4 byte int size, but GraphQL can't handle larger ints.
    job_id: int8

    # Overriding constructor to give us type/name hints for Pydantic class.
    def __init__(self,
                 job_id: int,
                 ):
        # This call to __init__ will NOT automatically update when performing renames.
        super().__init__(
            job_id=job_id,
        )


# Not strictly clean, but alternative is duplicating classes in graphql adapter.
@strawberry.type
@dataclasses.dataclass
class InternalReconcileReportCreationRecord(pydantic.BaseModel):
    # IMPORTANT: Whenever properties are added/removed/modified/renamed, update constructor.
    cursor: str

    # Overriding constructor to give us type/name hints for Pydantic class.
    def __init__(self, cursor: InternalReconcileReportCursor):
        # This call to __init__ will NOT automatically update when performing renames.
        super().__init__(
            cursor=EdgeCursor.encode_cursor(**dataclasses.asdict(cursor)),
        )


@strawberry.type  # Not strictly clean, but alternative is duplicating classes in graphql adapter.
@dataclasses.dataclass
class Phantom(pydantic.BaseModel):
    # IMPORTANT: Whenever properties are added/removed/modified/renamed, update constructor.
    # Python doesn't cap 32 bit/4 byte int size, but GraphQL can't handle larger ints.
    job_id: int8
    collection_id: str
    granule_id: str
    filename: str
    key_path: str
    orca_etag: str
    # Python doesn't cap 32 bit/4 byte int size, but GraphQL can't handle larger ints.
    orca_granule_last_update: int8
    # Python doesn't cap 32 bit/4 byte int size, but GraphQL can't handle larger ints.
    orca_size_in_bytes: int8
    orca_storage_class: str

    @dataclasses.dataclass
    class Cursor:
        job_id: int8 = None
        collection_id: str = None
        granule_id: str = None
        key_path: str = None

    # Overriding constructor to give us type/name hints for Pydantic class.
    def __init__(self,
                 job_id: int,
                 collection_id: str,
                 granule_id: str,
                 filename: str,
                 key_path: str,
                 orca_etag: str,
                 orca_granule_last_update: int,
                 orca_size_in_bytes: int,
                 orca_storage_class: str,
                 ):
        # This call to __init__ will NOT automatically update when performing renames.
        super().__init__(
            job_id=job_id,
            collection_id=collection_id,
            granule_id=granule_id,
            filename=filename,
            key_path=key_path,
            orca_etag=orca_etag,
            orca_granule_last_update=orca_granule_last_update,
            orca_size_in_bytes=orca_size_in_bytes,
            orca_storage_class=orca_storage_class,
        )

    def get_cursor(self):
        return Mismatch.Cursor(
            job_id=self.job_id,
            collection_id=self.collection_id,
            granule_id=self.granule_id,
            key_path=self.key_path,
        )


@strawberry.type  # Not strictly clean, but alternative is duplicating classes in graphql adapter.
@dataclasses.dataclass
class Mismatch(pydantic.BaseModel):
    # IMPORTANT: Whenever properties are added/removed/modified/renamed, update constructor.
    # Python doesn't cap 32 bit/4 byte int size, but GraphQL can't handle larger ints.
    job_id: int8
    collection_id: str
    granule_id: str
    filename: str
    key_path: str
    cumulus_archive_location: str
    orca_etag: str
    s3_etag: str
    # Python doesn't cap 32 bit/4 byte int size, but GraphQL can't handle larger ints.
    orca_granule_last_update: int8
    # Python doesn't cap 32 bit/4 byte int size, but GraphQL can't handle larger ints.
    s3_file_last_update: int8
    # Python doesn't cap 32 bit/4 byte int size, but GraphQL can't handle larger ints.
    orca_size_in_bytes: int8
    # Python doesn't cap 32 bit/4 byte int size, but GraphQL can't handle larger ints.
    s3_size_in_bytes: int8
    orca_storage_class: str
    s3_storage_class: str
    discrepancy_type: str
    comment: Optional[str]

    @dataclasses.dataclass
    class Cursor:
        job_id: int8 = None
        collection_id: str = None
        granule_id: str = None
        key_path: str = None

    # Overriding constructor to give us type/name hints for Pydantic class.
    def __init__(self,
                 job_id: int,
                 collection_id: str,
                 granule_id: str,
                 filename: str,
                 key_path: str,
                 cumulus_archive_location: str,
                 orca_etag: str,
                 s3_etag: str,
                 orca_granule_last_update: int,
                 s3_file_last_update: int,
                 orca_size_in_bytes: int,
                 s3_size_in_bytes: int,
                 orca_storage_class: str,
                 s3_storage_class: str,
                 discrepancy_type: str,
                 comment: Optional[str],
                 ):
        # This call to __init__ will NOT automatically update when performing renames.
        super().__init__(
            job_id=job_id,
            collection_id=collection_id,
            granule_id=granule_id,
            filename=filename,
            key_path=key_path,
            cumulus_archive_location=cumulus_archive_location,
            orca_etag=orca_etag,
            s3_etag=s3_etag,
            orca_granule_last_update=orca_granule_last_update,
            s3_file_last_update=s3_file_last_update,
            orca_size_in_bytes=orca_size_in_bytes,
            s3_size_in_bytes=s3_size_in_bytes,
            orca_storage_class=orca_storage_class,
            s3_storage_class=s3_storage_class,
            discrepancy_type=discrepancy_type,
            comment=comment,
        )

    def get_cursor(self):
        return Mismatch.Cursor(
            job_id=self.job_id,
            collection_id=self.collection_id,
            granule_id=self.granule_id,
            key_path=self.key_path,
        )
