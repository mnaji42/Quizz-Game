import React from 'react';
import classes from './Logo.module.css'
import logoColor from '../../assets/logos/logo_quizz_color.png'
import logoWhite from '../../assets/logos/logo_quizz_white.png'
import logoWithoutNumber from '../../assets/logos/logo_quizz_without_number.png'
import logoWithoutNumberWhite from '../../assets/logos/logo_quizz_without_number_white.png'

export const Logo = (props) => {

	let logo = <img src={logoColor} alt="Logo" />

	const stylesContainer = {
		height : props.height ? props.height : '75px',
		transition: props.transition ? props.transition : ""
	}
	const stylesText = {
		color: props.color === "white" ? "#ffffff" : "#22b7ce",
		fontSize: props.height ? `${Math.ceil(parseInt(props.height) * 0.6)}px` : '45px',
		transition: props.transition ? props.transition : ""
	}

	const stylesNumber = {
		color: props.color === "white" ? "#ffffff" : "#562d81",
		fontSize: props.height ? `${Math.ceil(parseInt(props.height) * 0.7)}px` : '53px',
		transition: props.transition ? props.transition : ""
	}

	if (props.type === "text" && props.color==="white") {
		logo = (
			<>
				<img src={logoWithoutNumberWhite} alt="Logo" />
				<div className={classes.LogoText}>
					<span style={stylesText}>uizzy</span>
					<span style={stylesNumber}>19</span>
				</div>
			</>
		)
	}
	else if (props.type === "text") {
		logo = (
			<>
				<img src={logoWithoutNumber} alt="Logo" />
				<div className={classes.LogoText}>
					<span style={stylesText}>uizzy</span>
					<span style={stylesNumber}>19</span>
				</div>
			</>
		)
	}
	else if (props.color === "white") {
		logo = <img src={logoWhite} alt="Logo" />
	}

	return (
		<div className={classes.LogoContainer} style={stylesContainer}>
			{logo}
		</div>
	);
};

export default Logo;