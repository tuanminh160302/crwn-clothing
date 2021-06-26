import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';


const HatsPage = (props) => {
  console.log(props)
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)


  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/hats' component={HatsPage}></Route>
        </Switch>
      </div>
    )
  }
}

export default App;
