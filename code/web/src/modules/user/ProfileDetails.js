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
import { Input } from '../../ui/input'
import { grey, grey2 } from '../../ui/common/colors'

// App Imports
import userRoutes from '../../setup/routes/user'
import { editDetails } from './api/actions'

// Component
class ProfileDetails extends Component {
	constructor() {
		super()
		this.state = {
			description: '',
			email: '',
			editMode: false
		}
	}

	componentDidMount = () => {
		this.setState({ email: this.props.user.details.email })
	}

	onClick = () => {
		this.setState({ editMode: true })
	}

	onChange = event => {
		let inputValue = event.target.value
		this.setState({
			[event.target.name]: inputValue
		})
	}

	onSubmit = () => {
		let newDetails = {
			id: this.props.user.details.id,
			name: this.props.user.details.name,
			email: this.state.email
		}
		this.props.editDetails(newDetails)
		this.setState({ editMode: false })
	}

	render() {
		return (
			<Grid>
				<GridCell style={{ padding: '2em', textAlign: 'center' }}>

					<H4 style={{ marginBottom: '0.5em' }}>{this.props.user.details.name}</H4>

					{this.state.editMode
						? 
						<>
							<Input
								type="text"
								fullWidth={true}
								placeholder={this.state.email}
								required="required"
								name="email"
								autoComplete="off"
								value={this.state.email}
								onChange={this.onChange}
							/>
							<Button theme="primary" onClick={this.onSubmit} style={{ marginLeft: '1em' }}>Save Changes</Button>
						</>
						:
						<>
							<Button theme="secondary" onClick={this.onClick} style={{ marginLeft: '1em' }}>Edit All</Button>
							<p style={{ color: grey2, marginBottom: '2em' }}>{this.props.user.details.email}</p>
						</>
					}
				</GridCell>
			</Grid>
		)
	}

}

// Component Properties
ProfileDetails.propTypes = {
	user: PropTypes.object.isRequired
}

 // Component State
function profileDetailsState(state) {
	return {
		user: state.user
	}
}

export default connect(profileDetailsState, { editDetails })(ProfileDetails)
