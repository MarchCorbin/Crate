// USER QUERY TESTING

// require testing DSL for HTTP requests
import request from 'supertest';
// get your server
import express from 'express';
// set up your graphql middleware
import graphqlHTTP from 'express-graphql';
import schema from '../../../setup/schema';
import bcrypt from "bcrypt";
import serverConfig from "../../../config/server.json";
import models from "../../../setup/models";

describe("user queries", () => {
  // this variable needs to be outside of the beforeAll block
  // in javascript. In Ruby it wouldn't matter.
  let server;
  let USER;
  // test setup
  beforeAll(async () => {
    const passwordHashed = await bcrypt.hash("password", serverConfig.saltRounds)

    USER = await models.User.create({
      name: 'Gaby Mendez',
      email: 'gaby@crate.com',
      password: passwordHashed,
      role: "USER"
    });

    await models.User.create({
      name: 'Kwibe Merci',
      email: 'kwibe@crate.com',
      password: passwordHashed,
      role: "ADMIN"
    });
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

  afterAll(async ()=>{
    await models.User.destroy({ where: {} })

  })

  it("users - returns all users", async () => {
    const response = await request(server)
      .post('/')
      .send({ query: '{ users { name email } }' })
      .expect(200)

    expect(response.body.data.users).toHaveLength(2)
    expect(typeof response.body.data.users).toBe('object')
  })

  it("user - returns user with specific id", async() => {
    const response = await request(server)
      .post('/')
      .send({ query: `{ user(id: ${ USER.id }) { name email }}`})
      .expect(200)

    expect(response.body.data.user.name).toEqual(USER.name)
    expect(response.body.data.user.email).toEqual(USER.email)
  })

  it("user - an error when wrong id is passed", async() => {
    const response = await request(server)
      .post('/')
      .send({ query: `{ user(id: 99999999) { name email }}`})
      .expect(200)

    expect(response.body.data.user).toBeNull()
    expect(response.body.errors[0].message).toBe('The user does not exist')
  })

})
