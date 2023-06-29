'use client'
import React from "react"
import Image from "next/image"
import Headshot from "../public/headshot.png"
import Github from '../public/github-white.png'
import LinkedIn from '../public/linkedin-black.png'


export default function Introduction() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center relative w-full h-full z-10">

      <div className="flex flex-col justify-center items-center w-1/2">
        <div className="flex flex-col text-center mb-6">
          <p className="text-white text-3xl md:text-6xl font-bold mb-3 text-shadow">Luke Leckron</p>
          <p className="text-white text-md md:text-2xl text-shadow">Front End Web Developer &amp; Web Designer</p>
        </div>
        <div className="flex flex-row justify-center items-center w-full">
          <button className="flex justify-center items-center h-12 w-12 mr-8 bg-off-white rounded-full border-gray border-1 hover:scale-125 hover:duration-150">
              <Image className="w-8 h-8" src={Github} alt="twitter" priority={true} />
          </button>
          <button className="flex justify-center items-center h-12 w-12 mr-0 bg-off-white rounded-full border-gray border-1 hover:scale-125 hover:duration-150">
              <Image className="w-8 h-8" src={LinkedIn} alt="github" priority={true} />
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center relative w-1/2 mb-5 md:mb-0">
        <div className="flex justify-center items-end w-48 md:w-[400px] h-48 md:h-[400px] bg-off-white rounded-full overflow-hidden">
          <Image className="w-[150px] md:w-[300px] h-full" src={Headshot} alt="headshot" priority={true}/>
        </div>
      </div>

    </section>
  )
}