#!/bin/bash
echo "Installing dependencies..."
yum install -y unzip
curl -O https://releases.hashicorp.com/terraform/1.10.5/terraform_1.10.5_linux_amd64.zip
unzip terraform_1.10.5_linux_amd64.zip
mv terraform /usr/local/bin/
terraform --version
terraform validate