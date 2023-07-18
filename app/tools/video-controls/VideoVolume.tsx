'use client'
import React, { useState, useRef, useEffect } from "react"
import Image from "next/image"
import VolumeOn from '../../../public/volume-on.png'

type VideoVolumeProps = {
  videoRef: React.RefObject<HTMLVideoElement>
  videoVolume: number
}

export default function VideoVolume(props: VideoVolumeProps) {
  const { videoRef, videoVolume } = props
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const [isDraggingSeeker, setIsDraggingSeeker] = useState<boolean>(false)
  const barRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const seekerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const setProgressRefWidth = () => {
      if (progressRef.current && videoRef.current) {
        const barWidth = videoVolume * 100
        progressRef.current.style.width = barWidth + "%"
        console.log(barWidth + "%")
      }
    }
    setProgressRefWidth()
  }, [videoVolume, videoRef])

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
        let newVolumePercent = newProgressRefX / barRefWidth
        newVolumePercent = Math.max(0, Math.min(newVolumePercent, 1))
        videoRef.current.volume = newVolumePercent
        progressRef.current.style.width = newProgressRefX + "px"
      }
    }
  }

  function VolumeBar() {

    return (
      <div className="absolute left-full flex justify-center items-center w-20 h-7">
        <div
          className="flex items-center w-[90%] h-1 bg-seeker-gray rounded-md"
          ref={barRef}
          onMouseDown={(event) => handleMouseEvent(event.nativeEvent)}
          onTouchStart={(event) => handleTouchEvent(event.nativeEvent)}>
          <div
            className={`relative h-full bg-red-600 rounded-tl-md rounded-bl-md z-10`}
            ref={progressRef}>
          </div>
          <div
            className="flex relative h-[6px] w-[6px] right-[3px] rounded-full bg-red-600 shadow-[0_0_3px_0_rgba(0,0,0,1)] z-20"
            ref={seekerRef}
            onMouseDown={() => setIsDraggingSeeker(true)}
            onTouchStart={() => setIsDraggingSeeker(true)}>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="flex justify-center items-center relative w-5 md:w-7 hover:w-21 md:hover:w-23 h-full md:ml-4 hover:cursor-pointer"
      onMouseOver={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}>
      <Image src={VolumeOn} alt="volume-on" className="h-full w-full" />

      {isHovering && <VolumeBar />}
    </div>
  )
}