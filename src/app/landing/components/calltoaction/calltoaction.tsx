import Link from 'next/link'
import React from 'react'

function Calltoaction() {
  return (
    <div className='w-screen h-[300px] bg-[#0d333f]'>
        <div className='w-[100%] flex justify-center items-center'>
            <p className='mt-[30px] w-1/2 h-[100px] text-white font-bold text-[2.5em] text-center'>Ready to run your business better <span className='text-[#0FD46C]'>with QuickLearn?</span></p>
        </div>
        <div className='w-[100%] flex justify-center items-center pt-10'>
            <Link className='hidden' id="signupnavCall" href="/signup"></Link>
            <button onClick={() => {
              document.getElementById("signupnavCall")?.click();
            }} className='ml-7 mt-6 p-3 border-2 text-lg rounded-md mr-3 border-white text-gray-300 font-medium transition-all ease-in duration-300 hover:bg-white hover:text-[#0d333f]'>Register for free</button>
        </div>
    </div>
  )
}

export default Calltoaction