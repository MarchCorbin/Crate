// USER QUERY TESTING

// require testing DSL for HTTP requests
import request from 'supertest';
// get your server
import express from 'express';
// set up your graphql middleware
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';

describe("user queries", () => {
  // this variable needs to be outside of the beforeAll block
  // in javascript. In Ruby it wouldn't matter.
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
  })

  it("user - returns user with specific id", async() => {
    const response = await request(server)
      .post('/')
      .send({ query: '{ user(id: 1) { name email }}'})
      .expect(200)

    console.log(response.body)
    expect(response.body.data.user.name).toEqual('The Admin')
  })

  // TEST TEARDOWN
})
