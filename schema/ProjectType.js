const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');
const { clients } = require('../data.js');
const ClientType = require('./ClientType');

module.exports = new GraphQLObjectType({
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
