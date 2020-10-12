// Imports
import express from 'express'

// App Imports
import setupLoadModules from './setup/load-modules'
import setupGraphQL from './setup/graphql'
import setupUpload from './setup/upload'
import setupStartServer from './setup/start-server'

// Create express server
const server = express()

// Setup load modules
setupLoadModules(server) // Load the express modules

// Setup uploads
setupUpload(server) // Uploads the images in the "/upload" path

// Setup GraphQL
setupGraphQL(server) // Boot up the GraphQl server method

// Start server
setupStartServer(server) // server function that boots up the app
