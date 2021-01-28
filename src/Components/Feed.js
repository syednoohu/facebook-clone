import React from 'react'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import "../css/feed.css" 

import photo from './syed.jpg';
import post1 from './post-1.jpg'
import post2 from './post-2.jpg'
import post3 from './post-3.jpg'
import post4 from './post-4.jpg'
import post5 from './post-1.jpg'

function Feed() {
  return (
    <div  className="feed flex center">
      <StoryReel/>
      <MessageSender/>
      <Post image ={post1}/>
      <Post image ={post2}/>
      <Post image ={post3}/>
      <Post image ={post4}/>
      <Post image ={post5}/>

    
    </div>
  )
}

export default Feed
