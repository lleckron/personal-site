'use client'
import React, { useState } from 'react'
import Header from './header'
import CloudBackground from './cloud-background'
import Introduction from './introduction'
import MenuModal from './menu-modal'
import { motion as m, AnimatePresence } from "framer-motion"

export default function Home() {
  const [showMenuModal, setShowMenuModal] = useState(false)

  return (
    <>
      <Header showMenuModal={ showMenuModal } setShowMenuModal={ setShowMenuModal }/>
      <div className='flex justify-center items-center relative w-full h-full-minus-nav'>
        <Introduction />
        <CloudBackground />
      </div>
      <AnimatePresence>
        {showMenuModal && <MenuModal showMenuModal={ showMenuModal } setShowMenuModal={ setShowMenuModal }/>}
      </AnimatePresence>
    </>
  )
}
