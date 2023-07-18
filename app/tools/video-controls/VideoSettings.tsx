'use client'
import React, { useState, useEffect, useRef } from "react"
import Image, { StaticImageData } from "next/image"
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
}

type SettingsListItemProps = {
  toggleFunction: () => void
  name: string
  imageSrc: StaticImageData
  condition?: boolean
  information?: string
  expands: boolean
}

export default function VideoSettings(props: VideoVolumeProps) {
  const { videoRef, controlsRef, loopVideo, setLoopVideo } = props
  const [showSettings, setShowSettings] = useState<boolean>(false)
  const [showExpandedMenu, setShowExpandedMenu] = useState<boolean>(false)
  const [expandedMenuType, setExpandedMenuType] = useState<string>('')
  const settingsRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    const closeSettingsMenu = (event: MouseEvent) => {
      const targetNode = event.target as Node
      if (controlsRef.current && (targetNode === controlsRef.current || controlsRef.current.contains(targetNode))) {
        setShowSettings(false)
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

    function toggleLoopVideo() {
      setLoopVideo(!loopVideo)
      setShowSettings(!showSettings)
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

    function togglePlaybackSpeed(speed: number) {
      if (videoRef.current) {
        videoRef.current.playbackRate = speed
      }
    }

    return (
      <div
        className="absolute bottom-[110%] flex items-center w-28 h-24 md:w-40 md:h-32 bg-gray bg-opacity-40 rounded-md "
        ref={settingsRef}>
        {!showExpandedMenu &&
          <ul className="flex flex-col w-full text-white">
            <SettingsListItem
              toggleFunction={() => toggleLoopVideo()}
              name='Loop'
              imageSrc={Loop}
              condition={loopVideo}
              expands={false} />
            <SettingsListItem
              toggleFunction={() => toggleExpandMenu('quality')}
              name='Quality'
              imageSrc={Quality}
              information="480p"
              expands={true} />
            <SettingsListItem
              toggleFunction={() => toggleExpandMenu('playback')}
              name='Play Speed'
              imageSrc={PlaybackSpeed}
              information="1x"
              expands={true} />
          </ul>
        }
        {(showExpandedMenu && expandedMenuType === 'quality') &&
          <div>quality bruh</div>
        }
        {(showExpandedMenu && expandedMenuType === 'playback') &&
          <div>playback bruh</div>
        }
      </div>
    )
  }

  function SettingsListItem(props: SettingsListItemProps) {
    const { toggleFunction, name, imageSrc, condition, information, expands } = props
    return (
      <li
        className="flex justify-center items-center w-full h-7 md:h-9 hover:bg-light-gray hover:bg-opacity-40"
        onClick={() => toggleFunction()}
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

  function ExpandedMenuListItem() {
    
  }

  return (
    <div
      className="flex justify-center items-center relative w-5 md:w-7 h-full hover:cursor-pointer"
      id="video-settings">
      <Image
        src={Settings}
        alt="settings"
        className="h-full w-full"
        onClick={() => setShowSettings(true)} />

      {showSettings && <SettingsMenu />}
    </div>
  )
}