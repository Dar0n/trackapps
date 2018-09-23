import React, { Component } from 'react';
import ApplicationsNav from '../ApplicationsNav';
import AppFilter from '../AppFilter';
import ApplictionsDashboard from '../ApplictionsDashboard';
import './style.css';

class ApplicationsContainer extends Component {
  render() {
    return (
      <div className='applications-container'>
        <ApplicationsNav />
        <div className='applications-inner-container'>
          <h2 className='section-title'>Applications</h2>
          <AppFilter />
          <ApplictionsDashboard />
        </div>
      </div>
    )
  }
}

export default ApplicationsContainer;