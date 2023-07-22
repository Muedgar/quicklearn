'use client'
import Link from 'next/link'
import React from 'react'
import Navbar from './components/nav/navbar'
import Signform from './components/signform/signform'

export default function SignUpPage() {
  return (
    <>
      <Navbar />
      <Signform />
    </>
  )
}
