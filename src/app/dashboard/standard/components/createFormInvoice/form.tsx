'use client'
import React, { useContext, useState } from 'react'
import Fielditem from './fielditem'
import Table from './table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { AppContext } from '@/context/app.context'
import { Step } from '@material-tailwind/react'



function CreateFormInvoice() {
  const {state} = useContext(AppContext)

  const [customerName, setCustomerName] = useState("")
  const [customerEmail, setCustomerEmail] = useState("")

  const [billingAddress, setBillingAddress] = useState("")
  const [terms, setTerms] = useState("")

  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")

  const [invoiceNo, setInvoiceNo] = useState("")
  const [messageOnInvoice, setMessageOnInvoice] = useState("")

  const [products, setProducts] = useState("")
  const [amount, setAmount] = useState("")
  
  return (
    <div className='w-[100%] flex-col justify-between'>
      {/* customer email and password */}
      <div className='w-fit h-fit flex justify-start'>
        <div className='w-fit h-fit flex-col justify-between'>
          <div className='flex relative'>
              <p className='ml-4 mt-4'>Customer Name</p>
          </div>
        <input type='text' value={customerName} onChange={e=>setCustomerName(e.target.value)} placeholder='Customer name' className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-[200px] p-2.5 ml-4 mt-4" />
    
        </div>
        <div className='w-fit h-fit flex-col justify-between'>
        <div className='flex relative'>
              <p className='ml-4 mt-4'>Customer Email</p>
       </div>
        <input type='text' value={customerEmail} onChange={e=>setCustomerEmail(e.target.value)} placeholder='Customer email' className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-[200px] p-2.5 ml-4 mt-4" />
    </div>
      </div>

      {/* billing_address terms */}
      <div className='w-fit h-fit flex justify-start'>
        <div className='w-fit h-fit flex-col justify-between'>
          <div className='flex relative'>
              <p className='ml-4 mt-4'>Billing address</p>
          </div>
        <input type='text' value={billingAddress} onChange={e=>setBillingAddress(e.target.value)} placeholder='Billing address' className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-[200px] p-2.5 ml-4 mt-4" />
    
        </div>
        <div className='w-fit h-fit flex-col justify-between'>
        <div className='flex relative'>
              <p className='ml-4 mt-4'>Terms</p>
       </div>
        <input type='text' value={terms} onChange={e=>setTerms(e.target.value)} placeholder='Terms' className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-[200px] p-2.5 ml-4 mt-4" />
    </div>

    {/* dates */}

    <div className='w-fit h-fit flex-col justify-between'>
          <div className='flex relative'>
              <p className='ml-4 mt-4'>Invoice Date</p>
          </div>
        <input type='date' value={invoiceDate} onChange={e=>setInvoiceDate(e.target.value)} className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-[200px] p-2.5 ml-4 mt-4" />
    
        </div>
        <div className='w-fit h-fit flex-col justify-between'>
        <div className='flex relative'>
              <p className='ml-4 mt-4'>Due Date</p>
       </div>
        <input type='date' value={dueDate} onChange={e=>setDueDate(e.target.value)} className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-[200px] p-2.5 ml-4 mt-4" />
    </div>
      </div>

      {/* invoice_no, products, message_on_invoice, amount */}
      {/* invoice_no */}
      <div className='w-fit h-fit flex justify-start'>
        <div className='w-fit h-fit flex-col justify-between'>
          <div className='flex relative'>
              <p className='ml-4 mt-4'>Invoice no</p>
          </div>
        <input type='text' placeholder='Invoice no.' value={invoiceNo} onChange={e=>setInvoiceNo(e.target.value)} className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-[200px] p-2.5 ml-4 mt-4" />
    
        </div>

        {/* products */}

        <div className='w-fit h-fit flex-col justify-between'>
          <div className='flex relative'>
              <p className='ml-4 mt-4'>Products</p>
          </div>
        <textarea placeholder='enter products and price separated by semi colon, e.g. product_1 20,000; product_2 34,000, ....' value={products} onChange={e=>setProducts(e.target.value)} className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-[200px] p-2.5 ml-4 mt-4"></textarea>
    
        </div>
    {/* message_on_invoice */}

        <div className='w-fit h-fit flex-col justify-between'>
          <div className='flex relative'>
              <p className='ml-4 mt-4'>Message on invoice</p>
          </div>
        <input type='text' placeholder='Message on Invoice' value={messageOnInvoice} onChange={e=>setMessageOnInvoice(e.target.value)} className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-[200px] p-2.5 ml-4 mt-4" />
    
        </div>

        {/* amount */}
        <div className='w-fit h-fit flex-col justify-between'>
        <div className='flex relative'>
              <p className='ml-4 mt-4'>Amount</p>
       </div>
        <input type='number' value={amount} onChange={e=>setAmount(e.target.value)} className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-[200px] p-2.5 ml-4 mt-4" />
    </div>
      </div>

      <div>
             <input onClick={e => handleCreateInvoice(e)} type="button" value="Create Invoice" placeholder='create invoice' className="hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer bg-green-500 border border-gray-300 text-white mb-6 text-sm rounded-lg  block w-fit p-2.5 ml-4 mt-4"></input>
        
        </div>
    </div>
  )

}

const handleCreateInvoice = (e:any) => {

  }
export default CreateFormInvoice