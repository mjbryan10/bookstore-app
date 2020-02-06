import React, { Component } from 'react'

export default class ScrollUp extends Component {
    render() {
        return (
            <div style={scrollContainer} >
                <a href="#" style={scrollText} >&#8250;</a>
            </div>
        )
    }
}
//STYLES 
const scrollContainer = {
    display: 'block',
    height: '50px',
    width: '50px',
    'z-index': '100',
    position: 'fixed',
    right:'0',
    bottom:'25px',
    'margin-right': '-50px',
    transition: '.5s ease',
    opacity: '0'
}
const scrollText = {
    transform: 'rotate(-90deg)',

  /* Legacy vendor prefixes:*/
  /* Safari */
  '-webkit-transform': 'rotate(-90deg)',

  /* Firefox */
  '-moz-transform': 'rotate(-90deg)',

  /* IE */
  '-ms-transform': 'rotate(-90deg)',

  /* Opera */
  '-o-transform': 'rotate(-90deg)',

  /* Internet Explorer */
  filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=3)'
}