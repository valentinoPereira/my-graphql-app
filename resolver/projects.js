const { GraphQLList } = require('graphql');
const { projects } = require('../data');
const ProjectType = require('../schema/ProjectType');

module.exports = {
  type: new GraphQLList(ProjectType),
  // eslint-disable-next-line no-unused-vars
  resolve(parent, args) {
    return projects;
  },
};
