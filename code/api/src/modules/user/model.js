// no idea what this next line is
'use strict'

// User
// User model definition
// will need to add description and shipping address?
module.exports = function(sequelize, DataTypes) {
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

  // DB association with Subscription
  User.associate = function(models) {
    User.hasMany(models.Subscription)
  }

  return User
}
