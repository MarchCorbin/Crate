// App Imports
import models from '../../setup/models'

// Get order by ID
export async function get(parentValue, { id }) {
  return await models.Order.findOne({
    where: { id },
    include: [
      { model: models.User, as: 'user' },
      { model: models.Crate, as: 'crate' },
    ]
  })
}

// Get order by user
export async function getByUser(parentValue, {}, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.Order.findAll({
      where: {
        userId: auth.user.id
      },
      include: [
        {model: models.User, as: 'user'},
        {model: models.Crate, as: 'crate'},
        {model: models.OrderProduct, as: 'orderProduct' }
      ]
    })
  } else {
    throw new Error('Please login to view your orders.')
  }
}

// Get all orders
export async function getAll() {
  return await models.Order.findAll({
    include: [
      { model: models.User, as: 'user' },
      { model: models.Crate, as: 'crate' },
    ]
  })
}
