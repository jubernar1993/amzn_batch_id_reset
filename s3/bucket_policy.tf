resource "aws_s3_bucket_policy" "public_get_object" {
	bucket = aws_s3_bucket.amzn-batch-id-012025.id
	policy = data.aws_iam_policy_document.public_get_object.json
  }