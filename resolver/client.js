const { GraphQLID, GraphQLString } = require('graphql');
const { clients } = require('../data');
const ClientType = require('../schema/ClientType');

module.exports = {
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
};
