import React from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import photo from '../image/syed.jpg';
import "../css/story.css" 
function Story({profilesrc, image, title, color}) {
  return (
    <div className="story  flex center" >
      <div className="story__imageContainer">
        <img src={image} alt="" className="story_image "/>
      </div>
      <Avatar className = "icon" id = "icon" src={profilesrc} alt="" />
      <h4>{title}</h4>
    </div>

  )
}

export default Story
