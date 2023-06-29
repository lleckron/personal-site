'use client'
import { motion as m, AnimatePresence } from "framer-motion"

export default function MenuModal() {

    const menuAnimation = {
        initial: {width: 0, opacity: 0},
        animate: {width: '300px', opacity: 1},
        exit: {width: 0, opacity: 0},
        transition: {duration: .2 , ease: "easeInOut"}
    }

    return (
      <m.div 
      { ...menuAnimation } 
      key="menu-modal"
      className='flex justify-center items-start absolute bottom-0 z-10 w-[300px] h-full-minus-nav bg-menu-gray'>
        <m.ul
        {...menuAnimation} 
        key="menu-ul"
        className='flex flex-col w-full mt-10'>
          <li className='flex justify-center items-center w-full h-14 text-center text-white hover:cursor-pointer hover:bg-hover-gray hover:font-bold'>HOME</li>
          <li className='flex justify-center items-center w-full h-14 text-center text-white hover:cursor-pointer hover:bg-hover-gray hover:font-bold'>PORTFOLIO - TOOLS</li>
          <li className='flex justify-center items-center w-full h-14 text-center text-white hover:cursor-pointer hover:bg-hover-gray hover:font-bold'>PORTFOLIO - PROJECTS</li>
          <li className='flex justify-center items-center w-full h-14 text-center text-white hover:cursor-pointer hover:bg-hover-gray hover:font-bold'>CONTACT ME</li>
        </m.ul>
      </m.div>
    )
  }