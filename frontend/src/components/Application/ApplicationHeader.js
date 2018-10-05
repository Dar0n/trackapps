import React, { Component } from 'react'

export default class ApplicationHeader extends Component {
  render() {
    return (
      <div className='single-application__header'>
          <div className='single-application__header__company'>{this.props.company}</div>
          <div className='single-application__header__title'>{this.props.title}</div>
      </div>
    )
  }
}
