import { AppContext } from '@/context/app.context'
import React, { useContext } from 'react'

import {
  IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarked } from '@fortawesome/free-solid-svg-icons';

function Starttour() {
    const {state, dispatch} = useContext(AppContext)

    const handleTour = () => {
      dispatch({type:'SET_START_TOUR_TRUE_INVOICE'})
      dispatch({type:'CLOSE_MODAL'})
    }
  return (
    <div>
   
       
      {state.showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-10/12 my-6 mx-auto max-w-3xl pb-5">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-end justify-end p-3"> 
                  <IconButton className='mt-3' variant="text" color="blue-gray" onClick={() => {
                        dispatch({type:'CLOSE_MODAL'})
                    }}>
                     <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                  </IconButton>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <h1 className='text-3xl text-quick-nav-shortcut-header font-medium'>Start sending professional invoices today</h1>
                  <p className="my-4 text-slate-500 text-sm leading-relaxed">
                    Check out these resources to learn how
                  </p>
                  <div onClick={handleTour} className='w-1/2 py-5 m-auto cursor-pointer flex-col justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-all duration-200 ease-in hover:shadow-[0_2px_10px_rgb(0,0,0,0.1)]'>
                    <FontAwesomeIcon className='text-9xl mx-[30%]' icon={faMapMarked} />
                    <p className='w-full items-center flex justify-center my-3 text-quick-nav-shortcut-header text-lg font-medium'>Take a guided tour</p>
                    <p className='w-full items-center flex justify-center text-md text-[#b5b1b1]'>Step-by-step tips</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      </div>
  )
}

export default Starttour