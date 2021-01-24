import React from 'react';
import "../css/Header.css" 
import SearchIcon from '@material-ui/icons/Search';
import Home from '@material-ui/icons/Home';
import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';

// import logo from '../css/logo.png';
// import logo from '../..image/logo.png';
import logo from './logo.png';
function Header() {
  return (
    <div className='header flex'> 
      
      {/* Header Left */}
      <div className='header__left flex l'> 
        <img src={logo} alt=""/>
        <div className="header__left--input flex">
          <SearchIcon/>
          <input type="text" placeholder="Search Facebook"/>
        </div>
      </div>
 
      {/* Header Middle */}
      <div className='header__middle flex '> 

          <div className="header__middle--opt active">
            <Home id="icon"/>
          </div>
          <div className="header__middle--opt ">
            <PlayArrowOutlinedIcon id="icon"/>
          </div>
          <div className="header__middle--opt">
            <ShoppingCartOutlinedIcon id="icon"/>
          </div>
          <div className="header__middle--opt">
            <GroupOutlinedIcon id="icon"/>
          </div>
          <div className="header__middle--opt">
            <SportsEsportsOutlinedIcon id="icon"/>
          </div>
      </div>

      {/* Header right */}
      <div className='header__right flex l'> 
        c
      </div>

    </div>
    
  )
}


export default Header
