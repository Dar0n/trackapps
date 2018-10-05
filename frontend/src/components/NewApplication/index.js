import React, { Component } from 'react';
import ApplicationForm from '../ApplicationForm';
import ErrorPage from '../ErrorPage';
import { checkIfLoggedIn } from '../../helpers/checkIfLoggedIn';
import './style.css';

class NewApplication extends Component {
  constructor(props) {
    super(props);
    this.state={
      company: '',
      title: '',
      date_applied: '',
      application_state: 'Applied',
      response_date: '',
      response: '',
      comments: '',
    };
    
    // this.submitAction = this.submitAction.bind(this);
  }
  handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    const newState = Object.assign({}, this.State, {[key]:value});
    // const newState = Object.assign({}, this.state);
    newState[key] = value;
    this.setState(newState);
  }
  render() {
    const loggedIn = checkIfLoggedIn();
    return (
      loggedIn ? 
      <ApplicationForm 
        handleChange={this.handleChange}
        payload={this.state}
      />
      : <ErrorPage reason={'unauthorisedAccess'}/>
    )
  }
}

export default NewApplication;