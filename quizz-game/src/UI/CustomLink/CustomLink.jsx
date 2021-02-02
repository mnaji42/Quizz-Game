import React from 'react';
import { Link } from 'react-router-dom'
import classes from './CustomLink.module.css'

export const CustomLink = (props) => {
	return (
		<Link to={props.path} className={classes.CustomLink}>
			{props.children}
		</Link>
	);
};

export default CustomLink;