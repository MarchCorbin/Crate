// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import OrderType from './types'
import { getByUser, get, getAll } from './resolvers'

// Orders by user
// used to send a list of order objects to the FE.
// haven't figured out how to query the products in that order
// aka, how to use the OrderProducts table.
export const ordersByUser = {
  type: new GraphQLList(OrderType),
  resolve: getByUser
}
