'use client'
import React from 'react'


function Search() {
  return (
    <div className='flex justify-between mt-4'>
        <div className='flex justify-evenly'>
            <div>
            <select className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-fit p-2.5 ml-4 mt-4">
                <option selected>Batch actions</option>
            </select>
        </div>
        <div>
            <select className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-fit p-2.5 ml-4 mt-4">
                <option selected>All transactions</option>
            </select>
        </div>
        <div>
            <select className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-fit p-2.5 ml-4 mt-4">
                <option selected>Last 12 months</option>
            </select>
        </div>
        <div>
            <input type="text" placeholder='Search' className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-fit p-2.5 ml-4 mt-4"></input>
        </div>
        </div>
        <div>
             <input type="button" value="New Transaction" placeholder='Search' className="hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer bg-green-500 border border-gray-300 text-white mb-6 text-sm rounded-lg  block w-fit p-2.5 ml-4 mt-4"></input>
        <div className="flex flex-wrap gap-4">
      </div>
        </div>
    </div>
  )
}

export default Search