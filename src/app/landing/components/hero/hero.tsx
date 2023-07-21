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
            <button className=''>Get Started Now.</button>
        </div>
    </div>
  )
}

export default Hero