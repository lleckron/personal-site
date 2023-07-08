import React, { useRef} from "react"

export default function VideoControls() {

  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div className="flex w-full h-full">
      <video 
        className='h-[198px] w-[350px] md:h-[445px] md:w-[790px] transition-shadow'
        id='ambient-video'
        src='https://leckron-17032.web.app/ambient-480p.mp4'
        ref={ videoRef }
        muted
        playsInline />
    </div>
  )
}