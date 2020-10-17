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

    let USER;

    beforeAll(async () => {
        const passwordHashed = await bcrypt.hash("password", serverConfig.saltRounds)

        await models.User.create({
            name: 'Crate User',
            email: 'user@crate.com',
            password: passwordHashed,
            role: "USER"
        });

        let userData = await models.User.findOne({where: {email: 'user@crate.com'}})
        USER = userData.get();

        server = express();
        server.use(authentication);
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



        // Logging in the user and setting up the authentication

        const response = await request(server)
            .post('/')
            .send({ query: '{ userLogin(email: "user@crate.com", password: "password") { token }}'})
            .expect(200)

        token = response.body.data.userLogin.token
    })
    afterAll(async ()=>{
        await models.User.destroy({ where: {} })
    })

    // using async and await
    it("user - returns user with specific id", async() => {
        const response = await request(server)
            .post('/')
            .send({ query: `{ user(id: ${USER.id}) { name email }}`})
            .expect(200)

        expect(response.body.data.user.name).toEqual(USER.name)
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
        let email = 'user@hotmail.com'
        let description = 'description'
        const response = await request(server)
            .post('/')
            .send({ query: `mutation { userUpdate(description: "${description}", email: "${email}") {name email description address }}`})
            .set('Authorization', `Bearer ${token}`)
            .expect(200)

        expect(response.body.data.userUpdate.description).toEqual(description)
        expect(response.body.data.userUpdate.email).toEqual(email)
        done();
    })
})
