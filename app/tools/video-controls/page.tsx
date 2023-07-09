'use client'
import React, { useEffect, useRef, useState } from "react"

export default function VideoControls() {

  const VideoMode = {
    PLAYER: 'player',
    EDITOR: 'editor',
  }

  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [videoMode, setVideoMode] = useState(VideoMode.PLAYER)
  const [showControls, setShowControls] = useState(false)
  const minWidth = 320
  const minHeight = 180

  useEffect(() => {
    const setVideoAspectRatio = () => {
      if (videoMode === VideoMode.PLAYER) {
        const containerWidth = containerRef.current?.getBoundingClientRect().width
        if (containerWidth && videoRef.current) {
          const width = containerWidth / 1.33
          const height = (width / 16) * 9

          if (width < minWidth) {
            videoRef.current.style.width = minWidth + 'px'
          } else {
            videoRef.current.style.width = width + 'px'
          }
          if (height < minHeight) {
            videoRef.current.style.height = minHeight + 'px'
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

  function VideoPlayerContainer() {

    return (
      <div
        className="flex justify-center relative mt-5 w-full"
        ref={containerRef}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)} >
        <video
          className='min-w-[640px] min-h-[360px] transition-shadow'
          id='ambient-video'
          src='https://leckron-17032.web.app/ambient-480p.mp4'
          ref={videoRef}
          muted
          playsInline/>
        {showControls && <VideoPlayerControls />}
      </div>
    )
  }

  function VideoPlayerControls() {
    return (
      <div
        className="absolute bottom-0 w-full h-full bg-gray bg-opacity-50">

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

  const toggleVideoMode = () => {
    setVideoMode((prevMode) =>
      prevMode === VideoMode.PLAYER ? VideoMode.EDITOR : VideoMode.PLAYER
    )
  }

  return (
    <>
      {videoMode === VideoMode.EDITOR && <VideoEditorContainer />}
      {videoMode === VideoMode.PLAYER && <VideoPlayerContainer />}
      <div className="flex justify-center mt-3 w-full ">
        <SwapModeButton />
      </div>
    </>
  )
}