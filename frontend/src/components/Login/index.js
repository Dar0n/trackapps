import React, { Component } from 'react';
import './style.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  handleChange = (e) => {
    const value = e.target.value;
    const key = e.target.name;
    const newState = Object.assign({}, this.state, {[key]: value});
    this.setState(newState);
  }
  render() {
    return (
      <div>
        <form className='login-form' onSubmit={this.handleSubmit}>
          <h2 className='login-form__title'>Login</h2>
          <div className='login-form__field-container'>
            <label htmlFor="email">Enter your email: </label>
            <input 
              onChange={this.handleChange} 
              value={this.state.email} 
              type="text" 
              name="email" 
              id="email" 
              required 
              autoComplete="email"
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
