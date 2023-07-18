import React from "react"
import Image from "next/image"
import Fullscreen from '../../../public/fullscreen.png'

type VideoVolumeProps = {
  videoRef: React.RefObject<HTMLVideoElement>
}

export default function VideoFullscreen(props: VideoVolumeProps) {
  const { videoRef } = props

  const toggleFullscreen = () => {
    const video = videoRef.current;

    if (video) {
      video.requestFullscreen()
    }
  }

  return (
    <div
      className="flex justify-center items-center relative w-5 md:w-7 h-full hover:cursor-pointer"
      onClick={toggleFullscreen}>
      <Image src={Fullscreen} alt="volume-on" className="h-full w-full" />
    </div>
  )
}