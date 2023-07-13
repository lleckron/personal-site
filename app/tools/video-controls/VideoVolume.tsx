'use client'
import React, { useState } from "react"
import Image from "next/image"
import VolumeOn from '../../../public/volume-on.png'

type VideoVolumeProps = {
  videoRef: React.RefObject<HTMLVideoElement>
}

export default function VideoVolume(props: VideoVolumeProps) {
  const { videoRef } = props
  const [isHovering, setIsHovering] = useState(false)

  function VolumeBar() {

    return (
      <div className="absolute flex flex-row justify-center items-center w-8 h-5 bg-gray rounded-lg">
        <div></div>
      </div>
    )
  }

  return (
    <div
      className="flex justify-center items-center relative w-5 md:w-7 h-full md:ml-4"
      onMouseOver={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}>
      <Image src={VolumeOn} alt="volume-on" className="h-full w-full" />

      {isHovering && <VolumeBar />}
    </div>
  )
}