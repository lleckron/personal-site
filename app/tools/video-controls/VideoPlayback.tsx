import React from "react"
import Image from "next/image"
import Play from '../../../public/play.png'
import Pause from '../../../public/pause.png'

type VideoPlaybackProps = {
  videoRef: React.RefObject<HTMLVideoElement>
  videoStatus: string
  setVideoStatus: (state: string) => void
}

export default function VideoPlayback(props: VideoPlaybackProps) {
  const { videoRef, videoStatus, setVideoStatus } = props

  const toggleVideoState = async () => {
    const video = videoRef.current
    if (video) {
      if (video.paused) {
        await video.play()
        setVideoStatus('play')
      } else {
        video.pause()
        setVideoStatus('pause')
      }
    }
  }


  return (
    <div className="flex items-center h-full w-10">
      <button
        className=""
        draggable="false"
        onClick={() => toggleVideoState()}>
        {videoStatus === 'play' && <Image alt='play' src={Pause} priority={true} />}
        {videoStatus === 'pause' && <Image alt='play' src={Play} priority={true} />}
      </button>
    </div>
  )
}