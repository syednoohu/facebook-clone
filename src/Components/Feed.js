import React from 'react'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import "../css/feed.css" 

import post11 from '../image/post-11.jpg'
import post22 from '../image/post-22.jpg'
import post33 from  '../image/post-33.jpg'
import post44 from  '../image/post-44.jpg'
import post55 from  '../image/post-55.jpg'

function Feed() {
  return (
    <div  className="feed flex center">
      <StoryReel/>
      <MessageSender/>
      <Post image ={post11} desc = " 10 Spots to Savour the Best Sunset & Sunrise"/>
      <Post image ={post22} desc="A 2-minute trek from Mei Ho House Track, the peak of Garden Hill offers one of the best and most convenient views of the dusk and dawn skylines in Hong Kong"/>
      <Post image ={post33} desc="This 5-star hotel offers splendid panoramic views of sunsets and is a fancy spot to enjoy them. Perched on the top, at the 103rd floor of the International Centre, Ritz Carlton is your best bet for having amazing food, drinks as you gaze at the city's skyline from the glass windows."/>
      <Post image ={post44} desc = "Synonymous to Hong Kong's glory, the famous Peak Tower cannot deny being on anybody's list! It offers a 360-degree all-rounder view of the city, making it one of the best spots to marvel at the sunrise and sunset hues of the already gorgeous skyline. Situated at 522 meters above the sea-level, this is a must on every person's itinerary."/>
      <Post image ={post55} desc = "Doing absolute justice to its name, the West District Public Cargo Depot which was a container terminal has been named Instagram Pier because of the unparalleled and unobstructed views it provides of the city's skyline, horizon and sunset. The aesthetic is further beautified by the industrial charm and clear waters making this a fan favourite spot for all photography enthusiasts! "/>

    
    </div>
  )
}

export default Feed
