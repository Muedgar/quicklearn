'use client'
import React from 'react'
import Navbar from './components/nav/navbar'
import Hero from './components/hero/hero'
import Benefits from './components/benefits/benefits'
import Calltoaction from './components/calltoaction/calltoaction'
import Faqs from './components/faqs/faqs'
import Footer from './components/footer/footer'
import SplashScreen from './components/splash/splash'
import { useAppSelector } from '@/redux/store'

export default function LandingPage() {
  const landing = useAppSelector((state) => state.splashReducer.value.landing)
  return (
    <>
     <Navbar />
     <Hero />
     <Benefits />
     <Calltoaction />
     <Faqs />
     <Footer />
     {landing && <SplashScreen />}
    </>
  )
}
