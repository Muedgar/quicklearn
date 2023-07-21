import React from 'react'

import './styles.css'

function Hero() {
  return (
    <div className='w-screen h-[800px] relative bg-black mt-[150px]'>
        <img src='./hero.jpeg' className='w-screen h-[100%]' />
        <div className='absolute top-0 w-[100%] h-[100%] z-[3] heroBg flex-col justify-start pt-[150px]'>
            <p className='text-white text-[3em] w-1/3 ml-4 p-4 font-bold break-words h-fit'>
                Smart, simple online accounting software for small business
            </p>
            <p className='text-white text-lg w-1/2 ml-4 p-4 font-medium break-words h-fit'>Track expenses, customise invoices, run reports and even more all from one place.</p>
            <button className='ml-7 mt-6 p-5 border-2 text-lg rounded-md mr-3 border-green-800 text-green-800 font-medium transition-all ease-in duration-300 hover:bg-green-800 hover:text-white'>Get Started.</button>
        </div>
    </div>
  )
}

export default Hero