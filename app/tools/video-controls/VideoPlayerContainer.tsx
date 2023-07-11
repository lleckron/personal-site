'use client'
import React from "react"
import { AnimatePresence, motion as m } from "framer-motion"
import VideoPlayback from './VideoPlayback'
import VideoTime from "./VideoTime"

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
        className="absolute bottom-0 w-full h-full bg-dark-gray bg-opacity-30">
        <div className="flex flex-row justify-center w-full h-20 absolute bottom-0">
          <VideoPlayback
            videoRef={videoRef}
            videoStatus={videoStatus}
            setVideoStatus={setVideoStatus} />
          <VideoTime 
            videoTime={videoTime}/>
        </div>
      </m.div>
    </AnimatePresence>
  )
}