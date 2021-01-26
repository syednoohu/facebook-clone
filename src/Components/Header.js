import React from 'react';
import "../css/header.css" 
import SearchIcon from '@material-ui/icons/Search';
import Home from '@material-ui/icons/Home';
import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';

// import logo from '../css/logo.png';
// import logo from '../..image/logo.png';
import logo from './logo.png';
import photo from './syed.jpg';



function Header() {
  return (
    <div className='header flex center h'> 
      
      {/* Header Left */}
      <div className='header__left flex center g '> 
        <img src={logo} alt=""/>
        <div className="header__left--input flex center">
          <SearchIcon/>
          <input type="text" placeholder="Search Facebook"/>
        </div>
      </div>
 
      {/* Header Middle */}
      <div className='header__middle flex center g'> 

          <div className="header__middle--opt flex center ">
            <Home id="icon"/>
          </div>
          <div className="header__middle--opt active flex center ">
            <PlayArrowOutlinedIcon id="icon"/>
          </div>
          <div className="header__middle--opt flex center">
            <ShoppingCartOutlinedIcon id="icon"/>
          </div>
          <div className="header__middle--opt flex center">
            <GroupOutlinedIcon id="icon"/>
          </div>
          <div className="header__middle--opt flex center">
            <SportsEsportsOutlinedIcon id="icon"/>
          </div>
      </div>

      {/* Header right */}
      <div className='header__right flex center g'> 
        <div className='header__right--image flex center g '> 
          <Avatar id = "icon" src={photo} alt=""/>
          <p >
            Syed
          </p>
        </div>
        <IconButton>
          <AddIcon/>
        </IconButton>
        <IconButton>
          <MessageIcon/>
        </IconButton>
        <IconButton>
          <NotificationsIcon/>
        </IconButton>
        <IconButton>
          <ArrowDropDownOutlinedIcon/>
        </IconButton>
      </div>

    </div>
    
  )
}


export default Header
