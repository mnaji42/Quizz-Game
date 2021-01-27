import React from 'react';
import classes from './Button.module.css'

export const Button = (props) => {

	const classesButton = []

	return (
		<button className={classesButton.join(' ')} onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export default Button;