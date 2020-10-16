// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import ProductType from './types'
import { getProducts } from './resolvers'

// orderProduct by order
export const orderProductsByOrderId = {
  type: new GraphQLList(ProductType),
  args: {
    order_id: { type: GraphQLInt }
  },
  resolve: getProducts
}
