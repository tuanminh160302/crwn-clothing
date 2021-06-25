import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

class App extends React.Component {
  constructor(props) {
    super(props)


  }

  render() {
    return(
      <HomePage></HomePage>
    )
  }
}

export default App;
