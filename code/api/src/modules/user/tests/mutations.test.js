// USER MUTATIONS TESTING

// require testing DSL for HTTP requests
import request from 'supertest';
// get your server
import express from 'express';
// set up your graphql middleware
import graphqlHTTP from 'express-graphql';
import schema from '../../../setup/schema';

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

    // const gaby = User.create({
    //     name: 'Gaby Mendez',
    //     email: 'gaby@crate.com',
    //     password: bcrypt.hashSync('password', config.saltRounds),
    //     role: params.user.roles.user,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   });

  })

  // using async and await
  xit("user - returns user with specific id", async() => {
    const response = await request(server)
      .post('/')
      .send({ query: '{ user(id: 2) { name email }}'})
      .expect(200)

    // console.log(response.body)
    expect(response.body.data.user.name).toEqual('The User')
  })

  // using the promise way
  xit("user - returns user with specific id", () => {
    return request(server)
      .post('/')
      .send({ query: '{ user(id: 2) { name email }}'})
      .expect(200)
      .then(response => {
        expect(response.body.data.user.name).toEqual('The User')
      })
  })

  test("user - returns user with specific id", done => {
    request(server)
      .post('/')
      .send({ query: '{ user(id: 2) { name email }}'})
      .expect(200)
      .then(response => {
        expect(response.body.data.user.name).toEqual('The User');
        done();
      })
  })

  xit("updateUser - updates user profile info", async() => {
    const response = await request(server)
      .post('/')
      .send({ mutation: '{ userUpdate(description: "description", email: "gaby@hotmail.com") {name email description address }}'})
      .expect(200)

    expect(response.body.data.user.name).toEqual('')
  })

  // TEST TEARDOWN

})
