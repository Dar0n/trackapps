import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewApplication extends Component {
  render() {
    return (
      <div className='new-application-container'>
        <form>
        <Link to='/'>Cancel</Link>
        <input type='submit' value='Create' />

        </form>
      </div>
    )
  }
}

export default NewApplication;