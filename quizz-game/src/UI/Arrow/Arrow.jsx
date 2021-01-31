import React from 'react';
import classes from './Arrow.module.css'

export const Arrow = (props) => {

	let classe = classes.Right
	if (props.dir === 'down')
		classe = classes.Down
	else if (props.dir === 'left')
		classe = classes.Left
	else if (props.dir === 'up')
		classe = classes.Up

	const classeStyle = []

	if (props.style === "DownLanding")
		classeStyle.push(classes.StyleDownLanding)

	return (
		<ul className={classes.ArrowContainer}>
			<li className={[classe, classeStyle].join(' ')}><span></span></li>
		</ul>
	);
};

export default Arrow;