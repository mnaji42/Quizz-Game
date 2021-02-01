import React, { useContext, useEffect, useState } from 'react'
import classes from './HeaderWave.module.css'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../../Firebase/index'
import { Logo, BubbleEffect, LinkInWater, Wave, Arrow, Title } from '../Components'
import splashLogoImg from '../../assets/imgs/white_splash_logo.png'
import {useHistory, useLocation} from 'react-router-dom'

export const HeaderWave = (props) => {

	const firebase = useContext(FirebaseContext)
	const history = useHistory()
	const location = useLocation()
	const [classesContainerLogo, setClassesContainerLogo] = useState([classes.LogoContainer])
	const [logoHeight, setLogoHeight] = useState('600px')
	const [splashLogo, setSplashLogo] = useState(false)
	const [opacityLinkContainer, setOpacityLinkContainer] = useState(false)
	const [animateBubbleLogin, setAnimateBubbleLogin] = useState(false)
	const [animateBubbleSignUp, setAnimateBubbleSignUp] = useState(false)
	const [animateBubbleRules, setAnimateBubbleRules] = useState(false)
	const [animationWave, setAnimationWave] = useState(location.pathname === '/' ? "openWave" : "close")
	const [displayHeader, setDisplayHeader] = useState(true)
	const [classesScrollDown, setClassesScrollDown] = useState([classes.ScrollDownContainer])
	const [hoverRules, setHoverRules] = useState(false)
	const [hoverDownScroll, setHoverDownScroll] = useState(false)
	const [pushTimeout, setPushTimeout] = useState([])

	const handleDisconnect = () => {
		firebase.signOut()
	}
	
	useEffect(() => {

		const tmpTimeout = [...pushTimeout]

		setClassesContainerLogo([classes.LogoContainer, classes.LogoContainerAnimate])
		setLogoHeight('150px')
		setClassesScrollDown([classes.ScrollDownContainer, classes.ScrollDownContainerOpacity])
		tmpTimeout.push(setTimeout(() => {animationLinkAppear()}, 2000))
		tmpTimeout.push(setTimeout(() => {setSplashLogo(true)}, 2500))

		setPushTimeout(tmpTimeout)

		return function () {
			for(var i= 0; i < pushTimeout.length; i++)
			{
				clearTimeout(pushTimeout[i])
			}
		}
	},[])

	useEffect(() => {

		for(var i= 0; i < pushTimeout.length; i++)
		{
			clearTimeout(pushTimeout[i])
		}

		setAnimateBubbleLogin(false)
		setAnimateBubbleSignUp(false)
		setAnimateBubbleRules(false)

		if (location.pathname === '/') {
			setDisplayHeader(true)
			// setAnimationWave("open")
		}
		else {
			const tmpTimeout = [...pushTimeout]
			tmpTimeout.push(setTimeout(() => {setDisplayHeader(false)}, 1000))
			setPushTimeout(tmpTimeout)
		}
		
	},[location])

	const animationLinkAppear = () => {

		const tmpTimeout = [...pushTimeout]

		setAnimateBubbleLogin(true)
		setAnimateBubbleSignUp(true)
		setAnimateBubbleRules(true)
		setOpacityLinkContainer(true)
		tmpTimeout.push(setTimeout(() => {
			setAnimateBubbleLogin(false)
			setAnimateBubbleSignUp(false)
			setAnimateBubbleRules(false)
		}, 2000))
		setPushTimeout(tmpTimeout)
	}

	const handleClickLogin = () => {
		console.log('coucou')
		// setAnimationWave("close")
		setDisplayHeader(false)
		if (animationWave === 'top') {
			setDisplayHeader(false)
			setClassesContainerLogo([classes.LogoContainer, classes.LogoContainerAnimate])
			setLogoHeight('150px')
			setSplashLogo(true)
			setAnimationWave('static')
		}
		history.push('/login')
	}

	const handleClickSignUp = () => {
		// setAnimationWave("close")
		setDisplayHeader(false)
		if (animationWave === 'top') {
			setDisplayHeader(false)
			setClassesContainerLogo([classes.LogoContainer, classes.LogoContainerAnimate])
			setLogoHeight('150px')
			setSplashLogo(true)
			setAnimationWave('static')
		}
		history.push('/signup')
	}

	const displayRulesClick = () => {

		const tmpTimeout = [...pushTimeout]

		setAnimationWave("top")
		setLogoHeight('100px')
		setSplashLogo(false)
		setHoverRules(false)
		setClassesContainerLogo([classes.LogoContainer, classes.ContainerLogoTopLeft])

		setPushTimeout(tmpTimeout)
	}

	let rulesTitle = (
		<h1>RULES</h1>
	)

	if (animationWave !== 'top') {
		rulesTitle = (
			<LinkInWater
			activate={hoverDownScroll ? true : false}
			direction="top"
			height="85px"
			width="165px"
			onMouseEnter={() => {setAnimateBubbleRules(true); setHoverRules(true)}}
			onMouseLeave={() => {setAnimateBubbleRules(false); setHoverRules(false)}}
			onClick={displayRulesClick}>
				Rules
			</LinkInWater>
		)
	}

	// console.log(history)

	return (
		<header style={{display: displayHeader ? "block" : "none"}}>
			<Wave animation={animationWave}>
				<div className={classesContainerLogo.join(' ')}>
					<div className={splashLogo ? classes.SplashLogo: classes.displayNone}>
						<img width="100%" src={splashLogoImg} alt="splash logo"></img>
					</div>
					<Logo 
						transition={animationWave === 'top' ? 'all 1s ease-in, color 0s' : 'all 2.5s ease-in, color 0s'}
						type={animationWave === 'top' ? 'logo' : "text"}
						height={logoHeight}
						color={splashLogo ? "" : "white"}
					/>
				</div>
				<div className={[classes.buttonLoginContainer, animationWave === 'top' ? classes.buttonLoginContainerTop : ''].join(' ')}>
					<BubbleEffect animate={animateBubbleLogin}>
					<div className={[classes.LinkContainer, opacityLinkContainer ? classes.LinkContainerShow : ' '].join(' ')}>
							<LinkInWater 
								direction="left"
								height="85px"
								width="173px"
								onMouseEnter={() => setAnimateBubbleLogin(true)}
								onMouseLeave={() => setAnimateBubbleLogin(false)}
								onClick={handleClickLogin}>
									Login
							</LinkInWater>
						</div>
					</BubbleEffect>
				</div>
				<div className={[classes.buttonSignupContainer, animationWave === 'top' ? classes.buttonSignUpContainerTop : ''].join(' ')}>
					<BubbleEffect animate={animateBubbleSignUp}>
						<div className={[classes.LinkContainer, opacityLinkContainer ? classes.LinkContainerShow : ' '].join(' ')}>
							<LinkInWater
							direction="right"
							height="85px"
							width="218px"
							onMouseEnter={() => setAnimateBubbleSignUp(true)}
							onMouseLeave={() => setAnimateBubbleSignUp(false)}
							onClick={handleClickSignUp}>
								SignUp
							</LinkInWater>
						</div>
					</BubbleEffect>
				</div>
				<div className={[classes.buttonRulesContainer, animationWave === 'top' ? classes.buttonRulesContainerTitle : ''].join(' ')}>
					<BubbleEffect animate={animateBubbleRules}>
						<div className={[classes.LinkContainer, opacityLinkContainer ? classes.LinkContainerShow : ' '].join(' ')}>
							{rulesTitle}
						</div>
					</BubbleEffect>
				</div>
			</Wave>
			<div
				className={classesScrollDown.join(' ')}
				style={{display: animationWave === "close" ? "none" : 'flex'}}>
				<Arrow 
					onMouseEnter={() => {setAnimateBubbleRules(true); setHoverDownScroll(true)}}
					onMouseLeave={() => {setAnimateBubbleRules(false); setHoverDownScroll(false)}}
					onClick={displayRulesClick}
					downLandingActivate={hoverRules} 
					style="DownLanding" 
					dir="down"/>
			</div>
		</header>
	)

	// return (
	// 	<header>
	// 		<div className={classes.HeaderContainer}>
	// 			<Link to='/' style={{ textDecoration: 'none' }}>
	// 				{/* <div className={classes.LogoContainer}>
	// 					<img src={logoWithoutNumber} alt="Logo" />
	// 					<div className={classes.LogoText}>uizzi <span>19</span></div>
	// 				</div> */}
	// 				logo
	// 			</Link>
	// 			<div className={classes.ConnexionContainer}>
	// 				<Link to='/login'>
	// 					<button>Connexion</button>
	// 				</Link>
	// 				<Link to='/signup'>
	// 					<button>Inscription</button>
	// 				</Link>
	// 				<Link to='/'>
	// 					<button onClick={handleDisconnect}>Deconnexion</button>
	// 				</Link>
	// 			</div>
	// 		</div>
	// 	</header>
	// )
}