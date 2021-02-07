import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom'
import {BubbleBackground, Arrow, Title, Input, BlobButton, CustomLink} from '../../UI/Components'
import { useAuth, useMessage } from '../../customHooks/hooks'
import classes from './Subscription.module.css'
import ConfirmEmail from '../ConfirmEmail/ConfirmEmail'

const Subscription = (props) => {

	const history = useHistory()
	const [mail, setMail] = useState('')
	const [pseudo, setPseudo] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const setMessage = useMessage()
	const [buttonLoading, setButtonLoading] = useState(false)
	const { subscription, sendEmailVerification } = useAuth()
	const [isSignup, setIsSignup] = useState(false)

	const emailRef = useRef();
	const pseudoRef = useRef();
	const passwordRef = useRef();
	const confirmPasswordRef = useRef();

	const handleSubmit = (event) => {
		event.preventDefault()

		setButtonLoading(true)

		if (password !== confirmPassword) {
			setMessage({type: 'error', message: 'Passwords doesn\'t match'})
			setPassword('')
			setConfirmPassword('')
			passwordRef.current.focus()
			setButtonLoading(false)
		}
		else {
			subscription(mail, password, pseudo)
			.then(() => {
				sendEmailVerification()
				.then(() => {
					setMessage({type: 'success', message: 'Check your inbox to confirm your email'})
				})
				.catch(() => {
					setMessage({type: 'error', message: 'The email can\'t be send. Try to resend it'})
				}).finally(() => {
					history.push('/confirm-email')
				})
			})
			.catch( error => {
				if (error.code === 'pseudo-already-used') {
					setMessage({type: 'error', message: 'This pseudo is already in use. Please choose another one'})
					setPseudo('')
					setPassword('')
					setConfirmPassword('')
					pseudoRef.current.focus()
				}
				else if (error.code === 'auth/weak-password') {
					setMessage({type: 'error', message: error.message})
					setPassword('')
					setConfirmPassword('')
					passwordRef.current.focus()
				}
				else if (error.code === 'auth/email-already-in-use') {
					setMessage({type: 'error', message: error.message})
					setMail('')
					setPassword('')
					setConfirmPassword('')
					emailRef.current.focus()
				}
				else {
					setMessage({type: 'error', message: error.message})
					setMail('')
					setPseudo('')
					setPassword('')
					setConfirmPassword('')
					// emailRef.current.focus()
				}
				setButtonLoading(false)
			})
		}
	}

	return (
		<>
			<BubbleBackground />
			<div className={classes.SubscriptionContainer}>
				<div className={classes.ArrowBackContainer}>
					<Arrow dir="left" onClick={() => history.push('/')} background="quizzy" size="big"/>
				</div>
				<div className={classes.SubscriptionSubContainer}>
				
					<Title>Sign Up</Title>
					
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
							id="pseudo"
							type="text"
							value={pseudo}
							required={true}
							onChange={(event)=> setPseudo(event.target.value)}
							autoFocus={false}
							inputRef ={pseudoRef}
							>
							Pseudo
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
						<Input
							id="confPassword"
							type="password"
							value={confirmPassword}
							required={true}
							onChange={(event) => {setConfirmPassword(event.target.value)}}
							autoFocus={false}
							inputRef ={confirmPasswordRef}
							>
							Confirm your Password
						</Input>
						<div className={classes.BlobButtonContainer}>
							<BlobButton type='submit' spinner={buttonLoading}>SIGNUP</BlobButton>
						</div>
					</form>
					<div className={classes.LinksContainer}>
						You already have an account ? <CustomLink path="/login">LogIn</CustomLink>.
					</div>

				</div>
			</div>
		</>
	);
};

export default Subscription;