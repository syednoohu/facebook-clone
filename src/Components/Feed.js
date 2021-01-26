import React from 'react'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import "../css/feed.css" 
function Feed() {
  return (
    <div  className="feed flex center">
      <StoryReel/>
      <MessageSender/>
      <Post/>
    </div>
  )
}

export default Feed
