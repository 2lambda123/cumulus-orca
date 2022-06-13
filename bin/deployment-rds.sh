#!/bin/bash
set -ex

export AWS_ACCESS_KEY_ID=$bamboo_AWS_ACCESS_KEY_ID
export AWS_SECRET_ACCESS_KEY=$bamboo_AWS_SECRET_ACCESS_KEY
export AWS_DEFAULT_REGION=$bamboo_AWS_DEFAULT_REGION

aws s3 cp s3://rhassan-tf-state/main.tf .

# Initialize deployment
terraform init \
  -input=false

terraform apply \
  -auto-approve \
  -lock=false \
  -input=false