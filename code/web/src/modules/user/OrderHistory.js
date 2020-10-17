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
					border: '2px solid black',
					width: '55vw',
					height: '50vh',
					alignSelf: 'flex-end',
					overflow: 'scroll'
				}}>
				<H3 style={{ margin: '.3em' }}>Order History</H3>	
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