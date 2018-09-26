import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { logout } from '../../actions/logout';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { checkIfLoggedIn } from '../../helpers/checkIfLoggedIn';
import './style.css';

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
})

class MainNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login_string: 'Log in',
    }
  }
  async componentDidMount() {
    const logged_in = await checkIfLoggedIn();
    if (logged_in) {
      this.setState({login_string: 'Log out',})
    }
  }
  handleClick = (e) => {
    if (this.state.login_string === 'Log out') {
      this.props.logout();
      this.setState({login_string: 'Log in',})
      return null;
    }
    else {
      this.props.history.push('/login')
    }
  }
  render() {
    return (
      <div>
        <nav className='nav-container'>
          <div className='logo-container'>
            Trackapps
          </div>
          <ul className='main-nav'>
            <li><Link to='/'>Applications</Link></li>
            <li><Link to='/contacts'>Contacts</Link></li>
            <li><Link to='/tasks'>Tasks</Link></li>
            <li><Link to='/overview'>Overview</Link></li>
            <li> | <button onClick={this.handleClick} className='logout-button' type='button'>{ this.state.login_string }</button></li>
          </ul>
        </nav>
        {
          this.props.children
        }
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainNav));