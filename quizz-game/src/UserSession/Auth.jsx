import React, { useEffect, useState, createContext, useContext} from 'react';
import { FirebaseContext } from '../Firebase/index'

export const AuthContext = createContext()

export const AuthProvider = (props) => {

	const firebase = useContext(FirebaseContext)
	const [currentUser, setCurrentUser] = useState(null)

	useEffect(() => {
		// firebase.auth.onAuthStateChanged(setCurrentUser)

		setCurrentUser('loading')
		let listener = firebase.auth.onAuthStateChanged(
			user => {
				if (user) {
					console.log('i am here 224')
					firebase.user(user.uid).get()
					.then((doc) => {
					if (doc && doc.exists) {
						setCurrentUser({
							user: user,
							data: doc.data()
						})
					}
					})
					.catch((error) => {
					console.log(error)
					})
				}
				else {
					setCurrentUser(user)
				}
			}
		)

		console.log('i am here 224')
		return () => {
			listener()
		}
	}, [firebase])

	console.log('yoyo')

	if(currentUser === 'loading') {
		return <div>Loading...</div>
	}


	return (
		<AuthContext.Provider value={{currentUser}}>
			{props.children}
		</AuthContext.Provider>
	)
}
