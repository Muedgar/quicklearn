import { setSplashLanding } from '@/redux/features/splash'
import { AppDispatch } from '@/redux/store'
import Link from 'next/link'
import React from 'react'
import { useDispatch } from 'react-redux'

function Navbar() {
  const dispatch = useDispatch<AppDispatch>()
  return (
    <div className='w-screen flex justify-center items-center mt-10'>
        <Link onClick={() => {
          dispatch(setSplashLanding(false))
        }} href='/landing'>
            <img src='./quicklearn.png' width={200} height={45} />
        </Link>
    </div>
  )
}

export default Navbar