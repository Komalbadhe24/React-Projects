import React, { Component } from 'react'
import spin from './spinner.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={spin} alt='loading' className='d-block mx-auto m-3'/>

      </div>
    )
  }
}
