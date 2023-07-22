'use client'
import React, { useContext } from 'react'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Step from './step'
import { AppContext } from '@/context/app.context'

function Fielditem(props: any) {
    const [tooltip, setTooltip] = React.useState(false)
    const {state} = useContext(AppContext)
  return (
    <div className=''>
            <div className='flex relative'>
              <p className='ml-4 mt-4'>{props.title}</p>
              <FontAwesomeIcon onMouseOut={() => setTooltip(false)} onMouseOver={() => setTooltip(true)} className='ml-2 mt-5 cursor-pointer' icon={faQuestionCircle} />
              {/* start tooltip */}
              {/* <p className={tooltip?'w-[250px] h-[100px] absolute p-2 text-left rounded-md top-5 left-28 ml-2 bg-black text-white overflow-auto':'hidden'}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p> */}
              {/* end tooltip */}
              {/* {props.stepKey === state.stepKey && <Step />} */}
            </div>
            {props.type !== 'select'?
              <input name='customername' className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-[200px] p-2.5 ml-4 mt-4" />:
            <select name='customername' className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-[200px] p-2.5 ml-4 mt-4">
                <option value="Select a customer">Select a customer</option>
            </select>
            }
        </div>
  )
}

export default Fielditem