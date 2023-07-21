'use client'
import React, { useState, useEffect, useRef } from "react"
import Image, { StaticImageData } from "next/image"
import { AnimatePresence, motion as m } from "framer-motion"
import Settings from '../../../public/settings.png'
import Loop from '../../../public/loop.png'
import CheckMark from '../../../public/checkmark.png'
import Quality from '../../../public/quality.png'
import PlaybackSpeed from '../../../public/playback-speed.png'


type VideoVolumeProps = {
  videoRef: React.RefObject<HTMLVideoElement>
  controlsRef: React.RefObject<HTMLDivElement>
  loopVideo: boolean
  setLoopVideo: (state: boolean) => void
  currentQuality: string
  setCurrentQuality: (quality: string) => void
  currentPlaybackSpeed: string
  setCurrentPlaybackSpeed: (speed: string) => void
}

type SettingsListItemProps = {
  toggleFunction: () => void
  name: string
  imageSrc: StaticImageData
  condition?: boolean
  information?: string
}

type ExpandedMenuListProps = {
  toggleFunction: (newValue: string) => void
  options: Array<string>
}

export default function VideoSettings(props: VideoVolumeProps) {
  const { videoRef, controlsRef, loopVideo, setLoopVideo, currentQuality, setCurrentQuality, currentPlaybackSpeed, setCurrentPlaybackSpeed } = props
  const [showSettings, setShowSettings] = useState<boolean>(false)
  const [showExpandedMenu, setShowExpandedMenu] = useState<boolean>(false)
  const [expandedMenuType, setExpandedMenuType] = useState<string>('')
  const settingsRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    const closeSettingsMenu = (event: MouseEvent) => {
      const targetNode = event.target as Node
      if (controlsRef.current && (targetNode === controlsRef.current || controlsRef.current.contains(targetNode))) {
        setShowSettings(false)
        setShowExpandedMenu(false)
        setExpandedMenuType('')
      }
    }
    if (showSettings) {
      document.addEventListener('click', closeSettingsMenu)
    }

    return () => {
      document.removeEventListener('click', closeSettingsMenu)
    }
  }, [showSettings, controlsRef])

  function SettingsMenu() {
    const qualityOptions = ['480p', '720p', '1080p']
    const playbackOptions = ['.5', '.75', '1', '1.25', '1.5']

    function toggleLoopVideo() {
      setLoopVideo(!loopVideo)
      setShowSettings(false)
    }

    function toggleExpandMenu(type: string) {
      if (showExpandedMenu) {
        setExpandedMenuType('')
        setShowExpandedMenu(false)
      } else {
        setExpandedMenuType(type)
        setShowExpandedMenu(true)
      }
    }

    function toggleQuality(quality: string) {
      console.log(quality)
      setCurrentQuality(quality)
      setExpandedMenuType('')
      setShowExpandedMenu(false)
    }

    function togglePlaybackSpeed(speed: string) {
      const newSpeed = speed + 'x'

      if (videoRef.current) {
        videoRef.current.playbackRate = parseFloat(speed)
        setCurrentPlaybackSpeed(newSpeed)
        setExpandedMenuType('')
        setShowExpandedMenu(false)
      }

    }

    return (
      <div
        className="absolute bottom-[110%]"
        ref={settingsRef}>
        {!showExpandedMenu &&
          <ul className="flex flex-col items-center justify-center text-white w-32 h-24 md:w-40 md:h-32 bg-gray bg-opacity-40 rounded-md">
            <SettingsListItem
              toggleFunction={() => toggleLoopVideo()}
              name='Loop'
              imageSrc={Loop}
              condition={loopVideo} />
            <SettingsListItem
              toggleFunction={() => toggleExpandMenu('quality')}
              name='Quality'
              imageSrc={Quality}
              information={currentQuality} />
            <SettingsListItem
              toggleFunction={() => toggleExpandMenu('playback')}
              name='Play Speed'
              imageSrc={PlaybackSpeed}
              information={currentPlaybackSpeed} />
          </ul>
        }
        {(showExpandedMenu && expandedMenuType === 'quality') && (
          <ExpandedMenuList
            toggleFunction={toggleQuality}
            options={qualityOptions} />
        )}
        {(showExpandedMenu && expandedMenuType === 'playback') && (
          <ExpandedMenuList
            toggleFunction={togglePlaybackSpeed}
            options={playbackOptions} />
        )}
      </div>
    )
  }

  function SettingsListItem(props: SettingsListItemProps) {
    const { toggleFunction, name, imageSrc, condition, information } = props
    return (
      <li
        className="flex justify-center items-center w-full h-6 md:h-8 hover:bg-light-gray hover:bg-opacity-40"
        onClick={() => toggleFunction()}
        onKeyDown={(event) => { event.key === 'Enter' && toggleFunction() }}
        tabIndex={0}
        id={name}>
        <span className="flex flex-row justify-between h-full w-full">
          <span className="flex flex-row justify-center items-center h-full">
            <Image src={imageSrc} alt={name} className="h-5 w-5 ml-1" />
            <p className="pl-3 text-xxs md:text-sm">{name}</p>
          </span>
          <span className="flex flex-row justify-center items-center h-full">
            {condition && <Image src={CheckMark} alt='checked' className="h-5 w-5 mr-2" />}
            {information && <p className="text-xxs md:text-sm mr-2">{information}</p>}
          </span>
        </span>
      </li>
    )
  }

  function ExpandedMenuList(props: ExpandedMenuListProps) {
    const { toggleFunction, options } = props

    return (
      <ul
        className="flex flex-col items-center justify-center relative text-white w-28 h-28 md:w-40 md:h-36 bg-gray bg-opacity-40 rounded-md">
        {options.map((data: string, index: React.Key) => (
          <li
            className="flex justify-center items-center text-xxs md:text-sm w-full h-5 md:h-8 hover:bg-light-gray hover:bg-opacity-40"
            key={index}
            onClick={() => toggleFunction(data)}
            onKeyDown={(event) => { event.key === 'Enter' && toggleFunction(data) }}
            tabIndex={0}>
            {data}{expandedMenuType === 'playback' && <p className="text-white">x</p>}
          </li>
        ))}
        <div
          className="absolute flex justify-center items-center text-center text-lg pb-[2px] pr-[2px] left-0 top-0 w-5 h-5 mt-1 rounded-full hover:bg-light-gray hover:bg-opacity-40"
          onClick={() => { setShowExpandedMenu(false); setExpandedMenuType('') }}
          onKeyDown={(event) => { event.key === 'Enter' && setShowExpandedMenu(false); setExpandedMenuType('') }}
          tabIndex={0}>
          &#x3c;
        </div>
      </ul>
    )
  }

  return (
    <div
      className="flex justify-center items-center relative w-5 md:w-7 h-full hover:cursor-pointer"
      id="video-settings">
      <Image
        src={Settings}
        alt="settings"
        className="h-full w-full"
        onClick={() => setShowSettings(true)}
        onKeyDown={(event) => { event.key === 'Enter' && setShowSettings(true) }}
        tabIndex={0} />

      {showSettings && <SettingsMenu />}
    </div>
  )
}