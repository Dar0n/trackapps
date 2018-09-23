import React, { Component } from 'react';
import './style.css';

class Application extends Component{
  capitalize = (str) => {
    return str.substr(0,1).toUpperCase() + str.substr(1).replace('_', ' ');
  }
  render() {
  const { application } = this.props;
  const rand = require("random-key");
  return (
    <div className='single-application-container'>
      {
        Object.keys(application).map(key => {
          if (key !== 'user_profile') {
            return (
              <div key={rand.generate(10)} className={`single-application__form-field single-application__${key}`}>
                <span className='single-application__form-firld-title'>{this.capitalize(key)}</span>
                {application[key]}
              </div>
            )
          }
          return null;
        })
      }
    </div>
  )
  }
}

export default Application;