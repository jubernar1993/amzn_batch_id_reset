resource "aws_s3_bucket_public_access_block" "allow-public-access-s3" {
	bucket                  = "amzn-batch-id-012025"
	block_public_acls       = false
	ignore_public_acls      = false
	block_public_policy     = false
	restrict_public_buckets = false
	
  }
