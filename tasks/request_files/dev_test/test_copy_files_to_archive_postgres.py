"""
Name: test_copy_files_to_archive.py

Description:  Unit tests for copy_files_to_archive.py.
"""
import json
import os
import time
import unittest
from unittest.mock import Mock

import boto3
from botocore.exceptions import ClientError

import copy_files_to_archive
from copy_helpers import create_event2, create_handler_event
import db_config
import requests
from requests import create_data
#from request_helpers import print_rows

UTC_NOW_EXP_1 = requests.get_utc_now_iso()
time.sleep(1)
REQUEST_ID_EXP_1 = requests.request_id_generator()
UTC_NOW_EXP_2 = requests.get_utc_now_iso()
time.sleep(1)
REQUEST_ID_EXP_2 = requests.request_id_generator()
UTC_NOW_EXP_3 = requests.get_utc_now_iso()
time.sleep(1)
UTC_NOW_EXP_4 = requests.get_utc_now_iso()
time.sleep(1)
REQUEST_ID_EXP_3 = requests.request_id_generator()
UTC_NOW_EXP_5 = requests.get_utc_now_iso()
time.sleep(1)
UTC_NOW_EXP_6 = requests.get_utc_now_iso()
time.sleep(1)
REQUEST_ID_EXP_4 = requests.request_id_generator()
UTC_NOW_EXP_7 = requests.get_utc_now_iso()
time.sleep(1)
UTC_NOW_EXP_8 = requests.get_utc_now_iso()
time.sleep(1)
REQUEST_ID_EXP_5 = requests.request_id_generator()
UTC_NOW_EXP_9 = requests.get_utc_now_iso()
time.sleep(1)
REQUEST_ID_EXP_6 = requests.request_id_generator()
UTC_NOW_EXP_10 = requests.get_utc_now_iso()
time.sleep(1)
UTC_NOW_EXP_11 = requests.get_utc_now_iso()



