## API
### Express Server + Graph QL Setup
- `index.js` is where the express server is created
- Rest of setup for modules, uploads (for file/image uploads, which uses a different endpoint as defined in `config/server.json` - `'/upload'`), setting up GraphQL, and starting the actual express server
- GraphQL gets set up using the `setup/graphql.js` file which pulls from `setup/schema`, `setup/authentication` and `config/server.json` to set the main GraphQL endpoint of `"/"`

**Schema**
- Schema is first defined in the `schema/index.js` file, and rather than writing out all the queries and mutations, the `new GraphQLSchema` definition references relative files `mutations.js` and `queries.js`
- Mutations are defined inside the directory for the model/modules they are referencing.
  - ex) mutations for User model live in `modules/user/mutations.js`
  - The spreader operator `...` is used to populate the mutation definition with mutations from all those module files.
- The same happens with queries

**Creating the DB**
- `setup/database.js` pulls in the database config info and uses it to create a new database connection using **Sequelize** as the ORM.
- Model definitions are written in `modules/<model_name>/model.js`
- `setup/models.js` brings in the models to be used in the actual DB. If those model definitions included any associations, they are then created here with the code on line 14.
- The migrations are run and DB seeded when running `npm run setup`. The details of that script are specified in `package.json`.

**New Code We'll Need on the BE**
- Add `description` and `shippingAddress` to `User` _model_ and _type_
- Edit migrations to reflect those additions
- Write a _userUpdate_ mutation for adding description and shipping address to existing users
- Write a resolver for that new mutation.. maybe _update_ ?

- Create `orders` model & table, add to `models.js`, write migration for it. Create associations to `products` too.
- Create `orderProducts` model & table, add to `models.js`, write migration for it

## Web
**How does the frontend talk to the backend?**
- Each directory for a model under `web/src/modules` will also include an `api` folder with an `actions.js` file.
- The `actions.js` file contain functions referenced from the FE pages that are in charge of creating `axios.post` requests for queries or mutations to the backend API.
- The corresponding queries or mutations on the backend have specific resolvers that will determine what to do with the data sent by the FE and return a response. The response is then received by the original function in `actions.js`
- Ex) `modules/user/api/actions.js` holds the functions for user login, logout, etc, and is also where we might add functions that will post data to the backend to add a user description, shipping address, or profile image. We would also probably write a function to ask for a user's order history, since the page that displays `Profile` is in the `user` directory.
