import React from 'react'
import './App.css';
import Landing from './components/Landing/Landing'
import Game from './components/Game/Game'
import Connexion from './components/Connexion/Connexion'
import Subscription from './components/Subscription/Subscription'
import ForgetPassword from './components/ForgetPassword/ForgetPassword'
import Home from './components/Home/Home'
import PageNotFound from './components/PageNotFound/PageNotFound'
import ConfirmEmail from './components/ConfirmEmail/ConfirmEmail'
import RedirectRoute from './CustomRouter/RedirectRoute'
import PrivateRoute from './CustomRouter/PrivateRoute'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useCurrentUser } from './customHooks/hooks'
import { MessageProvider } from './context/MessageContext'

function App() {

  const currentUser = useCurrentUser()

  console.log('current user:', currentUser)

  return (
    <BrowserRouter>
      <MessageProvider>
        <Switch>
          <Route exact path='/' component={Landing}/>
          <PrivateRoute exact path= '/home' component={Home}/>
          <PrivateRoute exact path= '/game' component={Game}/>
          <RedirectRoute redirectIf={currentUser.auth} redirectTo='/home' exact path= '/login' component={Connexion}/>
          <RedirectRoute redirectIf={currentUser.auth} redirectTo='/home' exact path= '/signup' component={Subscription}/>
          <RedirectRoute redirectIf={currentUser.auth} redirectTo='/home' exact path= '/forgetpassword' component={ForgetPassword}/>
          <RedirectRoute redirectIf={currentUser.auth && currentUser.auth.emailVerified} redirectTo='/home' exact path='/confirm-email' component={ConfirmEmail}/>
          <Route component={PageNotFound}/>
        </Switch>
      </MessageProvider>
    </BrowserRouter>
  );
}

export default App;
