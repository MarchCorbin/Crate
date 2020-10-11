// This file deals with the setup of the user table for the database
module.exports = {
  up: (queryInterface, Sequelize) => {
    // createTable method used to create users
    return queryInterface.createTable('users', {
      // A list of all the columns or attributes that will be created in this table
      id: {
        // Must have an ID
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        // Sequalize, unsure what this is doing. Maybe something to do with how it will be turned into an object?
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.TEXT
      },
      password: {
        type: Sequelize.TEXT
      },
      role: {
        type: Sequelize.TEXT
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
    return queryInterface.dropTable('users');
  }
}
// Migration page to create the user table in the database:

// Profile Image
// Possibly add an image attribute to hold profile pic.
// BUT it is an upload from the users computer.. so not sure how it could be held.

// Shipping address
// Can add a shipping address to the database
