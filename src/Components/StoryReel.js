import React from 'react'
import { IconButton } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import Story from './Story'
import "../css/storyReel.css" 
import photo from '../image/syed.jpg';

function StoryReel() {
  
  return (
    <div  className="storyReel flex center">
      <Story profilesrc = {photo} image= {photo} title ="Weather" color="blue"/>      
      <Story profilesrc = {photo} image= {photo} title ="Weather" color="blue"/>      
      <Story profilesrc = {photo} image= {photo} title ="Weather" color="blue"/>      
      <Story profilesrc = {photo} image= {photo} title ="Weather" color="blue"/>      
      <Story profilesrc = {photo} image= {photo} title ="Weather" color="blue"/>   


      <IconButton id="icon1">
          <ArrowForwardIcon id="icon"/>
      </IconButton>
    </div>
  )
}

export default StoryReel
