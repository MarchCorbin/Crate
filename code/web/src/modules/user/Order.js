// Imports
import React from 'react'
import PropTypes from 'prop-types'

// UI Imports
import { H5 } from '../../ui/typography'

// App Imports
import { routeImage } from '../../setup/routes'

// Component
const Order = ({ order }) => {

const createProductList = () => {
	return order.products.map((product, i) => {
	return (
		<div key={i} style={{ display: 'flex', flexFlow: 'column', alignItems: 'center', padding: '0 1em 0 1em' }}>
			<img src={routeImage + product.image} style={{ borderRadius: '5em', border: '1px solid black', width: '5em', height: '5em' }}/>
			<p style={{ maxWidth: '7em', textAlign: 'center', padding: '.5em'}}>{product.name}</p>
		</div>
	)
	})
}

const convertMonth = () => {
	const given = order.shippingDate
	const updateDate = new Date(+given);
	const longMonth = updateDate.toLocaleString('en-us', { month: 'long' });
	return longMonth
}

return(	
	<div style={{ display: 'flex', flexFlow: 'column', overflowX: 'scroll', minHeight: '19vh', width: 'fit-content' }}>
			<H5 style={{margin:'.5em 1em .5em 1em'}}>{convertMonth()}</H5>
			<div style={{display:'flex', margin:'.5em', justifyContent:'space-evenly'}}>
			{createProductList()}
			</div>
	</div>
	)
}

// Component Properties
Order.propTypes = {
	order: PropTypes.object.isRequired,
}

export default Order