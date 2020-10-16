// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import ProductType from './types'
import { getProductsByOrder } from './resolvers'

// orderProduct by order
export const orderProductsByOrder = {
  type: new GraphQLList(ProductType),
  resolve: getProductsByOrder
}
