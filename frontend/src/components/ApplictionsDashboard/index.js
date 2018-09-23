import React, { Component } from 'react';
import Application from '../Application';

export default class ApplictionsDashboard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      applications: [
        {
          user_profile: 1,
          title: 'Front-end developer',
          company: 'Ginetta',
          date_applied: '15.09.2018',
          application_state: 'Phone interview',
          response: 'Invited to the phone interview',
          response_date: '21.09.2018',
          comments: 'Will be waiting for feedback after phone interview',
        },
        {
          user_profile: 1,
          title: 'Full-stack developer',
          company: 'Homegate',
          date_applied: '23.09.2018',
          application_state: 'Applied',
          response: 'no response',
          response_date: '',
          comments: '',
        },
      ]
    }
  }
  render() {
    return (
      <div className='applications-dashboard-container'>
        {
          this.state.applications.map(application => {
            return <Application application={application} />;
          })
        }
      </div>
    )
  }
}
