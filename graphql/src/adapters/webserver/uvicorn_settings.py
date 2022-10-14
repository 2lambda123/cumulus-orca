import os
from pydantic import BaseSettings


class UvicornSettings(BaseSettings):
    """
    Common settings used by the framework.
    """
    HOST: str = "0.0.0.0"
    PORT: int = 5000
    DEV: bool = True if os.environ.get("ORCA_ENV", "development") == "development" else False


instantiated_settings = UvicornSettings()