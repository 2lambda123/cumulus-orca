from orphan_report.entities import OrphanRecordPage

class CumulusApi:
    def __init__(self):
        self.JOB_ID_KEY = "jobId"
        self.ANOTHER_PAGE_KEY = "anotherPage"
        self.ORPHANS_KEY = "orphans"
        self.ORPHANS_KEY_PATH_KEY = "keyPath"
        self.ORPHANS_S3_ETAG_KEY = "s3Etag"
        self.ORPHANS_S3_LAST_UPDATE_KEY = "s3FileLastUpdate"
        self.ORPHANS_S3_SIZE_IN_BYTES_KEY = "s3SizeInBytes"
        self.ORPHANS_STORAGE_CLASS_KEY = "s3StorageClass"

    def transform(records: OrphanRecordPage):
        return {
            self.JOB_ID_KEY: records.job_id,
            self.ORPHANS_KEY: [{
                self.ORPHANS_KEY_PATH_KEY: orphan.key_path,
                self.ORPHANS_S3_ETAG_KEY: orphan.etag,
                self.ORPHANS_S3_LAST_UPDATE_KEY: orphan.last_update,
                self.ORPHANS_S3_SIZE_IN_BYTES_KEY: orphan.size_in_bytes,
                self.ORPHANS_STORAGE_CLASS_KEY: orphan.storage_class,
            } for orphan in records.orphans],
            self.ANOTHER_PAGE_KEY: records.another_page,
        }