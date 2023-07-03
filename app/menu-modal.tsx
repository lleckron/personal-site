'use client'
import { motion as m } from "framer-motion"
import Link from "next/link"

type MenuModalProps = {
  setShowMenuModal: (bool: boolean) => void
}

export default function MenuModal( props: MenuModalProps ) {
  const { setShowMenuModal } = props

  const menuItems = [
    {
      id: 'home',
      link: '/',
      displayText: 'HOME'
    },
    {
      id: 'tools',
      link: '/tools',
      displayText: 'PORTFOLIO - TOOLS'
    },
    {
      id: 'projects',
      link: '/projects',
      displayText: 'PORTFOLIO - PROJECTS'
    },
    {
      id: 'contact',
      link: '/contact',
      displayText: 'CONTACT ME'
    },
  ]

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

      <m.div
      className="flex justify-center items-center absolute left-[85%] w-10 h-10 mt-[6px] pb-[2px] bg-gray text-white text-2xl text-center font-bold rounded-full hover:cursor-pointer"
      key="close-div"
      onClick={() => setShowMenuModal(false)}
      onKeyDown={(event) => { event.key === 'Enter' && setShowMenuModal(false) }}
      tabIndex={0}>
        X
      </m.div>
      <m.ul
      {...menuAnimation} 
      key="menu-ul"
      className='flex flex-col w-full mt-12'
      tabIndex={-1}>
        {menuItems.map((item) => (
          <Link 
          href={item.link}
          key={item.id}
          onClick={() => setShowMenuModal(false)}
          onKeyDown={(event) => { event.key === 'Enter' && setShowMenuModal(false) }}>
            <li className='flex justify-center items-center w-full h-14 text-center text-white hover:cursor-pointer hover:bg-hover-gray hover:font-bold'>
              {item.displayText}
            </li>
          </Link>
        ))}
      </m.ul>

    </m.div>
  )  
}