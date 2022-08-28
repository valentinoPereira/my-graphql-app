# my-graphql-app

Implemented APIs based on GraphQL, NodeJS, Express, using Github actions for CI/CD, Eslint & prettier for code quality control, Chai & mocha for testing the API.

Just me getting my hands on with these babies!

## Setup and development

1. Clone the project
2. Open terminal in the project directory
3. To install the dependencies, run `npm install` command
4. To run the app,
    - In test mode: Run `npm run test:server` command to start the server
    - In development mode: Run `npm run dev:server` command to start the development server. In this mode, the server will auto-reload itself whenever you make any file changes
5. Open Insomnia, and import the collection from the project directory named `insomnia-collection.json`, and you can use that collection to test the requests using graphql

### Todo

1. Use dotenv for secrets and stuff
2. Introduce a database instead of static data from data.js (Mongodb or firebase)
