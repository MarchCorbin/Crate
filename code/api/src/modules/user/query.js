// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import { UserType, UserLoginType, UserGenderType } from './types'
import { getAll, getById, login, getGenders } from './resolvers'

// All
export const users = {
  // GraphQL allows us to get a list or an array of a type. In this case, all the 'UserTypes'
  type: new GraphQLList(UserType),
  resolve: getAll
}

// By ID
export const user = {
  // We can query a UserType by ID
  type: UserType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: getById
}

// Auth
export const userLogin = {
  // Query a UserLoginType to authenticate the user and then loging the user in
  type: UserLoginType,
  args: {
    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    },

    role: {
      name: 'role',
      type: GraphQLString
    }
  },
  resolve: login
}

// Genders
export const userGenders = {
  // Get a list/array of all UserGenderTypes
  type: new GraphQLList(UserGenderType),
  resolve: getGenders
}
