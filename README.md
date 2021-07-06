# findadoc-api

This is the primary API for findadoc! This functions only point to the test environment. An admin can help migrate them to prod. 
This project is currently using google cloud functions. (Note: NOT firebase functions)
`index.js` is an aggregation of all functions currently in use.

&nbsp;

## Getting started / Contributing

Download the code and run `yarn` to get set up. 
```
yarn
```

You can run any function locally by running `yarn start:functionnamehere` and replacing `functionnamehere` with the name of the function you want to run.
```terminal
yarn start:functionnamehere
```
Example: 
```terminal
yarn start:recaptcha
``` 

&nbsp;

## Creating a PR 

- Run `yarn build` to verify you can properly build the project.
  - IMPORTANT: You must run `yarn build` and commit your changes in `dist` for your functions to be updated!!!
- Create a Pull Request from your feature branch to `main`.
- When it's merged into `main` it will be automatically deployed to prod by a github action. (Add/Update permissions only)
- By default, functions are not run initially when deployed. You need to trigger them to run. (typically through the app!) 
- For managing the functions in google cloud, please reach out to one of the findadoc admins. 

&nbsp;

## Creating a new function. 

- Create a new `.ts` file under the `src` folder 
- Import the function you want to add in the `index.ts` file and add to the `exports.*` section.
- Register the new function in the github action `.github/workflow/deploy.yml`. (Use the template provided in the file) 
- Add a new yarn script for running your function. like `start:recaptcha` for example.

## Available Functions

### authenticateRecaptcha function

TODO: Add more content! explain what this is. 

#### Request Params

- `response` - type: `string`
  - The recaptcha object from the front-end app to verify. 

#### Response 
If successful
- Http status code `200` 
- response message string

If failed
- HTTP status code `403` 
- response message string