import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import classes from './ConfirmEmail.module.css'
import { BubbleBackground, Title, CustomLink, Modal, Input, BlobButton } from '../../UI/Components'
import { useCurrentUser, useAuth, useMessage } from '../../customHooks/hooks'

const ConfirmEmail = () => {

	const currentUser = useCurrentUser()
	const [changeEmail, setChangeEmail] = useState(false)
	const [email, setEmail] = useState(currentUser.auth.email)
	const [password, setPassword] = useState('')
	const emailRef = useRef()
	const passwordRef = useRef()
	const [loading, setLoading] = useState(false)
	const { sendEmailVerification, logout, updateEmail } = useAuth()
	const history = useHistory()
	const setMessage = useMessage()

	const handleResendEmail = () => {
		setLoading(true)
		sendEmailVerification()
		.then(() => {
			setMessage({type: 'success', message: 'An email has just been sent'})
		})
		.catch((error) => {
			setMessage({type: 'error', message: error.message})
		}).finally(() => {
			setLoading(false)
		})
	}

	const handleLogout = () => {
		setLoading(true)
		logout()
		.then(() => {
			history.push('/')
		})
		.catch((error) => {
			setMessage({type: 'error', message: error.message})
		}).finally(() => {
			setLoading(false)
		})
	}

	const handleUpdateMail = (e) => {
		e.preventDefault()

		setLoading(true)
		if (email.toUpperCase() === currentUser.auth.email.toUpperCase()) {
			setMessage({type: 'error', message: 'It is the same email as the previous one'})
			setLoading(false)
		}
		else {
			updateEmail(password, email)
			.then(() => {
				handleResendEmail()
				setPassword('')
				setChangeEmail(false)
			})
			.catch((error) => {
				if (error.code === "auth/wrong-password") {
					setMessage({type: 'error', message: 'The password is invalid.'})
					setPassword('')
					passwordRef.current.focus();
				}
				else {
					setMessage({type: 'error', message: error.message})
					setPassword('')
					passwordRef.current.focus();
				}
				setLoading(false)
			})
		}
	}

	const modalChangeMail = !changeEmail ? <></> : (
		<Modal 
			title="Change your Email"
			onClose={() => setChangeEmail(false)}>
			<div className={classes.ModaleContent}>
				<form onSubmit={handleUpdateMail}>
					<Input
						id="mail"
						type="email"
						value={email}
						required={true}
						onChange={(event)=> setEmail(event.target.value)}
						autoFocus={true}
						inputRef ={emailRef}
						>
						New Email
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
						<BlobButton type='submit' size='long' font='medium' spinner={loading}>Resend Email</BlobButton>
					</div>
				</form>
			</div>
		</Modal>
	)

	return (
		<>
			<BubbleBackground />
			<div className={classes.ConfirmEmailContainer}>
				<div className={classes.ConfirmEmailSubContainer}>
				{modalChangeMail}
					<Title>Check your email</Title>
					<p className={classes.Text}>
						A confirmation link has been sent to <span className={classes.Bold}>{currentUser.auth.email}</span>.
					</p>
					<p className={classes.Text}>
						If you have not received it yet, please check the SPAM section.
					</p>
					<div className={classes.LinksContainer}>
						<div className={classes.LinkContainer}>
							<CustomLink type='button' onClick={handleResendEmail} disable={loading}>Resend confirmation link</CustomLink><br/>
						</div>
						<div className={classes.LinkContainer}>
							<CustomLink type='button' onClick={() => setChangeEmail(true)} disable={loading}>Change my email</CustomLink>
						</div>
						<div className={classes.LinkLogoutContainer}>
							<CustomLink type='button' onClick={handleLogout} disable={loading}>Logout</CustomLink>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ConfirmEmail