'use client'
import { motion as m, AnimatePresence } from "framer-motion"

type MenuModalProps = {
  showMenuModal: boolean
  setShowMenuModal: (bool: boolean) => void
}

export default function MenuModal( props: MenuModalProps ) {
  const { showMenuModal, setShowMenuModal } = props

  const menuAnimation = {
    initial: {width: 0, opacity: 0},
    animate: {width: '300px', opacity: 1},
    exit: {width: 0, opacity: 0},
    transition: {duration: .2 , ease: "easeInOut"}
  }

  function handleModalClick(target: string) {
    console.log(target)
  }

  function handleModalKeypress(target: string, key: string) {
    console.log(target)
    console.log(key)
  }

  return (
    <m.div
    { ...menuAnimation } 
    key="menu-modal"
    className='flex justify-center items-start absolute bottom-0 z-10 w-[300px] h-full-minus-nav bg-menu-gray'>
      <m.div
      className="flex justify-center items-center absolute left-[85%] w-10 h-10 mt-[6px] bg-gray text-white text-2xl text-center font-bold rounded-full hover:cursor-pointer"
      key="close-div"
      onClick={() => setShowMenuModal(false)}
      onKeyPress={(event) => {event.key === 'Enter' && setShowMenuModal(false)}}
      tabIndex={0}>
        X
      </m.div>
      <m.ul
      {...menuAnimation} 
      key="menu-ul"
      className='flex flex-col w-full mt-12'
      tabIndex={-1}>
        <li 
        className='flex justify-center items-center w-full h-14 text-center text-white hover:cursor-pointer hover:bg-hover-gray hover:font-bold'
        key="li-one"
        tabIndex={0}
        onClick={() => handleModalClick('home')}>
          HOME
        </li>
        <li 
        className='flex justify-center items-center w-full h-14 text-center text-white hover:cursor-pointer hover:bg-hover-gray hover:font-bold'
        key="li-two"
        tabIndex={0}
        onClick={() => handleModalClick('tools')}>
          PORTFOLIO - TOOLS
        </li>
        <li 
        className='flex justify-center items-center w-full h-14 text-center text-white hover:cursor-pointer hover:bg-hover-gray hover:font-bold'
        key="li-three"
        tabIndex={0}
        onClick={() => handleModalClick('projects')}>
          PORTFOLIO - PROJECTS
        </li>
        <li 
        className='flex justify-center items-center w-full h-14 text-center text-white hover:cursor-pointer hover:bg-hover-gray hover:font-bold'
        key="li-four"
        tabIndex={0}
        onClick={() => handleModalClick('contact')}>
          CONTACT ME
        </li>
      </m.ul>
    </m.div>
  )  
}