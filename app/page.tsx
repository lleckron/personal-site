'use client'
import React, { useState } from 'react'
import Header from './header'
import CloudBackground from './cloud-background'
import Introduction from './introduction'
import { motion as m, AnimatePresence } from "framer-motion"

export default function Home() {
  const [showMenuModal, setShowMenuModal] = useState(false)

  const menuAnimation = {
    initial: {width: 0, opacity: 0},
    animate: {width: '300px', opacity: 1},
    exit: {width: 0, opacity: 0},
    transition: {duration: .2 , ease: "easeInOut"}
  }

  function MenuModal() {

    return (
      <m.div 
      {...menuAnimation} 
      key="menu-modal"
      className='flex justify-center items-start absolute bottom-0 z-10 w-[300px] h-full-minus-nav bg-off-white border-[1px] border-r-black'>
        <AnimatePresence>
          <m.ul
          {...menuAnimation} 
          key="menu-ul"
          className='flex flex-col w-full'>
            <li className='w-full text-center'>Home</li>
            <li>Portfolio</li>
            <li>Contact Me</li>
          </m.ul>
        </AnimatePresence>
      </m.div>
    )
  }

  return (
    <>
      <Header showMenuModal={ showMenuModal } setShowMenuModal={ setShowMenuModal }/>
      <div className='flex justify-center items-center relative w-full h-full-minus-nav'>
        <Introduction />

        <CloudBackground />
      </div>
      <AnimatePresence>
        {showMenuModal && <MenuModal />}
      </AnimatePresence>
    </>
  )
}
