// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLDate, GraphQLList, GraphQLBoolean } from 'graphql'

// App Imports
// import { UserType } from '../user/types'
// import CrateType from '../crate/types'
import { ProductType } from '../product/types'
import  OrderType  from '../order/types'

// import { OrderProductType } from '../orderProduct/types'

// OrderProduct type
const OrderProductType = new GraphQLObjectType({
  name: 'orderProduct',
  description: 'Order Product Type',

  fields: () => ({
    id: { type: GraphQLInt },
    kept: {type: GraphQLBoolean},
    // productId: { type: GraphQLInt },
    product: { type: ProductType },
    order: { type: OrderType }
  })
})

export default OrderProductType
