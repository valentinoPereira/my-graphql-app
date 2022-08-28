const { GraphQLObjectType, GraphQLSchema } = require('graphql');

const clientsResolver = require('./resolver/clients');
const projectsResolver = require('./resolver/projects');
const projectResolver = require('./resolver/project');
const clientResolver = require('./resolver/client');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    projects: projectsResolver,
    project: projectResolver,
    clients: clientsResolver,
    client: clientResolver,
  }),
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
