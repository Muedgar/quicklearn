'use client'
import {useRouter} from 'next/navigation'
import React, { useEffect } from 'react'
import Navbar from './components/nav/navbar'
import Signform from './components/signform/signform'

import { AppDispatch, useAppSelector } from '@/redux/store'
import SplashScreen from './components/splash/splash'
import { useDispatch } from 'react-redux'
import { setSplashSignUp } from '@/redux/features/splash'

export default function SignUpPage() {
  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()
  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth)
  const signup = useAppSelector((state) => state.splashReducer.value.signup)
  useEffect(() => {
    const navigateToDashboard = () => {
      console.log("auth ", isAuth)
      if(isAuth) {
        router.push('/dashboard/primary')
      }else {
        dispatch(setSplashSignUp(false))
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
