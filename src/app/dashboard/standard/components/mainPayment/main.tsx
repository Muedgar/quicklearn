'use client'
import React, { useContext } from 'react'
import Head from './head'
import Menu from './menu'
import { AppContext } from '@/context/app.context'


function MainPayment() {
  const {state} = useContext(AppContext)
  return (
    <div className={
        state.open?
        'absolute top-20 left-52 overflow-auto w-10/12 h-5/6'
        :
        'absolute top-20 left-4 overflow-auto w-11/12 h-5/6'
    }>
        <Head />
        <Menu />
    </div>
  )
}

export default MainPayment