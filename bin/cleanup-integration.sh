#!/bin/bash
set -ex

export AWS_ACCESS_KEY_ID=$bamboo_AWS_ACCESS_KEY_ID
export AWS_SECRET_ACCESS_KEY=$bamboo_AWS_SECRET_ACCESS_KEY
export AWS_DEFAULT_REGION=$bamboo_AWS_DEFAULT_REGION


# Ensure remote state is configured for the deployment
echo "terraform {
        backend \"s3\" {
            bucket = \"$bamboo_PREFIX-tf-state\"
            key    = \"terraform\"
            region = \"$bamboo_AWS_DEFAULT_REGION\"
            dynamodb_table = \"$bamboo_PREFIX-tf-locks\"
    }
}" > terraform.tf

rm variables.tf outputs.tf main.tf

# Initialize deployment
terraform init \
  -input=false


# destroy 
terraform destroy \
  -auto-approve \
  -lock=false \
  -input=false


  # remove other resources using aws cli if needed
