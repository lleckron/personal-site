import React from "react"
import Image from "next/image"

type ToolCardProps = {
  title: string,
  description: string,
  imageSrc: string,
  imageAlt: string,
}

export default function ToolCard(props: ToolCardProps) {
  const { title, description, imageSrc, imageAlt } = props

  return (
    <div className='flex flex-col mt-8 md:mr-5 md:ml-5 bg-menu-gray rounded-xl w-[250px] h-[250px] hover:scale-105 hover:duration-200 hover:shadow-[0_0_20px_#454545] hover:cursor-pointer'>
      <div className='flex justify-center w-full h-2/5 mt-3'>
        <Image src={imageSrc} alt={imageAlt} className='w-36 h-20' width={144} height={80} priority={true} unoptimized />
      </div>
      <div className='flex flex-col justify-start items-center w-full h-3/5'>
        <p className='relative text-center h-1/4 font-bold text-xl text-white text-shadow-dark'>{title}</p>
        <p className='relative text-center h-3/4 w-[90%] mt-3 text-lg text-white text-shadow-dark'>{description}</p>
      </div>
    </div>
  )
}