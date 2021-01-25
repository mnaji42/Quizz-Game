import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../../Firebase/index'
import { Link } from 'react-router-dom'

const Subscription = (props) => {

	const firebase = useContext(FirebaseContext)

	const [signUpData, setSignUpData] = useState({
		pseudo: '',
		email: '',
		password: '',
		confirmPassword: ''
	})
	const [error, setError] = useState(false)

	const handleChange = (event) => {
		setSignUpData({...signUpData, [event.target.id]:event.target.value})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		firebase.subscription(signUpData.email, signUpData.password)
		.then( authUser => {
			console.log(authUser)
			return firebase.user(authUser.user.uid).set({
				pseudo: signUpData.pseudo,
				email: signUpData.email,
			})
		})
		.then(() => {
			console.log('SUCCESS')
			setError(false)
			setSignUpData({pseudo:'',email:'',password:'',confirmPassword:''})
			props.history.push('/game')
		})
		.catch(error => {
			setError(error.message)
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
			{error && <div>{error}</div>}
			<div>
				Vous avez dejà un compte ? <Link to='/signup'>Se connecter</Link>
			</div>
		</div>
	);
};

export default Subscription;