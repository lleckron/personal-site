'use client'
import React from 'react'
import ToolCard from '../../components/toolCard'
import VideoShadowEffect from '../../public/video-shadow-effect.png'
import Controls from '../../public/controls.png'
import Link from 'next/link'

export default function Tools() {

  return (
    <div className='flex flex-col md:flex-row justify-center items-center flex-wrap relative mt-10'>
      <Link href='/shadow-effect'>
        <ToolCard 
        title='Video Shadow Effect' 
        description='Adds some life to a page by adding a shadow based on the colors in a video.' 
        imageSrc={VideoShadowEffect} 
        imageAlt='Video Shadow Effect' />
      </Link>

      <ToolCard 
      title='Custom Video Controls' 
      description='Includes timestamping and custom elapsed bar and time seeker.' 
      imageSrc={Controls} 
      imageAlt='Custom Video Controls' />
    </div>
  )
}