import React, {useContext} from 'react';
import classes from './Home.module.css'
import { UserContext } from '../../UserSession/UserContext'
import { FirebaseContext } from '../../Firebase/index'

const Home = () => {
	const user = useContext(UserContext)
	const firebase = useContext(FirebaseContext)

	console.log()

	// if (!user.isConnected) {
	// 	props.history.push('/login')
	// }

	return (
		<div>
			<h1>HOME</h1>
			{user.isConnected && <h2>Hello {user.data.pseudo}</h2>}
			<button onClick={firebase.signOut}>signout</button>
		</div>
	);
};

export default Home;