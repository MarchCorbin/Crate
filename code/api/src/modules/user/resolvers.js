// Imports
import bcrypt from 'bcrypt'
// bcrypt: used for secure passwords
import jwt from 'jsonwebtoken'
// jwt: used for authorization
// jwt: making sure the user sending requests to the server is the same user that logged in during the authentication process
// jwt: making sure the user has access to the system
// jwt: json web tokens instead of use of cookies and sessions
// jwt: Server creates a jwt when user logs in, encodes and serializes it and signs it with its own secret key. Cannot be tampered with
// jwt: Server does not store user
// jwt: Browser can then store the token
// jwt: Token stores all the information and the users information. When user sends a request with the token, the server will check it has been tampered with or not
// jwt: then the server deserializes the token to see the who the user is and all the users information.
// jwt: Server does not need to look up user since it is stored in the jwt

// App Imports
import serverConfig from '../../config/server'
import params from '../../config/params'
import models from '../../setup/models'

// These methods are async functions and run in the background:

// Create
// 'export' async functions allows this method to be exported to other files?
// 'async functions' allows this method to run in the background?
// In this case, the mutations.js file
export async function create(parentValue, { name, email, password }) {
  // Users exists with same email check
  // takes the users imput of name email and password and checks if email is already in use
  const user = await models.User.findOne({ where: { email } })

  if (!user) {
    // User does not exists
    // If user does not exist, it will create a new user with the given parentValue
    const passwordHashed = await bcrypt.hash(password, serverConfig.saltRounds)

    return await models.User.create({
      name,
      email,
      password: passwordHashed
    })
  } else {
    // User exists
    throw new Error(`The email ${ email } is already registered. Please try to login.`)
  }
}

// Login
// 'export' async functions allows this method to be exported to other files?
// 'async functions' allows this method to run in the background?
// In this case, the query.js file

export async function login(parentValue, { email, password }) {
  const user = await models.User.findOne({ where: { email } })

  if (!user) {
    // User does not exists
    throw new Error(`We do not have any user registered with ${ email } email address. Please signup.`)
  } else {
    const userDetails = user.get()

    // User exists
    const passwordMatch = await bcrypt.compare(password, userDetails.password)

    if (!passwordMatch) {
      // Incorrect password
      throw new Error(`Sorry, the password you entered is incorrect. Please try again.`)
    } else {
      const userDetailsToken = {
        id: userDetails.id,
        name: userDetails.name,
        email: userDetails.email,
        role: userDetails.role
      }

      return {
        user: userDetails,
        token: jwt.sign(userDetailsToken, serverConfig.secret)
      }
    }
  }
}

// Get by ID
// 'export' async functions allows this method to be exported to other files?
// 'async functions' allows this method to run in the background?
// In this case, the query.js file
export async function getById(parentValue, { id }) {
  return await models.User.findOne({ where: { id } })
}

// Get all
// 'export' async functions allows this method to be exported to other files?
// 'async functions' allows this method to run in the background?
// In this case, the query.js file
export async function getAll() {
  return await models.User.findAll()
}

// Delete
// 'export' async functions allows this method to be exported to other files?
// 'async functions' allows this method to run in the background?
// In this case, the mutations.js file
export async function remove(parentValue, { id }) {
  return await models.User.destroy({ where: { id } })
}

// User genders
// 'export' async functions allows this method to be exported to other files?
// 'async functions' allows this method to run in the background?
// In this case, the query.js file
// This method i believe will retrieve all products by gender type
export async function getGenders() {
  return Object.values(params.user.gender)
}
