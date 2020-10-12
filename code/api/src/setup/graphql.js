// Imports
import graphqlHTTP from 'express-graphql'

// App Imports
import serverConfig from '../config/server.json'
import authentication from './authentication'
import schema from './schema'

// Setup GraphQL
export default function (server) {
  console.info('SETUP - GraphQL...')

  server.use(authentication) // Middleware that checks if the user is authentic

  // API (GraphQL on route `/`)
  server.use(serverConfig.graphql.endpoint, graphqlHTTP(request =>({
    schema, // Links to the schema methods to find types, queries, mutations and resolvers
    graphiql: serverConfig.graphql.ide,  // set graphql variable to true
    pretty: serverConfig.graphql.pretty, // set graphql variable to true
    context: {
      auth: {
        user: request.user,
        isAuthenticated: request.user && request.user.id > 0 // should return a boolean to check if there is a valid user
      }
    }
  })))
}
