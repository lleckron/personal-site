'use client'
import React, { useEffect, useRef, useState } from "react"
import VideoPlayerContainer from "./VideoPlayerContainer"

export default function VideoControls() {

  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [videoMode, setVideoMode] = useState('player')

  const minWidth = 320
  const minHeight = 180
  const maxWidth = 1150
  const maxHeight = 650

  useEffect(() => {
    const setVideoAspectRatio = () => {
      if (videoMode === 'player') {
        const containerWidth = containerRef.current?.getBoundingClientRect().width
        if (containerWidth && videoRef.current) {
          const width = containerWidth / 1.33
          const height = (width / 16) * 9

          if (width < minWidth) {
            videoRef.current.style.width = minWidth + 'px'
          } else if (width > maxWidth) {
            videoRef.current.style.width = maxWidth + 'px'
          } else {
            videoRef.current.style.width = width + 'px'
          }

          if (height < minHeight) {
            videoRef.current.style.height = minHeight + 'px'
          } else if (height > maxHeight) {
            videoRef.current.style.height = maxHeight + 'px'
          } else {
            videoRef.current.style.height = height + 'px'
          }
        }
      }
    }

    setVideoAspectRatio()
    window.addEventListener('resize', setVideoAspectRatio)

    return () => (
      window.removeEventListener('resize', setVideoAspectRatio)
    )
  }, [videoMode])

  const toggleVideoMode = () => {
    setVideoMode((prevMode) =>
      prevMode === 'player' ? 'editor' : 'player'
    )
  }


  function VideoPlayer() {
    const [showControls, setShowControls] = useState(false)
    const [videoStatus, setVideoStatus] = useState('pause')
    const [videoTime, setVideoTime] = useState<number>(0)

    const handleTimeUpdate = () => {
      if (videoRef.current) {
        setVideoTime(videoRef.current.currentTime)
      }
    }

    return (
      <div
        className="flex justify-center relative mt-5 w-full"
        ref={containerRef}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)} >
        <video
          className='transition-shadow'
          id='ambient-video'
          src='https://leckron-17032.web.app/ambient-480p.mp4'
          ref={videoRef}
          muted
          playsInline
          onTimeUpdate={handleTimeUpdate} />
        {showControls && <VideoPlayerContainer
          videoRef={videoRef}
          videoStatus={videoStatus}
          setVideoStatus={setVideoStatus}
          videoTime={videoTime}
          setVideoTime={setVideoTime} />}
      </div>
    )
  }

  function VideoEditorContainer() {

    return (
      <p>Test</p>
    )
  }

  function SwapModeButton() {

    return (
      <button
        className="bg-gray text-white text-bold"
        onClick={() => toggleVideoMode()}>
        Swap
      </button>
    )
  }

  return (
    <>
      {videoMode === 'editor' && <VideoEditorContainer />}
      {videoMode === 'player' && <VideoPlayer />}
      <div className="flex justify-center mt-3 w-full ">
        <SwapModeButton />
      </div>
    </>
  )
}