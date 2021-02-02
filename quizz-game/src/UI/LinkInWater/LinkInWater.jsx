import React, {useState, useEffect } from 'react';
import classes from './LinkInWater.module.css'
import splashLink from '../../assets/imgs/white_splash_link.png'
import { BubbleEffect } from '../Components'

export const LinkInWater = (props) => {

	const [displaySplash, setDisplaySplash] = useState(false)
	const [opacityLinkContainer, setOpacityLinkContainer] = useState(false)
	const [animateBubble, setAnimateBubble] = useState(true)

	const stylesContainer =  {
		height: props.height,
		width: props.width,
		cursor: 'pointer',
		// background: "rgba(0,0,0,0.5)"
	}

	useEffect(() => {

		setOpacityLinkContainer(true)
		const timer = setTimeout(() => setAnimateBubble(false), 3000);
		return () => {
			clearTimeout(timer)
			setAnimateBubble(false)
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

	const handleOnMouseEnter = () => {
		setAnimateBubble(true)
		if (props.onMouseEnter)
			props.onMouseEnter()
	}

	const handleOnMouseLeave = () => {
		setAnimateBubble(false)
		if (props.onMouseLeave)
			props.onMouseLeave()
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
		<div className={[classes.LinkContainer, opacityLinkContainer ? classes.LinkContainerShow : ' '].join(' ')}>
			<BubbleEffect animate={props.activate ? true : animateBubble}>
				<div
					style={stylesContainer}
					className={classes.Container}
					onClick={handleClick}
					onMouseEnter={handleOnMouseEnter}
					onMouseLeave={handleOnMouseLeave}
					>
					<div className={classesLink.join(' ')}aria-label={props.children}></div>
					<div className={classesSubLine.join(' ')}></div>
					<img className={[classes.WhiteSplashLink, displaySplash ? classes.DisplayBlock : ""].join(' ')} src={splashLink} alt='splashLink'></img>
				</div>
			</BubbleEffect>
		</div>
	);
};

export default LinkInWater;