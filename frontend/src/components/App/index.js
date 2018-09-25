import React, { Component } from 'react';
import MainNav from '../MainNav';
import ApplicationsContainer from '../ApplicationsContainer';
// import Login from '../Login';
import NewApplication from '../NewApplication';
import { Switch, Route } from 'react-router-dom';
import './style.css';

class App extends Component {
  render() {
    return (
        <div>
          <MainNav />
          <main>
            <Switch>
              <Route exact path="/" component={ApplicationsContainer}/>
              <Route path='/new-application' component={NewApplication} />
            </Switch>
          </main>
        </div>
    );
  }
}

export default App;
