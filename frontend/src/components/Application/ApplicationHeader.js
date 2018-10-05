import React, { Component } from 'react'

export default class ApplicationHeader extends Component {
  render() {
    return (
      <div className='single-application__header'>
        <div className='single-application__header__logo'>
        <svg className='svg' width="178px" height="204px" viewBox="0 0 178 204" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <title>Hexagon logo</title>
            <desc>Hexagon logo with rounded corners</desc>
            <defs></defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <path d="M99,7.77350269 L165.60254,46.2264973 C171.790562,49.7991532 175.60254,56.4016936 175.60254,63.5470054 L175.60254,140.452995 C175.60254,147.598306 171.790562,154.200847 165.60254,157.773503 L99,196.226497 C92.8119785,199.799153 85.1880215,199.799153 79,196.226497 L12.3974596,157.773503 C6.20943809,154.200847 2.39745962,147.598306 2.39745962,140.452995 L2.39745962,63.5470054 C2.39745962,56.4016936 6.20943809,49.7991532 12.3974596,46.2264973 L79,7.77350269 C85.1880215,4.20084679 92.8119785,4.20084679 99,7.77350269 Z" id="Polygon" stroke="#FFFFFF" stroke-width="4"></path>
            </g>
        </svg>
          <div className='single-application__header__logo__letter'>{this.props.company.substr(0,1)}</div>
        </div>
        <div className='single-application__header__company'>{this.props.company}</div>
        <div className='single-application__header__title'>{this.props.title}</div>
      </div>
    )
  }
}
