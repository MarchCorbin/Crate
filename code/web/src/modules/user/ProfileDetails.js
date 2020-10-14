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
import { editDetails, getDetails } from './api/actions'
import { messageShow, messageHide, upload} from '../common/api/actions'
import { routeImage } from "../../setup/routes/index.js"
import { renderIf } from '../../setup/helpers'

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
		console.log('IAMWORKING')
		const userDetails = this.props.user.details
		this.setState({
			description: userDetails.description,
			email: userDetails.email,
			address: userDetails.address,
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
		console.log(event.target)
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

          this.setState({
           	image
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
					{this.state.image === '' ? <img  src={'/images/Profile.png'} style={{width: '10em'}}/> : <img src={routeImage + this.state.image} style={{width: '10em'}} />}
			{/* {renderIf(this.state.image !== '', () => (
                    <img src={routeImage + this.state.image} alt="Image"
                         style={{ width: 200, marginTop: '1em' }}/>
                  ))} */}
					
			
				
				<img onClick={this.openUpload} src={'/images/Pencil.png'} style={{width:'2em', borderRadius:'5em', position: 'relative', bottom: '1em', right: '3.3em'}} />


					{this.state.editPhotoMode && <input type= "file" onChange={this.onUpload}>
					</input>}


					<H4 style={{ marginBottom: '0.5em' }}>{this.props.user.details.name}</H4>

					{this.state.editMode
						?
						<>
						  {/* <div style={{ marginTop: '1em', background: 'green' }}> */}
                    {/* <input
                      type="file" */}
                      {/* // onChange={this.onUpload}
                      // required={this.state.product.id === 0}
                    />
                  </div> */}
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
							<p>{this.state.description}</p>
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
	messageHide,
})(ProfileDetails)
