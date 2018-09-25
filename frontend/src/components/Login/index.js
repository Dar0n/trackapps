import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../actions/setCurrentUser';
import { withRouter } from 'react-router-dom'
import './style.css';

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (state, pushFunction) => dispatch(setCurrentUser(state, pushFunction)),
})

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  handleChange = (e) => {
    const value = e.target.value;
    const key = e.target.name;
    const newState = Object.assign({}, this.state, {[key]: value});
    this.setState(newState);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.props.history.push);
    this.props.setCurrentUser(this.state, this.props.history.push);
  }
  render() {
    return (
      <div>
        <form className='login-form' onSubmit={this.handleSubmit}>
          <h2 className='login-form__title'>Login</h2>
          <div className='login-form__field-container'>
            <label htmlFor="username">Enter your email: </label>
            <input 
              onChange={this.handleChange} 
              value={this.state.email} 
              type="text" 
              name="username" 
              id="username" 
              required 
              autoComplete="username"
            />
          </div>
          <div className='login-form__field-container'>
          <label htmlFor="[password]">Enter your password: </label>
            <input 
              onChange={this.handleChange} 
              value={this.state.password} 
              type="password" 
              name="password" 
              id="password" 
              required 
              autoComplete="password"
            />
          </div>
          <input type='submit' className='login-form__submit-button' value='Log in' />
        </form>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));