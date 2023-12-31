import dataclasses

# noinspection PyPackageRequirements
import strawberry
from pydantic import BaseModel

from src.adapters.storage.internal_reconciliation_rdbms import (
    InternalReconciliationStorageAdapterRDBMS,
)
from src.adapters.storage.rdbms import StorageAdapterRDBMS
from src.use_cases.adapter_interfaces.logger_provider import LoggerProviderInterface
from src.use_cases.adapter_interfaces.word_generation import WordGenerationInterface


@dataclasses.dataclass
@strawberry.type
class AdaptersStorage(BaseModel):
    """
    Stores adapters required by GraphQL use cases.
    """
    class Config:
        arbitrary_types_allowed = True

    word_generation: WordGenerationInterface
    storage: StorageAdapterRDBMS
    storage_internal_reconciliation: InternalReconciliationStorageAdapterRDBMS
    logger_provider: LoggerProviderInterface

    # Overriding constructor to give us type/name hints for Pydantic class.
    def __init__(self,
                 word_generation: WordGenerationInterface,
                 storage: StorageAdapterRDBMS,
                 storage_internal_reconciliation: InternalReconciliationStorageAdapterRDBMS,
                 logger_provider: LoggerProviderInterface):
        # This call to __init__ will NOT automatically update when performing renames.
        super().__init__(
            word_generation=word_generation,
            storage=storage,
            storage_internal_reconciliation=storage_internal_reconciliation,
            logger_provider=logger_provider
        )
