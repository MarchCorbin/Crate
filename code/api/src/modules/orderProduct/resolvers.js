// App Imports
import params from '../../config/params'
import models from '../../setup/models'

// Get product by ID
export async function getProducts(parentValue, { orderId }) {
  const orderProducts = await models.OrderProduct.findAll({ where: { orderId: orderId } })

  if (!orderProducts) {
    // Products do not exist
    throw new Error('This order has no products')
  } else {
    return orderProducts
  }
}
