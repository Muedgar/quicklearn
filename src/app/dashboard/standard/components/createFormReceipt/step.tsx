import React, { useContext } from 'react'
import { IconButton } from '@material-tailwind/react'
import { XMarkIcon } from "@heroicons/react/24/outline";
import { AppContext } from '@/context/app.context';

function Step() {
    const {state, dispatch} = useContext(AppContext)
    const handlePrev = () => {
        dispatch({type:'PREV_STEP_KEY'})
    }
    const handleNext = () => {
        dispatch({type:'NEXT_STEP_KEY'})
    }
    const handleClose = () => {
        dispatch({type:'RESET_STEP_KEY'})
    }
  return (
              <div className='z-10 absolute top-[120px] left-[20px] w-[350px] h-fit bg-[#efefef] pl-2 pr-2 pb-2 border-[#dfdddd] border-solid border
              before:absolute before:top-[-15px] before:border-l-[10px] before:border-l-transparent before:border-b-[20px] before:border-b-[#efefef] before:border-r-[10px] before:border-r-transparent
              before:border-solid
              '>
                
                <div className='flex justify-between'>
                  <p className='text-[#333] mt-2 font-bold text-xl'>Add customer info</p>
                  <IconButton onClick={handleClose} className='mt-2' variant="text" color="blue-gray">
                  <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                </IconButton>
                </div>
                
                <p className='text-sm text-[#5d5d5d]'>Add a new customer or select one you've already created.</p>
                <div className='flex justify-between mt-4'>
                  <p className='text-[#5d5d5d] m-1'><span>{state.stepKey}</span> of <span>7</span></p>
                  <div>
                    {state.stepKey !== 1 && <button onClick={handlePrev} className='text-sm text-black border-[1px] border-black font-bold m-1 p-1 w-[80px] rounded-md'>Back</button>}
                    {state.stepKey !== 7 && <button onClick={handleNext} className='text-sm text-white bg-green-600 font-bold m-1 p-1 w-[80px] rounded-md'>Next</button>}
                  </div>
                </div>
              </div>
  )
}

export default Step