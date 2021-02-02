import React, { useState } from 'react';
import classes from './HeaderWave2.module.css'
import { Wave2 } from '../Components'

//Animation Wave : closeToOpenAndReduce, CloseToOpen, OpenToClose, OpenToTop, CloseToTop

export const HeaderWave2 = () => {

	const [waveAnimation, setWaveAnimation] = useState({pos : null, anim: 'open'})

	return (
		<header>
			<Wave2 animation={waveAnimation}>
				Coucou
			</Wave2>
			<button onClick={() => setWaveAnimation({pos: waveAnimation.anim, anim: 'open' })}>Open</button>
			<button onClick={() => setWaveAnimation({pos: waveAnimation.anim, anim: 'close' })}>Close</button>
			<button onClick={() => setWaveAnimation({pos: waveAnimation.anim, anim: 'top' })}>Top</button>
		</header>
	);
};

export default HeaderWave2;