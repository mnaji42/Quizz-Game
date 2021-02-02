import React, { useState, useContext, useRef } from 'react';
import { useHistory, Redirect} from 'react-router-dom'
import { FirebaseContext } from '../../Firebase/index'
import { UserContext } from '../../UserSession/UserContext'
import {BubbleBackground, Arrow, Title, Input, BlobButton, CustomLink, Message} from '../../UI/Components'

import classes from './Connexion.module.css'

const Connexion = (props) => {

	const user = useContext(UserContext)
	const history = useHistory()
	const [mail, setMail] = useState('')
	const [password, setPassword] = useState('')
	const [message, setMessage] = useState({type: '', message: ''})
	const [buttonLoading, setButtonLoading] = useState(false)
	const firebase = useContext(FirebaseContext)

	const emailRef = useRef();
	const passwordRef = useRef();

	if (user.isConnected) {
		return <Redirect to="/home"/>
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		setButtonLoading(true)
		firebase.connexion(mail, password)
		.then( user => {
			props.history.push('./game')
		})
		.catch( error => {
			if (error.code === "auth/user-not-found") {
				setMessage({type: 'error', message: 'There is no user record corresponding to this identifier.'})
				setMail('')
				setPassword('')
				emailRef.current.focus();
			}
			else if (error.code === "auth/wrong-password") {
				setMessage({type: 'error', message: 'The password is invalid.'})
				setPassword('')
				passwordRef.current.focus();
			}
			else {
				setMessage({type: 'error', message: error.message})
				setMail('')
				setPassword('')
				emailRef.current.focus();
			}
		})
		setButtonLoading(false)
	}

	return (
		<>
		<BubbleBackground />
			<div className={classes.ConnexionContainer}>
				<Message message={message} />
				<div className={classes.ArrowBackContainer}>
					<Arrow dir="left" onClick={() => history.push('/')} background="quizzy" size="big"/>
				</div>
				<div className={classes.ConnexionSubContainer}>
				
					<Title>LOGIN</Title>
					<form onSubmit={handleSubmit}>
						<Input
							id="mail"
							type="email"
							value={mail}
							required={true}
							onChange={(event)=> setMail(event.target.value)}
							autoFocus={true}
							inputRef ={emailRef}
							>
							Email
						</Input>
						<Input
							id="password"
							type="password"
							value={password}
							required={true}
							onChange={(event) => {setPassword(event.target.value)}}
							autoFocus={false}
							inputRef ={passwordRef}
							>
							Password
						</Input>
						<div className={classes.BlobButtonContainer}>
							<BlobButton spinner={buttonLoading}>LOGIN</BlobButton>
						</div>
					</form>
					<div className={classes.LinksContainer}>
						<div>
							Forget Password ? <CustomLink path="/forgetpassword">Change my Password</CustomLink>.
						</div>
						<div>
							Not a Mumber yet ? <CustomLink path="/signup">SignUp</CustomLink>.
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Connexion;