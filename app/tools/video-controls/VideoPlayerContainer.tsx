'use client'
import React from "react"
import { AnimatePresence, motion as m } from "framer-motion"
import VideoPlayback from './VideoPlayback'
import VideoTime from "./VideoTime"
import VideoSeeker from "./VideoSeeker"
import VideoVolume from "./VideoVolume"
import VideoFullscreen from './VideoFullscreen'
import VideoSettings from './VideoSettings'

type VideoPlayerContainerProps = {
  videoRef: React.RefObject<HTMLVideoElement>
  videoStatus: string
  setVideoStatus: (state: string) => void
  videoTime: number
}

export default function VideoPlayerContainer(props: VideoPlayerContainerProps) {
  const { videoRef, videoStatus, setVideoStatus, videoTime } = props

  const controlsAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: .25, ease: "easeInOut" }
  }

  return (
    <AnimatePresence>
      <m.div
        {...controlsAnimation}
        key="controls"
        className="flex justify-center absolute w-full h-full bg-dark-gray bg-opacity-30">
        <div
          className="flex flex-row justify-between w-[63%] h-4 md:h-6 absolute bottom-10 select-none"
          key="time-and-playback-div">
          <div className="flex flex-row justify-left items-center w-34 md:w-40 h-full">
            <VideoPlayback
              videoRef={videoRef}
              videoStatus={videoStatus}
              setVideoStatus={setVideoStatus}
              key="video-playback" />
            <VideoTime
              videoTime={videoTime}
              key="video-time" />
            <VideoVolume
              videoRef={videoRef} />
          </div>
          <div className="flex flex-row justify-right items-center w-11 md:w-20 h-full">
            <VideoSettings
              videoRef={videoRef} />
            <VideoFullscreen
              videoRef={videoRef} />
          </div>
        </div>

        <div
          className="flex justify-center items-center absolute bottom-0 w-full h-10"
          key="seeker-div"
          id="seeker-div">
          <VideoSeeker
            videoRef={videoRef}
            videoTime={videoTime}
            key="video-seeker" />
        </div>
      </m.div>
    </AnimatePresence>
  )
}