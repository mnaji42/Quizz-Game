import React from 'react';
import classes from './Input.module.css'

export const Input = (props) => {
	return (
		<div className={classes.InputContainer}>
			<input
				ref={props.inputRef}
				className={classes.Input}
				type={props.type}
				id={props.id}
				value={props.value}
				required={props.required}
				placeholder={props.placeholder}
				onChange={props.onChange}
				autoFocus={props.autoFocus}
			></input>
			<label 
				className={props.value === '' ? classes.Label : classes.LabelUp}
				htmlFor={props.id}>
				{props.children}
			</label>
		</div>
	);
};

export default Input;