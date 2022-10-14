# noinspection PyPackageRequirements
import strawberry

from enum import Enum

from src.adapters.graphql.dataTypes.common import InternalServerErrorStrawberryType
from src.entities.common import Edge
from src.entities.echo import Echo


# NEVER edit this enum unless you modify the base it is copied from.
@strawberry.enum
class WordTypeEnumStrawberryType(str, Enum):
    # Whenever this class changes, update WordTypeEnumStrawberryType
    palindrome = 'palindrome'
    chaos = 'chaos'


@strawberry.experimental.pydantic.type(model=Echo)
class EchoStrawberryType:
    word: strawberry.auto
    length: strawberry.auto
    echo: strawberry.auto
    word_type: WordTypeEnumStrawberryType


@strawberry.experimental.pydantic.type(model=Edge)
class EchoEdgeStrawberryType:
    node: EchoStrawberryType
    cursor: strawberry.auto


GetEchoStrawberryResponse = strawberry.union(
    "GetEchoResponse",
    [EchoEdgeStrawberryType, InternalServerErrorStrawberryType]
)
