'use client'
import React from 'react'
import ToolCard from '../../components/toolCard'
import Controls from '../../public/controls.png'

export default function Tools() {

  return (
    <div className='flex flex-col md:flex-row justify-center items-center flex-wrap relative mt-10'>
      <ToolCard title='Referee Training App' description='Test' imageSrc={Controls} imageAlt='test' />
      <ToolCard title='Lawn Care App' description='Test' imageSrc={Controls} imageAlt='test 2' />
    </div>
  )
}