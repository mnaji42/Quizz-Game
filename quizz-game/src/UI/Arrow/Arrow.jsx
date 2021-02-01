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

	if (props.style === "DownLanding") {
		classeStyle.push(props.downLandingActivate === true ? classes.StyleDownLandingActivate : classes.StyleDownLanding)
	}

	if (props.color === 'quizzy') {
		classeStyle.push(classes.ColorQuizzy)
	}
	else if (props.color === 'quizzy2') {
		classeStyle.push(classes.ColorQuizzy2)
	}

	if (props.size === 'big') {
		classeStyle.push(classes.StyleFat)
	}

	if (props.background === 'quizzy') {
		classeStyle.push(classes.QuizzyBack)
	}
	else if (props.background === 'quizzy2') {
		classeStyle.push(classes.Quizzy2Back)
	}

	return (
		<ul 
			onMouseEnter={props.onMouseEnter}
			onMouseLeave={props.onMouseLeave}
			onClick={props.onClick}
			className={classes.ArrowContainer}>
			<li className={[classe, classeStyle.join(' ')].join(' ')}><span></span></li>
		</ul>
	);
};

export default Arrow;