'use strict'

// User
module.exports = function(sequelize, DataTypes) {
    let Order = sequelize.define('orders', {
        userId: {
            type: DataTypes.INTEGER
        },
        shippingDate: {
            type: DataTypes.Date
        },
        crateId: {
            type: DataTypes.INTEGER
        }
    })

    Order.associate = function(models) {
        Order.belongsTo(models.User)
        Order.belongsTo(models.Crate)

        Order.belongsToMany(models.Product, { through: models.OrderProduct })
    }

    return Order
}
