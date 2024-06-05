import React, { Component } from 'react'
import loader from './loader.gif';
export default class spiners extends Component {
  render() {
    return (
      <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
        <img src={loader} alt="loader" width={35} height={35}  />
      </div>
    )
  }
}
