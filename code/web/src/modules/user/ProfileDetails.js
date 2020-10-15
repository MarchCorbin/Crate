// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// UI Imports
import { H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { Input } from '../../ui/input'
import { grey2 } from '../../ui/common/colors'

// App Imports
import { editDetails, getDetails } from './api/actions'
import { messageShow, messageHide, upload} from '../common/api/actions'
import { routeImage } from "../../setup/routes/index.js"

// Component
class ProfileDetails extends Component {
	constructor() {
		super()
		this.state = {
			description: '',
			email: '',
			address: '',
			image: '',
			editMode: false,
			isLoading: false,
			editPhotoMode: false
		}
	}

	componentDidMount = () => {
		const userDetails = this.props.user.details
		this.setState({
			description: userDetails.description,
			email: userDetails.email,
			address: userDetails.address,
			image: userDetails.image,
		 })
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

	onUpload = (event) => {
    this.props.messageShow('Uploading file, please wait...')

    this.setState({
      isLoading: true
    })

    let data = new FormData()
    data.append('file', event.target.files[0])

    // Upload image
    this.props.upload(data)
      .then(response => {
        if (response.status === 200) {
          this.props.messageShow('File uploaded successfully.')

					let image = this.state.image
					image = `/images/uploads/${ response.data.file }`
				
					let newDetails = {
						name: this.props.user.details.name,
						description: this.state.description,
						email: this.state.email,
						address: this.state.address,
						image: image
					}
					this.props.editDetails(newDetails)
						.then(response => {
							this.setState({
								image: response.data.data.userUpdate.image
							})
						})
        } else {
          this.props.messageShow('Please try again.')
        }
      })
      .catch(error => {
        this.props.messageShow('There was some error. Please try again.')

      })
      .then(() => {
        this.setState({
					isLoading: false,
					editPhotoMode:false
        })

        window.setTimeout(() => {
          this.props.messageHide()
        }, 5000)
			})
  }

	onSubmit = () => {
			let newDetails = {
				name: this.props.user.details.name,
				description: this.state.description,
				email: this.state.email,
				address: this.state.address
			}
			this.props.editDetails(newDetails)
				.then(response => {
					this.props.getDetails(response.data.data.userUpdate)
					this.setState({
						email: response.data.data.userUpdate.email,
						editMode: false,
						address: response.data.data.userUpdate.address,
						description: response.data.data.userUpdate.description
					})
				})
		}

		openUpload = () => {
			this.setState({editPhotoMode:true})
		}

	render() {
		return (
			<section style={{display: 'flex'}}>
				<div style={{ padding: '2em' }}>
					<div style={{display: 'flex', flexFlow:'column'}}>
					{this.state.image === '' ? <img  src={'/images/Profile.png'} style={{width: '10em'}}/> : <img src={routeImage + this.state.image} style={{width: '10em', borderRadius:'50%', height:'10em'}} />}
						

						{this.state.image === '' ? 	<img onClick={this.openUpload} src={'/images/Pencil.png'} style={{ width: '2em', position:'relative',bottom: '3em',left: '7em'}} /> : 	<img onClick={this.openUpload} src={'/images/Pencil.png'} style={{width:'2em', position: 'relative',left:'8em', bottom: '1.5em'}} />}
			


					{this.state.editPhotoMode && <input type= "file" onChange={this.onUpload}>
					</input>}
					</div>


					<H4 style={{ marginBottom: '0.5em' }}>{this.props.user.details.name}</H4>

					{this.state.editMode
						?
						<>
							<Input
								type="text"
								fullWidth={true}
								placeholder={this.state.description || 'Description'}
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
								placeholder={this.state.address || 'Address'}
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
							<p style={{margin:'1em'}}>{this.state.description}</p>
							<p style={{ color: grey2, margin: '1em' }}>{this.state.email}</p>
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
	user: PropTypes.object.isRequired,
	messageShow: PropTypes.func.isRequired,
}

 // Component State
function profileDetailsState(state) {
	return {
		user: state.user
	}
}

export default connect(profileDetailsState, {
	editDetails,
	messageShow, 
	getDetails,
	upload,
	messageHide
})(ProfileDetails)
