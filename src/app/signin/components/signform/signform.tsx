'use client';

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { signIn } from '@/redux/features/signin-slice';
import { setSplashSignIn } from '@/redux/features/splash';


function Signform() {
 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')

  const [showPassword, setShowPassword] = useState(false)

  const dispatch = useDispatch<AppDispatch>()
  const adminCredentials = {
    email: 'bW6GHeme@gmail.com',
    password: 'xsHkBe2'
  }
  const companyCredentials = {
    email: 'eiJUx13e@gmail.com',
    password: 'b9fj6nc'
  }
  const standardCredentials = {
    email: '3v9NTR9e@gmail.com',
    password: 'VJ5YIBb'
  }
  const customCredentials = {
    email: 'woi2aFKe@gmail.com',
    password: '0aLLG6k'
  }
  

  const handleRandomCredentials = (role: string) => {
    switch (role) {
      case 'admin':
        setEmail(adminCredentials.email)
        setPassword(adminCredentials.password)
        setRole('admin')
        break;
      case 'company':
        setEmail(companyCredentials.email)
        setPassword(companyCredentials.password)
        setRole('company')
        break;
      case 'standard':
        setEmail(standardCredentials.email)
        setPassword(standardCredentials.password)
        setRole('standard')
        break;
      case 'custom':
        setEmail(customCredentials.email)
        setPassword(customCredentials.password)
        setRole('custom')
        break;
      default:
        break;
    }
  }

  const handleSigIn = () => {
    dispatch(setSplashSignIn(true))
    dispatch(signIn({role, email,password}))
  }
  return (
    <div className='m-auto w-[300px] h-[400px] border border-blue-gray-300'>
        <div className='w-full h-fit flex justify-center items-center mt-[20px]'>
            <p className='text-[24px] font-medium mb-[17px] text-[#393a3d]'>Sign in</p>
        </div>
        <div className='w-full h-[70px] overflow-auto flex-col justify-center items-center'>
            <button onClick={() => handleRandomCredentials('admin')} className='w-fit p-1 ml-5 mt-2 h-[50px] border-2 rounded-md border-[#3b5998] text-[#393a3d] transition-all ease-in duration-100 hover:bg-[#3b5998] hover:text-black'>Copy Admin User Credentials</button>
            <button onClick={() => handleRandomCredentials('company')} className='w-fit p-1 ml-5 mt-2 h-[50px] border-2 rounded-md border-[#3b5998] text-[#393a3d] transition-all ease-in duration-100 hover:bg-[#3b5998] hover:text-black'>Copy Company User Credentials</button>
            <button onClick={() => handleRandomCredentials('standard')} className='w-fit p-1 ml-5 mt-2 h-[50px] border-2 rounded-md border-[#3b5998] text-[#393a3d] transition-all ease-in duration-100 hover:bg-[#3b5998] hover:text-black'>Copy Standard User Credentials</button>
            <button onClick={() => handleRandomCredentials('custom')} className='w-fit p-1 ml-5 mt-2 h-[50px] border-2 rounded-md border-[#3b5998] text-[#393a3d] transition-all ease-in duration-100 hover:bg-[#3b5998] hover:text-black'>Copy Custom User Credentials</button>
        </div>

        <div className='w-full h-fit flex-col justify-center items-center mt-[5px]'>
            <input value={email} onChange={e => setEmail(e.target.value)} className='w-[90%] h-[35px] outline-none border rounded-sm ml-4 mt-4 p-2 border-[#a5a6aa] text-[#393a3d] transition-all ease-in duration-100 hover:border-[#1e900e] focus:border-2 hover:text-black' 
            type='text' placeholder='Email' />
            <div className='flex justify-evenly'>
              <input value={password} onChange={e => setPassword(e.target.value)} className='w-[75%] h-[35px] outline-none border rounded-sm ml-4 mt-4 p-2 border-[#a5a6aa] text-[#393a3d] transition-all ease-in duration-100 hover:border-[#1e900e] focus:border-2 hover:text-black' 
              type={showPassword?'text':'password'} placeholder='Password' />
              <FontAwesomeIcon onClick={() => setShowPassword(true)} 
                className={!showPassword?'text-2xl mt-3 p-2 cursor-pointer shadow-md shadow-quick-nav-shortcut-ul-li hover:shadow-sm hover:shadow-quick-nav-shortcut-ul-li':'hidden'} icon={faEye} />
              <FontAwesomeIcon onClick={() => setShowPassword(false)} 
                className={showPassword?'text-2xl mt-3 p-2 cursor-pointer shadow-md shadow-quick-nav-shortcut-ul-li hover:shadow-sm hover:shadow-quick-nav-shortcut-ul-li':'hidden'} icon={faEyeSlash} />
            </div>
        </div>

        <div className='w-full h-fit flex justify-center items-center mt-[20px]'>
            <Link className='text-[#393a3d] font-thin hover:bg-black hover:text-white p-2' href={'/signup'}>Don't have an account? Sign up</Link>
        </div>

        <div className='w-full h-fit flex justify-center items-center mt-[-5px]'>
            <button onClick={handleSigIn} className='w-[250px] h-[40px] border-none rounded-md bg-[#2ca01c] text-white transition-all ease-in duration-100 hover:bg-[#1e900e] font-thin mt-10'>Sign in</button>
        </div>
    </div>
  )
}

export default Signform