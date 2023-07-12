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
  const [isDraggingSeeker, setIsDraggingSeeker] = useState(false)

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
        moveProgressBarFromMouseEvent(event)
      }
    }

    const handleMouseUp = () => {
      setIsDraggingSeeker(false)
    }

    const handleTouchMove = (event: TouchEvent) => {
      if (isDraggingSeeker) {
        moveProgressBarFromTouchEvent(event)
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

  function moveProgressBarFromMouseEvent(event: MouseEvent) {
    if (barRef.current && progressRef.current && videoRef.current) {
      const barRefStartingX = barRef.current.getBoundingClientRect().left
      const barRefWidth = barRef.current.getBoundingClientRect().width
      if (barRefStartingX) {
        const newProgressRefX = event.clientX - barRefStartingX - 8
        const videoProgressPercent = newProgressRefX / barRefWidth
        const newVideoProgress = videoProgressPercent * videoRef.current.duration
        videoRef.current.currentTime = newVideoProgress
        progressRef.current.style.width = newProgressRefX + "px"
      }
    }
  }

  function moveProgressBarFromTouchEvent(event: TouchEvent) {
    if (barRef.current && progressRef.current && videoRef.current) {
      const barRefStartingX = barRef.current.getBoundingClientRect().left
      const barRefWidth = barRef.current.getBoundingClientRect().width
      if (barRefStartingX) {
        const newProgressRefX = event.touches[0].clientX - barRefStartingX - 8
        const videoProgressPercent = newProgressRefX / barRefWidth
        const newVideoProgress = videoProgressPercent * videoRef.current.duration
        videoRef.current.currentTime = newVideoProgress
        progressRef.current.style.width = newProgressRefX + "px"
      }
    }
  }

  return (
    <div
      className="flex items-center relative w-4/5 h-1 hover:h-2 hover:cursor-pointer hover:duration-75 bg-seeker-gray rounded-md shadow-md user"
      ref={barRef}
      onMouseDown={(event) => moveProgressBarFromMouseEvent(event.nativeEvent)}
      onTouchStart={(event) => moveProgressBarFromTouchEvent(event.nativeEvent)}
      id="video-progress-div"
    >
      <div
        className="relative h-full bg-red-600 rounded-tl-md rounded-bl-md z-10"
        ref={progressRef}
        id="progress-bar"
      ></div>
      <div
        className="flex relative h-[18px] w-[18px] rounded-full bg-red-600 shadow-[0_0_5px_0_rgba(0,0,0,1)] z-20"
        ref={seekerRef}
        onMouseDown={() => setIsDraggingSeeker(true)}
        onTouchStart={() => setIsDraggingSeeker(true)}
        id="seeker"
      ></div>
    </div>
  )
}