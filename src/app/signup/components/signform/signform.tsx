'use strict';
import Link from 'next/link';
import React, {useState} from 'react'
import { logOut, signUp} from '@/redux/features/auth-slice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { setSplashSignUp } from '@/redux/features/splash';

function Signform() {
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  
  const handleSignUp = () => {
    dispatch(setSplashSignUp(true))
    dispatch(signUp({isAuth:false,email, password,confirmPassword}))
  }

  const handleRandomCredentials = () => {
    function getRandString() {
      let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('')
      let passwordArray = []
      for(let i=0;i<7;i++) {
        passwordArray.push(characters[Math.floor(Math.random() * characters.length)])
      }
      return passwordArray.join('')
    }
    setEmail(`${getRandString()}e@gmail.com`)
    const samePassword = getRandString()
    setPassword(`${samePassword}`)
    setConfirmPassword(`${samePassword}`)
  }
  return (
    <div className='m-auto w-[300px] h-fit pb-[30px] border border-blue-gray-300'>
        <div className='w-full h-fit flex justify-center items-center mt-[20px]'>
            <p className='text-[24px] font-medium mb-[17px] text-[#393a3d]'>Sign up</p>
        </div>
        <div className='w-full h-[70px] flex justify-center items-center'>
            <button onClick={handleRandomCredentials} className='w-fit p-1 ml-5 mt-2 h-[50px] border-2 rounded-md border-[#3b5998] text-[#393a3d] transition-all ease-in duration-100 hover:bg-[#3b5998] hover:text-black'>Copy Random Credentials</button>
        </div>

        <div className='w-full h-fit flex-col justify-center items-center mt-[5px]'>
            <input value={email} onChange={e => setEmail(e.target.value)} className='w-[90%] h-[35px] outline-none border rounded-sm ml-4 mt-4 p-2 border-[#a5a6aa] text-[#393a3d] transition-all ease-in duration-100 hover:border-[#1e900e] focus:border-2 hover:text-black' type='text' placeholder='Email' />
            <div className='flex justify-evenly'>
              <input value={password} onChange={e => setPassword(e.target.value)} 
                className='w-[75%] h-[35px] outline-none border rounded-sm ml-4 mt-4 p-2 border-[#a5a6aa] text-[#393a3d] transition-all ease-in duration-100 hover:border-[#1e900e] focus:border-2 hover:text-black' 
                type={showPassword?'text':'password'} placeholder='Password' />
              <FontAwesomeIcon onClick={() => setShowPassword(true)} 
                className={!showPassword?'text-2xl mt-3 p-2 cursor-pointer shadow-md shadow-quick-nav-shortcut-ul-li hover:shadow-sm hover:shadow-quick-nav-shortcut-ul-li':'hidden'} icon={faEye} />
              <FontAwesomeIcon onClick={() => setShowPassword(false)} 
                className={showPassword?'text-2xl mt-3 p-2 cursor-pointer shadow-md shadow-quick-nav-shortcut-ul-li hover:shadow-sm hover:shadow-quick-nav-shortcut-ul-li':'hidden'} icon={faEyeSlash} />
            </div>
            <div className='flex justify-evenly'>
              <input value={confirmPassword} 
                onChange={e => setConfirmPassword(e.target.value)} 
                className='w-[75%] h-[35px] outline-none border rounded-sm ml-4 mt-4 p-2 border-[#a5a6aa] text-[#393a3d] transition-all ease-in duration-100 hover:border-[#1e900e] focus:border-2 hover:text-black' 
                type={showConfirmPassword?'text':'password'} placeholder='Confirm Password' />
              <FontAwesomeIcon onClick={() => setShowConfirmPassword(true)} 
                className={!showConfirmPassword?'text-2xl mt-3 p-2 cursor-pointer shadow-md shadow-quick-nav-shortcut-ul-li hover:shadow-sm hover:shadow-quick-nav-shortcut-ul-li':'hidden'} icon={faEye} />
              <FontAwesomeIcon onClick={() => setShowConfirmPassword(false)} 
                className={showConfirmPassword?'text-2xl mt-3 p-2 cursor-pointer shadow-md shadow-quick-nav-shortcut-ul-li hover:shadow-sm hover:shadow-quick-nav-shortcut-ul-li':'hidden'} icon={faEyeSlash} />
            </div>
        </div>

        <div className='w-full h-fit flex justify-center items-center mt-[20px]'>
            <Link className='text-[#393a3d] font-thin hover:bg-black hover:text-white p-2' href={'/signin'}>Already have an account? Sign in</Link>
        </div>

        <div className='w-full h-fit flex justify-center items-center mt-[-5px]'>
            <button onClick={handleSignUp} className='w-[250px] h-[40px] border-none rounded-md bg-[#2ca01c] text-white transition-all ease-in duration-100 hover:bg-[#1e900e] font-thin mt-10'>Sign up</button>
        </div>
    </div>
  )
}

export default Signform