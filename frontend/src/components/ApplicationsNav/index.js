import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { checkIfLoggedIn } from '../../helpers/checkIfLoggedIn';
import './style.css';

export default class ApplicationsNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged_in: false,
    }
  }

  async componentDidMount() {
    const logged_in = await checkIfLoggedIn();
    this.setState({logged_in});
  }

  render() {
    let button = '';
    if (this.state.logged_in) {
      button = <Link to='/new-application' className='applications__navbutton applications__navbutton--new-application'>New application</Link>
    }
    return (
      <nav className='applications-nav'>
        <div className='applications-navbuttons-container'>
          <div className='applications__navbutton'>Calendar view</div>
          <div className='applications__navbutton'>Display: all</div>
          {button}
        </div>
        <div className='applications__searchline-container'>
          <input className='applications__searchline' type='text' placeholder='search...'/>
        </div>
      </nav>
    )
  }
}
