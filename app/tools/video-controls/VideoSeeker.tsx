'use client'
import React, { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion as m } from "framer-motion"

type VideoSeekerProps = {
  videoRef: React.RefObject<HTMLVideoElement>
  videoTime: number
  setVideoTime: (time: number) => void
}

export default function VideoSeeker(props: VideoSeekerProps) {
  const { videoRef, videoTime, setVideoTime } = props
  const barRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const seekerRef = useRef<HTMLDivElement>(null)
  const [isDraggingSeeker, setIsDraggingSeeker] = useState(false)
  const initialMouseX = useRef(0)

  const seekerAnimation = {
    initial: { height: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: .25, ease: "easeInOut" }
  }

  useEffect(() => {
    const setVideoBarWidth = () => {
      if (progressRef.current && videoRef.current) {
        const videoPosition = videoTime / videoRef.current.duration
        const barWidth = videoPosition * 100
        progressRef.current.style.width = barWidth + '%'
      }
    }
    setVideoBarWidth()
  }, [videoTime, videoRef])

  useEffect(() => {
    const seekerMouseDown = () => {
      setIsDraggingSeeker(true)
      if (barRef.current) {
        barRef.current.addEventListener('mousemove', seekerMouseMove)
      }
    }

    const seekerMouseUp = () => {
      setIsDraggingSeeker(false)
      if (barRef.current) {
        barRef.current.removeEventListener('mousemove', seekerMouseMove)
      }
    }

    const seekerMouseMove = (event: MouseEvent) => {
      event.preventDefault()
      const target = event.currentTarget
      if (target) {
        if (target.id === 'video-progress-div' || target.id === 'progress-bar') {
          console.log('here')
        }
      }
    }

    if (isDraggingSeeker) {
      seekerMouseDown()
    } else {
      seekerMouseUp()
    }
  }, [isDraggingSeeker])

  return (
    <AnimatePresence>
      <m.div
        className="flex items-center relative w-4/5 h-[5px] hover:cursor-pointer bg-seeker-gray rounded-md shadow-md"
        ref={barRef}
        id="video-progress-div">
        <div
          className="relative h-full bg-red-600 rounded-tl-md rounded-bl-md z-10"
          ref={progressRef}
          id="progress-bar">
        </div>
        <div
          className="flex relative h-4 w-4 rounded-full bg-red-600 shadow-sm z-20"
          ref={seekerRef}
          onMouseDown={() => setIsDraggingSeeker(true)}
          onMouseUp={() => setIsDraggingSeeker(false)}
          id="seeker">
        </div>
      </m.div>
    </AnimatePresence>
  )
}