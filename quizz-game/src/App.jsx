import React from 'react'
import classes from './App.module.css';
import Landing from './components/Landing/Landing'
import Game from './components/Game/Game'
import Connexion from './components/Connexion/Connexion'
import Subscription from './components/Subscription/Subscription'
import { Header, Footer, CustomLayout, PageNotFound } from './UI/Components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <CustomLayout>
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/game' component={Game}/>
          <Route exact path='/connect' component={Connexion}/>
          <Route exact path='/subscription' component={Subscription}/>
          <Route component={PageNotFound}/>
        </Switch>
      </CustomLayout>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
