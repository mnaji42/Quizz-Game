import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom'
import {BubbleBackground, Arrow, Title, Input, BlobButton, CustomLink} from '../../UI/Components'
import { useAuth, useMessage } from '../../customHooks/hooks'

import classes from './Connexion.module.css'

const Connexion = () => {

	const history = useHistory()
	const [mail, setMail] = useState('')
	const [password, setPassword] = useState('')
	const setMessage = useMessage()
	const [buttonLoading, setButtonLoading] = useState(false)
	const { login } = useAuth()

	const emailRef = useRef();
	const passwordRef = useRef();

	const handleSubmit = (event) => {
		event.preventDefault()
		
		setButtonLoading(true)

		login(mail, password)
		.then( user => {
			history.push('/game')
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
			else if (error.code === "auth/invalid-email") {
				setMessage({type: 'error', message: 'There is no user record corresponding to this identifier.'})
				setMail('')
				setPassword('')
				emailRef.current.focus();
			}
			else {
				setMessage({type: 'error', message: error.message})
				setMail('')
				setPassword('')
				emailRef.current.focus();
			}
			setButtonLoading(false)
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
					<form onSubmit={handleSubmit}>
						<Input
							id="mail"
							type="text"
							value={mail}
							required={true}
							onChange={(event)=> setMail(event.target.value)}
							autoFocus={true}
							inputRef ={emailRef}
							>
							Email or Pseudo
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
							<BlobButton type='submit' spinner={buttonLoading}>LOGIN</BlobButton>
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

export default Connexion