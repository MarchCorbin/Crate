// Imports
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Component
class OrderHistory extends Component {
	constructor() {
		super()
		this.state = {

		}
	}
	// call the action creator with post request here
	// store the data returned in a variable
	// map over data, return an Order component for each item
	// display this in section below
	render() {
		return (
			<section>
				Hello World
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