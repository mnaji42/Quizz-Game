import React, { useState, useEffect, useContext } from 'react'
import './App.css';
import Landing from './components/Landing/Landing'
import Game from './components/Game/Game'
import Connexion from './components/Connexion/Connexion'
import Subscription from './components/Subscription/Subscription'
import ForgetPassword from './components/ForgetPassword/ForgetPassword'
import { PageNotFound } from './UI/Components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import  { UserContext } from './UserSession/UserContext'
import { FirebaseContext } from './Firebase/index'

function App() {

  const firebase = useContext(FirebaseContext)
  const [user, setUser] = useState({
    isConnected: false,
    data: null
  })

  useEffect(() => {

		let listener = firebase.auth.onAuthStateChanged(user => {
      if (user) {
        console.log('i am here')
        firebase.user(user.uid).get()
        .then((doc) => {
          if (doc && doc.exists) {
            setUser({
              isConnected: true,
              data: doc.data()
            })
          }
        })
        .catch((error) => {
          console.log(error)
        })
      }
      else {
        setUser({
          isConnected: false,
          data: null
        })
      }
		})

		return () => {
			listener()
		}
  }, [])

  return (
    <BrowserRouter>
      <UserContext.Provider value={user}>
          <Switch>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/game' component={Game}/>
            <Route exact path='/login' component={Connexion}/>
            <Route exact path='/signup' component={Subscription}/>
            <Route exact path='/forgetpassword' component={ForgetPassword}/>
            <Route component={PageNotFound}/>
          </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
