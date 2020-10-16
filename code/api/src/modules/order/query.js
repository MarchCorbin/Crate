// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import OrderType from './types'
import { getByUser, get, getAll } from './resolvers'

// Orders by user
export const ordersByUser = {
  type: new GraphQLList(OrderType),
  resolve: getByUser
}
