import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {Header} from './components/header/header.component.jsx'


class App extends React.Component {
  constructor(props) {
    super(props)


  }

  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/shop' component={ShopPage}></Route>
        </Switch>
      </div>
    )
  }
}

export default App;
