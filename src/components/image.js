import React from 'react'
import VideoLooper from 'react-video-looper'
import Video from "../images/size_intro.mp4"
 
export default function Demo() {
  return (
    <div>
      <VideoLooper objectFit="contain" width="100%" height='auto' source={Video} start={0} end={6}/>
    </div>
  )
}