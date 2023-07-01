'use client'
import React, {useState} from 'react'

export default function Contact() {
  const [showForm, setShowForm] = useState(false)
  const maxFormInput = 32
  const maxEmailInput = 50
  const maxTextareaInput = 500

  function ContactForm() {

    return (
      <div className='flex flex-col md:flex-row items-center h-2/3 min-h-[450px] bg-gray w-[90%] rounded-md'>

        <div className='flex flex-col justify-normal md:justify-center items-center relative h-[49%] md:h-full w-[90%] md:w-1/2'>
          <label htmlFor="name" className="w-[85%] mt-2 md:mt-0 mb-2 text-left text-white font-bold">
            Your Name:
          </label>
          <input 
          type="text"
          id="name"
          placeholder="John Doe"
          maxLength={maxFormInput}
          className="flex w-[85%] min-w-[100px] text-lg md:text-xl leading-7 md:leading-10 pl-2 rounded-md" />

          <label htmlFor="email" className="w-[85%] mt-4 mb-2 text-left text-white font-bold">
            Your Email:
          </label>
          <input 
          type="email"
          id="email"
          placeholder="leckronluke@gmail.com (Optional)"
          maxLength={maxEmailInput}
          className="flex w-[85%] min-w-[100px] text-lg md:text-xl leading-7 md:leading-10 pl-2 rounded-md" />
          
          <label htmlFor='message-type' className="w-[85%] mt-4 mb-2 text-left text-white font-bold">
            Message Type:
          </label>
          <div
          id='message-type'
          className='flex flex-row justify-between items-center w-[85%] pt-5'>

            <div className='flex flex-col-reverse justify-center items-center'>
              <label htmlFor='business' className=" text-white font-bold">
                Business
              </label>
              <input 
              type="radio"
              id="business"
              name="messageType"
              value="business"
              className='mb-2'/>
            </div>

            <div className='flex flex-col-reverse justify-center items-center'>
              <label htmlFor='general' className="text-white font-bold">
                General / Question
              </label>
              <input 
              type="radio"
              id="general"
              name="messageType"
              value="general"
              className='mb-2'/>
            </div>

            <div className='flex flex-col-reverse justify-center items-center'>
              <label htmlFor='feedback' className="text-white font-bold">
                Feedback
              </label>
              <input 
              type="radio"
              id="feedback"
              name="messageType"
              value="feedback"
              className='mb-2'/>
            </div>

          </div>
        </div>

        <div className='hidden md:flex w-1 h-[95%] bg-hover-gray rounded-full'></div>
          
        <div className='flex flex-col justify-normal md:justify-center items-center relative h-[49%] md:h-full w-[90%] md:w-1/2'>
          <label htmlFor="message" className="w-[85%] mt-2 mb-3 text-left text-white font-bold">
            Message:
          </label>
          <textarea 
          id='message'
          name='message' 
          maxLength={maxTextareaInput}
          placeholder='Tell me anything!'
          className='flex w-[85%] h-[80%] min-w-[100px] text-lg pl-2 rounded-md resize-none'></textarea>
        </div>

      </div>
    )
  }

  return (
    <div className='flex flex-col items-center h-full-minus-nav w-full mb-7 md:mb-0'>

      <p className='text-white text-center mt-10 mb-10'>
        Contact me on &nbsp;
        <a 
        href="#" 
        className='font-bold underline hover:text-light-gray'>
          LinkedIn
        </a>
        , email me at &nbsp;
        <a 
        href="mailto:leckronluke@gmail.com?subject=New%20Email" 
        className='font-bold underline hover:text-light-gray'>
          leckronluke@gmail.com
        </a>
        , or...
      </p>

      <div className='flex flex-row justify-center items-center mb-5 select-none'>
        <p className='text-white text-center font-bold text-2xl mr-5'>Message me directly</p>
        <i className='flex p-2 -mt-1 border-white border-r-[2px] border-b-[2px] rotate-[45deg]'></i>
      </div>
      
      <ContactForm />

    </div>
  )
}