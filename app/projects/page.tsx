'use client'
import React from 'react'
import ToolCard from '../../components/toolCard'
//import RightCall from '../../public/right-call.png'
//import LawnCare from '../../public/lawn-care.png'

export default function Tools() {

  return (
    <div className='flex flex-col md:flex-row justify-center items-center flex-wrap relative mt-10'>
      <ToolCard title='Referee Training App' description='A dynamic quiz app that utilizes eye tracking to answer questions.' imageSrc='https://leckron-17032.web.app/right-call.png' imageAlt='test' />
      <ToolCard title='Lawn Care App' description='A template site, including responsive design, SEO, and ADA compliance.' imageSrc='https://leckron-17032.web.app/lawn-care.png' imageAlt='test 2' />
    </div>
  )
}