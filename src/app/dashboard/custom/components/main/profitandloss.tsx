import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

function ProfitAndLoss() {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [startMonth, setStartMonth] = useState('')
  const [endMonth, setEndMonth] = useState('')
  const [data, setDate] = useState({ // use random numbers depending on input services
      payments: [], // payments from db range
      totalRevenue: 0, // sum payments
      costOfSales: 0, // needs recording or random generation
      grossProfit: 0, // totalRevenue - costOfSales
      operationalExpensesOrOverhead: [], // expenses from db range
      operatingExpenses: 0,
      operatingIncome: 0, // grossProfit - operating expenses
      otherIncome: [], //  random generation
      otherExpenses: [],// random generation
      netIncome: '' // operatingIncome - otherExpenses - taxes -  Interest on Debt + otherIncome
    })
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const handleGenerateReport = async (e:any) => {
    let start_date = startDate
    let end_date = endDate
    let data = {
      start_date,
      end_date
    }
        await fetch("http://localhost:3001/custom/profitandloss",{
    method: "POST",
    mode: "cors", 
    cache: "no-cache", 
    credentials: "include", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), 
  }).then(d => d.json())
  .then(d => {
    if(d.statusCode === 403) {
      throw new Error(`${d.message}`)
    }
    console.log(d)
    setDate(d)
  }).catch(e => {
    alert("Something went wrong:  "+e.message)
    return
  })
  }
  return (
      <div className='flex-col justify-between mt-4'>
        <div className='flex justify-evenly'>
        <div className='flex justify-center items-center ml-3'>
            <label>Start date:</label>
            <input value={startDate} onChange={e => {
              setStartDate(e.target.value)
              let sMonth = new Date(e.target.value).getMonth()

              setStartMonth(months[sMonth])
              }} type='date' className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-fit p-2.5 ml-4 mt-4" />
        </div>
        <div className='flex justify-center items-center ml-3'>
            <label>End date:</label>
            <input value={endDate} onChange={e => {
              if(new Date(startDate)>new Date(e.target.value)) {
                alert("Start Date can't be greater than End Date.")
                return
              }
              setEndDate(e.target.value)
              let eMonth = new Date(e.target.value).getMonth()
              
              setEndMonth(months[eMonth])
              }} type='date' className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-fit p-2.5 ml-4 mt-4" />
        </div>
        <div>
             <input onClick={handleGenerateReport} type="button" value="Generate Report" placeholder='Search' className="hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer bg-green-500 border border-gray-300 text-white mb-6 text-sm rounded-lg  block w-fit p-2.5 ml-4 mt-4"></input>
        </div>
        </div>
        <div className='w-[75%] m-auto h-fit pb-5 border border-[#a9a9a9]'>
        <div className='w-[90%] m-auto flex-col justify-center items-center border-b-2 border-black'>
          <p className='text-quick-nav-shortcut-header text-center mt-[50px] text-2xl'>Report</p>
          <p className='text-black text-center mt-[5px] font-bold'>Profit and Loss</p>
          <p className='text-quick-nav-shortcut-header text-center'>{startMonth} - {endMonth}, 2023</p>
        </div>
        <div className='w-[90%] m-auto flex justify-end items-end border-b-2 border-black'>
          <p className='text-black text-lg font-bold'>TOTAL</p>
        </div>
        {/* assets */}
        <div className='w-[90%] h-fit m-auto flex-col justify-start items-start border-b-2 border-black'>
          {/* layer - 3 */}
          <div className='w-full h-fit pt-2'>
            <div className='flex cursor-pointer pl-2'>
              <FontAwesomeIcon className='text-quick-nav-shortcut-header mt-1' icon={faCaretDown} />
              <p className='ml-2 w-full flex justify-between text-quick-nav-shortcut-header'>Sales</p>
            </div>
          </div>
          {/* layer - 4 */}
          <div className='w-full h-fit'>
            {data.payments&&data.payments.map((payment:any) => (
              <div className='flex cursor-pointer pl-12'>
              <p className='pt-2 ml-2 w-full flex justify-between text-quick-nav-shortcut-header'><span>{payment.memo}</span> <span>{payment.amount_received}</span></p>
            </div>
            ))}
          </div>

          <div className='w-full h-fit pt-2'>
            <div className='flex cursor-pointer pl-4'>
              <p className='font-bold ml-2 w-full flex justify-between text-black'><span>Total Sales</span><span>{data.totalRevenue}</span></p>
            </div>
          </div>

          <div className='w-full h-fit pt-2'>
            <div className='flex cursor-pointer pl-4'>
              <p className='font-bold ml-2 w-full flex justify-between text-black'><span>Cost of Sales</span><span>{data.costOfSales}</span></p>
            </div>
          </div>

          <div className='w-full h-fit pt-2'>
            <div className='flex cursor-pointer pl-4'>
              <p className='font-bold ml-2 w-full flex justify-between text-black'><span>Gross Profit</span><span>{data.grossProfit}</span></p>
            </div>
          </div>

          {/* layer - inner total */}
         

          {/* layer - inner total */}
         
          {/* layer - inner total */}
          

          {/* layer - inner total */}
        

        </div>
        {/* liabilities and shareholder's equity */}
        <div className='w-[90%] h-fit m-auto flex-col justify-start items-start border-b-2 border-black'>
          {/* layer - 3 */}
          <div className='w-full h-fit pt-2'>
            <div className='flex cursor-pointer pl-2'>
              <FontAwesomeIcon className='text-quick-nav-shortcut-header mt-1' icon={faCaretDown} />
              <p className='ml-2 w-full flex justify-between text-quick-nav-shortcut-header'>Expenses</p>
            </div>
          </div>
          {/* layer - 4 */}
          <div className='w-full h-fit'>
            {data.operationalExpensesOrOverhead&&data.operationalExpensesOrOverhead.map((expense:any) => (
              <div className='flex cursor-pointer pl-12'>
              <p className='pt-2 ml-2 w-full flex justify-between text-quick-nav-shortcut-header'><span>{expense.memo}</span> <span>{expense.amount}</span></p>
            </div>
            ))}
          </div>

          <div className='w-full h-fit pt-2'>
            <div className='flex cursor-pointer pl-4'>
              <p className='font-bold ml-2 w-full flex justify-between text-black'><span>Total Expenses</span><span>{data.operatingExpenses}</span></p>
            </div>
          </div>

          <div className='w-full h-fit pt-2'>
            <div className='flex cursor-pointer pl-4'>
              <p className='font-bold ml-2 w-full flex justify-between text-black'><span>Operating Income</span><span>{data.operatingIncome}</span></p>
            </div>
          </div>

          <div className='w-full h-fit pt-2'>
            <div className='flex cursor-pointer pl-4'>
              <p className='font-bold ml-2 w-full flex justify-between text-black'><span>Net Income</span><span>{data.operatingIncome}</span></p>
            </div>
          </div>

          {/* layer - inner total */}
         

          {/* layer - inner total */}
         
          {/* layer - inner total */}
          

          {/* layer - inner total */}
        

        </div>
    </div>

    </div>
  )
  
}

export default ProfitAndLoss