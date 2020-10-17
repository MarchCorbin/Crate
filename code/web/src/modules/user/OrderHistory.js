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
	constructor() {
		super()
		this.state = {
			orders: {
				"data": {
					"ordersByUser": [
						{
							"shippingDate": "1605461630039",
							"products": [
								{
									"name": "T-Shirt for Women - Grey",
									"image": "/images/stock/t-shirt-female-2.jpg"
								},
								{
									"name": "T-Shirt for Men - Grey",
									"image": "/images/stock/t-shirt-male-2.jpg"
								}
							]
						},
						{
							"shippingDate": "1605461630039",
							"products": [
								{
									"name": "Belt for Men",
									"image": "/images/stock/belt-male.jpg"
								}
							]
						}
					]
				}
			}
		}
	}

	componentDidMount = () => {
		// this.props.getOrderHistory()
		// 	.then(response => {
		// 		console.log(response)
		// 	})
	}

	createOrderList = () => {
		return this.state.orders.data.ordersByUser.map((order, i) => {
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
		// user: state.user
	}
}

export default connect(null, { 
	getOrderHistory
 })(OrderHistory)