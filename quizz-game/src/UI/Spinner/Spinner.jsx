import React from 'react';
import classes from './Spinner.module.css'

export const Spinner = (props) => {

	const spinnerClasses = []

	// Type
	if (props.type === 'simple') {
		spinnerClasses.push(classes.Simple)
	}

	// Color
	if (props.color === 'white') {
		spinnerClasses.push(classes.ColorWhite)
	}

	// Size

	if (props.size === 'small') {
		spinnerClasses.push(classes.SizeSmall)
	}

	return (
		<div className={spinnerClasses.join(' ')}>Loading...</div>
	);
};

export default Spinner;