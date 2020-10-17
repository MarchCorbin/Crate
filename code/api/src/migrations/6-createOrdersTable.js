'use strict';

  let date = new Date();
  let shipmentDate = new Date(date.valueOf() + date.getTimezoneOffset() + 30 * 24 * 60 * 60 * 1000);
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
          as: 'userId'
        },
        allowNull: false
      },
      crateId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'crates',
          key: 'id',
          as: 'crateId'
        },
        allowNull: false
      },
      shippingDate: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: shipmentDate
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orders');
  }
};
