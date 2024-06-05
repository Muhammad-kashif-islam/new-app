import React, { Component } from 'react'
import './App.css'
export default class NewsItem extends Component {
  render() {
    let {title,descrption,img,url} = this.props;
    return (
<>
           <div className="newsimg"> <img src={img} /></div>
            <div className='detail'>
                <h3 className='title'>{title}</h3>
                <p className='des'>{descrption}</p>
               <a href={url} target='_blank'> <button>Read More</button></a>
            </div> 
        </>
        
    )
  }
}
