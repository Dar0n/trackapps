import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { logout } from '../../actions/logout';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './style.css';

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => ({
  logout: (push) => dispatch(logout(push)),
})

class MainNav extends Component {
  handleClick = (e) => {
    this.props.logout(this.props.history.push);
  }
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
          <li> | <button onClick={this.handleClick} className='logout-button' type='button'>Log out</button></li>
        </ul>
      </nav>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainNav));