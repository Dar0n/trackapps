import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { checkIfLoggedIn } from '../../helpers/checkIfLoggedIn';
import './style.css';

class Application extends Component{
  capitalize = (str) => {
    return str.substr(0,1).toUpperCase() + str.substr(1).replace('_', ' ');
  }
  removeApplication = async () => {
    const loggedIn = await checkIfLoggedIn();
    const method = 'DELETE';
    const token = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json', 
      'Authorization': `JWT ${token}`,
    }
    const myInit = {
      method,
      headers,
    }
    if (loggedIn) {
      const response = await fetch(`http://localhost:8000/backend/api/jobs/job/${this.props.application.id}/`, myInit);
      if (response.ok) {
        // here comes code to update component
        this.props.removeApplicationByID(this.props.application.id);
      }
    }
  }
  render() {
  const { application } = this.props;

  
  return (
    <article className='single-application-container'>
      <section className='single-application__main-section'>
        <h2 className='single-application__job-title'>{application['title']}</h2>
        <h3 className='single-application__company'>{application['company']}</h3>
        <div className='single-application__form-field single-application__response'>
        <span className='single-application__form-field-title'>Response</span>
        {application['response'] ? application['response'] : 'There was no response yet.'}
        </div>
        <div className='single-application__form-field single-application__comments'>
          <span className='single-application__form-field-title'>Comments</span>
          {application['comments'] ? application['comments'] : 'No comments.'}
        </div>
      </section>
      <section className='single-application__aside'>
      <div className='single-application__form-field single-application__date_applied'>
        <span className='single-application__form-field-title'>Application date</span>
        {application['date_applied'] ? application['date_applied'] : ' Not applied'}
      </div>
      <div className='single-application__form-field single-application__response_date'>
        <span className='single-application__form-field-title'>Response date</span>
        {application['response_date'] ? application['response_date'] : 'No response.'}
      </div>
      <div className='single-application__form-field single-application__application_state'>
        <span className='single-application__form-field-title'>Application state</span>
        {application['application_state']}
      </div>
      <div className='single-application__edit-field'>
      <Link to={`/edit-application/${application.id}`} className='single-application__edit-field'>Edit</Link> |
      <button onClick={ this.removeApplication }>X</button>
      </div>
      </section>
    </article>
  )
  }
}

export default Application;