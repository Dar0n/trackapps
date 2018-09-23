import React, { Component } from 'react';
import './style.css';

export default class AppFilter extends Component {
  render() {
    return (
      <div className='applications__filter-list-container'>
        <ul className='applications__filter-list'>
          <li className='applications__filter__li applications__filter__sortby'>Sort by</li>
          <li className='applications__filter__li applications__filter__li--active'>Status</li>
          <li className='applications__filter__li'>Application date</li>
          <li className='applications__filter__li'>Response date</li>
        </ul>
      </div>
    )
  }
}
