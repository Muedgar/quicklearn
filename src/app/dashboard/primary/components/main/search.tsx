'use client'
import { AppContext } from '@/context/app.context';
import React, { useContext } from 'react'


function Search() {
    const {dispatch} = useContext(AppContext)
    const openDrawerTop = () => {
    dispatch({type:'OPEN_DRAWER_TOP'})
  };
  return (
    <div className='flex justify-between mt-4'>
        <div>
             <input onClick={openDrawerTop} type="button" value="Add Company User" placeholder='Search' className="hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer bg-green-500 border border-gray-300 text-white mb-6 text-sm rounded-lg  block w-fit p-2.5 ml-4 mt-4"></input>
        
        </div>
    </div>
  )
}

export default Search