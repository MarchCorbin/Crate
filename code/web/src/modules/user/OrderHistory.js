// Imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Order from './Order.js'

// UI Imports
import { H3 } from '../../ui/typography'

// App Imports
import { getOrderHistory } from './api/actions.js'

// Component
class OrderHistory extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount = () => {
		this.props.getOrderHistory()
	}

	createOrderList = () => {
		return this.props.user.orders.map((order, i) => {
			return (<Order order={order} key={i}/>)
		})
	}

	render() {
		return (
			<section 
				style={{
					display: 'flex',
					flexDirection: 'column',
					width: '55vw',
					height: '50vh',
					alignSelf: 'flex-start',
					overflow: 'visible',
					boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)',
					backgroundColor: 'rgb(255, 255, 255)',
					padding: '1em'
				}}>
				<H3>Order History</H3>	
				{this.createOrderList()}
			</section>
		)
	}
}

// Component State
function orderHistoryState(state) {
	return {
		user: state.user
	}
}

export default connect(orderHistoryState, { 
	getOrderHistory
 })(OrderHistory)