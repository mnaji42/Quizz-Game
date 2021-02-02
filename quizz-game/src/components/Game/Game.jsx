import React, { useContext } from 'react';
import { UserContext } from '../../UserSession/UserContext'
import { FirebaseContext } from '../../Firebase/index'
import {HeaderWave} from '../../UI/Components'

const Game = (props) => {

	const user = useContext(UserContext)
	const firebase = useContext(FirebaseContext)

	console.log()

	// if (!user.isConnected) {
	// 	props.history.push('/login')
	// }

	return (
		<div>
			{user.isConnected && <h2>Hello {user.data.pseudo}</h2>}
			<button onClick={firebase.signOut}>signout</button>
		</div>
	);

};

export default Game;