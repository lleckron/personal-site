import React from "react"
import Image from "next/image"
import Settings from '../../../public/settings.png'

type VideoVolumeProps = {
    videoRef: React.RefObject<HTMLVideoElement>
}

export default function VideoVolume(props: VideoVolumeProps) {
    const { videoRef } = props

    return (
        <div className="flex justify-center items-center h-full w-8">
            <Image src={Settings} alt="volume-on" className="w-5 h-5 md:w-8 md:h-8" />
        </div>
    )
}