import React from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import photo from './syed.jpg';


import "../css/sidebarRow.css" 
function SidebarRow({src, Icon, title, color}) {
  return (
    <div className="sidebarRow  flex center ">
          {src && <Avatar className = "icon" id = "icon" src={src} alt="" />}
          {Icon && <Icon id = "icon" />}
          <p >{title}</p>
        </div>
  )
}

export default SidebarRow
