const { GraphQLList } = require('graphql');
const { clients } = require('../data');
const ClientType = require('../schema/ClientType');

module.exports = {
  type: new GraphQLList(ClientType),
  resolve() {
    return clients;
  },
};
