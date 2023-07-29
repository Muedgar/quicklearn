'use client'


import React, { useEffect } from 'react'
import Navbar from './components/nav/navbar'
import {useRouter} from 'next/navigation'
import Signform from './components/signform/signform'

import { useAppSelector } from '@/redux/store'
import SplashScreen from '../signup/components/splash/splash'

export default function SignInPage() {
   const router = useRouter()
   const role = useAppSelector((state) => state.signinReducer.value.role)
   const signin = useAppSelector((state) => state.splashReducer.value.signin)
   
   useEffect(() => {
    const navigateToDashboard = () => {
      console.log("running role   ", role)
      if (role === 'admin') {
        router.push('/dashboard/primary');
      } else if (role === 'company') {
        router.push('/dashboard/company');
      } else if (role === 'standard') {
        router.push('/dashboard/standard');
      } else if (role === 'custom') {
        router.push('/dashboard/custom');
      }
    };
    navigateToDashboard();
  }, [role]);
  return (
    <>
      <Navbar />
      <Signform />
      {signin && <SplashScreen />}
    </>
  )
}
