from typing import Any, Optional, List
from pydantic import BaseModel


class OrphanRecord(BaseModel):
    """
    Expected fields for an orphan record.
    """
    key_path: str
    etag: str
    last_update: int
    size_in_bytes: int
    storage_class: str


class OrphanRecordFilter(BaseModel):
    """
    Expected inputs for filtering
    """
    job_id: str
    page_index: Optional(int) = 0
    page_size: Optional(int) = 100


class OrphanRecordPage(BaseModel):
    """
    Expected outputs needed for a page
    """
    job_id: str
    orphans: List[OrphanRecord]
    another_page: bool


class OrphanStorage:
    """
    Generic storage class with method that needs to be implemented by the storage adapter.
    """
    def get_orphans(self, filters: OrphanRecordFilter) -> OrphanRecordPage: ...


class OrphanApi:
    """
    Generic API class with method that needs to be implemented by the API adapter.
    """
    def transform(self, records: OrphanRecordPage) -> Any: ...