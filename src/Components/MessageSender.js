import { Avatar } from '@material-ui/core'
import React from 'react'
import "../css/messageSender.css"
import photo from './syed.jpg';

function MessageSender() {
  return (
    <div  className="messageSender flex center">
      <div className="messageSender__top flex center">
        <Avatar id = "icon" src={photo} alt=""/>
        <form >
          <input className ="messageSender__input" type="text" placeholder="What's on your mind, Syed?"/>
          <input className ="messageSender__image" type="text" title=" " value=""/>
          <button type="submit">Hide Submit</button>      
        </form>
      </div>
      
      
      
      <div className="messageSender__bottom flex center"></div>




      </div>
  )
}

export default MessageSender
