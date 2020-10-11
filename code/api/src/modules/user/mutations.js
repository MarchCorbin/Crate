// Imports
// This seems to be the file that will use GraphQL
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
// Importing types and resolver methods/functions from other files within this app
import { UserType } from './types'
import { create, remove } from './resolvers'

// Create
// This function is how the user will signup, and uses the UserType with the 'create' resolve.
export const userSignup = {
  // UserType from './type'
  type: UserType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    }
  },
  // Create function from './resolvers'
  resolve: create
}

// Remove
export const userRemove = {
  // UserType from './type'
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  // Remove function from './resolvers'
  resolve: remove
}
