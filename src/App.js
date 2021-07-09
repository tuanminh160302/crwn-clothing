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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        
        userRef.onSnapshot((snapShot) => {
          this.setState((prevState, prevProps) => ({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }), () => {
            console.log(this.state)
          })
        })
      } else {
        this.setState((prevState, prevProps) => ({
          currentUser: userAuth
        }))
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  handleSignInClick = () => {
    console.log(this.state)
  }

  render() {
    return (
      <div>
        {Header({currentUser: this.state.currentUser, handleSignInClick: this.handleSignInClick})}
        <Switch>
          <Route exact path='/' render={(props) => (HomePage())}></Route>
          <Route exact path='/shop' component={ShopPage}></Route>
          <Route exact path='/signin' render={(props) => (SignInAndSignUpPage())}></Route>
        </Switch>
      </div>
    )
  }
}

export default App;
