import React, { Component } from 'react';
import ApplicationForm from '../ApplicationForm';
import ErrorPage from '../ErrorPage';
import { connect } from 'react-redux';
import { getSingleJobApplication } from '../../helpers/singleJobApplication';
import { checkIfLoggedIn } from '../../helpers/checkIfLoggedIn';

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch, props) => ({
  getSingleJobApplication: (jobID) => {
    dispatch(getSingleJobApplication(jobID));
  },
})

class EditApplication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        company: '',
        title: '',
        date_applied: '',
        application_state: 'Applied',
        response_date: '',
        response: '',
        comments: '',
      },
      loggedIn: 'waiting',
    }
  }

  handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    const newForm = Object.assign({}, this.state.form);
    newForm[key] = value;
    this.setState({form: newForm});
  }

  async componentDidMount() {
    const loggedIn = await checkIfLoggedIn();
    this.setState({loggedIn});
    const method = 'GET';
    const token = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json', 
      'Authorization': `JWT ${token}`,
    }
    const myInit = {
      method,
      headers,
    }
    const response = await fetch(`http://localhost:8000/backend/api/jobs/job/${this.props.match.params.id}`, myInit);
    const json = await response.json();
    this.setState({form: json});
  }
  render() {
    return (
      this.state.loggedIn === 'waiting' ? 
      <div></div>
      : this.state.loggedIn ?
      <ApplicationForm 
        handleChange={this.handleChange}
        payload={this.state.form}
        isNewApplication={ false }
        jobID={ this.props.match.params.id }
      />
      : <ErrorPage reason={'unauthorisedAccess'}/>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditApplication);