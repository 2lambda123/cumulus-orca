"""
Name: main.py
Description: Main entrypoint script for the application.
"""

import uvicorn

from src.adapters.webserver.application import get_application
from src.adapters.webserver.uvicorn_settings import UvicornSettings


def main():
    uvicorn_settings = UvicornSettings()
    uvicorn.run(
        # uvicorn.run creates a fresh instance of the module/class containing `application`
        # before accessing the application property.
        #
        # Many examples place the application init as a property in this file, which
        # leads to the init being run twice,
        #
        # A fresh module instance means the application cannot be set outside a static context.
        # Note that relative paths are not properly supported for this path.
        app=get_application(uvicorn_settings),
        host=uvicorn_settings.HOST,
        port=uvicorn_settings.PORT,
        # Can only enable 'reload' functionality by passing as an import string.
        # Note: This doesn't catch changes to other modules.
        reload=False
    )


if __name__ == "__main__":
    main()
