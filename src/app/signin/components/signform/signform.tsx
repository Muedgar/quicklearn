'use strict';
import Link from 'next/link';
import React, {useState} from 'react'

function Signform() {
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  return (
    <div className='m-auto w-[300px] h-[400px] border border-blue-gray-300'>
        <div className='w-full h-fit flex justify-center items-center mt-[20px]'>
            <p className='text-[24px] font-medium mb-[17px] text-[#393a3d]'>Sign in</p>
        </div>
        <div className='w-full h-fit flex justify-center items-center'>
            <button className='w-fit p-2 h-[50px] border-2 rounded-md border-[#3b5998] text-[#393a3d] transition-all ease-in duration-100 hover:bg-[#3b5998] hover:text-black'>Copy Demo Credentials</button>
        </div>

        <div className='w-full h-fit flex-col justify-center items-center mt-[20px]'>
            <input value={email} onChange={e => setEmail(e.target.value)} className='w-[90%] h-[35px] outline-none border rounded-sm ml-4 mt-4 p-2 border-[#a5a6aa] text-[#393a3d] transition-all ease-in duration-100 hover:border-[#1e900e] focus:border-2 hover:text-black' type='text' placeholder='Email' />
            <input value={password} onChange={e => setPassword(e.target.value)} className='w-[90%] h-[35px] outline-none border rounded-sm ml-4 mt-4 p-2 border-[#a5a6aa] text-[#393a3d] transition-all ease-in duration-100 hover:border-[#1e900e] focus:border-2 hover:text-black' type='password' placeholder='Password' />
        </div>

        <div className='w-full h-fit flex justify-center items-center mt-[20px]'>
            <Link className='text-[#393a3d] font-thin hover:bg-black hover:text-white p-2' href={'/signup'}>Don't have an account? Sign up</Link>
        </div>

        <div className='w-full h-fit flex justify-center items-center mt-[-5px]'>
            <button className='w-[250px] h-[40px] border-none rounded-md bg-[#2ca01c] text-white transition-all ease-in duration-100 hover:bg-[#1e900e] font-thin mt-10'>Sign in</button>
        </div>
    </div>
  )
}

export default Signform