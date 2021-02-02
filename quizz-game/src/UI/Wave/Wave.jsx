import React, { useEffect, useState } from 'react'
import classes from './Wave.module.css'

export const Wave = (props) => {

	console.log('animationwave:', props.animation)

	const [classesContainerWave, setClassesContainerWave] = useState([classes.HeaderContainerWave])

	useEffect(() => {

		const timeout = []

		if (props.animation === "close") {
			setClassesContainerWave([classes.HeaderContainerWave ,classes.HeaderContainerWaveClose])
		}
		else if (props.animation === "static") {
			setClassesContainerWave([classes.HeaderContainerWave, classes.HeaderContainerWaveAnimationHeight])
		}
		else if (props.animation === "open" || props.animation === "openWave") {
			setClassesContainerWave([...classesContainerWave, classes.HeaderContainerWaveAnimationClose])
			if (props.animation === "openWave") {
				timeout.push(setTimeout(() => {
					setClassesContainerWave([...classesContainerWave, classes.HeaderContainerWaveAnimationHeight])
				}, 1200))
			}
		}
		else if (props.animation === 'top') {
			setClassesContainerWave([...classesContainerWave, classes.HeaderContainerWaveAnimationTop])
		}

		return function () {
			for(var i= 0; i < timeout.length; i++)
			{
				clearTimeout(timeout[i])
			}
		}

	},[props.animation])

	const lines = ( props.animation === 'top' || props.animation === 'topclose' ? null :
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
		<div className={classesContainerWave.join(' ')}>
			
			{props.children}

			{lines}
		</div>
	);
};

export default Wave;