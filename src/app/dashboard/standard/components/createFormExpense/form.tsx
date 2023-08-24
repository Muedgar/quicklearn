'use client'
import React, { useContext, useState } from 'react'
import { AppContext } from '@/context/app.context'



function CreateFormExpense() {
  const {dispatch} = useContext(AppContext)

  const [payee, setPayee] = useState("")
  const [paymentAccount, setPaymentAccount] = useState("")

  const [paymentMethod, setPaymentMethod] = useState("")
  const [memo, setMemo] = useState("")

  const [paymentDate, setPaymentDate] = useState("")

  const [products, setProducts] = useState("")
  const [amount, setAmount] = useState("")
  const handleCreateInvoice = async (e:any) => {
    if(!payee || !paymentAccount || !paymentMethod || !memo || !products || !amount || !paymentDate) {
      alert("One or more fields are empty")
      return
    }

    
    let data = {
      payee,
      payment_account: paymentAccount,
      payment_method: paymentMethod,
      memo,
      products:products.split(';'),
      payment_date:paymentDate,
      amount: Number(amount)
    }
    await fetch("http://localhost:3001/standard/expense",{
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
    alert("Successfully created expense")
  }).catch(e => {
    alert("Something went wrong:  "+e.message)
    return
  })
    //  dispatch create

    setPayee("")
    setPaymentAccount("")
    setPaymentMethod("") 
    setMemo("")
    setProducts("") 
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
              <p className='ml-4 mt-4'>Payee</p>
          </div>
        <input type='text' value={payee} onChange={e=>setPayee(e.target.value)} placeholder='payee' className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-[200px] p-2.5 ml-4 mt-4" />
    
        </div>
        <div className='w-fit h-fit flex-col justify-between'>
        <div className='flex relative'>
              <p className='ml-4 mt-4'>Payment account</p>
       </div>
        <input type='text' value={paymentAccount} onChange={e=>setPaymentAccount(e.target.value)} placeholder='Payment account' className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-[200px] p-2.5 ml-4 mt-4" />
    </div>
      </div>

      {/* billing_address terms */}
      <div className='w-fit h-fit flex justify-start'>
        <div className='w-fit h-fit flex-col justify-between'>
          <div className='flex relative'>
              <p className='ml-4 mt-4'>Payment method</p>
          </div>
        <input type='text' value={paymentMethod} onChange={e=>setPaymentMethod(e.target.value)} placeholder='Payment method' className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-[200px] p-2.5 ml-4 mt-4" />
    
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
              <p className='ml-4 mt-4'>Products</p>
          </div>
        <textarea placeholder='enter products and price separated by semi colon, e.g. product_1 20,000; product_2 34,000, ....' value={products} onChange={e=>setProducts(e.target.value)} className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-[200px] p-2.5 ml-4 mt-4"></textarea>
    
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
             <input onClick={e => handleCreateInvoice(e)} type="button" value="Create Expense" placeholder='create expense' className="hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer bg-green-500 border border-gray-300 text-white mb-6 text-sm rounded-lg  block w-fit p-2.5 ml-4 mt-4"></input>
        
        </div>
    </div>
  )

}


export default CreateFormExpense