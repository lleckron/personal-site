'use client'
import React, {useState} from 'react'
import InputField from './inputField'
import RadioButton from './radioButton'

export default function Contact() {
  const [checkedButton, setCheckedButton] = useState('business')
  const maxNameInput = 32
  const maxEmailInput = 50
  const maxTextareaInput = 500

  function ContactForm() {

    return (
      <div className='flex flex-col md:flex-row items-center min-h-[550px] max-h-[590px] bg-gray w-[90%] max-w-[1200px] rounded-md'>

        <div className='flex flex-col justify-normal md:justify-center items-center relative h-[49%] md:h-full w-[90%] md:w-1/2 mt-2'>
          <InputField
          id='name'
          type='text'
          label='Your Name:'
          placeholder='John Doe'
          maxLength={maxNameInput} />

          <InputField
          id='email'
          type='email'
          label='Your Email:'
          placeholder='leckronluke@gmail.com'
          maxLength={maxEmailInput} />
          
          <p className="w-[85%] mt-4 mb-2 text-left text-white font-bold">
            Message Type:
          </p>
          <div id='message-type' className='flex flex-row justify-between items-center w-[85%] lg:w-3/5 pt-5'>

            <div className='flex flex-col-reverse justify-center items-center'>
              <RadioButton
              id='business'
              label='Business'
              checkedButton={ checkedButton }
              setCheckedButton={ setCheckedButton }/>
            </div>

            <div className='flex flex-col-reverse justify-center items-center'>
              <RadioButton
              id='question'
              label='Question'
              checkedButton={ checkedButton }
              setCheckedButton={ setCheckedButton }/>
            </div>

            <div className='flex flex-col-reverse justify-center items-center'>
              <RadioButton
              id='feedback'
              label='Feedback'
              checkedButton={ checkedButton }
              setCheckedButton={ setCheckedButton }/>
            </div>

          </div>
        </div>

        <div className='hidden md:flex w-1 h-[95%] bg-hover-gray rounded-full'></div>
          
        <div className='flex flex-col justify-normal md:justify-center items-center relative h-[49%] md:h-[80%] w-[90%] md:w-1/2 mt-3 md:mt-0'>
          <p className="w-[85%] mt-2 mb-3 text-left text-white font-bold">
            Message:
          </p>
          <textarea 
          id='message'
          name='message' 
          maxLength={maxTextareaInput}
          placeholder='Tell me anything!'
          className='flex w-[85%] h-[70%] min-w-[100px] md:text-lg pl-2 rounded-md resize-none'></textarea>
        
          <div className='flex justify-center items-center w-full mt-7'>
            <button className='w-20 h-10 bg-medium-gray text-white mb-7 font-bold rounded-md text-shadow-dark'>
              Submit
            </button>
          </div>
        </div>

      </div>
    )
  }

  return (
    <div className='flex flex-col items-center h-full md:h-full-minus-nav w-full pb-10 md:pb-0'>

      <p className='text-white text-center mt-10 mb-10'>
        Contact me on &nbsp;
        <a 
        href='https://www.linkedin.com/in/luke-leckron/'
        target="_blank" 
        rel="noopener noreferrer"
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
      </div>
      
      <ContactForm />

    </div>
  )
}