// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// UI Imports
import Card from '../../ui/card/Card'
import Button from '../../ui/button/Button'
import H4 from '../../ui/typography/H4'
import Icon from '../../ui/icon'
import { white, grey2, black } from '../../ui/common/colors'

// App Imports
import { APP_URL } from '../../setup/config/env'
import { messageShow, messageHide } from '../common/api/actions'
import { remove, getListByUser } from '../subscription/api/actions'

// Component
class Item extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: false
    }
  }

  onClickUnsubscribe = (id) => {
    let check = confirm('Are you sure you want to unsubscribe to this crate?')
    // When the user clicks unsubscribe on a crate they are then prompted to confirm their selection 

    if(check) {
      this.setState({
        isLoading: true
      })
      // If the user confirms the selection the state is set to isloading: true

      this.props.messageShow('Subscribing, please wait...')
// The message show function is fired with the text inserted 
      this.props.remove({id})
      // using the id from the unsubscribe click the remove function is fired passing the id to target
        .then(response => {
          if (response.data.errors && response.data.errors.length > 0) {
            this.props.messageShow(response.data.errors[0].message)
            // if an error occurs when removing the crate a message show occurs with the current error the user is facing
          } else {
            this.props.messageShow('Unsubscribed successfully.')
// otherwise the a message appears indicating that the useer has successfully unsubscribed 
            this.props.getListByUser()
            // The user list of subscriptions is fired again to display the updated list
          }
        })
        .catch(error => {
          this.props.messageShow('There was some error subscribing to this crate. Please try again.')
        })
        .then(() => {
          this.setState({
            isLoading: false
          })

          window.setTimeout(() => {
            this.props.messageHide()
          }, 5000)
          // if there is a backend issue when unsubscribing a message will appear for 5 seconds indicating to the user that an error has occurred
        })
    }
  }

  render() {
    const { id, crate, createdAt } = this.props.subscription
    const { isLoading } = this.state

    return (
      <Card style={{ width: '18em', backgroundColor: white }}>
        <p style={{ padding: '2em 3em 0 3em' }}>
          <img src={`${ APP_URL }/images/crate.png`} alt={ crate.name } style={{ width: '100%' }}/>
          {/* image is displaying the current crate */}
        </p>

        <div style={{ padding: '1em 1.2em' }}>
          <H4 font="secondary" style={{ color: black }}>{ crate.name }</H4>
{/* displays the individual crate.name that is defined in the mapping within the subscriptions component */}
          <p style={{ color: grey2, marginTop: '1em' }}>{ crate.description }</p>
{/* displays the description of the crate */}
          <p style={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '1em' }}>
            <Button
              theme="secondary"
              onClick={this.onClickUnsubscribe.bind(this, id)}
              type="button"
              disabled={ isLoading }
            >
              {/* this button is wired up to fure the oncluckunsubsribe function upon click */}
              <Icon size={1.2} style={{ color: white }}>remove_circle_outline</Icon> Unsubscribe
            </Button>
          </p>

          <p style={{ color: grey2, marginTop: '1em', fontSize: '0.8em', textAlign: 'center' }}>
            Subscribed on { new Date(parseInt(createdAt)).toDateString() }
            {/* displays the date when the user subscribed to the current crate */}
          </p>
        </div>
      </Card>
    )
  }
}

// Component Properties
Item.propTypes = {
  subscription: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired,
  getListByUser: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired
}

// Component State
function itemState(state) {
  return {
    user: state.user
  }
  // this sets the state for the itemstaate component
}

export default connect(itemState, { remove, getListByUser, messageShow, messageHide })(withRouter(Item))
// this export allows the use of remove, getlistbyuser, messageshow and messagehide
