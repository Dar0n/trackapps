import React from 'react';
import './style.css';

const ErrorPage = (props) => {
  let message = '';
  if (props.reason === 'unauthorisedAccess') {
    message = 'The page you requested is only for authorized users. Please, log in.';
  }
  return (
    <div className='error-page-container'>
      <p className='error-page-message'>{message}</p>
    </div>
  )
}

export default ErrorPage;