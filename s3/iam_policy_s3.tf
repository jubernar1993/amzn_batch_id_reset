data "aws_iam_policy_document" "public_get_object" {
	statement {
	  sid = "PublicReadGetObject"
  
	  principals {
		type        = "AWS"
		identifiers = ["*"]
	  }
  
	  actions = [
		"s3:GetObject",
	  ]
  
	  resources = [
		"${aws_s3_bucket.AMZN_BATCH_ID.arn}/*",
	  ]
	}
  }