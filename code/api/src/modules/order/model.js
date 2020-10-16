'use strict'

// Order
module.exports = function(sequelize, DataTypes) {
    let Order = sequelize.define('orders', {
        userId: {
            type: DataTypes.INTEGER
        },
        shippingDate: {
            type: DataTypes.DATE
        },
        crateId: {
            type: DataTypes.INTEGER
        }
    })

    Order.associate = function(models) {
        Order.belongsTo(models.User)
        Order.belongsTo(models.Crate)

        // Order.belongsTo(models.OrderProduct)
        Order.hasMany(models.OrderProduct, { as: 'orderProduct'})

        Order.belongsToMany(models.Product, { through: models.OrderProduct })
    }

    return Order
}
