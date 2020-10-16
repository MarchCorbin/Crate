'use strict'

// OrderProduct
module.exports = function(sequelize, DataTypes) {
    let OrderProduct = sequelize.define('orderProducts', {
        productId: {
            type: DataTypes.INTEGER
        },
        kept: {
            type: DataTypes.BOOLEAN
        },
        orderId: {
            type: DataTypes.INTEGER
        }
    })

    OrderProduct.associate = function(models) {
        // OrderProduct.belongsTo(models.Product)
        // OrderProduct.belongsTo(models.Order, { foreignKey: 'orderId'})

        // OrderProduct.hasOne(models.Product)
    }

    return OrderProduct
}
