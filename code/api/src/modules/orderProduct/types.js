// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLBoolean } from 'graphql'

// App Imports
import  {ProductType}  from '../product/types'
import  OrderType  from '../order/types'

// OrderProduct type
const OrderProductType = new GraphQLObjectType({
  name: 'orderProduct',
  description: 'Order Product Type',

  fields: () => ({
    id: { type: GraphQLInt },
    kept: {type: GraphQLBoolean},
    productId: { type: GraphQLInt },
    // both of the following return null
    // product: { type: ProductType },
    // order: { type: OrderType }
  })
})

export default OrderProductType
