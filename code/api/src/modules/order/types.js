// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import { UserType, ProductType } from '../user/types'
import CrateType from '../crate/types'

// Order type
const OrderType = new GraphQLObjectType({
  name: 'order',
  description: 'Order Type',

  fields: () => ({
    id: { type: GraphQLInt },
    user: { type: UserType },
    crate: { type: CrateType },
    shippingDate: { type: GraphQLString },
    products: {
      type: new GraphQLList(ProductType),
      resolve: order => order.getProducts()
    }
    // createdAt: { type: GraphQLString },
    // updatedAt: { type: GraphQLString }
  })
})

export default OrderType