import React from 'react'
import classes from './CustomLayout.module.css'

export const CustomLayout = (props) => {
	return (
		<main>
			<div className={classes.CustomLayout}>
				{props.children}
			</div>
		</main>
	)
}