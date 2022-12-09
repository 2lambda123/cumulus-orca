import logging

from src.adapters.graphql.dataTypes.common import InternalServerErrorGraphqlType
from src.adapters.graphql.dataTypes.sample import BoringWordExceptionGraphqlType, \
    GetEchoStrawberryResponse
from src.adapters.graphql.adapters import initialized_adapters
from src.entities.echo import BoringWordException
from src.use_cases.sample import Test


def get_echo(word: str, logger: logging.Logger) -> GetEchoStrawberryResponse:
    try:
        return Test(initialized_adapters.word_generation).get_echo(word, logger)
    except BoringWordException as ex:
        return BoringWordExceptionGraphqlType(ex)
    except Exception as ex:
        return InternalServerErrorGraphqlType(ex)
