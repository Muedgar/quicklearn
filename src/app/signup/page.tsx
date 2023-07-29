'use client'
import {useRouter} from 'next/navigation'
import React, { useEffect } from 'react'
import Navbar from './components/nav/navbar'
import Signform from './components/signform/signform'

import { useAppSelector } from '@/redux/store'
import SplashScreen from './components/splash/splash'

export default function SignUpPage() {
  const router = useRouter()
  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth)
  const signup = useAppSelector((state) => state.splashReducer.value.signup)
  useEffect(() => {
    const navigateToDashboard = () => {
      if(isAuth) {
        router.push('/dashboard/primary')
      }
    };
    navigateToDashboard();
  }, [isAuth]);
  return (
    <div className='flex-col w-screen h-screen'>
      <Navbar />
      <Signform />
      {signup && <SplashScreen />}
    </div>
  )
}
