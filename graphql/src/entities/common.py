from dataclasses import dataclass
from typing import Generic, TypeVar

import pydantic

GenericType = TypeVar("GenericType")


@dataclass
class Edge(pydantic.BaseModel, Generic[GenericType]):
    """
    An edge contains additional information of the relationship. In this case
    the calculated cursor value for the node record.
    """
    node: GenericType
    cursor: str

    def __init__(self, node: GenericType, cursor: str):
        # This call to __init__ will NOT automatically update when performing renames.
        super().__init__(node=node, cursor=cursor)
