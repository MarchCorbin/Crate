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
            },
            {
                orderId: 1,
                productId: 8,
                kept: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                orderId: 1,
                productId: 7,
                kept: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                orderId: 2,
                productId: 6,
                kept: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                orderId: 1,
                productId: 5,
                kept: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                orderId: 1,
                productId: 1,
                kept: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                orderId: 1,
                productId: 6,
                kept: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                orderId: 2,
                productId: 4,
                kept: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                orderId: 1,
                productId: 3,
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