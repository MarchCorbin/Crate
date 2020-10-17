## Crate

Brownfield project for Turing students to collaborate on as a full-stack team in Mod4. This team was assigned the _Improving UX and Community [Track](https://mod4.turing.io/projects/crate/crate_project_tracks.html)_

Original **Crate Repo** [README](https://github.com/turingschool/Crate)

### Team Members
**Front End**
* [Erin Untermeyer](https://github.com/ErinUntermeyer)
* [Nicole Latifi](https://github.com/NicoleLatifi)
* [Corbin March](https://github.com/MarchCorbin)

**Back End**
* [Kwibe Merci](https://github.com/jKwibe)
* [Gaby Mendez](https://github.com/gabichuelas)
* [Ryan Laleh](https://github.com/RyN21)

### Prerequisites and Setup Instructions
**Prerequisites**
  - [Node](https://treehouse.github.io/installation-guides/mac/node-mac.html)
  - [Postgres](https://postgresapp.com/)

Note: please install postgres using the postgres.app not homebrew. When installing with postgres.app for step 3 follow the instructions below to configure the postgres CLI.

Configuring your $PATH variable
1. Add the following to your .bash_profile or (.zshrc if using zsh)`
`export PATH="/Applications/Postgres.app/Contents/Versions/<your postgresql verson i.e. 12.3>/bin:$PATH"`
2. Close or reload your terminal window
3. Type `which psql` in your terminal you should see the following output:
`/Applications/Postgres.app/Contents/Versions/latest/bin/psql`
4. Type `psql` in your terminal to verify that your postgres CLI is working.

**Setup**
- Clone down the repo using `git clone git@github.com:gabichuelas/crate.git`
- Change into the `crate` directory using `cd crate`
- Change into the `code` directory using `cd code`
- Change into the `api` directory using `cd api`
- In this directory, run `npm run setup` to install packages and database setup (migrations and seed)
- From this same directory, run `npm start`. You can now browse GraphiQL at http://localhost:8000/
- Navigate back to the `code` directory using `cd ..`
- Change into the `web` directory using `cd web`
- In this directory, run `npm install` to install packages
- From this same directory, run `npm start`. You can now view the application from your browser at http://localhost:3000/

### Preview
- Added Feature: User can update profile details
<img src="http://g.recordit.co/mYq8wrP1QA.gif" alt="User updating their description on profile details" height=auto width=65%/>

- Added Feature: User can update profile picture
<img src="http://g.recordit.co/X94HaRxSq6.gif" alt="User updating their picture on profile details" height=auto width=65%/>

### GraphQL Schema
![graphql_schema](https://user-images.githubusercontent.com/62727545/95487041-cf571300-0961-11eb-9728-bf0bf1b76931.png)
### Database Schema
![crate-schema](https://user-images.githubusercontent.com/46441816/95492567-82bb0a00-0958-11eb-8c95-4095aa0c93a3.png)