import React, { useContext, useEffect, useState } from 'react'
import classes from './HeaderWave.module.css'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../../Firebase/index'
import { Logo, BubbleEffect, LinkInWater, Wave, Arrow } from '../Components'
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

	const handleDisconnect = () => {
		firebase.signOut()
	}

	const timeout = []
	
	useEffect(() => {

		setClassesContainerLogo([classes.LogoContainer, classes.LogoContainerAnimate])
		setLogoHeight('150px')
		timeout.push(setTimeout(() => {animationLinkAppear()}, 2000))
		timeout.push(setTimeout(() => {setSplashLogo(true)}, 2500))

		return function () {
			for(var i= 0; i < timeout.length; i++)
			{
				clearTimeout(timeout[i])
			}
		}
	},[])

	useEffect(() => {

		console.log(location)
		if (location.pathname === '/')
			setAnimationWave("openWave")
		
	},[location])

	const animationLinkAppear = () => {
		setAnimateBubbleLogin(true)
		setAnimateBubbleSignUp(true)
		setAnimateBubbleRules(true)
		setOpacityLinkContainer(true)
		timeout.push(setTimeout(() => {
			setAnimateBubbleLogin(false)
			setAnimateBubbleSignUp(false)
			setAnimateBubbleRules(false)
		}, 2000))
	}

	const handleClickLogin = () => {
		console.log('coucou')
		setAnimationWave("close")
		history.push('./login')
	}

	// console.log(history)

	return (
		<header>
			<Wave animation={animationWave}>
				<div className={classesContainerLogo.join(' ')}>
					<div className={splashLogo ? classes.SplashLogo: classes.displayNone}>
						<img width="100%" src={splashLogoImg} alt="splash logo"></img>
					</div>
					<Logo 
						transition='all 2.5s ease-in, color 0s'
						type="text"
						height={logoHeight}
						color={splashLogo ? "" : "white"}
					/>
				</div>
				<div className={classes.buttonLoginContainer}>
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
				<div className={classes.buttonSignupContainer}>
					<BubbleEffect animate={animateBubbleSignUp}>
						<div className={[classes.LinkContainer, opacityLinkContainer ? classes.LinkContainerShow : ' '].join(' ')}>
							<LinkInWater
							direction="right"
							height="85px"
							width="218px"
							onMouseEnter={() => setAnimateBubbleSignUp(true)}
							onMouseLeave={() => setAnimateBubbleSignUp(false)}>
								SignUp
							</LinkInWater>
						</div>
					</BubbleEffect>
				</div>
				<div className={classes.buttonRulesContainer}>
					<BubbleEffect animate={animateBubbleRules}>
						<div className={[classes.LinkContainer, opacityLinkContainer ? classes.LinkContainerShow : ' '].join(' ')}>
							<LinkInWater
							direction="top"
							height="85px"
							width="165px"
							onMouseEnter={() => setAnimateBubbleRules(true)}
							onMouseLeave={() => setAnimateBubbleRules(false)}>
								Rules
							</LinkInWater>
						</div>
					</BubbleEffect>
				</div>
			</Wave>
			<div className={classes.ScrollDownContainer}>
				<Arrow style="DownLanding" dir="down"/>
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