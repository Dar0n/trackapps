import React, { Component } from 'react';
import MainNav from '../MainNav';
import Applications from '../Applications';
import { Route } from 'react-router-dom';
import './style.css';

class App extends Component {
  render() {
    return (
        <div>
          <MainNav />
          <main>
            
          </main>
          <Route exact path="/" component={Applications}/>
        </div>
    );
  }
}

export default App;
