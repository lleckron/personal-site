'use client'
import React, { useRef } from 'react'
import AmbientVideo from '../../../public/ambient-480p.mp4'

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
    setAmbientLight(r, g, b, denominator)
  }

  function setAmbientLight(r: number, g: number, b: number, denominator: number) {
    const avgRed = Math.floor(r / denominator)
    const avgGreen = Math.floor(g / denominator)
    const avgBlue = Math.floor(b / denominator)

    if(videoRef.current) {
      videoRef.current.style.boxShadow = `0 0 10px rgba(${ avgRed },${ avgGreen },${ avgBlue }, 0.2),
      0 0 30px rgba(${ avgRed },${ avgGreen },${ avgBlue }, 0.4),
      0 0 50px rgba(${ avgRed },${ avgGreen },${ avgBlue }, 0.6),
      0 0 70px rgba(${ avgRed },${ avgGreen },${ avgBlue }, 0.8),
      0 0 100px rgba(${ avgRed },${ avgGreen },${ avgBlue }, 1)`
    }
    
  }

  function VideoPlayer() {

    return (
      <div className='flex justify-center pt-14 relative w-full h-full-minus-nav'>
        <video 
        className='h-[198px] w-[350px] md:h-[445px] md:w-[790px] transition-shadow'
        id='ambient-video'
        src={ AmbientVideo }
        ref={ videoRef }
        loop
        muted
        controls
        onTimeUpdate={ getImageColors }/>
      </div>
    )
  }

  return (
    <VideoPlayer />
  )
}