resource "aws_s3_bucket" "AMZN_BATCH_ID" {
  bucket = var.s3_bucket_name

  tags = {
    Name        = "amznbatchid"
    Environment = "Dev"
  }
}