import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { sendNewApplication } from '../../actions/sendNewApplication';
import { withRouter } from 'react-router-dom';
import { removeEmptyProperties } from '../../helpers/removeEmptyProperties';
import './style.css';

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => ({
  sendNewApplication: (data) => dispatch(sendNewApplication(data))
})

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
      comments: '',
    };
    this.submitAction = this.submitAction.bind(this);
  }
  handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    const newState = Object.assign({}, this.State, {[key]:value});
    this.setState(newState);
  }
  async submitAction(e) {
    e.preventDefault();
    const newState = removeEmptyProperties(this.state, 'date_applied', 'response_date');
    await this.props.sendNewApplication(newState);
    this.props.history.push('/');
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
          <label htmlFor="company">Enter company name:* </label>
          <input 
            onChange={this.handleChange} 
            value={this.state.company} 
            type="text" name="company" 
            id="company" 
            required 
          />
        </div>
        <div className="new-application-form__field-container">
          <label htmlFor="title">Enter job title:* </label>
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
          <label htmlFor="application_state">Status of the application:* </label>
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
        <div className="new-application-form__field-container new-application-form__field-container-comments">
          <label htmlFor="comments">Additional comments: </label>
          <textarea 
          onChange={this.handleChange} 
          value={this.state.comments} 
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewApplication));