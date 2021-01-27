import React, { useContext, useEffect, useState } from 'react'
import classes from './Header.module.css'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../../Firebase/index'
import { Logo, BubbleEffect, LinkInWater } from '../Components'
import splashLogoImg from '../../assets/imgs/white_splash_logo.png'

export const Header = () => {

	const firebase = useContext(FirebaseContext)
	const [classesContainerWave, setClassesContainerWave] = useState([classes.HeaderContainerWave])
	const [classesContainerLogo, setClassesContainerLogo] = useState([classes.LogoContainer])
	const [logoHeight, setLogoHeight] = useState('1000px')
	const [splashLogo, setSplashLogo] = useState(false)
	const [opacityLinkContainer, setOpacityLinkContainer] = useState(false)
	const [animateBubbleLogin, setAnimateBubbleLogin] = useState(false)
	const [animateBubbleSignUp, setAnimateBubbleSignUp] = useState(false)

	const handleDisconnect = () => {
		firebase.signOut()
	}
	
	useEffect(() => {
		setClassesContainerWave([...classesContainerWave, classes.HeaderContainerWaveAnimationTop])
		setTimeout(() => {animationHeaderWaveOpen()}, 500)
		setTimeout(() => {animationLinkAppear()}, 3000)
		setTimeout(() => {animationLogoSplash()}, 2500)
	},[])

	const animationLinkAppear = () => {
		setAnimateBubbleLogin(true)
		setAnimateBubbleSignUp(true)
		setOpacityLinkContainer(true)
		setTimeout(() => {
			setAnimateBubbleLogin(false)
			setAnimateBubbleSignUp(false)
		}, 3000)
	}

	const animationHeaderWaveOpen = () => {
		setClassesContainerLogo([...classesContainerLogo, classes.LogoContainerAnimate])
		setLogoHeight('150px')
	}

	const animationLogoSplash = () => {
		setClassesContainerWave([...classesContainerWave, classes.HeaderContainerWaveAnimationHeight])
		setTimeout(() => {
			setSplashLogo(true)
		}
		, 1000)
	}

	return (
		<header>
			<div className={classesContainerWave.join(' ')}>
			
				<div className={classesContainerLogo.join(' ')}>
					<div className={splashLogo ? classes.SplashLogo: classes.displayNone}>
						<img width="100%" src={splashLogoImg}></img>
					</div>
					<Logo 
						transition='all 3s ease-in, color 0s'
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
								width="165px"
								onMouseEnter={() => setAnimateBubbleLogin(true)}
								onMouseLeave={() => setAnimateBubbleLogin(false)}>
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
							width="206px"
							onMouseEnter={() => setAnimateBubbleSignUp(true)}
							onMouseLeave={() => setAnimateBubbleSignUp(false)}>
								SignUp
							</LinkInWater>
						</div>
					</BubbleEffect>
				</div>

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
		</header>
	)

	return (
		<header>
			<div className={classes.HeaderContainer}>
				<Link to='/' style={{ textDecoration: 'none' }}>
					{/* <div className={classes.LogoContainer}>
						<img src={logoWithoutNumber} alt="Logo" />
						<div className={classes.LogoText}>uizzi <span>19</span></div>
					</div> */}
					logo
				</Link>
				<div className={classes.ConnexionContainer}>
					<Link to='/login'>
						<button>Connexion</button>
					</Link>
					<Link to='/signup'>
						<button>Inscription</button>
					</Link>
					<Link to='/'>
						<button onClick={handleDisconnect}>Deconnexion</button>
					</Link>
				</div>
			</div>
		</header>
	)
}