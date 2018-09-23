import React, { Component } from 'react';
import Application from '../Application';

export default class ApplictionsDashboard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      applications: [
        {
          user_profile: 1,
          company: 'Ginetta',
          title: 'Front-end developer',
          date_applied: '15.09.2018',
          application_state: 'Phone interview',
          response_date: '21.09.2018',
          response: 'Invited to the phone interview',
          comment: 'Will be waiting for feedback after phone interview',
        },
        {
          user_profile: 1,
          company: 'Homegate',
          title: 'Full-stack developer',
          date_applied: '23.09.2018',
          application_state: 'Applied',
          response_date: '',
          response: 'no response',
          comment: '',
        },
      ]
    }
  }
  render() {
    const rand = require("random-key");
    return (
      <div className='applications-dashboard-container'>
        {
          this.state.applications.map(application => {
            return <Application key={rand.generate(10)} application={application} />;
          })
        }
      </div>
    )
  }
}
