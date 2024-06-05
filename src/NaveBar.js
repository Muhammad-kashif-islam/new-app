import React, { Component } from 'react'
import './App.css'
import { NavLink } from 'react-router-dom';
export default class NaveBar extends Component {
    constructor(){
        super(); //alway use this 
    } 
    open = ()=>{
      let bars = document.getElementById("open"); 
      var menus = document.querySelector("section .menus");
      
      if(bars.innerHTML=="Menus")
      {
      bars.innerHTML='Close';
      menus.style.marginLeft="-31px";
      }
      else if(bars.innerHTML=="Close"){
      bars.innerHTML='Menus';
      menus.style.marginLeft="-1000px";
      }
     }
     openn = ()=>{
      let bars = document.getElementById("open"); 
      var menus = document.querySelector("section .menus");
      
      if(bars.innerHTML=="Menus")
      {
    
      }
      else if(bars.innerHTML=="Close"){
      bars.innerHTML='Menus';
      menus.style.marginLeft="-1000px";
      }
     }
  render() {
    return (
        <section id="nav">
        <div><NavLink to="/" className="logo">Ashi's</NavLink></div>
        <div className="menus">
            <ul>
                <li onClick={this.openn}> <NavLink className='hrefLinks' to ="/business">Bussiness </NavLink></li>
                <li onClick={this.openn}><NavLink className='hrefLinks' to ="/health">Health</NavLink></li>
                <li onClick={this.openn}><NavLink className='hrefLinks' to ="/science">Science</NavLink></li>
                <li onClick={this.openn}> <NavLink className='hrefLinks'to ="/sports">Sports</NavLink></li>
                <li onClick={this.openn}><NavLink className='hrefLinks' to ="/technology">Technology</NavLink></li>
                
            </ul>
        </div>
        <div id="openClose">
            <span id="open" onClick={this.open}>Menus</span>
        </div>
     </section>
    )
  }
}
