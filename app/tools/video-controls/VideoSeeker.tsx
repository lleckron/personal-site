'use client'
import React, { useEffect } from "react"

type VideoSeekerProps = {
  videoRef: React.RefObject<HTMLVideoElement>
  videoTime: number
  setVideoTime: (time: number) => void
}

export default function VideoSeeker(props: VideoSeekerProps) {
  const { videoRef, videoTime, setVideoTime } = props

  useEffect(() => {

  }, [])

  return (
    <div className="flex items-center w-3/4 h-1/4 bg-gray">
      <div></div>
      <div></div>
    </div>
  )
}