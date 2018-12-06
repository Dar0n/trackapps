import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { sendNewApplication } from '../../actions/sendNewApplication';
import { withRouter } from 'react-router-dom';
import { removeEmptyProperties } from '../../helpers/removeEmptyProperties';
import { checkIfLoggedIn } from '../../helpers/checkIfLoggedIn';
import { updateApplication } from '../../actions/updateApplication';

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => ({
  sendNewApplication: (data) => dispatch(sendNewApplication(data)),
  updateApplication: (jobID, newData) => dispatch(updateApplication(jobID, newData)),
})


class ApplicationForm extends Component {
  constructor(props){
    super(props);
    this.submitAction = this.submitAction.bind(this);
  }

  handleChange = (e) => {
    this.props.handleChange(e);
  }
  
  async submitAction(e) {
    e.preventDefault();
    // Removing empty string dates, because database doesn't accept these fields as empty strings.
    const newState = removeEmptyProperties(this.props.payload, 'date_applied', 'response_date');
    const loggedIn = checkIfLoggedIn();
    if (loggedIn) {
      if (this.props.isNewApplication) {
        await this.props.sendNewApplication(newState);
      }
      else {
        console.log('new State>>>>', newState);
        await this.props.updateApplication(this.props.jobID, newState);
      }
      this.props.history.push('/');
    }
    else {
      alert('Sorry, your session has been expired. Your last application has not been added.')
      this.props.history.push('/');
    }
  }
  render() {
    const rand = require("random-key");
    console.log(this.props);
    const options = ['Applied', 'Rejected', 'Wishlist', 'Phone interview', 'Office interview', 'Offer'];
    return (
      <div className='new-application-form-container'>
        <form className='new-application-form' onSubmit={this.submitAction}>
        <div className='new-application-form__buttons'>
          <Link to='/' className='new-application-form__cancel-button'>Cancel</Link>
          <input type='submit' value={ this.props.isNewApplication ? 'Create' : 'Save' } className='new-application-form__submit-button' />
        </div>
        <div className="new-application-form__field-container">
          <label htmlFor="company">Enter company name:* </label>
          <input 
            onChange={this.handleChange} 
            value={ !this.props.payload.company ? '' : this.props.payload.company } 
            type="text" name="company" 
            id="company" 
            required 
          />
        </div>
        <div className="new-application-form__field-container">
          <label htmlFor="title">Enter job title:* </label>
          <input 
            onChange={this.handleChange} 
            value={ !this.props.payload.title ? '' : this.props.payload.title } 
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
            value={ !this.props.payload.date_applied ? '' : this.props.payload.date_applied} 
            type="date" 
            id="date_applied" 
            name="date_applied"
            min="2010-01-01" 
            max="2028-12-31" 
          />
        </div>
        <div className="new-application-form__field-container">
          <label htmlFor="application_state">Status of the application:* </label>
          <select name='application_state' id='application_state' onChange={this.handleChange} value={ !this.props.payload.application_state ? '' : this.props.payload.application_state }>
            {
              options.map(option => {
                return <option key={rand.generate(10)}>{option}</option>;
              })
            }
          </select>
        </div>
        <div className="new-application-form__field-container">
          <label htmlFor="response_date">Date of response: </label>
          <input 
            onChange={this.handleChange} 
            value={ !this.props.payload.response_date ? '' : this.props.payload.response_date }
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
            value={ !this.props.payload.response ? '' : this.props.payload.response } 
            type="text" 
            name="response" 
            id="response" 
            rows='5' 
          />
        </div>
        <div className="new-application-form__field-container new-application-form__field-container-comments">
          <label htmlFor="comments">Additional comments: </label>
          <textarea 
          onChange={this.handleChange} 
          value={ !this.props.payload.comments ? '' : this.props.payload.comments } 
          type="text" 
          name="comments" 
          id="comments" 
          rows='5' 
        />
        </div>
        </form>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ApplicationForm));