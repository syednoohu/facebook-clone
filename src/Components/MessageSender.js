import { Avatar } from '@material-ui/core'
import React from 'react'
import "../css/messageSender.css"
import photo from '../image/syed.jpg';
import SidebarRow from "./SidebarRow";
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import PeopleIcon from '@material-ui/icons/People';
import MoodIcon from '@material-ui/icons/Mood';

function MessageSender() {
  return (
    <div  className="messageSender flex center r">

      <div className="messageSender__top flex center g">
        <Avatar id = "icon" src={photo} alt=""/>
        <form className="flex center g">
          <input className ="messageSender__input" type="text" placeholder="What's on your mind, Syed?"/>
          <input className ="messageSender__image" type="text"placeholder="Image to Upload?"/>
          <button type="submit">Hide Submit</button>      
        </form>
      </div>
      
      
      
      <div className="messageSender__bottom flex center g">
        <SidebarRow Icon = {PhotoCameraIcon} title ="Photo/Video" color="blue"/>
        <SidebarRow Icon = {PeopleIcon} title ="Tag Friends"/>
        <SidebarRow Icon = {MoodIcon} title ="Feelings"/>
      </div>
    </div>
  )
}

export default MessageSender
