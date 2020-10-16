// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import OrderProductType from './types'
import { getProduct } from './resolvers'

export const product = {
  type: OrderProductType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: getProduct
}
