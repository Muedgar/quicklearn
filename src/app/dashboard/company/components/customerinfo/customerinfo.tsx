import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function Customerinfo() {
  
  return (
    <div className='w-[100%] flex justify-between'>
        <div className=''>
            <div className='flex'>
              <p className='ml-4 mt-4'>Customer</p>
              <FontAwesomeIcon className='ml-2 mt-5 cursor-pointer' icon={faQuestionCircle} />
              {/* start tooltip */}
              
              {/* end tooltip */}
            </div>
            <select name='customername' className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-[200px] p-2.5 ml-4 mt-4">
                <option value="Select a customer">Select a customer</option>
            </select>
        </div>
    </div>
  )
}

export default Customerinfo