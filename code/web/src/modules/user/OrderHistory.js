// Imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Order from './Order.js'

import { H3 } from '../../ui/typography'

// Component
class OrderHistory extends Component {
	constructor() {
		super()
		this.state = {

		}
	}

	mapOrders = () => {
		return (<Order />)
	}

	
	// call the action creator with post request here
	// store the data returned in a variable
	// map over data, return an Order component for each item
	// display this in section below
	render() {
		return (
			<section 
				style={{
					display: 'flex',
					flexDirection: 'column',
					border: '2px solid black',
					width: '55vw',
					height: '40vh',
					alignSelf: 'flex-end',
					overflow:'scroll'
				}}>
				<H3 style={{margin:'.3em'}}>Order History</H3>	
				{this.mapOrders()}
			</section>
		)
	}
}

// Component State
function orderHistoryState(state) {
	return {
		// user: state.user
	}
}

export default connect(null, {  })(OrderHistory)