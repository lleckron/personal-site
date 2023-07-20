'use client'
import React, { useEffect, useRef } from "react"
import { AnimatePresence, motion as m } from "framer-motion"
import VideoPlayback from './VideoPlayback'
import VideoTime from './VideoTime';
import VideoSeeker from "./VideoSeeker"
import VideoVolume from './VideoVolume';
import VideoFullscreen from './VideoFullscreen'
import VideoSettings from './VideoSettings'

type VideoPlayerContainerProps = {
  videoRef: React.RefObject<HTMLVideoElement>
  videoStatus: string
  setVideoStatus: (state: string) => void
  videoTime: number
  videoVolume: number
  loopVideo: boolean
  setLoopVideo: (state: boolean) => void
  currentQuality: string
  setCurrentQuality: (quality: string) => void
  currentPlaybackSpeed: string
  setCurrentPlaybackSpeed: (speed: string) => void
}

export default function VideoPlayerContainer(props: VideoPlayerContainerProps) {
  const { videoRef, videoStatus, setVideoStatus, videoTime, videoVolume, loopVideo, setLoopVideo,
    currentQuality, setCurrentQuality, currentPlaybackSpeed, setCurrentPlaybackSpeed } = props
  const controlsRef = useRef<HTMLDivElement>(null)

  const controlsAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: .25, ease: "easeInOut" }
  }

  useEffect(() => {
    const toggleVideoFromVideoElementClick = async (event: MouseEvent) => {
      const targetNode = event.target as Node
      if ((videoRef.current && controlsRef.current) && (targetNode === controlsRef.current)) {
        if (videoStatus === 'play') {
          videoRef.current.pause()
          setVideoStatus('pause')
        } else {
          await videoRef.current.play()
          setVideoStatus('play')
        }
      }
    }

    document.addEventListener('click', toggleVideoFromVideoElementClick)

    return () => {
      document.removeEventListener('click', toggleVideoFromVideoElementClick)
    }
  }, [videoStatus])

  return (
    <AnimatePresence>
      <m.div
        {...controlsAnimation}
        key="controls"
        className="flex justify-center absolute w-full h-full bg-dark-gray bg-opacity-30"
        ref={controlsRef}>
        <div
          className="flex flex-row justify-between w-3/4 md:w-[58%] h-4 md:h-6 absolute bottom-10 select-none"
          key="time-and-playback-div">
          <div className="flex flex-row items-center w-34 md:w-40 h-full">
            <VideoPlayback
              videoRef={videoRef}
              videoStatus={videoStatus}
              setVideoStatus={setVideoStatus}
              key="video-playback" />
            <VideoTime
              videoTime={videoTime}
              key="video-time" />
            <VideoVolume
              videoRef={videoRef}
              videoVolume={videoVolume} />
          </div>
          <div className="flex flex-row justify-between items-center w-14 md:w-20 h-full">
            <VideoSettings
              videoRef={videoRef}
              controlsRef={controlsRef}
              loopVideo={loopVideo}
              setLoopVideo={setLoopVideo}
              currentQuality={currentQuality}
              setCurrentQuality={setCurrentQuality}
              currentPlaybackSpeed={currentPlaybackSpeed}
              setCurrentPlaybackSpeed={setCurrentPlaybackSpeed} />
            <VideoFullscreen
              videoRef={videoRef} />
          </div>
        </div>

        <div
          className="flex justify-center items-center absolute bottom-0 w-full h-10"
          key="seeker-div">
          <VideoSeeker
            videoRef={videoRef}
            videoTime={videoTime}
            key="video-seeker" />
        </div>
      </m.div>
    </AnimatePresence>
  )
}