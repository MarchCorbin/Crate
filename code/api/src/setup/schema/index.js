// Imports
import { GraphQLSchema } from 'graphql'

// App Imports
import query from './queries'
import mutation from './mutations'

// Schema
const schema = new GraphQLSchema({
  query, // Links to the data queries
  mutation // Links to the mutations
})

export default schema
