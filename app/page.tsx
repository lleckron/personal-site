'use client'
import React from 'react'
import CloudBackground from './cloud-background'
import Introduction from './introduction'

export default function Home() {

  return (
    <div className='flex justify-center items-center relative w-full h-full-minus-nav'>
      <Introduction />
      <CloudBackground />
    </div>
  )
}
