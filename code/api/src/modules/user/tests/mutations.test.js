// USER MUTATIONS TESTING

// require testing DSL for HTTP requests
import request from 'supertest';
// get your server
import express from 'express';
import bcrypt from "bcrypt";
import graphqlHTTP from 'express-graphql';

// set up your graphql middleware
import schema from '../../../setup/schema';
import models from '../../../setup/models';
import serverConfig from "../../../config/server.json";
import authentication from "../../../setup/authentication";


describe("user mutations", () => {


  let server;
  let token;

  beforeAll(async () => {
      const passwordHashed = await bcrypt.hash("password", serverConfig.saltRounds)

      await models.User.create({
          name: 'Gaby Mendez',
          email: 'gaby@crate.com',
          password: passwordHashed,
          role: "USER"
      });

      let userData = await models.User.findOne({where: {email: 'gaby@crate.com'}})
      let user = userData.get();

    server = express();
    server.use(authentication);
    server.use(
      '/',
      graphqlHTTP({
        schema,
        graphiql: false,
          context: {
              auth: {
                  user: user,
                  isAuthenticated: user && user.id > 0
              }
          }
      })
    );



      // Logging in the user and setting up the authentication

      const response = await request(server)
          .post('/')
          .send({ query: '{ userLogin(email: "gaby@crate.com", password: "password") { token }}'})
          .expect(200)

      token = response.body.data.userLogin.token
  })
    afterAll(async ()=>{
        // models.User.drop()
    })

  // using async and await
  it("user - returns user with specific id", async() => {
    const response = await request(server)
      .post('/')
      .send({ query: '{ user(id: 3) { name email }}'})
      .expect(200)

    // console.log(response.body)
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

  it("updateUser - updates user profile info", async(done) => {
    const response = await request(server)
      .post('/')
      .send({ query: 'mutation { userUpdate(description: "description", email: "gaby@hotmail.com") {name email description address }}'})
        .set('Authorization', `Bearer ${token}`)
      .expect(200)

      expect(response.body.data.userUpdate.description).toEqual("description")
      expect(response.body.data.userUpdate.email).toEqual("gaby@hotmail.com")
      done();
  })

  // TEST TEARDOWN

})
