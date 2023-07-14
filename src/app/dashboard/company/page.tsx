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

export default function Company() {
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
        <IconButton variant="text" color="blue-gray" onClick={closeDrawerTop}>
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
          
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
