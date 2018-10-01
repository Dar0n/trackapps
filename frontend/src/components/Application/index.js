import React, { Component } from 'react';
import './style.css';

class Application extends Component{
  capitalize = (str) => {
    return str.substr(0,1).toUpperCase() + str.substr(1).replace('_', ' ');
  }
  render() {
  const { application } = this.props;
  return (
    <div className='single-application-container'>
      <div className={`single-application__form-field single-application__company`}>
        <span className='single-application__form-field-title'>Company</span>
        {application['company']}
      </div>
      <div className={`single-application__form-field single-application__title`}>
        <span className='single-application__form-field-title'>Job title</span>
        {application['title']}
      </div>
      <div className={`single-application__form-field single-application__date_applied`}>
        <span className='single-application__form-field-title'>Application date</span>
        {application['date_applied']}
      </div>
      <div className={`single-application__form-field single-application__application_state`}>
        <span className='single-application__form-field-title'>Application state</span>
        {application['application_state']}
      </div>
      <div className={`single-application__form-field single-application__response_date`}>
        <span className='single-application__form-field-title'>Response date</span>
        {application['response_date']}
      </div>
      <div className={`single-application__form-field single-application__response`}>
        <span className='single-application__form-field-title'>Response</span>
        {application['response']}
      </div>
      <div className={`single-application__form-field single-application__comments`}>
        <span className='single-application__form-field-title'>Comments</span>
        {application['comments']}
      </div>
    </div>
  )
  }
}

export default Application;