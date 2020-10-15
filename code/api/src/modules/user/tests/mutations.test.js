// USER MUTATIONS TESTING

// require testing DSL for HTTP requests
import request from 'supertest';
// get your server
import express from 'express';
// set up your graphql middleware
import graphqlHTTP from 'express-graphql';
import schema from '../../../setup/schema';
import models from '../../../setup/models';

describe("user mutations", () => {

  let server;

  beforeAll(() => {

    server = express();
    server.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql: false,
      })
    );

    const gaby = models.User.create({
        name: 'Gaby Mendez',
        email: 'gaby@crate.com',
        password: 'password',
        role: "USER",
        createdAt: new Date(),
        updatedAt: new Date()
      });
  })

  // using async and await
  it("user - returns user with specific id", async() => {
    const response = await request(server)
      .post('/')
      .send({ query: '{ user(id: 3) { name email }}'})
      .expect(200)

    console.log(response.body)
    expect(response.body.data.user.name).toEqual('Gaby Mendez')
  })

  // const token = async() => {
  //   const response = await request(server)
  //     .post('/')
  //     .send({ query: '{ userLogin(email: "gaby@crate.com", password: "password", role: "USER") { token }}'})
  //     .expect(200)
  //
  //     console.log(response.body)
  // };

  xit("updateUser - updates user profile info", async() => {
    const response = await request(server)
      .post('/')
      .headers({
        'Authorization': 'Bearer'
      })
      .send({ mutation: '{ userUpdate(description: "description", email: "gaby@hotmail.com") {name email description address }}'})
      .expect(200)

    expect(response.body.data.user.name).toEqual('')
  })

  // TEST TEARDOWN

})
