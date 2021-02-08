import { auth } from '../firebase/firebase'
import { useFirestore } from './useFirestore'
import firebase from 'firebase/app'

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
					useFirestore().setUser(user.user.uid, {pseudo, email})
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
		return new Promise((resolve, reject) => {
				useFirestore().searchUserWithPseudo(email)
				.then((user) => {
					auth.signInWithEmailAndPassword(user.data.email, password)
					.then((usr) => {
						resolve(usr)
					})
					.catch((error) => {
						if (error.code === "auth/wrong-password") {
							const stockError = error
							auth.signInWithEmailAndPassword(email, password)
							.then((usr) => {
								resolve(usr)
							})
							.catch(() => {
								reject(stockError)
							})
						}
						else
							reject(error)
					})
				})
				.catch(() => {
					auth.signInWithEmailAndPassword(email, password)
					.then((usr) => {
						resolve(usr)
					})
					.catch((error) => {
						reject(error)
					})
				})
			})
	}

	logout = () => {
		return auth.signOut()
	}

	resetPassword = (email) => {
		return auth.sendPasswordResetEmail(email)
	}

	sendEmailVerification = (user) => {
		return auth.currentUser.sendEmailVerification()
	}

	reauthenticate = (currentPassword) => {
		var user = auth.currentUser
		var cred = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword)

		return user.reauthenticateWithCredential(cred)
	}

	updatePassword = (currentPassword, newPassword) => {
		return new Promise((resolve, reject) => {
			this.reauthenticate(currentPassword)
			.then(() => {
				resolve(auth.currentUser.updatePassword(newPassword))
			})
			.catch((error) => {
				reject(error)
			})
		})
	}

	updateEmail = (currentPassword, newEmail) => {
		return new Promise((resolve, reject) => {
			this.reauthenticate(currentPassword)
			.then(() => {
				auth.currentUser.updateEmail(newEmail)
				.then(() => {
					resolve(useFirestore().updateUser(auth.currentUser.uid, {email: newEmail}))
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
}

export function useAuth() {
	return new Auth()
}

export default new Auth()