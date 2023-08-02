import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function BalanceSheet() {
  return (
    <div className='w-[75%] m-auto h-[640px] border border-[#a9a9a9]'>
        <div className='w-[90%] m-auto flex-col justify-center items-center border-b-2 border-black'>
          <p className='text-quick-nav-shortcut-header text-center mt-[50px] text-2xl'>Oleander</p>
          <p className='text-black text-center mt-[5px] font-bold'>Balance Sheet</p>
          <p className='text-quick-nav-shortcut-header text-center'>As of July 30, 2023</p>
        </div>
        <div className='w-[90%] m-auto flex justify-end items-end border-b-2 border-black'>
          <p className='text-black text-lg font-bold'>TOTAL</p>
        </div>
        {/* assets */}
        <div className='w-[90%] h-[300px] m-auto flex-col justify-start items-start border-b-2 border-black'>
          {/* layer - 1 */}
          <div className='w-full h-fit pt-2'>
            <div className='flex cursor-pointer'>
              <FontAwesomeIcon className='text-quick-nav-shortcut-header mt-1' icon={faCaretDown} />
              <p className='ml-2 text-quick-nav-shortcut-header'>Assets</p>
            </div>
          </div>

          {/* layer - 2 */}
          <div className='w-full h-fit pt-2'>
            <div className='flex cursor-pointer pl-4'>
              <FontAwesomeIcon className='text-quick-nav-shortcut-header mt-1' icon={faCaretDown} />
              <p className='ml-2 text-quick-nav-shortcut-header'>Current Assets</p>
            </div>
          </div>

          {/* layer - 3 */}
          <div className='w-full h-fit pt-2'>
            <div className='flex cursor-pointer pl-8'>
              <FontAwesomeIcon className='text-quick-nav-shortcut-header mt-1' icon={faCaretDown} />
              <p className='ml-2 w-full flex justify-between text-quick-nav-shortcut-header'>Accounts receivable </p>
            </div>
          </div>
          {/* layer - 4 */}
          <div className='w-full h-fit'>
            <div className='flex cursor-pointer pl-12'>
              <p className='ml-2 w-full flex justify-between text-quick-nav-shortcut-header'><span>Accounts Receivable (A/R)</span> <span>0.00</span></p>
            </div>
          </div>

          {/* layer - inner total */}
          <div className='w-full h-fit'>
            <div className='flex cursor-pointer pl-12'>
              <p className='ml-2 w-full flex justify-between text-black'>Total </p>
            </div>
          </div>

        </div>
    </div>
  )
}

export default BalanceSheet