# topology

## Overview
This project manages (manually) the topology and hierarchies used on the Contributary [website](https://www.contributary.community).

## Adding Projects
Right now, all changes are submitted via PR and manually built and deployed into AWS.  

To submit a project
1. Create an issue in this repo
1. Fork the repo
1. Create a branch
1. Add the project (`"user"` or `"org"`) in the appropriate topology file in _src/_
1. If you want to submit all repositories, use a wildcard selector `"*"`
1. Submit a PR!

#### Examples
```javascript
// adding a user and a specific repository
{
  "name": "Torvalds",
  "type": "user",
  "repositories": [{
    "name": "linux"
  }]
}

// adding an organization and all its repositories
{
  "name": "ContributaryCommunity",
  "type": "org",
  "repositories": ["*"] 
}
```

> Read more about the architecture of the project, checkout the [Contributary wiki](https://github.com/ContributaryCommunity/contributary/wiki).

## Development
For contributing to this project and testing the output locally, you will need
1. [NodeJS](https://nodejs.org/) v10.x
1. [Yarn](https://yarnpkg.com) v1.10 (>= 1.10)
1. Create _tmp/_ directory in the root of the project

- `yarn lint` - Validatse all JS and JSON passes linting
- `yarn develop` - Runs the build task but write to a `git` ignored _tmp/_ directory
- `yarn build` - Runs the build and outputs to the version controlled _data/_ directory, for release time
- `yarn release` - Task to run at release time, to upload _data/topology.json_ to S3

## Release Procedure
1. Merge all changes into master
1. Run `yarn release`
1. Review and commit any changes to _data/_ to master
1. Bump _package.json_, `git tag` and push everything to master