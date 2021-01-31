import React, { useEffect, useState } from 'react'
import classes from './Wave.module.css'

export const Wave = (props) => {

	const [classesContainerWave, setClassesContainerWave] = useState([classes.HeaderContainerWave])

	useEffect(() => {

		const timeout = []

		if (props.animation === "close") {
			setClassesContainerWave([classes.HeaderContainerWave])
		}
		else if (props.animation === "open" || props.animation === "openWave") {
			setClassesContainerWave([...classesContainerWave, classes.HeaderContainerWaveAnimationTop])
			if (props.animation === "openWave") {
				timeout.push(setTimeout(() => {
					setClassesContainerWave([...classesContainerWave, classes.HeaderContainerWaveAnimationHeight])
				}, 1200))
			}
		}

		return function () {
			for(var i= 0; i < timeout.length; i++)
			{
				clearTimeout(timeout[i])
			}
		}

	},[props.animation])


	return (
		<div className={classesContainerWave.join(' ')}>
			
			{props.children}

			<div className={[classes.Line, classes.Line1].join(' ')}>
				<div className={[classes.Wave, classes.Wave1].join(' ')}></div>
			</div>
			<div className={[classes.Line, classes.Line2].join(' ')}>
				<div className={[classes.Wave, classes.Wave2].join(' ')}></div>
			</div>
			<div className={[classes.Line, classes.Line2].join(' ')}>
				<div className={[classes.Wave, classes.Wave2].join(' ')}></div>
			</div>
			
			</div>
	);
};

export default Wave;