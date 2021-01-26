import React from 'react'
import SidebarRow from "./SidebarRow";
import photo from './syed.jpg';

import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import GroupIcon from '@material-ui/icons/Group';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import PagesIcon from '@material-ui/icons/Pages';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


import "../css/sidebar.css" 

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow src = {photo} title ="Mytitle"/>
      <SidebarRow Icon = {LocalHospitalIcon} title ="Health" color="blue"/>
      <SidebarRow Icon = {WbSunnyIcon} title ="Weather"/>
      <SidebarRow Icon = {GroupIcon} title ="Freinds"/>
      <SidebarRow Icon = {BookmarkIcon} title ="Book"/>
      <SidebarRow Icon = {PagesIcon} title ="Saved"/>

      <SidebarRow Icon = {ExpandMoreIcon} title ="More"/>
      <SidebarRow Icon = {ExpandLessIcon} title ="Less"/>
     

    </div>
  )
}

export default Sidebar
