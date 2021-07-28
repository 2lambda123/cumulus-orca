## Terraform Requirements
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 3.5.0"
    }
  }
}


## AWS Provider Settings
provider "aws" {
  region  = var.region
  profile = var.aws_profile
}


## Local Variables
locals {
  tags = merge(var.tags, { Deployment = var.prefix })
}


## Referenced Modules - Workflows
module "orca_copy_to_glacier_workflow" {
  source = "https://github.com/nasa/cumulus/releases/download/v6.0.0/terraform-aws-cumulus-workflow.zip"
  ## --------------------------
  ## Cumulus Variables
  ## --------------------------
  ## REQUIRED
  prefix          = var.prefix
  name            = "OrcaCopyToGlacierWorkflow"
  workflow_config = var.workflow_config
  system_bucket   = var.system_bucket
  tags            = local.tags

  state_machine_definition = templatefile(
    "${path.module}/orca_copy_to_glacier_workflow.asl.json",
    {
      orca_lambda_copy_to_glacier_cumulus_translator_arn : var.orca_lambda_copy_to_glacier_cumulus_translator_arn,
      orca_lambda_copy_to_glacier_arn : var.orca_lambda_copy_to_glacier_arn
    }
  )
}