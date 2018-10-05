import React, { Component } from 'react';
import ApplicationHeader from './ApplicationHeader';
import { generateColors } from '../../helpers/generateColors';
import './style.css';

class Application extends Component{
  capitalize = (str) => {
    return str.substr(0,1).toUpperCase() + str.substr(1).replace('_', ' ');
  }
  render() {
  const { application } = this.props;
  const {r, g, b} = generateColors();
  return (
    <div className='single-application-container'>
      <ApplicationHeader 
        company={application['company']}
        title={application['title']}
        colors={[r, g, b]}
      />
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
      <div 
        className='single-application__stripe' 
        data-description='This is a decoration element.'
        style={{backgroundColor: `rgb(${r},${g},${b}`}}
      ></div>
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