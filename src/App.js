import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {Header} from './components/header/header.component.jsx'
import {SignInAndSignUpPage} from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      createUserProfileDocument(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path='/' render={(props) => (HomePage())}></Route>
          <Route exact path='/shop' render={(props) => (ShopPage())}></Route>
          <Route exact path='/signin' render={(props) => (SignInAndSignUpPage({currentUser: this.state.currentUser}))}></Route>
        </Switch>
      </div>
    )
  }
}

export default App;
