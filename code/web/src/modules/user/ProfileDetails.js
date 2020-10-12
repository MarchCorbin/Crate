// Imports
import React, { Component } from 'react'
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
class ProfileDetails extends Component {
	constructor() {
		super()
		this.state = {
			email: '',
			editMode: false
		}
	}

	componentDidMount = () => {
		// this.setState({ email: props.user.details.email })
	}

	render() {
		return (
			<Grid>
				<GridCell style={{ padding: '2em', textAlign: 'center' }}>
					<H4 style={{ marginBottom: '0.5em' }}>{this.props.user.details.name}</H4>

					<p style={{ color: grey2, marginBottom: '2em' }}>{this.props.user.details.email}</p>
				</GridCell>
			</Grid>
		)
	}

}

// Component Properties
// ProfileDetails.propTypes = {
// 	user: PropTypes.object.isRequired,
// 	logout: PropTypes.func.isRequired
// }

 // Component State
function profileDetailsState(state) {
	return {
		user: state.user
	}
}

export default connect(profileDetailsState, { logout })(ProfileDetails)
