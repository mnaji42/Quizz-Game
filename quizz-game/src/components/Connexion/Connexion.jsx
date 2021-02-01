import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FirebaseContext } from '../../Firebase/index'
import { UserContext } from '../../UserSession/UserContext'
import {BubbleBackground, Arrow, Title, Input, BlobButton} from '../../UI/Components'
import classes from './Connexion.module.css'

const Connexion = (props) => {

	const [mail, setMail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(false)
	const firebase = useContext(FirebaseContext)
	const history = useHistory()

	const user = useContext(UserContext)

	console.log('yoyo',user)

	const handleSubmit = (event) => {
		event.preventDefault()
		firebase.connexion(mail, password)
		.then( user => {
			console.log(user)
			setError(false)
			props.history.push('./game')
		})
		.catch( error => {
			setMail('')
			setPassword('')
			setError(error.message)
		})
	}

	return (
		<>
		<BubbleBackground />
			<div className={classes.ConnexionContainer}>
				<div className={classes.ArrowBackContainer}>
					<Arrow dir="left" onClick={() => history.push('/')} background="quizzy" size="big"/>
				</div>
				<div className={classes.ConnexionSubContainer}>
				
					<Title>LOGIN</Title>
					{user.isConnected && <h3>Hello {user.data.pseudo}</h3>}
					<form onSubmit={handleSubmit}>
						<Input
							id="mail"
							type="text"
							value={mail}
							required={true}
							onChange={(event)=> setMail(event.target.value)}
							autoFocus={true}
							>
							Pseudo or Email
						</Input>
						<Input
							id="password"
							type="password"
							value={password}
							required={true}
							onChange={(event) => {setPassword(event.target.value)}}
							autoFocus={false}
							>
							Password
						</Input>
						<div className={classes.BlobButtonContainer}>
							<BlobButton spinner={false}>LOGIN</BlobButton>
						</div>
						<br/>
						<br/>
						<br/>
						<br/>
						{/* <div>
							<label htmlFor="email">Email: </label>
							<input type='email' onChange={(event)=> setMail(event.target.value)} id="email" value={mail} required placeholder="Entrez votre email"></input>
						</div> */}
						{/* <div>
							<label htmlFor="password">Mot de passe: </label>
							<input type='password' onChange={(event) => {setPassword(event.target.value)}} id="password" value={password} required placeholder="Entrez votre mot de passe"></input>
						</div> */}
						{/* <div>
							<button type="submit">Connexion</button>
						</div> */}
					</form>
					{ error && <div>{error}</div>}
					<div>
						Mot de pass oublié ? <Link to='/forgetpassword'>Changer mon mot de passe</Link>
					</div>
					<div>
						Nouveau sur OpenQuizzy ? <Link to='/signup'>Inscrivez vous !</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Connexion;