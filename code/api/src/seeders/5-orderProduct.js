'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('orderProducts', [
            {
                orderId: 2,
                productId: 2,
                kept: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                orderId: 1,
                productId: 6,
                kept: true,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {})
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('orderProducts', null, {});
    }
}