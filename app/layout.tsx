'use client'
import './globals.css'
import React, { useState } from 'react'
import MenuModal from './menu-modal'
import { AnimatePresence } from "framer-motion"
import Header from './header'
import HeadData from './headData'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [showMenuModal, setShowMenuModal] = useState(false)

  return (
    <html lang="en">
      <HeadData />
      <body>
        <Header showMenuModal={showMenuModal} setShowMenuModal={setShowMenuModal} />
        {children}
        <AnimatePresence>
          {showMenuModal && <MenuModal setShowMenuModal={setShowMenuModal} />}
        </AnimatePresence>
      </body>
    </html>
  )
}
