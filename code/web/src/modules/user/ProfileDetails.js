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
import { Input, Textarea } from '../../ui/input'
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
			address: '',
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
				name: this.props.user.details.name,
				email: this.state.email
			}
			this.props.editDetails(newDetails)
			this.setState({ editMode: false })
		}

	render() {
		return (
			<section style={{display: 'flex'}}>
				<div style={{ padding: '2em' }}>
				<img src={'/images/Profile.png'} style={{width: '10em'}}
				/>
				<img src={'/images/Pencil.png'} style={{width:'2em', borderRadius:'5em', position: 'relative', bottom: '1em', right: '3.3em'}} />


					<H4 style={{ marginBottom: '0.5em' }}>{this.props.user.details.name}</H4>

					{this.state.editMode
						?
						<>
							<Input
								type="text"
								fullWidth={true}
								placeholder={this.state.description.length > 1 && this.state.description || 'Description'}
								required="required"
								name="description"
								autoComplete="off"
								value={this.state.description}
								onChange={this.onChange}
								style={{width:'33vw', float: 'left'}}
								/>
							<Input
								type="text"
								fullWidth={true}
								placeholder={this.state.email}
								required="required"
								name="email"
								autoComplete="off"
								value={this.state.email}
								onChange={this.onChange}
								style={{width:'33vw', float: 'left'}}
							/>
							<Input
								type="text"
								fullWidth={true}
								placeholder={this.state.address.length > 1 && this.state.address || 'Address'}
								required="required"
								name="address"
								autoComplete="off"
								value={this.state.address}
								onChange={this.onChange}
								style={{width:'33vw', float: 'left'}}
							/>
							<Button theme="primary" onClick={this.onSubmit} style={{ margin: '1em' }}>Save Changes</Button>
						</>
						:
						<>
							<Button theme="secondary" onClick={this.onClick} style={{ marginLeft: '1em' }}>Edit All</Button>
						<H4>{this.state.description}</H4>
							<p style={{ color: grey2, margin: '1em' }}>{this.props.user.details.email}</p>
							<p style={{ color: grey2, margin: '1em' }}>{this.state.address}</p>
						</>
					}
				</div>
			</section>
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
