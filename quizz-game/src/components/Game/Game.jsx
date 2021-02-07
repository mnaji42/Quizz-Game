import React, { useContext } from 'react';
import { useAuth, useCurrentUser } from '../../customHooks/hooks'
// import { AuthContext } from '../../UserSession/Auth'
// import { FirebaseContext } from '../../Firebase/index'
// import {HeaderWave} from '../../UI/Components'

const Game = (props) => {

	// const user = useContext(AuthContext)
	// const firebase = useContext(FirebaseContext)
	const { logout } = useAuth()
	const currentUser = useCurrentUser()

	console.log()

	// if (!user.isConnected) {
	// 	props.history.push('/login')
	// }

	return (
		<div>
			{currentUser && currentUser.data && <h2>Hello {currentUser.data.pseudo}</h2>}
			<button onClick={logout}>signout</button>
		</div>
	);

};

export default Game;