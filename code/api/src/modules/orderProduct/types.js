// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import OrderType from '../order/types'
import ProductType from '../product/types'

// OrderProduct type
// const OrderProductType = new GraphQLObjectType({
//   name: 'orderProduct',
//   description: 'OrderProduct Type',
//
//   fields: () => ({
//     product: { type: ProductType },
//     order: { type: OrderType }
//     // kept: { type: GraphQLBoolean }
//     // products: {
//     //   type: new GraphQLList(ProductType),
//     //   resolve: order => order.getProducts()
//     // }
//     // createdAt: { type: GraphQLString },
//     // updatedAt: { type: GraphQLString }
//   })
// })
//
// export default OrderProductType
