'use strict';
let date = new Date();

let shipmentDate = new Date(date.valueOf() + date.getTimezoneOffset() + 30 * 24 * 60 * 60 * 1000);
let shipmentDate2 = new Date(date.valueOf() + date.getTimezoneOffset() + 60 * 24 * 60 * 60 * 1000);
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('orders', [
            {
                crateId: 2,
                userId: 2,
                shippingDate: shipmentDate,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                crateId: 3,
                userId: 2,
                shippingDate: shipmentDate2,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {})
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('orders', null, {});
    }
}