const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} = require('graphql');

const { clients, projects } = require('./data.js');

const ClientType = new GraphQLObjectType({
  name: 'Client',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

const ProjectType = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    client: {
      type: ClientType,
      // eslint-disable-next-line no-unused-vars
      resolve(parent, args) {
        return clients.find((client) => client.id === parent.clientId);
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    projects: {
      type: new GraphQLList(ProjectType),
      // eslint-disable-next-line no-unused-vars
      resolve(parent, args) {
        return projects;
      },
    },
    project: {
      type: ProjectType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
      },
      resolve(parent, args) {
        if (args.name) {
          return projects.find((project) => project.name === args.name);
        } else if (args.id) {
          return projects.find((project) => project.id === args.id);
        }
      },
    },
    clients: {
      type: new GraphQLList(ClientType),
      // eslint-disable-next-line no-unused-vars
      resolve(parent, args) {
        return clients;
      },
    },
    client: {
      type: ClientType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
      },
      resolve(parent, args) {
        if (args.name) {
          return clients.find((client) => client.name === args.name);
        } else if (args.id) {
          return clients.find((client) => client.id === args.id);
        }
      },
    },
  }),
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
