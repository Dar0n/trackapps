import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class NewApplication extends Component {
  constructor(props) {
    super(props);
    this.state={
      company: '',
      title: '',
      date_applied: '',
      application_state: '',
      response_date: '',
      response: '',
      comment: '',
    };
  }
  handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    const newState = Object.assign({}, this.State, {[key]:value});
    this.setState(newState);
  }
  submitAction = (e) => {
    e.preventDefault();
    console.log(this.state);
    // Here will come an action creator to send new application to the server.
  }
  render() {
    return (
      <div className='new-application-form-container'>
        <form className='new-application-form' onSubmit={this.submitAction}>
        <div className='new-application-form__buttons'>
          <Link to='/' className='new-application-form__cancel-button'>Cancel</Link>
          <input type='submit' value='Create' className='new-application-form__submit-button' />
        </div>
        <div className="new-application-form__field-container">
          <label htmlFor="company">Enter company name: </label>
          <input 
            onChange={this.handleChange} 
            value={this.state.company} 
            type="text" name="company" 
            id="company" 
            required 
          />
        </div>
        <div className="new-application-form__field-container">
          <label htmlFor="title">Enter job title: </label>
          <input 
            onChange={this.handleChange} 
            value={this.state.title} 
            type="text" 
            name="title" 
            id="title" 
            required 
          />
        </div>
        {/* TODO: add form validation for safari and IE or/and provide calendar picker */}
        <div className="new-application-form__field-container">
          <label htmlFor="date_applied">Date applied: </label>
          <input 
            onChange={this.handleChange} 
            value={this.state.date_applied} 
            type="date" 
            id="date_applied" 
            name="date_applied"
            min="2010-01-01" 
            max="2028-12-31" 
          />
        </div>
        <div className="new-application-form__field-container">
          <label htmlFor="application_state">Status of the application: </label>
          <input 
            onChange={this.handleChange} 
            value={this.state.application_state} 
            type="text" 
            name="application_state" 
            id="application_state" 
            required 
          />
        </div>
        <div className="new-application-form__field-container">
          <label htmlFor="response_date">Date of response: </label>
          <input 
            onChange={this.handleChange} 
            value={this.state.response_date} 
            type="date" 
            id="response_date" 
            name="response_date"
            min="2010-01-01" 
            max="2028-12-31" 
          />
        </div>
        <div className="new-application-form__field-container new-application-form__field-container-response">
          <label htmlFor="response">Response message: </label>
          <textarea 
            onChange={this.handleChange} 
            value={this.state.response} 
            type="text" 
            name="response" 
            id="response" 
            rows='5' 
          />
        </div>
        <div className="new-application-form__field-container new-application-form__field-container-comment">
          <label htmlFor="comment">Additional comment: </label>
          <textarea 
          onChange={this.handleChange} 
          value={this.state.comment} 
          type="text" 
          name="comment" 
          id="comment" 
          rows='5' 
        />
        </div>
        </form>
      </div>
    )
  }
}

export default NewApplication;