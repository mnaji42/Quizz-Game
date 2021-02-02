import React, { useContext } from 'react';
import { UserContext } from '../../UserSession/UserContext'
import {HeaderWave} from '../../UI/Components'

const Game = (props) => {

	const user = useContext(UserContext)

	console.log()

	// if (!user.isConnected) {
	// 	props.history.push('/login')
	// }

	// return (
	// 	<div>
	// 		{user.isConnected && <h2>Hello {user.data.pseudo}</h2>}
	// 	</div>
	// );

	return <HeaderWave />
};

export default Game;