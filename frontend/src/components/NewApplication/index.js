import React, { Component } from 'react';
import ApplicationForm from '../ApplicationForm';
import ErrorPage from '../ErrorPage';
import { checkIfLoggedIn } from '../../helpers/checkIfLoggedIn';
import './style.css';

class NewApplication extends Component {
  constructor(props) {
    super(props);
    this.state={
      form: {
        company: '',
        title: '',
        date_applied: '',
        application_state: 'Applied',
        response_date: '',
        response: '',
        comments: '',
      },
      // initiate loggedIn with string 'waiting'
      // until loggedIn === 'waiting', display empty div. 
      //Once we get a value true or false, update view with correct component
      loggedIn: 'waiting',
    };
    
    // this.submitAction = this.submitAction.bind(this);
  }
  handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    const newForm = Object.assign({}, this.state.form);
    newForm[key] = value;
    this.setState({ form: newForm });
  }
  async componentDidMount() {
    const loggedIn = await checkIfLoggedIn();
    this.setState({ loggedIn });
  }
  render() {
    return (
      this.state.loggedIn === 'waiting' ? 
      <div></div>
      : this.state.loggedIn ?
      <ApplicationForm 
        handleChange={ this.handleChange }
        payload={ this.state.form }
        isNewApplication={ true }
      />
      : <ErrorPage reason={'unauthorisedAccess'}/>
    )
  }
}

export default NewApplication;