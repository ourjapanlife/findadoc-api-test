# findadoc-api

API for findadoc.jp

## How does it work?

This project is currently using google cloud functions.
`index.js` is an aggregation of all functions currently in use.

## Getting started

- Run `yarn build` to verify you can properly build the project.
- You must commit your changes in DIST for your functions to be updated!!!
- Create a Pull Request from your feature branch to `main`.
- When it's merged into `main` it will be deployed to prod.
- That's it!

## Deploying

- A github action will trigger on changes to the `main` branch and will automatically deploy and update production functions. (Add/Update only)
- By default, functions are not run initially. You need to trigger them to run.

## authenticateRecaptcha function

TODO: Add more content!
