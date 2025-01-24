resource "aws_s3_bucket" "amzn-batch-id-012025" {
  bucket = var.s3_bucket_name

  tags = {
    Name        = "amznbatchid"
    Environment = "Dev"
  }
}