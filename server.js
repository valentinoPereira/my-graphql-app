const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const schema = require('./schema');

const app = express();

app.use(
  '/graphql',
  expressGraphQL({
    schema: schema,
  })
);

app.listen(4000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on port 4000');
});
