// require testing DSL for HTTP requests
import request from 'supertest';
// get your server
import express from 'express';
// set up your graphql middleware
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';

describe("user queries", () => {
  let server;
  // test setup
  beforeAll(() => {
    // start your server
    server = express();

    server.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql: false,
      })
    );
  })

  it("users - returns all users", async () => {
    const response = await request(server)
      .post('/')
      .send({ query: '{ users { name email } }' })
      .expect(200)

    expect(response.body.data.users.length).toEqual(2)
    expect(response.body.data.users[0].id).toEqual(1)
  })

});
