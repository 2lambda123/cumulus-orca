import logging

from src.entities.storage_metadata import StorageSchemaVersion
from src.use_cases.adapter_interfaces.storage import StorageMetadataInterface


class StorageMetadata:
    def __init__(self, storage: StorageMetadataInterface):
        self.storage = storage

    def get_schema_version(self, logger: logging.Logger) -> StorageSchemaVersion:
        """
        Queries the database version table and returns the latest version.

        Returns:
            Version number of the currently installed ORCA schema.
        """
        result = self.storage.get_schema_version(logger)
        return StorageSchemaVersion(result)
