'use strict'

// User
// User model
module.exports = function(sequelize, DataTypes) {
  // sequalize is making the user object from the user schema database
  // we can maybe add a profile image
  // we can add a shipping address attribute to this user object
  let User = sequelize.define('users', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.TEXT
    }
  })

  // Below is creating the relationship between the user and subscription
  // one to many relationship
  User.associate = function(models) {
    User.hasMany(models.Subscription)
  }

  return User
}
