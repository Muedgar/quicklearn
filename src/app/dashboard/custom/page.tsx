'use client'
import React, {useState,Fragment, useContext} from 'react'
import Main from "./components/main/main";
import Nav from "./components/navigation/nav";

import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { AppContext } from '@/context/app.context';
import Starttour from './components/starttour/starttour';
import Customerinfo from './components/customerinfo/customerinfo';

export default function Custom() {
  const {state, dispatch} = useContext(AppContext)
  
  const closeDrawerRight = () => {
    dispatch({type:'CLOSE_DRAWER_RIGHT'})
  };

  const closeDrawerTop = () => {
    dispatch({type:'CLOSE_DRAWER_TOP'})
  };
  
  return (
    <>
     <Nav />
     <Main />
     {/* this should dispatch an action */}
    <Fragment>
      <div className={
        state.drawerTop ?
        'w-screen h-screen absolute top-0 left-0 z-50 bg-white transition-all duration-200 ease-out translate-y-[0%]' :
        'w-screen h-screen absolute top-0 left-0 z-50 bg-white transition-all duration-200 ease-in translate-y-[-100%]'
      }>
        <div className='relative w-[100%] pb-2 shadow-md flex justify-between'>
          <h1 className='text-quick-nav-shortcut-ul-li text-3xl font-bold ml-6 mb-4 mt-3'>Invoice no. 1003</h1>
          <div className='w-2/12 flex justify-evenly'>
            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline h-fit mt-2 hover:bg-blue-gray-100 px-3 py-3" onClick={() => {
              dispatch({type:'OPEN_MODAL'})
              console.log(state.showModal)
            }}>Take a tour</a>
                    
            <IconButton className='mt-3' variant="text" color="blue-gray" onClick={closeDrawerTop}>
              <XMarkIcon strokeWidth={2} className="h-5 w-5" />
            </IconButton>
          </div>
        </div>

         {/* model to start */}
         <Starttour />
        {/* row 1 -> customer info */}
        <Customerinfo />
        {/* row 2 -> billing info */}
        {/* row 3 -> table */}
        {/* column 1 -> message */}
      </div>
      <Drawer
        placement="right"
        open={state.drawerRight}
        onClose={closeDrawerRight}
        className="p-4"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Drawer on Right
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
          >
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </div>
      </Drawer>
      
    </Fragment>
    </>
  );
}
