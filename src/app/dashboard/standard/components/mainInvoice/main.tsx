'use client'
import React, { useContext } from 'react'
import Head from './head'
import Dashboard from './dashboard'
import { AppContext } from '@/context/app.context'


function MainInvoice() {
  const {state} = useContext(AppContext)
  return (
    <div className={
        state.open?
        'absolute top-20 left-52 overflow-auto w-10/12 h-5/6'
        :
        'absolute top-20 left-4 overflow-auto w-11/12 h-5/6'
    }>
        <Head />
        <Dashboard />
    </div>
  )
}

export default MainInvoice