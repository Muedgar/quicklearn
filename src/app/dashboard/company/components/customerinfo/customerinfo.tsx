import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconButton } from '@material-tailwind/react'
import { XMarkIcon } from "@heroicons/react/24/outline";
import React from 'react'


function Customerinfo() {
  const [tooltip, setTooltip] = React.useState(false)
  return (
    <div className='w-[100%] flex justify-between'>
        <div className=''>
            <div className='flex relative'>
              <p className='ml-4 mt-4'>Customer</p>
              <FontAwesomeIcon onMouseOut={() => setTooltip(false)} onMouseOver={() => setTooltip(true)} className='ml-2 mt-5 cursor-pointer' icon={faQuestionCircle} />
              {/* start tooltip */}
              <p className={tooltip?'w-[250px] h-[100px] absolute p-2 text-left rounded-md top-5 left-28 ml-2 bg-black text-white overflow-auto':'hidden'}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
              {/* end tooltip */}
              {/* start another tooltip */}
              <div className='absolute top-[120px] left-[20px] w-[350px] h-fit bg-[#efefefc0] pl-2 pr-2 pb-2 border-[#dfdddd] border-solid border
              before:absolute before:top-[-15px] before:border-l-[10px] before:border-l-transparent before:border-b-[20px] before:border-b-[#efefef] before:border-r-[10px] before:border-r-transparent
              before:border-solid
              '>
                
                <div className='flex justify-between'>
                  <p className='text-[#333] mt-2 font-bold text-xl'>Add customer info</p>
                  <IconButton className='mt-2' variant="text" color="blue-gray">
                  <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                </IconButton>
                </div>
                
                <p className='text-sm text-[#5d5d5d]'>Add a new customer or select one you've already created.</p>
                <div className='flex justify-between mt-4'>
                  <p className='text-[#5d5d5d] m-1'><span>1</span> of <span>4</span></p>
                  <div>
                    <button className='text-sm text-black border-[1px] border-black font-bold m-1 p-1 w-[80px] rounded-md'>Back</button>
                    <button className='text-sm text-white bg-green-600 font-bold m-1 p-1 w-[80px] rounded-md'>Next</button>
                  </div>
                </div>
              </div>
              {/* end another tooltip */}
            </div>
            <select name='customername' className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-[200px] p-2.5 ml-4 mt-4">
                <option value="Select a customer">Select a customer</option>
            </select>
        </div>
    </div>
  )
}

export default Customerinfo