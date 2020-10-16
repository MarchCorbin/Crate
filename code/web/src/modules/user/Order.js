// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { H5 } from '../../ui/typography'

// Component
const Order = (props) => {
return(	
	<div style={{display:'flex', flexFlow:'column', border: '1px solid green'}}>
			<H5 style={{margin:'.3em'}}>this.props.month</H5>
			<div style={{display:'flex', margin:'.5em', justifyContent:'space-evenly'}}>
			<section style={{borderRadius:'5em', border:'1px solid black', width:'5em', height:'5em'}}>product1</section>
			<section style={{borderRadius:'5em', border:'1px solid black', width:'5em', height:'5em'}}>product2</section>
			<section style={{borderRadius:'5em', border:'1px solid black', width:'5em', height:'5em'}}>product3</section>
			</div>
	</div>
	)
}

// Component Properties
Order.propTypes = {
	// user: PropTypes.object.isRequired,
}

export default Order