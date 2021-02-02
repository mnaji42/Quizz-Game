import React, { useState, useEffect } from 'react';
import classes from './Wave2.module.css'

export const Wave2 = (props) => {

	// Initialise Classes For WaveContainer When The components is mounted (always use the animation openAndReduce)
	const [containerClasses, setContainerClasses] = useState([classes.WaveContainer, classes.CloseToOpenAndReduceInit])
	useEffect(() => {
		setContainerClasses([classes.WaveContainer, classes.CloseToOpenAndReduceAnimate])
	}, [])

	// Use useEffect to push the right classes for animation
	useEffect(() => {
		console.log('here:', props.animation)
		if (props.animation && props.animation.pos && props.animation.anim){
			if (props.animation.pos === 'close') {
				if (props.animation.anim === 'open')
					setContainerClasses([classes.WaveContainer, classes.OpenHide, classes.CloseToOpen])
				else if (props.animation.anim === 'top')
					setContainerClasses([classes.WaveContainer, classes.TopHide, classes.CloseToTop])
			}
			else if (props.animation.pos === 'open') {
				if (props.animation.anim === 'close')
					setContainerClasses([classes.WaveContainer, classes.OpenNotHide, classes.OpenToClose])
				else if (props.animation.anim === 'top')
					setContainerClasses([classes.WaveContainer, classes.OpenNotHide, classes.OpenToTop])
			}
			else if (props.animation.pos === 'top') {
				if (props.animation.anim === 'close')
					setContainerClasses([classes.WaveContainer, classes.TopNotHide, classes.TopToClose])
				else if (props.animation.anim === 'open')
					setContainerClasses([classes.WaveContainer, classes.TopNotHide, classes.TopToOpen])
			}
		}
	}, [props.animation])

	const lines = ( props.animation.anim === 'top' || (props.animation.anim === 'close' && props.animation.pos === 'top') ? null :
		<>
			<div className={[classes.Line, classes.Line1].join(' ')}>
				<div className={[classes.Wave, classes.Wave1].join(' ')}></div>
			</div>
			<div className={[classes.Line, classes.Line2].join(' ')}>
				<div className={[classes.Wave, classes.Wave2].join(' ')}></div>
			</div>
			<div className={[classes.Line, classes.Line2].join(' ')}>
				<div className={[classes.Wave, classes.Wave2].join(' ')}></div>
			</div>
		</>
	)

	return (
		<div className={containerClasses.join(' ')}>
			
			<div className={classes.ContentContainer}>
				{props.children}
			</div>
		
			{lines}

		</div>
	);
};

export default Wave2;