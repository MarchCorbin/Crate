// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { grey, grey2 } from '../../ui/common/colors'

// App Imports
import userRoutes from '../../setup/routes/user'
import { logout } from './api/actions'

// Component
const Profile = (props) => (
  <div>
    {/* SEO */}
		{/* Helmet components allow for dynamically setting what is in the documents head tag */}
    <Helmet>
      <title>My Profile - Crate</title>
    </Helmet>

    {/* Top title bar */}
		{/* Grid and GridCell are simply components for style (found in web/src/ui/grid) */}
    <Grid style={{ backgroundColor: grey }}>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H3 font="secondary">My profile</H3>
      </GridCell>
    </Grid>

    <Grid>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>

				{/*
				Add in JSX for the profile picture here
				Maybe have a default image to start?
				Add an edit button on the default image to change
				*/}

        <H4 style={{ marginBottom: '0.5em' }}>{props.user.details.name}</H4>

				{/*
				Add in JSX for the personal description here
				Input form, default text: 'add personal description'
				*/}

        <p style={{ color: grey2, marginBottom: '2em' }}>{props.user.details.email}</p>
				{/*
				Add an edit button here so the user can change the email address
				*/}

				{/*
				Input form, default text: 'add shipping address'
				If shipping address exists, button to edit
				*/}

				{
				/* Link/Button to history?
				Will show all items ever delivered
				Add an icon on those that have been kept
				*/}

				{/* this Link tag goes to the Subscriptions page */}
        <Link to={userRoutes.subscriptions.path}>
          <Button theme="primary">Subscriptions</Button>
        </Link>

				{/* this Button logs the user out and takes user to Login page */}
        <Button theme="secondary" onClick={props.logout} style={{ marginLeft: '1em' }}>Logout</Button>
      </GridCell>
    </Grid>
  </div>
)

// Component Properties
Profile.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

// Component State
// This method is mapStateToProps but with a custom name. It allows the component to READ the info from the store. This method takes in state (which is the entire global state tree) and picks out the part the component wants (in this case, the user i.e. state.user)
function profileState(state) {
  return {
    user: state.user
  }
}

export default connect(profileState, { logout })(Profile)
/*
'wraps our component and gives this component access to the store'
The connect method is what provides the props of 'user' to the Profile component. In this case, profileState (mapStateToProps) is retrieving the user information from the store. MapDispatchToProps is the { logout } we see, which takes data from our component to the reducer (which lives in state.js) when logout is called.



This component will need to include order history in state. Order history will be in chronological order from newest (at top) to oldest. Any item that has been kept will have an icon on it
*/