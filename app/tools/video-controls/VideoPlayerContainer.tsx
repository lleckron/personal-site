'use client'
import React from "react"
import { AnimatePresence, motion as m } from "framer-motion"
import VideoPlayback from './VideoPlayback'
import VideoTime from "./VideoTime"
import VideoSeeker from "./VideoSeeker"

type VideoPlayerContainerProps = {
  videoRef: React.RefObject<HTMLVideoElement>
  videoStatus: string
  setVideoStatus: (state: string) => void
  videoTime: number
  setVideoTime: (time: number) => void
}

export default function VideoPlayerContainer(props: VideoPlayerContainerProps) {
  const { videoRef, videoStatus, setVideoStatus, videoTime, setVideoTime } = props

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
          className="flex flex-row justify-between w-full h-12 absolute bottom-10"
          key="time-and-playback-div">
          <div className="flex flex-row justify-center items-center w-24 h-full ml-4">
            <VideoPlayback
              videoRef={videoRef}
              videoStatus={videoStatus}
              setVideoStatus={setVideoStatus}
              key="video-playback" />
            <VideoTime
              videoTime={videoTime}
              key="video-time" />
          </div>
          <div>
            <p>Test</p>
            <p>Test 2</p>
          </div>
        </div>

        <div
          className="flex justify-center items-center absolute bottom-0 w-full h-10"
          key="seeker-div"
          id="seeker-div">
          <VideoSeeker
            videoRef={videoRef}
            videoTime={videoTime}
            setVideoTime={setVideoTime}
            key="video-seeker" />
        </div>
      </m.div>
    </AnimatePresence>
  )
}