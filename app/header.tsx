'use client'
import React, { useState } from 'react'
import Image from "next/image"
//import Logo from '../public/ll-logo.png'

type HeaderProps = {
  showMenuModal: boolean
  setShowMenuModal: (bool: boolean) => void
}

export default function Header(props: HeaderProps) {
  const { showMenuModal, setShowMenuModal } = props

  return (
    <header className="flex justify-center relative w-full min-w-[300px] h-12 bg-off-white shadow-md z-10">
      <nav className="flex flex-row justify-between items-center w-3/4 h-full">

        <div className="flex h-full w-5">
          <button
            className="flex flex-col justify-center items-center relative w-full [&>*:nth-child(2)]:mt-1 [&>*:nth-child(2)]:mb-1"
            onClick={() => setShowMenuModal(!showMenuModal)}
            aria-label='Menu'>
            <span className="bg-black w-full h-[3px] rounded-sm"></span>
            <span className="bg-black w-full h-[3px] rounded-sm"></span>
            <span className="bg-black w-full h-[3px] rounded-sm"></span>
          </button>
        </div>

        <div className="flex justify-center items-center h-full w-10">
          <Image className="w-8 h-8" src='https://leckron-17032.web.app/ll-logo.png' width={32} height={32} alt="logo" priority={true} unoptimized />
        </div>

      </nav>
    </header>
  )
}