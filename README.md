# topology

## Overview
This project manages (manually) the topology and hierarchies used on the Contributary [website](https://www.contributary.community).

## Workflow
Right now, all changes are submitted via PR and manually built and deployed into AWS.  Read more in the [Contributary wiki](https://github.com/ContributaryCommunity/contributary/wiki).

## Development
For contributing to this project and testing the output locally, you will need
1. NodeJS
1. Yarn
1. Create _tmp/_ directory in the root of the project

- `yarn lint` - Validatse all JS and JSON passes linting
- `yarn develop` - Runs the build task but write to a `git` ignored _tmp/_ directory
- `yarn build` - Runs the build and outputs to the version controlled _data/_ directory, for release time
- `yarn release` - Task to run at release time, to upload _data/topology.json_ to S3

## Release Procedure
TODO
