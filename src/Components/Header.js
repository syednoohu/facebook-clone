import React from 'react';
import "../css/Header.css" 
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
    <div className='header flex h'> 
      
      {/* Header Left */}
      <div className='header__left flex g '> 
        <img src={logo} alt=""/>
        <div className="header__left--input flex">
          <SearchIcon/>
          <input type="text" placeholder="Search Facebook"/>
        </div>
      </div>
 
      {/* Header Middle */}
      <div className='header__middle flex g'> 

          <div className="header__middle--opt active ">
            <Home id="icon"/>
          </div>
          <div className="header__middle--opt flex  ">
            <PlayArrowOutlinedIcon id="icon"/>
          </div>
          <div className="header__middle--opt flex">
            <ShoppingCartOutlinedIcon id="icon"/>
          </div>
          <div className="header__middle--opt flex ">
            <GroupOutlinedIcon id="icon"/>
          </div>
          <div className="header__middle--opt flex ">
            <SportsEsportsOutlinedIcon id="icon"/>
          </div>
      </div>

      {/* Header right */}
      <div className='header__right flex g'> 
        <div className='header__right--image flex g '> 
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
