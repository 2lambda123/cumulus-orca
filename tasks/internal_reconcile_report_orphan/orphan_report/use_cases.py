from orphan_report.entities import OrphanApi, OrphanStorage, OrphanRecordFilter, OrphanRecordPage 
from types import Any


class OrphanListUseCase:
    """
    Business logic use case for showing Orphans
    """
    def __init__(self, storage: OrphanStorage, api: OrphanApi):
        """
        Requires the storage and api adapters.
        """
        self.storage = storage
        self.api = api

    def show_orphans(self, filters: OrphanRecordFilter) -> Any:
        """
        Returns orphan records in the proper format
        """
        orphans = self.storage.get_orphans(filters=filters)
        return self.api.transform(orphans)

