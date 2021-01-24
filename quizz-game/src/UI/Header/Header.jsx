import React from 'react'
import classes from './Header.module.css'
import logo from '../../assets/logos/logo_invert.jpg'
import { Link } from 'react-router-dom'

export const Header = () => {
	return (
		<header>
			<div className={classes.HeaderContainer}>
				<div className={classes.LogoContainer}>
					<Link to='/'>
						<img src={logo} alt="Logo" />
					</Link>
				</div>
				<div className={classes.ConnexionContainer}>
					<Link to='/connect'>
						<button>Connexion</button>
					</Link>
					<Link to='/subscription'>
						<button>Inscription</button>
					</Link>
				</div>
			</div>
		</header>
	)
}