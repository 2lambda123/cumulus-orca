import unittest
from unittest.mock import MagicMock, Mock, call, patch

from orca_shared.database.entities import PostgresConnectionInfo
# noinspection PyProtectedMember
from orca_shared.database.use_cases.validation import validate_config, _validate_password, \
    validate_postgres_name


class TestCreatePostgresConnectionUri(unittest.TestCase):

    @patch("orca_shared.database.use_cases.validation._validate_password")
    @patch("orca_shared.database.use_cases.validation.validate_postgres_name")
    def test_validate_config_happy_path(
        self,
        mock_validate_postgres_name: MagicMock,
        mock_validate_password: MagicMock,
    ):
        """
        Should call proper validation functions for various properties.
        """
        admin_database_name = Mock()
        admin_username = Mock()
        admin_password = Mock()
        user_username = Mock()
        user_password = Mock()
        user_database_name = Mock()
        host = Mock()
        port = Mock()
        config = PostgresConnectionInfo(
            admin_database_name=admin_database_name,
            admin_username=admin_username,
            admin_password=admin_password,
            user_username=user_username,
            user_password=user_password,
            user_database_name=user_database_name,
            host=host,
            port=port,
        )
        logger = Mock()
        validate_config(config, logger)
        mock_validate_postgres_name.assert_has_calls([
            call(user_username, "User username", logger),
            call(admin_username, "Admin username", logger),
            call(user_database_name, "User database name", logger),
            call(admin_database_name, "Admin database name", logger),
        ])
        self.assertEqual(4, mock_validate_postgres_name.call_count)

        mock_validate_password.assert_called_once_with(user_password, "User", logger)

    def test_validate_password_happy_path(
        self
    ):
        """
        A password of length 12 should be sufficient.
        """
        password = "123456789012"
        context = Mock()
        logger = Mock()
        _validate_password(password, context, logger)

    def test_validate_password_short_raises_error(self):
        """
        A password of `None` or length < 12 should be rejected.
        """
        passwords = [None, "12345678901"]
        context = Mock()
        logger = Mock()
        for password in passwords:
            with self.subTest(password=password):
                with self.assertRaises(Exception) as cm:
                    _validate_password(password, context, logger)
                self.assertEqual(str(cm.exception),
                                 f"{context} password must be at least 12 characters long.")

    def test_validate_postgres_name_happy_path(
        self
    ):
        """
        A name of any length starting with a letter should be accepted.
        """
        names = ["A", "a_", "C1"]
        context = Mock()
        logger = Mock()
        for name in names:
            validate_postgres_name(name, context, logger)

    def test_validate_postgres_name_short_raises_error(self):
        """
        A name of `None` or length < 1 should be rejected.
        """
        passwords = [None, ""]
        context = Mock()
        logger = Mock()
        for password in passwords:
            with self.subTest(password=password):
                with self.assertRaises(Exception) as cm:
                    validate_postgres_name(password, context, logger)
                self.assertEqual(str(cm.exception),
                                 f"{context} must be non-empty.")

    def test_validate_postgres_name_long_raises_error(self):
        """
        A name of length > 63 should be rejected.
        """
        password = "12345678901234567890" \
                   "12345678901234567890" \
                   "12345678901234567890" \
                   "1234"
        context = Mock()
        logger = Mock()
        with self.assertRaises(Exception) as cm:
            validate_postgres_name(password, context, logger)
        self.assertEqual(str(cm.exception),
                         f"{context} must be less than 64 characters.")

    def test_validate_postgres_name_invalid_raises_error(self):
        """
        A name starting with a non-letter or containing illegal characters should be rejected.
        """
        names = ["1a", "a!", "a 1"]
        context = Mock()
        logger = Mock()
        for name in names:
            with self.subTest(name=name):
                with self.assertRaises(Exception) as cm:
                    validate_postgres_name(name, context, logger)
                self.assertEqual(str(cm.exception),
                                 f"{context} must start with an English letter "
                                 "and contain only English letters, numbers, or underscores.")
