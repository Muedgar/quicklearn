'use client'
import React from 'react'
import Navbar from './components/nav/navbar'
import Hero from './components/hero/hero'
import Benefits from './components/benefits/benefits'
import Calltoaction from './components/calltoaction/calltoaction'
import Faqs from './components/faqs/faqs'
import Footer from './components/footer/footer'

export default function LandingPage() {
  return (
    <>
     <Navbar />
     <Hero />
     <Benefits />
     <Calltoaction />
     <Faqs />
     <Footer />
    </>
  )
}