class TestCopyFilesPostgres(unittest.TestCase):   #pylint: disable-msg=too-many-instance-attributes
    """
    TestCopyFiles.
    """
    def setUp(self):
        self.mock_boto3_client = boto3.client
        os.environ['COPY_RETRIES'] = '2'
        os.environ['COPY_RETRY_SLEEP_SECS'] = '1'
        self.job_id_1 = None
        self.job_id_2 = None
        self.job_id_3 = None
        self.job_id_4 = None
        self.job_id_5 = None
        self.job_id_6 = None

        db_config.set_env()

        self.exp_other_bucket = "unittest_protected_bucket"
        self.bucket_map = {".hdf": "unittest_hdf_bucket",
                           ".txt": "unittest_txt_bucket",
                           "other": self.exp_other_bucket}
        os.environ['BUCKET_MAP'] = json.dumps(self.bucket_map)

        self.exp_src_bucket = 'my-dr-fake-glacier-bucket'
        self.exp_target_bucket = 'unittest_txt_bucket'

        self.exp_file_key1 = 'dr-glacier/MOD09GQ.A0219114.N5aUCG.006.0656338553321.txt'
        self.handler_input_event = create_handler_event()
        self.mock_utcnow = requests.get_utc_now_iso


    def tearDown(self):
        try:
            requests.delete_all_requests()
        except requests.NotFound:
            pass
        except requests.DatabaseError:
            pass
        requests.get_utc_now_iso = self.mock_utcnow
        boto3.client = self.mock_boto3_client
        try:
            del os.environ['BUCKET_MAP']
            del os.environ['COPY_RETRY_SLEEP_SECS']
            del os.environ['COPY_RETRIES']
            del os.environ["DATABASE_HOST"]
            del os.environ["DATABASE_NAME"]
            del os.environ["DATABASE_USER"]
            del os.environ["DATABASE_PW"]
        except KeyError:
            pass

    def create_test_requests(self):
        """
        creates jobs in the db
        """
        requests.get_utc_now_iso = Mock(side_effect=[UTC_NOW_EXP_1, UTC_NOW_EXP_4,
                                                     UTC_NOW_EXP_4, UTC_NOW_EXP_4,
                                                     UTC_NOW_EXP_5, UTC_NOW_EXP_5,
                                                     UTC_NOW_EXP_6, UTC_NOW_EXP_6,
                                                     UTC_NOW_EXP_7, UTC_NOW_EXP_7,
                                                     UTC_NOW_EXP_8, UTC_NOW_EXP_8,
                                                     ])
        requests.request_id_generator = Mock(side_effect=[REQUEST_ID_EXP_1,
                                                          REQUEST_ID_EXP_2,
                                                          REQUEST_ID_EXP_3,
                                                          REQUEST_ID_EXP_4,
                                                          REQUEST_ID_EXP_5,
                                                          REQUEST_ID_EXP_6])
        obj = {}

        try:
            obj["request_id"] = REQUEST_ID_EXP_1
            obj["granule_id"] = "granule_1"
            obj["key"] = "objectkey_1"
            obj["glacier_bucket"] = "my_s3_bucket"
            data = create_data(obj, "restore",
                               "complete", UTC_NOW_EXP_1, UTC_NOW_EXP_4)
            self.job_id_1 = requests.submit_request(data)

            obj["request_id"] = REQUEST_ID_EXP_2
            obj["granule_id"] = "granule_4"
            obj["key"] = "objectkey_4"
            data = create_data(obj, "restore",
                               "error", UTC_NOW_EXP_4, None, "oh oh, an error happened")
            self.job_id_2 = requests.submit_request(data)

            obj["request_id"] = REQUEST_ID_EXP_3
            obj["granule_id"] = "granule_5"
            obj["key"] = "dr-glacier/MOD09GQ.A0219114.N5aUCG.006.0656338553321.txt"
            data = create_data(obj, "restore",
                               "inprogress", UTC_NOW_EXP_5, UTC_NOW_EXP_5)
            self.job_id_3 = requests.submit_request(data)

            obj["request_id"] = REQUEST_ID_EXP_3
            obj["granule_id"] = "granule_6"
            obj["key"] = "dr-glacier/MOD09GQ.A0219114.N5aUCG.006.0656338553321.hdf"
            data = create_data(obj, "restore",
                               "inprogress", UTC_NOW_EXP_6, UTC_NOW_EXP_6)
            self.job_id_4 = requests.submit_request(data)

            obj["request_id"] = REQUEST_ID_EXP_4
            obj["granule_id"] = "granule_4"
            obj["key"] = "objectkey_4"
            data = create_data(obj, "restore",
                               "inprogress", UTC_NOW_EXP_7, UTC_NOW_EXP_7)
            self.job_id_5 = requests.submit_request(data)

            obj["request_id"] = REQUEST_ID_EXP_5
            obj["granule_id"] = "granule_1"
            obj["key"] = "objectkey_1"
            data = create_data(obj, "restore",
                               "inprogress", UTC_NOW_EXP_8, UTC_NOW_EXP_8)
            self.job_id_6 = requests.submit_request(data)

            results = requests.get_all_requests()
            return results
        except requests.DatabaseError as err:
            self.fail(f"submit_request. {str(err)}")


    def test_handler_one_file_success(self):
        """
        Test copy lambda with one file, expecting successful result.
        """
        del os.environ['COPY_RETRY_SLEEP_SECS']
        del os.environ['COPY_RETRIES']
        boto3.client = Mock()
        s3_cli = boto3.client('s3')
        s3_cli.copy_object = Mock(side_effect=[None])
        self.create_test_requests()
        #print_rows("begin")
        row = requests.get_job_by_job_id(self.job_id_3)
        self.assertEqual("inprogress", row[0]['job_status'])
        result = copy_files_to_archive.handler(self.handler_input_event, None)
        os.environ['COPY_RETRIES'] = '2'
        os.environ['COPY_RETRY_SLEEP_SECS'] = '1'
        boto3.client.assert_called_with('s3')
        exp_result = [{"success": True,
                       "source_bucket": self.exp_src_bucket,
                       "source_key": self.exp_file_key1,
                       "target_bucket": self.exp_target_bucket,
                       "err_msg": ""}]
        self.assertEqual(exp_result, result)
        #print_rows("end")
        row = requests.get_job_by_job_id(self.job_id_3)
        self.assertEqual("complete", row[0]['job_status'])

    def test_handler_two_records_success(self):
        """
        Test copy lambda with two files, expecting successful result.
        """
        exp_file_key = 'dr-glacier/MOD09GQ.A0219114.N5aUCG.006.0656338553321.hdf'
        boto3.client = Mock()
        s3_cli = boto3.client('s3')
        s3_cli.copy_object = Mock(side_effect=[None, None])
        exp_rec_2 = create_event2()
        self.handler_input_event["Records"].append(exp_rec_2)
        self.create_test_requests()
        #print_rows("begin")
        row = requests.get_job_by_job_id(self.job_id_3)
        self.assertEqual("inprogress", row[0]['job_status'])
        row = requests.get_job_by_job_id(self.job_id_4)
        self.assertEqual("inprogress", row[0]['job_status'])
        result = copy_files_to_archive.handler(self.handler_input_event, None)

        boto3.client.assert_called_with('s3')
        exp_result = [{"success": True, "source_bucket": self.exp_src_bucket,
                       "source_key": self.exp_file_key1,
                       "target_bucket": self.exp_target_bucket,
                       "err_msg": ""},
                      {"success": True, "source_bucket": self.exp_src_bucket,
                       "source_key": exp_file_key,
                       "target_bucket": "unittest_hdf_bucket",
                       "err_msg": ""}]
        self.assertEqual(exp_result, result)

        #print_rows("end")
        row = requests.get_job_by_job_id(self.job_id_3)
        self.assertEqual("complete", row[0]['job_status'])
        row = requests.get_job_by_job_id(self.job_id_4)
        self.assertEqual("complete", row[0]['job_status'])

    def test_handler_two_records_one_fail_one_success(self):
        """
        Test copy lambda with two files, one successful copy, one failed copy.
        """
        exp_file_key = 'dr-glacier/MOD09GQ.A0219114.N5aUCG.006.0656338553321.hdf'
        exp_file2_key = 'dr-glacier/MOD09GQ.A0219114.N5aUCG.006.0656338553321.txt'
        boto3.client = Mock()
        s3_cli = boto3.client('s3')
        s3_cli.copy_object = Mock(side_effect=[ClientError({'Error': {'Code': 'AccessDenied'}},
                                                           'copy_object'),
                                               ClientError({'Error': {'Code': 'AccessDenied'}},
                                                           'copy_object'),
                                               ClientError({'Error': {'Code': 'AccessDenied'}},
                                                           'copy_object'),
                                               None])
        exp_rec_2 = create_event2()
        self.handler_input_event["Records"].append(exp_rec_2)
        exp_err_msg = ("An error occurred (AccessDenied) when calling "
                       "the copy_object operation: Unknown")
        exp_error = ("File copy failed. [{'success': False, " \
                     f"'source_bucket': '{self.exp_src_bucket}', "
                     f"'source_key': '{exp_file2_key}', "
                     f"'target_bucket': '{self.exp_target_bucket}', "
                     f"'err_msg': '{exp_err_msg}'"
                     "}, {'success': True, "
                     f"'source_bucket': '{self.exp_src_bucket}', "
                     f"'source_key': '{exp_file_key}', "
                     "'target_bucket': 'unittest_hdf_bucket', 'err_msg': ''}]")
        self.create_test_requests()
        #print_rows("begin")
        row = requests.get_job_by_job_id(self.job_id_3)
        self.assertEqual("inprogress", row[0]['job_status'])
        row = requests.get_job_by_job_id(self.job_id_4)
        self.assertEqual("inprogress", row[0]['job_status'])
        try:
            copy_files_to_archive.handler(self.handler_input_event, None)
            self.fail("expected CopyRequestError")
        except copy_files_to_archive.CopyRequestError as ex:
            self.assertEqual(exp_error, str(ex))

        #print_rows("end")
        row = requests.get_job_by_job_id(self.job_id_3)
        self.assertEqual("error", row[0]['job_status'])
        self.assertEqual(exp_err_msg, row[0]['err_msg'])
        row = requests.get_job_by_job_id(self.job_id_4)
        self.assertEqual("complete", row[0]['job_status'])


    def test_handler_one_file_fail_3x(self):
        """
        Test copy lambda with one failed copy after 3 retries.
        """
        boto3.client = Mock()
        s3_cli = boto3.client('s3')
        s3_cli.copy_object = Mock(side_effect=[ClientError({'Error': {'Code': 'AccessDenied'}},
                                                           'copy_object'),
                                               ClientError({'Error': {'Code': 'AccessDenied'}},
                                                           'copy_object'),
                                               ClientError({'Error': {'Code': 'AccessDenied'}},
                                                           'copy_object')])
        s3_cli.head_object = Mock()

        exp_err_msg = ("An error occurred (AccessDenied) when calling "
                       "the copy_object operation: Unknown")
        exp_error = ("File copy failed. [{'success': False, "
                     f"'source_bucket': '{self.exp_src_bucket}', "
                     f"'source_key': '{self.exp_file_key1}', "
                     f"'target_bucket': '{self.exp_target_bucket}', "
                     f"'err_msg': '{exp_err_msg}'"
                     "}]")
        self.create_test_requests()
        utc_now_exp = requests.get_utc_now_iso()
        requests.get_utc_now_iso = Mock(return_value=utc_now_exp)
        #print_rows("begin")
        row = requests.get_job_by_job_id(self.job_id_3)
        self.assertEqual("inprogress", row[0]['job_status'])
        self.assertEqual(None, row[0]['err_msg'])

        try:
            copy_files_to_archive.handler(self.handler_input_event, None)
            self.fail("expected CopyRequestError")
        except copy_files_to_archive.CopyRequestError as ex:
            self.assertEqual(exp_error, str(ex))
        #print_rows("end")
        row = requests.get_job_by_job_id(self.job_id_3)
        self.assertEqual("error", row[0]['job_status'])
        self.assertEqual(exp_err_msg, row[0]['err_msg'])
        #self.assertEqual(UTC_NOW_EXP_7, row[0]["last_update_time"])

    def test_handler_one_file_retry2_success(self):
        """
        Test copy lambda with two failed copy attempts, third attempt successful.
        """
        del os.environ['COPY_RETRY_SLEEP_SECS']
        del os.environ['COPY_RETRIES']
        time.sleep(1)
        boto3.client = Mock()
        s3_cli = boto3.client('s3')
        s3_cli.copy_object = Mock(side_effect=[ClientError({'Error': {'Code': 'AccessDenied'}},
                                                           'copy_object'),
                                               None])
        self.create_test_requests()
        #print_rows("begin")
        row = requests.get_job_by_job_id(self.job_id_3)
        self.assertEqual("inprogress", row[0]['job_status'])
        result = copy_files_to_archive.handler(self.handler_input_event, None)
        os.environ['COPY_RETRIES'] = '2'
        os.environ['COPY_RETRY_SLEEP_SECS'] = '1'
        exp_result = [{"success": True, "source_bucket": self.exp_src_bucket,
                       "source_key": self.exp_file_key1,
                       "target_bucket": self.exp_target_bucket,
                       "err_msg": ""}]
        self.assertEqual(exp_result, result)
        row = requests.get_job_by_job_id(self.job_id_3)
        self.assertEqual("complete", row[0]['job_status'])
        #print_rows("end")


if __name__ == '__main__':
    unittest.main(argv=['start'])
