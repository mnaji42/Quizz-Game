import React from 'react';
import { Link } from 'react-router-dom'
import classes from './CustomLink.module.css'

export const CustomLink = (props) => {
	if (props.type === 'button') {
		return (
			<div onClick={props.disable ? () => {} : props.onClick} className={classes.CustomLink}>
				{props.children}
			</div>
		)
	}

	return (
		<Link to={props.path} className={classes.CustomLink}>
			{props.children}
		</Link>
	)
}

export default CustomLink;