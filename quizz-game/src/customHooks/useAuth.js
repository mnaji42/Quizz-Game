import { auth } from '../firebase/firebase'
import { useFirestore } from './useFirestore'

class Auth {
	
	signup = (email, password) => {
		return auth.createUserWithEmailAndPassword(email, password)
	}

	subscription = (email, password, pseudo) => {

		const checkIfPseudoIsFree = (pseudo) => {
			return new Promise((resolve, reject) => {
				useFirestore().searchUserWithPseudo(pseudo)
				.then(() => {
					// If it is success the pseudo already exist in db
					reject({code:'pseudo-already-used', message: 'This pseudo is already used'})
				})
				.catch((error) => {
					if (error.code === 'no-user-in-db')
						resolve({code: 'success', message : 'There is no user whith this pseudo'})
					else
						reject(error)
				})
			})
		}

		return new Promise((resolve, reject) => {
			checkIfPseudoIsFree(pseudo)
			.then(() => {
				this.signup(email, password)
				.then((user) => {
					useFirestore().setUser(user.user.uid, {pseudo})
					.then((user) => {
						resolve(user)
					})
					.catch((error) => {
						auth.currentUser.delete()
						reject(error)
					})
				})
				.catch((error) => {
					reject(error)
				})
			})
			.catch((error) => {
				reject(error)
			})
		})
	}

	login = (email, password) => {
		return auth.signInWithEmailAndPassword(email, password)
	}

	logout = () => {
		return auth.signOut()
	}

	resetPassword = (email) => {
		return auth.sendPasswordResetEmail(email)
	}

	updateEmail = (userAuth, email) => {
		return userAuth.updateEmail(email)
	}

	updatePassword = (userAuth, password) => {
		return userAuth.updatePassword(password)
	}

	sendEmailVerification = (user) => {
		return auth.currentUser.sendEmailVerification()
	}
}

export function useAuth() {
	return new Auth()
}

export default new Auth()