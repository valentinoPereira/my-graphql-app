const { GraphQLID, GraphQLString } = require('graphql');
const { projects } = require('../data');
const ProjectType = require('../schema/ProjectType');

module.exports = {
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
};
