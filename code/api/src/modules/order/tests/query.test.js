// ORDER QUERY TESTING

// require testing DSL for HTTP requests
import request from 'supertest';
// get your server
import express from 'express';
// set up your graphql middleware
import graphqlHTTP from 'express-graphql';
import schema from '../../../setup/schema';
import models from '../../../setup/models';
import serverConfig from "../../../config/server.json";
import authentication from "../../../setup/authentication";

describe("user queries", () => {
  // this variable needs to be outside of the beforeAll block
  // in javascript. In Ruby it wouldn't matter.
  let server;
  // test setup
  beforeAll( async () => {

    let userData = await models.User.findOne({where: {email: 'user@crate.com'}})
    USER = userData.get();

    // start your server
    server = express();

    server.use(
      '/',
      graphqlHTTP({
        schema,
        graphiql: false,
        context: {
            auth: {
                user: USER,
                isAuthenticated: USER && USER.id > 0
            }
        }
      })
    );
  })

  xit("ordersByUser - returns all orders and product names in them for a given user", async () => {
    const response = await request(server)
      .post('/')
      .send({ query: '{ ordersByUser { id shippingDate products { name } }}' })
      .expect(200)
    console.log(response.body)
    expect(response.body.data.ordersByUser.length).toEqual(2)
  })

  // TEST TEARDOWN
})
