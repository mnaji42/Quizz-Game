import React, { useState, useEffect } from 'react';
import {useHistory } from 'react-router-dom'
// import { FirebaseContext } from '../../Firebase/index'
import classes from './HeaderWave.module.css'
import { Wave, Logo, LinkInWater, Arrow } from '../Components'
import splashLogoImg from '../../assets/imgs/white_splash_logo.png'

//Animation Wave : closeToOpenAndReduce, CloseToOpen, OpenToClose, OpenToTop, CloseToTop

export const HeaderWave = () => {

	// const firebase = useContext(FirebaseContext)
	const history = useHistory()
	// const location = useLocation()

	const [waveAnimation, setWaveAnimation] = useState({pos : null, anim: 'open'})
	const [classesContainerLogo, setClassesContainerLogo] = useState([classes.LogoContainer])
	const [logoHeight, setLogoHeight] = useState('600px')
	const [splashLogo, setSplashLogo] = useState(false)
	const [hoverRules, setHoverRules] = useState(false)
	const [hoverDownScroll, setHoverDownScroll] = useState(false)
	const [classesScrollDown, setClassesScrollDown] = useState([classes.ScrollDownContainer])
	
	const isTop = waveAnimation.anim === 'top' || (waveAnimation.anim === 'close' && waveAnimation.pos === 'top')

	useEffect(() => {

		setClassesContainerLogo([classes.LogoContainer, classes.LogoContainerAnimate])
		setLogoHeight('180px')
		setClassesScrollDown([classes.ScrollDownContainer, classes.ScrollDownContainerOpacity])
		const timer = setTimeout(() => {setSplashLogo(true)}, 2000)

		return function cleanup () {
			clearTimeout(timer)
		}
	},[])

	const changeWaveAnimation = (anim) => {
		setWaveAnimation({pos: waveAnimation.anim, anim: anim })
	}

	const waveAnimateTop = () => {
		changeWaveAnimation('top')

		// Logo
		setClassesContainerLogo([classes.LogoContainer, classes.ContainerLogoTopLeft])
		setLogoHeight('100px')
		setSplashLogo(false)

	}

	const waveAnimateOpen = () => {

		changeWaveAnimation('open')

		// Logo
		setClassesContainerLogo([classes.LogoContainer, classes.LogoContainerAnimate])
		setLogoHeight('180px')
		setSplashLogo(true)

	}

	const handleClickLogin = () => {
		if (isTop) {
			waveAnimateOpen()
		}
		history.push('/login')
	}

	const handleClickSignUp = () => {
		if (isTop) {
			waveAnimateOpen()
		}
		history.push('/signup')
	}

	const handleClickRules = () => {
		waveAnimateTop()
	}

	let rulesTitle = (
		<h1>RULES</h1>
	)

	if (!isTop) {
		rulesTitle = (
			<LinkInWater
				activate={hoverDownScroll ? true : false}
				direction="top"
				height="85px"
				width="165px"
				onMouseEnter={() => setHoverRules(true)}
				onMouseLeave={() => setHoverRules(false)}
				onClick={handleClickRules}
				>Rules
			</LinkInWater>
		)
	}

	return (
		<header>
			<Wave animation={waveAnimation}>

				<div className={classesContainerLogo.join(' ')}>
					<div className={splashLogo ? classes.SplashLogo: classes.displayNone}>
						<img width="100%" src={splashLogoImg} alt="splash logo"></img>
					</div>
					<Logo 
						transition={isTop ? 'all 1s ease-in, color 0s' : 'all 2s ease-in, color 0s'}
						type={isTop ? 'logo' : "text"}
						height={logoHeight}
						color={splashLogo ? "" : "white"}
					/>
				</div>

				<div className={[classes.ButtonLoginContainer, isTop ? classes.ButtonLoginContainerTop : ''].join(' ')}>
					<LinkInWater
						direction="left"
						height="85px"
						width="173px"
						onClick={handleClickLogin}
						>Login
					</LinkInWater>
				</div>

				<div className={[classes.ButtonSignupContainer, isTop ? classes.ButtonSignUpContainerTop : ''].join(' ')}>
					<LinkInWater
						direction="right"
						height="85px"
						width="218px"
						onClick={handleClickSignUp}
						>SignUp
					</LinkInWater>
				</div>

				<div className={[classes.ButtonRulesContainer, isTop ? classes.ButtonRulesContainerTitle : ''].join(' ')}>
						{rulesTitle}
				</div>

			</Wave>

			<div className={classesScrollDown.join(' ')}>
				<Arrow 
					onMouseEnter={() => {setHoverDownScroll(true)}}
					onMouseLeave={() => {setHoverDownScroll(false)}}
					onClick={handleClickRules}
					downLandingActivate={hoverRules} 
					type="DownLanding" 
					dir="down"/>
			</div>
		</header>
	);
};

export default HeaderWave;