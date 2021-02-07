import React, { useState, useContext } from 'react';
import classes from './ForgetPassword.module.css'
// import { FirebaseContext } from '../../Firebase/index'

const ForgetPassword = () => {

	const [mail, setMail] = useState('')
	// const firebase = useContext(FirebaseContext)
	const [response, setResponse] = useState({
		type: '',
		message: ''
	})

	const handleSubmit = (event) => {
		event.preventDefault()
		// firebase.resetPassword(mail)
		// .then(() => {
		// 	setResponse({
		// 		type: "SUCCESS",
		// 		message: "Un mail vous a été envoyé"
		// 	})
		// 	setMail("")
		// })
		// .catch((error) => {
		// 	setResponse({
		// 		type: "ERROR",
		// 		message: error.message
		// 	})
		// 	setMail("")
		// })
		console.log('inscription')
	}

	return (
		<div>
			<h2>Forget Password</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="email">Email: </label>
					<input type='email' onChange={(event)=> setMail(event.target.value)} id="email" value={mail} required placeholder="Entrez votre email"></input>
				</div>
				<div>
					<button type="submit">Changer de mot de passe</button>
				</div>
			</form>
			{
				response.type != "" &&
				<div className={response.type == "SUCCESS" ? classes.ResponseSuccess : classes.ResponseError}>
					{response.message}
				</div>
			}
		</div>
	);
};

export default ForgetPassword;