import React, {useState} from 'react';
import classes from './BubbleBackground.module.css';

export const BubbleBackground = (props) => {
	return (
		<div className={classes.BubbleBackground}>
			{props.children}
			<div className={classes.Bubble}></div>
			<div className={classes.Bubble}></div>
			<div className={classes.Bubble}></div>
			<div className={classes.Bubble}></div>
			<div className={classes.Bubble}></div>
			<div className={classes.Bubble}></div>
			<div className={classes.Bubble}></div>
			<div className={classes.Bubble}></div>
			<div className={classes.Bubble}></div>
			<div className={classes.Bubble}></div>
		</div>
	);
};

export default BubbleBackground;