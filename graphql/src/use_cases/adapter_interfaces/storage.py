class StorageMetadataInterface:
    """
    Generic storage class with methods that need to be implemented by database adapter.
    """

    def get_schema_version(self, connection) -> int: ...
