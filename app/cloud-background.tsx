'use client'
import React from "react";
import Image from 'next/image';
//import CloudOne from '../public/cloud1.png';
//import CloudTwo from '../public/cloud2.png';


export default function CloudBackground() {

  return (
    <div className="absolute w-full h-full overflow-hidden pointer-events-none z-[1]">
      <Image className="fixed w-full h-full object-cover animate-cloudy-one" src='https://leckron-17032.web.app/cloud1.png' alt="fog-1" priority={true} />
      <Image className="fixed w-full h-full object-cover animate-cloudy-two" src='https://leckron-17032.web.app/cloud2.png' alt="fog-2" priority={true} />
      <Image className="fixed w-full h-full object-cover animate-cloudy-three" src='https://leckron-17032.web.app/cloud1.png' alt="fog-3" priority={true} />
      <Image className="fixed w-full h-full object-cover animate-cloudy-four" src='https://leckron-17032.web.app/cloud1.png' alt="fog-4" priority={true} />
    </div>
  )
}
