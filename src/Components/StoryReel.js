import React from 'react'
import { IconButton } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import Story from './Story'
import "../css/storyReel.css" 

import syed from '../image/syed.jpg';
import bill from '../image/bill.jpg';
import elon from '../image/elon.jpg';
import mark from '../image/mark.jpg';
import nelson from '../image/nelson.jpg';

import reel11 from '../image/reel-1.jpg';
import microsoft from '../image/microsoft.jpg';
import tesla from '../image/tesla.jpg';
import facebook from '../image/facebook.jpg';
import mandela from '../image/mandela.jpg';



function StoryReel() {
  
  return (
    <div  className="storyReel flex center">
      <Story profilesrc = {syed} image= {reel11} title ="Syed Noohu" color="blue"/>      
      <Story profilesrc = {bill} image= {microsoft} title ="Bill Gates" color="blue"/>      
      <Story profilesrc = {elon} image= {tesla} title ="Elon Musk" color="blue"/>      
      <Story profilesrc = {mark} image= {facebook} title ="Mark Zuckerburk" color="blue"/>      
      <Story profilesrc = {nelson} image= {mandela} title ="Nelson Mandela" color="blue"/>   


      <IconButton id="icon1">
          <ArrowForwardIcon id="icon"/>
      </IconButton>
    </div>
  )
}

export default StoryReel
