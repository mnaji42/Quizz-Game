import React, {useState, useEffect} from 'react';
import classes from './LinkInWater.module.css'
import splashLink from '../../assets/imgs/white_splash_link.png'

export const LinkInWater = (props) => {

	const [displaySplash, setDisplaySplash] = useState(false)
	const [timeout, setTimeout] = useState()

	const stylesContainer =  {
		height: props.height,
		width: props.width,
		cursor: 'pointer',
		// background: "rgba(0,0,0,0.5)"
	}

	useEffect(() => {

		console.log(timeout)

		return function () {
			console.log(timeout)
			clearTimeout(timeout)
		}
	},[])

	const classesLink = [classes.LinkHeaderWave]
	const classesSubLine = [classes.LinkSubLine]

	const handleClick = () => {
		setDisplaySplash(true)
		setTimeout(setTimeout(() => {
			setDisplaySplash(false)
		}, 1000))
		if (props.onClick) {
			props.onClick()
		}
	}

	if (props.activate) {
		classesSubLine.push(classes.LinkSubLineActive)
		classesLink.push(classes.LinkHeaderWaveActive)
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