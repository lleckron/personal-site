import React from "react"
import Image from "next/image"
import Fullscreen from '../../../public/fullscreen.png'

type VideoVolumeProps = {
    videoRef: React.RefObject<HTMLVideoElement>
}

export default function VideoVolume(props: VideoVolumeProps) {
    const { videoRef } = props

    return (
        <div className="flex justify-center items-center h-full w-8 ml-2 md:ml-4">
            <Image src={Fullscreen} alt="volume-on" className="w-5 h-5 md:w-8 md:h-8" />
        </div>
    )
}