import React from 'react'
import AmbientVideo from '../../../public/ambient-480p.mp4'

export default function Tools() {

  function VideoPlayer() {

    return (
      <div className='flex relative w-3/4 h-3/4'>
        <video 
        className='h-full w-full transition-[shadow] duration-[35]'
        id='ambient-video'
        src={ AmbientVideo }
        loop
        muted
        autoPlay/>
      </div>
    )
  }

  return (
    <VideoPlayer />
  )
}