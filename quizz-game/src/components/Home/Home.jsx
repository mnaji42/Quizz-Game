import React from 'react'
import { useHistory } from 'react-router-dom'
import classes from './Home.module.css'
import { useAuth, useCurrentUser } from '../../customHooks/hooks'
// import { AuthContext } from '../../UserSession/Auth'
// import { FirebaseContext } from '../../Firebase/index'

const Home = () => {
	// const user = useContext(AuthContext)
	// const firebase = useContext(FirebaseContext)

	const currentUser = useCurrentUser()
	const { logout } = useAuth()
	const history = useHistory()

	console.log()

	// if (!user.isConnected) {
	// 	props.history.push('/login')
	// }

	const handleLogout = () => {
		logout()
		history.push('/')
	}

	return (
		<div>
			<h1>HOME</h1>
			{<h2>Hello {currentUser.data && currentUser.data.pseudo}</h2>}
			<button onClick={handleLogout}>signout</button>
		</div>
	);
};

export default Home;