import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../../Firebase/index'

const Subscription = () => {

	const firebase = useContext(FirebaseContext)

	const [signUpData, setSignUpData] = useState({
		pseudo: '',
		email: '',
		password: '',
		confirmPassword: ''
	})

	const handleChange = (event) => {
		setSignUpData({...signUpData, [event.target.id]:event.target.value})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		firebase.subscription(signUpData.email, signUpData.password)
		.then(user => {
			console.log('SUCCESS')
			setSignUpData({pseudo:'',email:'',password:'',confirmPassword:''})
		})
		.catch(error => {
			console.log("error:", error)
		})
	}

	return (
		<div>
			<h2>Inscription</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="pseudo">Pseudo: </label>
					<input onChange={handleChange} value={signUpData.pseudo} type='text' id='pseudo' required placeholder='Pseudo' />
				</div>
				<div>
					<label htmlFor="email">Email: </label>
					<input onChange={handleChange} value={signUpData.email} type='email' id='email' required placeholder='Email' />
				</div>
				<div>
					<label htmlFor="password">Password: </label>
					<input onChange={handleChange} value={signUpData.password} type='password' id='password' required placeholder='Password' />
				</div>
				<div>
					<label htmlFor="confirmPassword">Confirm Password: </label>
					<input onChange={handleChange} value={signUpData.confirmPassword} type='password' id='confirmPassword' required placeholder='confirmPassword' />
				</div>
				<button type='submit'>Inscription</button>
			</form>
		</div>
	);
};

export default Subscription;