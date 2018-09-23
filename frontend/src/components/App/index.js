import React, { Component } from 'react';
import MainNav from '../MainNav';
import ApplicationsContainer from '../ApplicationsContainer';
import { Route } from 'react-router-dom';
import './style.css';

class App extends Component {
  render() {
    return (
        <div>
          <MainNav />
          <main>
            <Route exact path="/" component={ApplicationsContainer}/>
          </main>
        </div>
    );
  }
}

export default App;
