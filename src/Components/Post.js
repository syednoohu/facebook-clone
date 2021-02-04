import { Avatar,IconButton } from '@material-ui/core'
import React from 'react'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

import SidebarRow from "./SidebarRow";



import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import "../css/post.css" ;
function Post({image,desc}) {
  return (
    <div  className="post flex center g">
      {/* Top */}
      <div className="post__top flex center r">
        <Avatar id = "icon" src={image} alt=""/>
        <div className="post__top--info">
          <h4>Name</h4> 
          <p>timeStamp</p>
        </div>
        <div className="post__top--more">
          <IconButton>
            <MoreHorizIcon/>
          </IconButton>
        </div>
      </div>
     
      {/* Message */}
      <div className="post__message r">
        {desc}
      </div>
    
      {/* Image */}
      <div className="post__image r">
        <img src={image} alt=""/>
      </div>
    
      {/* Bottom */}
      <div className="post__bottom flex  r">
        <div className="post__bottom--top flex center g">
        
          <div className="post__bottom--top-left flex center   g">
             <ThumbUpAltOutlinedIcon/>
            <FavoriteBorderOutlinedIcon />
            <InsertEmoticonIcon />
            <SentimentVeryDissatisfiedIcon/>
            <span>57</span>
          </div>
          <div className="post__bottom--top--right  g">
          <span>57</span> Comments
          </div>

        </div>
        <div className="post__bottom--bottom flex center b">
          <SidebarRow Icon = {ThumbUpAltOutlinedIcon} title ="Like" color="blue"/>
          <SidebarRow Icon = {ChatBubbleOutlineOutlinedIcon} title ="comments"/>
          <SidebarRow Icon = {ShareOutlinedIcon} title ="Share"/>
        </div>
      
      </div>

    </div>



  )
}

export default Post
