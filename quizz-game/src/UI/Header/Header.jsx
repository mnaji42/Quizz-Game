import React, { useContext} from 'react'
import classes from './Header.module.css'
import logo from '../../assets/logos/logo_transparant_quizzy19.png'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../../Firebase/index'

export const Header = () => {

	const firebase = useContext(FirebaseContext)

	const handleDisconnect = () => {
		firebase.signOut()
	}

	return (
		<header>
			<div className={classes.HeaderContainer}>
				<Link to='/' style={{ textDecoration: 'none' }}>
					<div className={classes.LogoContainer}>
						<img src={logo} alt="Logo" />
						<div className={classes.LogoText}>uizzi <span>19</span></div>
					</div>
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