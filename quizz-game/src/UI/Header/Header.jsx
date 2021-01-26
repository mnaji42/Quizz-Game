import React, { useContext, useEffect, useState } from 'react'
import classes from './Header.module.css'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../../Firebase/index'
import { Logo } from '../Components'
import splash from '../../assets/imgs/white_splash.png'

export const Header = () => {

	const firebase = useContext(FirebaseContext)
	const [classesContainerWave, setClassesContainerWave] = useState([classes.HeaderContainerWave])
	const [classesContainerLogo, setClassesContainerLogo] = useState([classes.LogoContainer])
	const [logoHeight, setLogoHeight] = useState('1000px')
	const [splashLogo, setSplashLogo] = useState(false)

	const handleDisconnect = () => {
		firebase.signOut()
	}

	// function handleShowShareButtons() {
    //     if (timeout.current) {
    //         clearTimeout(timeout.current)
    //     }
    //     if (!showShareButtons) {
    //         setDisplayShareButtons(true)
    //     } else {
    //         timeout.current = setTimeout(() => {
    //             setDisplayShareButtons(false)
    //         }
    //         , 1200)
    //     }
    //     setShowShareButtons(!showShareButtons)
	// }
	
	useEffect(() => {
		setClassesContainerWave([...classesContainerWave, classes.HeaderContainerWaveAnimationTop])
		setTimeout(() => {
			setClassesContainerLogo([...classesContainerLogo, classes.LogoContainerAnimate])
			setLogoHeight('150px')
		}
		, 500)
		setTimeout(() => {
			setClassesContainerWave([...classesContainerWave, classes.HeaderContainerWaveAnimationHeight])
		}
		, 2500)
		setTimeout(() => {
			setSplashLogo(true)
		}
		, 3600)
	},[])

	return (
		<header>
			<div className={classesContainerWave.join(' ')}>
			
			<div className={splashLogo ? classes.SplashLogo: classes.displayNone}>
				<img width="100%" src={splash}></img>
			</div>
			<div className={classesContainerLogo.join(' ')}>
				<Logo 
					transition='all 3s ease-in, color 0s'
					type="text"
					height={logoHeight}
					color={splashLogo ? "" : "white"}
				/>
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