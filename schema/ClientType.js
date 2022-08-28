const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Client',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: {
      type: GraphQLString, // eslint-disable-next-line no-unused-vars
      resolve(parent, args) {
        return parent.phoneExt + ' ' + parent.phone;
      },
    },
  }),
});
