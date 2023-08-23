import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function BalanceSheet() {
  return (
    <div className='w-[75%] m-auto h-fit pb-5 border border-[#a9a9a9]'>
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
              <p className='pt-2 ml-2 w-full flex justify-between text-quick-nav-shortcut-header'><span>Accounts Receivable (A/R)</span> <span>0.00</span></p>
            </div>
          </div>

          {/* layer - inner total */}
          <div className='w-full h-fit border-t-2 mt-1'>
            <div className='flex cursor-pointer pl-12'>
              <p className='pt-2 ml-2 w-full flex justify-between text-black font-bold'><span>Total Accounts receivable</span><span>RF0.00</span></p>
            </div>
          </div>

          {/* layer - inner total */}
          <div className='w-full h-fit border-b-2 mt-1'>
            <div className='flex cursor-pointer pl-10'>
              <p className='pt-2 ml-2 w-full flex justify-between text-black'><span>Cash and cash equivalents</span><span>1,500.00</span></p>
            </div>
          </div>
           
          {/* layer - inner total */}
          <div className='w-full h-fit border-b-2 mt-1'>
            <div className='flex cursor-pointer pl-10'>
              <p className='pt-2 ml-2 w-full flex justify-between text-black font-bold'><span>Total Current Assets</span><span>RF1,500.00</span></p>
            </div>
          </div>

          {/* layer - inner total */}
          <div className='w-full h-fit border-b-2 border-black mt-1'>
            <div className='flex cursor-pointer pl-2'>
              <p className='pt-2 ml-2 w-full flex justify-between text-black font-bold'><span>Total Assets</span><span>RF1,500.00</span></p>
            </div>
          </div>

        </div>
        {/* liabilities and shareholder's equity */}
        <div className='w-[90%] h-[300px] m-auto flex-col justify-start items-start border-b-2 border-black'>
          {/* layer - 1 */}
          <div className='w-full h-fit pt-2'>
            <div className='flex cursor-pointer'>
              <FontAwesomeIcon className='text-quick-nav-shortcut-header mt-1' icon={faCaretDown} />
              <p className='ml-2 text-quick-nav-shortcut-header'>Liabilities and shareholder's equity</p>
            </div>
          </div>

          {/* layer - 2 */}
          <div className='w-full h-fit pt-2'>
            <div className='flex cursor-pointer pl-4'>
              <FontAwesomeIcon className='text-quick-nav-shortcut-header mt-1' icon={faCaretDown} />
              <p className='ml-2 text-quick-nav-shortcut-header'>Shareholders equity:</p>
            </div>
          </div>

          {/* layer - 4 */}
          <div className='w-full h-fit'>
            <div className='flex cursor-pointer pl-8'>
              <p className='pt-2 ml-2 w-full flex justify-between text-quick-nav-shortcut-header'><span>Net Income</span> <span>1,500.00</span></p>
            </div>
          </div>
                   
          {/* layer - 4 */}
          <div className='w-full h-fit'>
            <div className='flex cursor-pointer pl-8'>
              <p className='pt-2 ml-2 w-full flex justify-between text-quick-nav-shortcut-header'><span>Retained Earnings</span> <span>0.00</span></p>
            </div>
          </div>

          {/* layer - inner total */}
          <div className='w-full h-fit border-t-2 mt-1'>
            <div className='flex cursor-pointer pl-8'>
              <p className='pt-2 ml-2 w-full flex justify-between text-black font-bold'><span>Total shareholders' equity</span><span>RF1,500.00</span></p>
            </div>
          </div>


          {/* layer - inner total */}
          <div className='w-full h-fit border-b-2 border-black mt-1'>
            <div className='flex cursor-pointer pl-2'>
              <p className='pt-2 ml-2 w-full flex justify-between text-black font-bold'><span>Total liability and equity</span><span>RF1,500.00</span></p>
            </div>
          </div>

        </div>
    </div>
  )
}

export default BalanceSheet