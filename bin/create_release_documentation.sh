#!/bin/bash
## =============================================================================
## NAME: create_release_documentation.sh
##
##
## DESCRIPTION
## -----------------------------------------------------------------------------
## Builds the Cumulus-Orca documentation at https://nasa.github.io/cumulus-orca
## and deploys the updated documentation.
##
##
## ENVIRONMENT SETTINGS
## -----------------------------------------------------------------------------
## bamboo_RELEASE_FLAG (boolean) - Determines if the build should occur and be
##                                 released to GitHub release.
##
## bamboo_SECRET_GITHUB_EMAIL (string) - GitHub user email performing the commit
##                                       for the application documentation.
##
## bamboo_SECRET_GITHUB_TOKEN (string) - GitHub Secret Token needed to access
##                                       the cumulus-orca repo.
##
## bamboo_SECRET_GITHUB_USER (string) - GitHub user performing the commit for the
##                                      application documentation.
##
##
## USAGE
## -----------------------------------------------------------------------------
## bin/create_release.sh
##
## This must be called from the (root) git repo directory.
## =============================================================================
## Set this for Debugging only
#set -ex

## Make sure we are calling the script the correct way.
BASEDIR=$(dirname $0)
if [ "$BASEDIR" != "bin" ]; then
  >&2 echo "ERROR: This script must be called from the root directory of the repo [bin/create_release_documentation.sh]."
  exit 1
fi


## Validate that the release flag is set
if [[ ! $bamboo_RELEASE_FLAG == true ]]; then
  >&2 echo "WARN: Skipping Release ORCA documentation step, PUBLISH_FLAG is [ $bamboo_RELEASE_FLAG ]"
  exit 0
fi


source bin/common/check_returncode.sh


## MAIN
## -----------------------------------------------------------------------------
## Release the Documentation
# Go to the documentation directory
run_and_check_returncode "cd website"

# Install Node.js and the proper packages
run_and_check_returncode "npm install"

## Run the deployment See: https://docusaurus.io/docs/deployment
# Set the environment variables
export DEPLOYMENT_BRANCH=gh-pages
export GIT_USER=$bamboo_SECRET_GITHUB_USER
export GIT_PASS=$bamboo_SECRET_GITHUB_TOKEN

# We need to set some git config here so deploy doesn't complain when the commit occurs.
git config --global user.email "$bamboo_SECRET_GITHUB_EMAIL"
git config --global user.name "$GIT_USER"

run_and_check_returncode "npm run deploy"

cd ..

