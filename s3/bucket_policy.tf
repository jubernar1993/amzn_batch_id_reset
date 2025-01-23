resource "aws_s3_bucket_policy" "public_get_object" {
	bucket = aws_s3_bucket.AMZN_BATCH_ID.id
	policy = data.aws_iam_policy_document.public_get_object.json
  }