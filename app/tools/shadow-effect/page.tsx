'use client'
import React, { useRef } from 'react'
//import AmbientVideo from '../../../public/ambient-480p.mp4'

export default function Tools() {

  const videoRef = useRef<HTMLVideoElement>(null)

  function getImageColors() {
    const video = videoRef.current
    const canvas = document.createElement('canvas')
    if(video) {
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight

      const context = canvas.getContext('2d', { willReadFrequently: true })
      if(context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height)
        const dataTop = context.getImageData(0, 0, 1, canvas.width)
        const dataBottom = context.getImageData(canvas.height - 1, 0, 1, canvas.width)
        console.log(`DataTop data: ${dataTop.data} \n`)
        console.log(`DataBottom data: ${dataTop.data} \n`)
        getRGBAverage(dataTop.data, dataBottom.data)
      }
    }
    
  }

  function getRGBAverage(dataTop: Uint8ClampedArray, dataBottom: Uint8ClampedArray) {
    let r = 0
    let g = 0
    let b = 0
    let denominator = 0

    for(let i = 0; i < dataTop.length; i += 4) {
      r += dataTop[i]
      g += dataTop[i + 1]
      b += dataTop[i + 2]
      denominator += 1
    }

    for(let i = 0; i < dataBottom.length; i += 4) {
      r += dataBottom[i]
      g += dataBottom[i + 1]
      b += dataBottom[i + 2]
      denominator += 1
    }
    console.log(`r: ${r} \n`)
    console.log(`g: ${g} \n`)
    console.log(`b: ${b} \n`)
    console.log(`denominator: ${denominator} \n`)
    setAmbientLight(r, g, b, denominator)
  }

  function setAmbientLight(r: number, g: number, b: number, denominator: number) {
    
    const avgRed = Math.floor(r / denominator)
    const avgGreen = Math.floor(g / denominator)
    const avgBlue = Math.floor(b / denominator)

    if(videoRef.current) {
      videoRef.current.style.boxShadow = `
      0 0 20px rgba(${ avgRed },${ avgGreen },${ avgBlue }, 0.2),
      0 0 40px rgba(${ avgRed },${ avgGreen },${ avgBlue }, 0.4),
      0 0 60px rgba(${ avgRed },${ avgGreen },${ avgBlue }, 0.6),
      0 0 80px rgba(${ avgRed },${ avgGreen },${ avgBlue }, 0.8),
      0 0 110px rgba(${ avgRed },${ avgGreen },${ avgBlue }, 1)
      `
    }
    console.log(`Box shadow: ${videoRef.current?.style.boxShadow}`)
  }

  const isAutoplaySupported = () => {
    if(videoRef.current) {
      return typeof videoRef.current.autoplay !== 'undefined'
    } else {
      return false
    }
  }

  function VideoPlayer() {
    const shouldAutoplay = isAutoplaySupported()

    return (
      <div className='flex flex-col items-center justify-center pt-14 relative w-full'>
        <video 
        className='h-[198px] w-[350px] md:h-[445px] md:w-[790px] transition-shadow'
        id='ambient-video'
        src='https://leckron-17032.web.app/ambient-480p.mp4'
        ref={ videoRef }
        loop
        muted
        controls={!shouldAutoplay}
        autoPlay={shouldAutoplay}
        playsInline
        onTimeUpdate={ getImageColors }/>

        <article
        className='flex flex-col justify-center items-center w-[90%] md:w-3/4 mt-10 mb-10 relative'>
          <p className='text-white md:text-lg w-[75%]'>
            <span className="ml-10"></span>This is a nice and simple effect to bring a little extra detail to videos on pages
            where the video is supposed to be the main focus, but other elements can take away
            from that. This was inspired by how YouTube displays browser videos in dark mode.
          </p>
          <p className='text-white md:text-lg w-[75%] mt-5'>
            <span className="ml-10"></span>This works by taking the RGB values of the pixels in three rows: the top, middle, and 
            bottom rows of the video. These are added up and averaged, and then the shadow is set.
            The process is fast, generally consuming only 7-8ms total on the system load. I also 
            a small shadow transition effect, to make the change from color to color a bit nicer.
          </p>
          <div className="absolute h-full left-0 border-l-4 border-l-off-white"></div>
          <div className="absolute h-full right-0 border-r-4 border-r-off-white"></div>
        </article>
      </div>
    )
  }

  return (
    <VideoPlayer />
  )
}