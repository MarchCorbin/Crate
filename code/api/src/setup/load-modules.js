// Imports
import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'

// App Imports
import { NODE_ENV } from '../config/env'

// Load express modules
export default function (server) {
  console.info('SETUP - Loading modules...')

  // Enable CORS
  server.use(cors()) // Give header permissions for the frontend to access the api

  // Request body parser
  server.use(bodyParser.json()) // Allow requests from the frontend
  server.use(bodyParser.urlencoded({ extended: false }))

  // Request body cookie parser
  server.use(cookieParser()) // Saves cookies

  // Static files folder
  server.use(express.static(path.join(__dirname, '..', '..', 'public'))) // Set a public folder

  // HTTP logger
  if(NODE_ENV === 'development') {
    server.use(morgan('tiny')) // Logs for the developers
  }
}
