const { createServer } = require('@graphql-yoga/node');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe, it } = require('mocha');
const { projects } = require('../data');
const schema = require('../schema');
// eslint-disable-next-line no-unused-vars
const should = chai.should();

chai.use(chaiHttp);

const server = createServer({
  schema,
  graphiql: false,
});

describe('.projects', () => {
  describe('Basic testing', () => {
    describe('when we send valid query', () => {
      it('gives success response ', (done) => {
        chai
          .request(server)
          .post('/graphql')
          .send({
            query: `{
            projects {
                id
                name
                status
                description
                client {
                    id
                    name
                    email
                    phone
                }
            }
        }`,
          })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.not.have.property('errors');
            done();
          });
      });
      it('gives valid response', (done) => {
        chai
          .request(server)
          .post('/graphql')
          .send({
            query: `{
            projects {
                id
                name
                status
                description
                client {
                    id
                    name
                    email
                    phone
                }
            }
        }`,
          })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.not.have.property('errors');

            // Data verification
            res.body.should.have.property('data');
            res.body.data.should.have.property('projects');
            res.body.data.projects.length.should.be.eq(projects.length);

            // Fields verification
            const projectOne = res.body.data.projects[0];
            projectOne.should.have.property('id');
            projectOne.should.have.property('name');
            projectOne.should.have.property('status');
            projectOne.should.have.property('description');
            projectOne.should.have.property('client');

            projectOne.client.should.be.a('object');
            done();
          });
      });
    });
    describe('when we send invalid query', () => {
      it('gives error response', (done) => {
        chai
          .request(server)
          .post('/graphql')
          .send({
            query: `{
            projects {
                id
                name
                status
                description-wrong
                client {
                    id
                    name
                    email
                    phone
                }
            }
        }`,
          })
          .end((err, res) => {
            res.should.have.status(400);
            res.body.should.be.a('object');
            res.body.should.have.property('errors');
            done();
          });
      });
    });
  });
  describe('Fields combination testing', () => {
    it('ID', (done) => {
      chai
        .request(server)
        .post('/graphql')
        .send({
          query: `{
              projects {
                  id
              }
          }`,
        })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
    it('ID, name', (done) => {
      chai
        .request(server)
        .post('/graphql')
        .send({
          query: `{
                projects {
                    id
                    name
                }
            }`,
        })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
    it('ID, name, status', (done) => {
      chai
        .request(server)
        .post('/graphql')
        .send({
          query: `{
                  projects {
                      id
                      name
                      status
                  }
              }`,
        })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
    it('ID, name, status, description', (done) => {
      chai
        .request(server)
        .post('/graphql')
        .send({
          query: `{
                    projects {
                        id
                        name
                        status
                        description
                    }
                }`,
        })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
    it('with client id', (done) => {
      chai
        .request(server)
        .post('/graphql')
        .send({
          query: `{
                      projects {
                          client {
                            id
                          }
                      }
                  }`,
        })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
    it('with client id, name', (done) => {
      chai
        .request(server)
        .post('/graphql')
        .send({
          query: `{
                      projects {
                          client {
                            id
                            name
                          }
                      }
                  }`,
        })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
    it('with client id, name, email', (done) => {
      chai
        .request(server)
        .post('/graphql')
        .send({
          query: `{
                      projects {
                          client {
                            id
                            name
                            email
                          }
                      }
                  }`,
        })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
    it('with client id, name, email, phone', (done) => {
      chai
        .request(server)
        .post('/graphql')
        .send({
          query: `{
                      projects {
                          client {
                            id
                            name
                            email
                            phone
                          }
                      }
                  }`,
        })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
