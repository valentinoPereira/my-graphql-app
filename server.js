const schema = require('./schema');
const { createServer } = require('@graphql-yoga/node');

const server = createServer({
  schema,
  graphiql: false,
});

server.start();
