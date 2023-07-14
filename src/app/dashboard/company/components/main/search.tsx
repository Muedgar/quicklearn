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
        <div className='flex justify-evenly'>
            <div>
            <select className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-fit p-2.5 ml-4 mt-4">
                <option value="Batch actions">Batch actions</option>
            </select>
        </div>
        <div>
            <select className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-fit p-2.5 ml-4 mt-4">
                <option value="All transactions">All transactions</option>
            </select>
        </div>
        <div>
            <select className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-fit p-2.5 ml-4 mt-4">
                <option value="Last 12 months">Last 12 months</option>
            </select>
        </div>
        <div>
            <input type="text" placeholder='Search' className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-fit p-2.5 ml-4 mt-4"></input>
        </div>
        </div>
        <div>
             <input onClick={openDrawerTop} type="button" value="New Transaction" placeholder='Search' className="hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer bg-green-500 border border-gray-300 text-white mb-6 text-sm rounded-lg  block w-fit p-2.5 ml-4 mt-4"></input>
        
        </div>
    </div>
  )
}

export default Search