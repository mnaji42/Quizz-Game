import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import classes from './ConfirmEmail.module.css'
import { BubbleBackground, Title, CustomLink } from '../../UI/Components'
import { useCurrentUser, useAuth, useMessage } from '../../customHooks/hooks'

const ConfirmEmail = () => {

	const currentUser = useCurrentUser()
	const [changeEmail, setChangeEmail] = useState(false)
	const [loading, setLoading] = useState(false)
	const { sendEmailVerification, logout } = useAuth()
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
		logout()
		.then(() => {
			history.push('/')
		})
		.catch((error) => {
			setMessage({type: 'error', message: error.message})
		})
	}

	console.log('history:', history)

	return (
		<>
			<BubbleBackground />
			<div className={classes.ConfirmEmailContainer}>
				<div className={classes.ConfirmEmailSubContainer}>
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