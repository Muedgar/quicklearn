'use client'
import React, {useState, useEffect} from 'react'

function Navbar() {
const [clientWindowHeight, setClientWindowHeight] = useState(0);

const handleScroll = () => {
  setClientWindowHeight(window.scrollY);

  console.log("window height",clientWindowHeight);
};

useEffect(() => {
  window.addEventListener("scroll", handleScroll); 
  return () => window.removeEventListener("scroll", handleScroll);
});
  return (
    <>
    <div className='w-screen h-20 items-center bg-[#17303d] flex justify-center fixed top-0'>
        <p className='text-xl font-bold text-quick-nav-border font-sans'>Start Recording Your Business Accounting Records For <span className='text-white text-2xl'>Free Today.</span></p>
      </div>
      <nav className=
            {clientWindowHeight>50?
                'w-screen h-24 bg-white fixed top-0 transition-all ease-out duration-0 z-10 flex items-center justify-between shadow-md shadow-gray-800'
                :
                'w-screen h-28 bg-white absolute top-20 transition-all ease-out duration-0 z-10 flex items-center justify-between shadow-md shadow-gray-800'
            }
      >
        <div>
          <img src='./quicklearn.png' width={200} height={45} />
        </div>
        <div className='mr-6'>
          <button className='p-2 border-2 rounded-md mr-3 border-[#333] text-teal-900 font-medium transition-all ease-in duration-300 hover:bg-black hover:text-white'>Sign up</button>
          <button className='p-2 border-2 rounded-md mr-3 border-[#333] text-teal-900 font-medium transition-all ease-in duration-300 hover:bg-black hover:text-white'>Login</button>
        </div>
      </nav>
      </>
  )
}

export default Navbar