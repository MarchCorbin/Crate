[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

## Crate

Brownfield project for Turing students to collaborate on as a full-stack team in Mod4. This team was assigned the _Improving UX and Community [Track](https://mod4.turing.io/projects/crate/crate_project_tracks.html)_

Original **Crate Repo** [README](https://github.com/turingschool/Crate)

### About

Crate is a platform, similar to Stitch Fix, that allows users to setup monthly subscriptions to receive trendy clothes and accessories.

### Technologies Used

**Front End**
- React
- Redux

**Back End**
- GraphQL
- Sequelize
- Express
- Node.js

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
![graphql_schema_2](https://user-images.githubusercontent.com/62727545/96355304-21a8da00-10ae-11eb-86d8-09edd47db0b0.png)

### Database Schema
![Database Schema](https://user-images.githubusercontent.com/46441816/96352562-3de25200-1081-11eb-945e-f583ed311ffd.png)

### Future Iterations
- Display the delivery date on the subscription card and allow the user to edit the date as needed
- Integrate the Twitter API so users can tweet which clothes they have purchased

### Contributors
**Front End**
* [Erin Untermeyer](https://github.com/ErinUntermeyer)
* [Nicole Latifi](https://github.com/NicoleLatifi)
* [Corbin March](https://github.com/MarchCorbin)

**Back End**
* [Kwibe Merci](https://github.com/jKwibe)
* [Gaby Mendez](https://github.com/gabichuelas)
* [Ryan Laleh](https://github.com/RyN21)

[contributors-shield]: https://img.shields.io/github/contributors/gabichuelas/crate.svg?style=flat-square
[contributors-url]: https://github.com/gabichuelas/crate/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/gabichuelas/crate.svg?style=flat-square
[forks-url]: https://github.com/gabichuelas/crate/network/members
[stars-shield]: https://img.shields.io/github/stars/gabichuelas/crate.svg?style=flat-square
[stars-url]: https://github.com/gabichuelas/crate/stargazers
[issues-shield]: https://img.shields.io/github/issues/gabichuelas/crate.svg?style=flat-square
[issues-url]: https://github.com/gabichuelas/crate/issues
