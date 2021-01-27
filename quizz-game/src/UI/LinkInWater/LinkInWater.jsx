import React, {useState} from 'react';
import classes from './LinkInWater.module.css'
import splashLink from '../../assets/imgs/white_splash_link.png'

export const LinkInWater = (props) => {

	const [displaySplash, setDisplaySplash] = useState(false)

	const stylesContainer =  {
		height: props.height,
		width: props.width,
		cursor: 'pointer',
		// background: "rgba(0,0,0,0.5)"
	}

	const classesLink = [classes.LinkHeaderWave]
	const classesSubLine = [classes.LinkSubLine]

	const handleClick = () => {
		setDisplaySplash(true)
		if (props.onClick)
			props.onClick()
	}

	if (props.direction === 'left') {
		classesLink.push(classes.LinkHeaderWaveLeft)
		classesSubLine.push(classes.LinkSubLineLeft)
	}
	else if (props.direction === 'right') {
		classesLink.push(classes.LinkHeaderWaveRight)
		classesSubLine.push(classes.LinkSubLineRight)
	}

	return (
		<>
			<div
				style={stylesContainer}
				className={classes.Container}
				onClick={handleClick}
				onMouseEnter={props.onMouseEnter}
				onMouseLeave={props.onMouseLeave}>
				<div className={classesLink.join(' ')}aria-label={props.children}></div>
				<div className={classesSubLine.join(' ')}></div>
				<img className={[classes.WhiteSplashLink, displaySplash ? classes.DisplayBlock : ""].join(' ')} src={splashLink}></img>
			</div>
		</>
	);
};

export default LinkInWater;