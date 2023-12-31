'use client'
import React, { useEffect, useRef, useState } from "react"

type VideoSeekerProps = {
  videoRef: React.RefObject<HTMLVideoElement>
  videoTime: number
}

export default function VideoSeeker(props: VideoSeekerProps) {
  const { videoRef, videoTime } = props
  const barRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const seekerRef = useRef<HTMLDivElement>(null)
  const [isDraggingSeeker, setIsDraggingSeeker] = useState<boolean>(false)

  useEffect(() => {
    const setProgressRefWidth = () => {
      if (progressRef.current && videoRef.current) {
        const videoPosition = videoTime / videoRef.current.duration
        const barWidth = videoPosition * 100
        progressRef.current.style.width = barWidth + "%"
      }
    }
    setProgressRefWidth()
  }, [videoTime, videoRef])

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (isDraggingSeeker) {
        handleMouseEvent(event)
      }
    }

    const handleMouseUp = () => {
      setIsDraggingSeeker(false)
    }

    const handleTouchMove = (event: TouchEvent) => {
      if (isDraggingSeeker) {
        handleTouchEvent(event)
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("touchmove", handleTouchMove)
    document.addEventListener("touchend", handleMouseUp)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleMouseUp)
    }
  }, [isDraggingSeeker])

  function handleMouseEvent(event: MouseEvent) {
    if (barRef.current) {
      const barRefStartingX = barRef.current.getBoundingClientRect().left
      if (barRefStartingX) {
        const newProgressRefX = event.clientX - barRefStartingX
        moveProgressBar(newProgressRefX)
      }
    }
  }

  function handleTouchEvent(event: TouchEvent) {
    if (barRef.current) {
      const barRefStartingX = barRef.current.getBoundingClientRect().left
      if (barRefStartingX) {
        const newProgressRefX = event.touches[0].clientX - barRefStartingX
        moveProgressBar(newProgressRefX)
      }
    }
  }

  function moveProgressBar(newProgressRefX: number) {
    if (barRef.current && progressRef.current && videoRef.current) {
      const barRefStartingX = barRef.current.getBoundingClientRect().left
      const barRefWidth = barRef.current.getBoundingClientRect().width
      if (barRefStartingX) {
        const videoProgressPercent = newProgressRefX / barRefWidth
        const newVideoProgress = videoProgressPercent * videoRef.current.duration
        videoRef.current.currentTime = newVideoProgress
        progressRef.current.style.width = newProgressRefX + "px"
      }
    }
  }

  return (
    <div
      className="flex items-center relative w-3/4 md:w-[58%] h-1 hover:h-2 hover:cursor-pointer hover:duration-75 bg-seeker-gray rounded-md shadow-md"
      ref={barRef}
      onMouseDown={(event) => handleMouseEvent(event.nativeEvent)}
      onTouchStart={(event) => handleTouchEvent(event.nativeEvent)}>
      <div
        className="relative h-full bg-red-600 rounded-tl-md rounded-bl-md z-[5]"
        ref={progressRef}>
      </div>
      <div
        className="flex relative h-4 w-4 rounded-full bg-red-600 shadow-[0_0_5px_0_rgba(0,0,0,1)] z-[9]"
        ref={seekerRef}
        onMouseDown={() => setIsDraggingSeeker(true)}
        onTouchStart={() => setIsDraggingSeeker(true)}>
      </div>
    </div>
  )
}