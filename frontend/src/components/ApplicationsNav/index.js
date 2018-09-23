import React, { Component } from 'react';
import './style.css';

export default class ApplicationsNav extends Component {
  render() {
    return (
      <nav className='applications-nav'>
        <div className='applications-navbuttons-container'>
          <div className='applications__navbutton'>Calendar view</div>
          <div className='applications__navbutton'>Display: all</div>
          <div className='applications__navbutton applications__navbutton--new-application'>New application</div>
        </div>
        <div className='applications__searchline-container'>
          <input className='applications__searchline' type='text' placeholder='search...'/>
        </div>
      </nav>
    )
  }
}
