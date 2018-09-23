import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './style.css';

class MainNav extends Component {
  render() {
    return (
      <nav className='nav-container'>
        <div className='logo-container'>
          Trackapps
        </div>
        <ul className='main-nav'>
          <li><Link to='/'>Applications</Link></li>
          <li><Link to='/contacts'>Contacts</Link></li>
          <li><Link to='/tasks'>Tasks</Link></li>
          <li><Link to='/overview'>Overview</Link></li>
        </ul>
      </nav>
    )
  }
}

export default MainNav;