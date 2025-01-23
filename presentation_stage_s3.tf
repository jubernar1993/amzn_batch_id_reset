resource "aws_s3_bucket" "AMZN_BATCH_ID" {
  bucket = "amznbatchid"

  tags = {
    Name        = "amznbatchid"
    Environment = "Dev"
  }
}