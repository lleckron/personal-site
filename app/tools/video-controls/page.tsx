'use client'
import React, { useEffect, useRef, useState } from "react"
import VideoPlayerContainer from "./VideoPlayerContainer"

export default function VideoControls() {

  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const minWidth = 320
  const minHeight = 180
  const maxWidth = 1150
  const maxHeight = 650

  useEffect(() => {
    const setVideoAspectRatio = () => {
      const containerWidth = containerRef.current?.getBoundingClientRect().width
      if (containerWidth && videoRef.current) {
        const width = containerWidth / 1.5
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

    setVideoAspectRatio()
    window.addEventListener('resize', setVideoAspectRatio)

    return () => (
      window.removeEventListener('resize', setVideoAspectRatio)
    )
  }, [])

  function VideoPlayer() {
    const [showControls, setShowControls] = useState<boolean>(false)
    const [videoStatus, setVideoStatus] = useState('pause')
    const [videoTime, setVideoTime] = useState<number>(0)
    const [videoVolume, setVideoVolume] = useState<number>(1)
    const [loopVideo, setLoopVideo] = useState<boolean>(false)
    const [currentQuality, setCurrentQuality] = useState<string>('480p')
    const [currentPlaybackSpeed, setCurrentPlaybackSpeed] = useState<string>('1x')

    const handleTimeUpdate = () => {
      if (videoRef.current) {
        setVideoTime(videoRef.current.currentTime)
      }
    }

    const handleVolumeChange = () => {
      if (videoRef.current) {
        setVideoVolume(videoRef.current.volume)
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
          loop={loopVideo}
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onVolumeChange={handleVolumeChange} />
        {showControls && <VideoPlayerContainer
          videoRef={videoRef}
          videoStatus={videoStatus}
          setVideoStatus={setVideoStatus}
          videoTime={videoTime}
          videoVolume={videoVolume}
          loopVideo={loopVideo}
          setLoopVideo={setLoopVideo}
          currentQuality={currentQuality}
          setCurrentQuality={setCurrentQuality} 
          currentPlaybackSpeed={currentPlaybackSpeed}
          setCurrentPlaybackSpeed={setCurrentPlaybackSpeed}/>}
      </div>
    )
  }

  return (
    <VideoPlayer />
  )
}