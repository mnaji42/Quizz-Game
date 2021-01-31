import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../../Firebase/index'
import { UserContext } from '../../UserSession/UserContext'
import {BubbleBackground, HeaderWave} from '../../UI/Components'

const Connexion = (props) => {

	const [mail, setMail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(false)
	const firebase = useContext(FirebaseContext)

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
		<div>
			<BubbleBackground>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto dolor, ipsa optio est corrupti dicta asperiores consequuntur voluptas perspiciatis incidunt ad explicabo. Nemo praesentium illum tempore doloremque. Fugiat, iure?
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto dolor, ipsa optio est corrupti dicta asperiores consequuntur voluptas perspiciatis incidunt ad explicabo. Nemo praesentium illum tempore doloremque. Fugiat, iure?
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto dolor, ipsa optio est corrupti dicta asperiores consequuntur voluptas perspiciatis incidunt ad explicabo. Nemo praesentium illum tempore doloremque. Fugiat, iure?
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto dolor, ipsa optio est corrupti dicta asperiores consequuntur voluptas perspiciatis incidunt ad explicabo. Nemo praesentium illum tempore doloremque. Fugiat, iure?
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto dolor, ipsa optio est corrupti dicta asperiores consequuntur voluptas perspiciatis incidunt ad explicabo. Nemo praesentium illum tempore doloremque. Fugiat, iure?
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto dolor, ipsa optio est corrupti dicta asperiores consequuntur voluptas perspiciatis incidunt ad explicabo. Nemo praesentium illum tempore doloremque. Fugiat, iure?
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto dolor, ipsa optio est corrupti dicta asperiores consequuntur voluptas perspiciatis incidunt ad explicabo. Nemo praesentium illum tempore doloremque. Fugiat, iure?
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto dolor, ipsa optio est corrupti dicta asperiores consequuntur voluptas perspiciatis incidunt ad explicabo. Nemo praesentium illum tempore doloremque. Fugiat, iure?
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto dolor, ipsa optio est corrupti dicta asperiores consequuntur voluptas perspiciatis incidunt ad explicabo. Nemo praesentium illum tempore doloremque. Fugiat, iure?
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto dolor, ipsa optio est corrupti dicta asperiores consequuntur voluptas perspiciatis incidunt ad explicabo. Nemo praesentium illum tempore doloremque. Fugiat, iure?
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto dolor, ipsa optio est corrupti dicta asperiores consequuntur voluptas perspiciatis incidunt ad explicabo. Nemo praesentium illum tempore doloremque. Fugiat, iure?Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto dolor, ipsa optio est corrupti dicta asperiores consequuntur voluptas perspiciatis incidunt ad explicabo. Nemo praesentium illum tempore doloremque. Fugiat, iure?
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto dolor, ipsa optio est corrupti dicta asperiores consequuntur voluptas perspiciatis incidunt ad explicabo. Nemo praesentium illum tempore doloremque. Fugiat, iure?
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto dolor, ipsa optio est corrupti dicta asperiores consequuntur voluptas perspiciatis incidunt ad explicabo. Nemo praesentium illum tempore doloremque. Fugiat, iure?
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto dolor, ipsa optio est corrupti dicta asperiores consequuntur voluptas perspiciatis incidunt ad explicabo. Nemo praesentium illum tempore doloremque. Fugiat, iure?
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto dolor, ipsa optio est corrupti dicta asperiores consequuntur voluptas perspiciatis incidunt ad explicabo. Nemo praesentium illum tempore doloremque. Fugiat, iure?
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto dolor, ipsa optio est corrupti dicta asperiores consequuntur voluptas perspiciatis incidunt ad explicabo. Nemo praesentium illum tempore doloremque. Fugiat, iure?
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto dolor, ipsa optio est corrupti dicta asperiores consequuntur voluptas perspiciatis incidunt ad explicabo. Nemo praesentium illum tempore doloremque. Fugiat, iure?
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto dolor, ipsa optio est corrupti dicta asperiores consequuntur voluptas perspiciatis incidunt ad explicabo. Nemo praesentium illum tempore doloremque. Fugiat, iure?
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto dolor, ipsa optio est corrupti dicta asperiores consequuntur voluptas perspiciatis incidunt ad explicabo. Nemo praesentium illum tempore doloremque. Fugiat, iure?
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto dolor, ipsa optio est corrupti dicta asperiores consequuntur voluptas perspiciatis incidunt ad explicabo. Nemo praesentium illum tempore doloremque. Fugiat, iure?
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto dolor, ipsa optio est corrupti dicta asperiores consequuntur voluptas perspiciatis incidunt ad explicabo. Nemo praesentium illum tempore doloremque. Fugiat, iure?
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto dolor, ipsa optio est corrupti dicta asperiores consequuntur voluptas perspiciatis incidunt ad explicabo. Nemo praesentium illum tempore doloremque. Fugiat, iure?Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto dolor, ipsa optio est corrupti dicta asperiores consequuntur voluptas perspiciatis incidunt ad explicabo. Nemo praesentium illum tempore doloremque. Fugiat, iure?
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto dolor, ipsa optio est corrupti dicta asperiores consequuntur voluptas perspiciatis incidunt ad explicabo. Nemo praesentium illum tempore doloremque. Fugiat, iure?
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto dolor, ipsa optio est corrupti dicta asperiores consequuntur voluptas perspiciatis incidunt ad explicabo. Nemo praesentium illum tempore doloremque. Fugiat, iure?
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto dolor, ipsa optio est corrupti dicta asperiores consequuntur voluptas perspiciatis incidunt ad explicabo. Nemo praesentium illum tempore doloremque. Fugiat, iure?
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto dolor, ipsa optio est corrupti dicta asperiores consequuntur voluptas perspiciatis incidunt ad explicabo. Nemo praesentium illum tempore doloremque. Fugiat, iure?
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto dolor, ipsa optio est corrupti dicta asperiores consequuntur voluptas perspiciatis incidunt ad explicabo. Nemo praesentium illum tempore doloremque. Fugiat, iure?
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto dolor, ipsa optio est corrupti dicta asperiores consequuntur voluptas perspiciatis incidunt ad explicabo. Nemo praesentium illum tempore doloremque. Fugiat, iure?
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto dolor, ipsa optio est corrupti dicta asperiores consequuntur voluptas perspiciatis incidunt ad explicabo. Nemo praesentium illum tempore doloremque. Fugiat, iure?
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto dolor, ipsa optio est corrupti dicta asperiores consequuntur voluptas perspiciatis incidunt ad explicabo. Nemo praesentium illum tempore doloremque. Fugiat, iure?
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto dolor, ipsa optio est corrupti dicta asperiores consequuntur voluptas perspiciatis incidunt ad explicabo. Nemo praesentium illum tempore doloremque. Fugiat, iure?
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto dolor, ipsa optio est corrupti dicta asperiores consequuntur voluptas perspiciatis incidunt ad explicabo. Nemo praesentium illum tempore doloremque. Fugiat, iure?
			</BubbleBackground>
			{/* <Wave animation={waveAnimation}></Wave> */}
			{/* <h2>Connexion</h2>
			{user.isConnected && <h3>Hello {user.data.pseudo}</h3>}
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="email">Email: </label>
					<input type='email' onChange={(event)=> setMail(event.target.value)} id="email" value={mail} required placeholder="Entrez votre email"></input>
				</div>
				<div>
					<label htmlFor="password">Mot de passe: </label>
					<input type='password' onChange={(event) => {setPassword(event.target.value)}} id="password" value={password} required placeholder="Entrez votre mot de passe"></input>
				</div>
				<div>
					<button type="submit">Connexion</button>
				</div>
			</form>
			{ error && <div>{error}</div>}
			<div>
				Mot de pass oublié ? <Link to='/forgetpassword'>Changer mon mot de passe</Link>
			</div>
			<div>
				Nouveau sur OpenQuizzy ? <Link to='/signup'>Inscrivez vous !</Link>
			</div> */}
		</div>
	);
};

export default Connexion;