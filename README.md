# findadoc-api

This is the primary API for findadoc! This functions only point to the test environment. An admin can help migrate them to prod. 
This project is currently using google cloud functions. (Note: NOT firebase functions)
`index.js` is an aggregation of all functions currently in use.

## Getting started / Contributing

- Run `yarn build` to verify you can properly build the project.
- You must run `yarn build` and commit your changes in `DIST` for your functions to be updated!!!
- Create a Pull Request from your feature branch to `main`.
- When it's merged into `main` it will be automatically deployed to prod by a github action. (Add/Update permissions only)
- By default, functions are not run initially when deployed. You need to trigger them to run. (typically through the app!) 
- For managing the functions in google cloud, please reach out to one of the findadoc admins. 

## Adding a new function. 

- Create a new `.ts` file under the `src` folder 
- Import the function you want to add in the `index.ts` file and add to the `exports.*` section.
- Register the new function in the github action `.github/workflow/deploy.yml`. (Use the template provided in the file) 

## Available Functions

### authenticateRecaptcha function

TODO: Add more content!
