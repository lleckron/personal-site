import React from 'react'
import ToolCard from '../../components/toolCard'
//import VideoShadowEffect from '../../public/video-shadow-effect.png'
//import Controls from '../../public/controls.png'
import Link from 'next/link'

export default function Tools() {

  return (
    <div className='flex flex-col md:flex-row justify-center items-center flex-wrap relative mt-10'>
      <Link href='/tools/shadow-effect'>
        <ToolCard 
        title='Video Shadow Effect' 
        description='Adds some life to a page by adding a shadow based on the colors in a video.' 
        imageSrc='https://leckron-17032.web.app/video-shadow-effect.png'
        imageAlt='Video Shadow Effect' />
      </Link>

      <Link href='/tools/video-controls'>
      <ToolCard 
        title='Custom Video Controls' 
        description='Includes timestamping and custom elapsed bar and time seeker.' 
        imageSrc='https://leckron-17032.web.app/controls.png'
        imageAlt='Custom Video Controls' />
      </Link>
    </div>
  )
}