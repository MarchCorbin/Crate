// App Imports
import models from '../../setup/models'

// Get product
export async function getProduct(parentValue, { id }) {
  return await models.OrderProduct.findOne({
    where: { id },
    include: [
      { model: models.Product, as: 'product' }
    ]
  })
}
