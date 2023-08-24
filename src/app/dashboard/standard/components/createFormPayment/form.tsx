'use client'
import React, { useContext, useState } from 'react'
import { AppContext } from '@/context/app.context'



function CreateFormPayment() {
  const {dispatch} = useContext(AppContext)

  const [customerName, setCustomerName] = useState("")
  const [customerEmail, setCustomerEmail] = useState("")

  const [depositTo, setDepositTo] = useState("")
  const [memo, setMemo] = useState("")

  const [paymentDate, setPaymentDate] = useState("")
  const [dueDate, setDueDate] = useState("")

  const [invoiceNo, setInvoiceNo] = useState("")
  const [messageOnInvoice, setMessageOnInvoice] = useState("")

  const [products, setProducts] = useState("")
  const [amount, setAmount] = useState("")
  const handleCreateInvoice = async (e:any) => {
    if(!customerName || !customerEmail || !depositTo || !memo || !invoiceNo || !amount || !paymentDate) {
      alert("One or more fields are empty")
      return
    }

    
    let data = {
      customer_name: customerName,
      customer_email: customerEmail,
      deposit_to: depositTo,
      memo,
      invoice_no: invoiceNo,
      payment_date:paymentDate,
      amount_received: Number(amount)
    }
    await fetch("http://localhost:3001/standard/payment",{
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
    alert("Successfully created payment")
  }).catch(e => {
    alert("Something went wrong:  "+e.message)
    return
  })
    //  dispatch create

    setCustomerName("")
    setCustomerEmail("")
    setDepositTo("") 
    setMemo("")
    setInvoiceNo("") 
    setAmount("") 
    setPaymentDate("")
    dispatch({type:'CLOSE_DRAWER_TOP'})
  }
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
              <p className='ml-4 mt-4'>Deposit to</p>
          </div>
        <input type='text' value={depositTo} onChange={e=>setDepositTo(e.target.value)} placeholder='Deposit to' className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-[200px] p-2.5 ml-4 mt-4" />
    
        </div>
        

    {/* dates */}

    <div className='w-fit h-fit flex-col justify-between'>
          <div className='flex relative'>
              <p className='ml-4 mt-4'>Payment Date</p>
          </div>
        <input type='date' value={paymentDate} onChange={e=>setPaymentDate(e.target.value)} className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-[200px] p-2.5 ml-4 mt-4" />
    
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
              <p className='ml-4 mt-4'>Memo</p>
          </div>
        <textarea placeholder='Memo' value={memo} onChange={e=>setMemo(e.target.value)} className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-[200px] p-2.5 ml-4 mt-4"></textarea>
    
        </div>
    {/* message_on_invoice */}

       

        {/* amount */}
        <div className='w-fit h-fit flex-col justify-between'>
        <div className='flex relative'>
              <p className='ml-4 mt-4'>Amount</p>
       </div>
        <input type='number' value={amount} onChange={e=>setAmount(e.target.value)} className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-[200px] p-2.5 ml-4 mt-4" />
    </div>
      </div>

      <div>
             <input onClick={e => handleCreateInvoice(e)} type="button" value="Create Payment" placeholder='create invoice' className="hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer bg-green-500 border border-gray-300 text-white mb-6 text-sm rounded-lg  block w-fit p-2.5 ml-4 mt-4"></input>
        
        </div>
    </div>
  )

}


export default CreateFormPayment