'use client'
import { AppContext } from '@/context/app.context';
import React, { useContext, useEffect, useState } from 'react'

function Table() {
    const {dispatch} = useContext(AppContext)
   
    const [invoices, setInvoices] = useState([]) 


  let getTableDataOnce = "get"
  useEffect(() => {
    async function getData() {
        await fetch("http://localhost:3001/standard/payment")
            .then(d=>d.json())
            .then(d=>setInvoices(d))
            .catch(e=>console.log(e))
    }

    getData()
  }, [getTableDataOnce])
async function resetInvoice() {
        await fetch("http://localhost:3001/standard/payment")
            .then(d=>d.json())
            .then(d=>setInvoices(d))
            .catch(e=>console.log(e))
    }

    // pagination
    const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 2
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = invoices.slice(firstIndex,lastIndex)
  const npage = Math.ceil(invoices.length/recordsPerPage)
  const numbers:number[] = getNumbers()

  function getNumbers() {
    // [...Array(npage+1).keys()].slice(1)
    let arr = []
    for(let i=0;i<npage;i++) {
      arr.push(i+1)
    }
    return arr
  }


  function prevPage() {
    if(currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  function changeCPage(id:number) {
    setCurrentPage(id)
  }

  function nextPage() {
    if(currentPage !== npage) {
      setCurrentPage(currentPage + 1)
    }
  }

  async function deleteInvoice(id:string) {
    await fetch("http://localhost:3001/standard/payment/"+id,{
    method: "DELETE",
    mode: "cors", 
    cache: "no-cache", 
    credentials: "include"
  }).then(d => d.json())
  .then(d => {
    if(d.statusCode === 403) {
      throw new Error(`${d.message}`)
    }
    alert("Successfully deleted payment")
    resetInvoice()
  }).catch(e => {
    alert("Something went wrong:  "+e.message)
    return
  })
  }
   
  return (
    

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <button onClick={() => {
        resetInvoice()
    }} className='text-white bg-blue-gray-700 p-1'>Refresh table</button>
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                {/* <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>
                </th> */}
                <th scope="col" className="px-6 py-3">
                    CUSTOMER NAME
                </th>
                <th scope="col" className="px-6 py-3">
                    CUSTOMER EMAIL
                </th>
                <th scope="col" className="px-6 py-3">
                    INVOICE NO.
                </th>
                <th scope="col" className="px-6 py-3">
                    PAYMENT DATE
                </th>
                <th scope="col" className="px-6 py-3">
                    DEPOSIT TO
                </th>
                <th scope="col" className="px-6 py-3">
                    AMOUNT RECEIVED
                </th>
                <th scope="col" className="px-6 py-3">
                    ACTION
                </th>
            </tr>
        </thead>
        <tbody>
            {records?.map((invoice:any,ky:any)=>(
            <tr key={ky} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
                    </div>
                </td> */}
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {invoice.customer_name}
                </th>
                <td className="px-6 py-4">
                    {invoice.customer_email}
                </td>
                <td className="px-6 py-4">
                    {invoice.invoice_no}
                </td>
                <td className="px-6 py-4">
                    {invoice.payment_date}
                </td>
                <td className="px-6 py-4">
                    {invoice.deposit_to}
                </td>
                <td className="px-6 py-4">
                    {invoice.amount_received}
                </td>
                <td className="px-6 py-4 flex justify-between">
                    {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={openDrawerRight}>View</a> */}
                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={e => deleteInvoice(invoice.id)}>Delete</a>
                </td>
            </tr>
            ))}
            
        </tbody>
    </table>
    <nav className="flex items-center justify-between pt-4" aria-label="Table navigation">
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span className="font-semibold text-gray-900">1-2</span> of <span className="font-semibold text-gray-900">{invoices.length}</span></span>
        <ul className="inline-flex -space-x-px text-sm h-8">
            <li>
                <a href="#"  onClick={prevPage} className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
            </li>
            { 
            numbers.map((n:number,i:any) => (
              <li className='cursor-pointer'>
                <a onClick={() => changeCPage(n)} key={i} className={
                currentPage===n?
                    "flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"    
            :
            "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            }>{n}</a>
              </li>
            ))
           }
            {/* <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
            </li>
            <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
            </li>
            <li>
                <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
            </li>
            <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
            </li>
            <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
            </li> */}
            <li>
                <a href="#" onClick={nextPage}  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
            </li>
        </ul>
    </nav>
</div>


  )
}



export default Table