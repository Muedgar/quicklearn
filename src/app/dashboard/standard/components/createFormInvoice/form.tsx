'use client'
import React, { useContext, useState } from 'react'
import { AppContext } from '@/context/app.context'
import { IconButton } from '@material-tailwind/react'
import { XMarkIcon } from "@heroicons/react/24/outline";


function CreateFormInvoice() {
  const {state,dispatch} = useContext(AppContext)
  

  const [currentStep, setCurrentStep] = useState('1')
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
  const handleCreateInvoice = async (e:any) => {
    if(!customerName || !customerEmail || !billingAddress || !terms || !invoiceNo || !messageOnInvoice || !products || !amount || !dueDate || !invoiceDate) {
      alert("One or more fields are empty")
      return
    }

    if(new Date(invoiceDate)>new Date(dueDate)) {
      alert("invoice date can't be greater then due date")
      return
    }
    let data = {
      customer_name: customerName,
      customer_email: customerEmail,
      billing_address: billingAddress,
      terms,
      invoice_no: invoiceNo,
      message_on_invoice:messageOnInvoice,
      products: products.split(';'),
      invoice_date:invoiceDate,
      due_date: dueDate,
      amount: Number(amount)
    }
    await fetch("http://localhost:3001/standard/invoice",{
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
    alert("Successfully created invoice")
  }).catch(e => {
    alert("Something went wrong:  "+e.message)
    return
  })
    //  dispatch create

    setCustomerName("")
    setCustomerEmail("")
    setBillingAddress("") 
    setTerms("")
    setInvoiceNo("") 
    setMessageOnInvoice("")
    setProducts("")
    setAmount("") 
    setDueDate("") 
    setInvoiceDate("")
    dispatch({type:'CLOSE_DRAWER_TOP'})
  }
  return (
    <div className='w-[100%] flex-col justify-between'>
      {/* customer email and password */}
      <div className='w-fit h-fit flex justify-start'>
        <div className='w-fit h-[100px] relative flex-col justify-between'>
          <div className='flex relative'>
              <p className='ml-4 mt-4'>Customer Name</p>
          </div>
        <input type='text' value={customerName} onChange={e=>setCustomerName(e.target.value)} placeholder='Customer name' className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-[200px] p-2.5 ml-4 mt-4" />
    {/* step 1*/}
    {currentStep==='1'&&state.startTourInvoice&&<div className='z-10 absolute left-[20px] w-fit h-fit bg-[#efefef] pl-2 pr-2 pb-2 border-[#dfdddd] border-solid border
              before:absolute before:top-[-15px] before:border-l-[10px] before:border-l-transparent before:border-b-[20px] before:border-b-[#efefef] before:border-r-[10px] before:border-r-transparent
              before:border-solid
              '>
                
                <div className='flex justify-between'>
                  <p className='text-[#333] mt-2 font-bold text-xl'>Add customer info</p>
                  <IconButton className='mt-2' variant="text" color="blue-gray">
                  <XMarkIcon onClick={() => {
                    dispatch({type: 'RESET_START_TOUR_TRUE_INVOICE'})
                    setCurrentStep('1')
                  }} strokeWidth={2} className="h-5 w-5" />
                </IconButton>
                </div>
                
                <p className='text-sm text-[#5d5d5d]'>Add a new customer or select one you've already created.</p>
                {/* video */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/WusqBQb_Www?si=a_eBgMtD35t3jn_O" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>  
                <div className='flex justify-between mt-4'>
                  <p className='text-[#5d5d5d] m-1'><span>{currentStep}</span> of <span>10</span></p>
                  <div>
                    <button onClick={() => {
                      let newStep = Number(currentStep) + 1
                      console.log(newStep)
                      setCurrentStep(`${newStep}`)
                    }} className='text-sm text-white bg-green-600 font-bold m-1 p-1 w-[80px] rounded-md'>Next</button>
                  </div>
                </div>
              </div>}
    
        </div>
        <div className='w-fit h-fit relative flex-col justify-between'>
        <div className='flex relative'>
              <p className='ml-4 mt-4'>Customer Email</p>
       </div>
        <input type='text' value={customerEmail} onChange={e=>setCustomerEmail(e.target.value)} placeholder='Customer email' className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-[200px] p-2.5 ml-4 mt-4" />
    {/* step 2 */}
        {currentStep==='2' && <div className='z-10 absolute left-[20px] w-fit h-fit bg-[#efefef] pl-2 pr-2 pb-2 border-[#dfdddd] border-solid border
              before:absolute before:top-[-15px] before:border-l-[10px] before:border-l-transparent before:border-b-[20px] before:border-b-[#efefef] before:border-r-[10px] before:border-r-transparent
              before:border-solid
              '>
                
                <div className='flex justify-between'>
                  <p className='text-[#333] mt-2 font-bold text-xl'>Add customer info</p>
                  <IconButton className='mt-2' variant="text" color="blue-gray">
                  <XMarkIcon onClick={() => {
                    dispatch({type: 'RESET_START_TOUR_TRUE_INVOICE'})
                    setCurrentStep('1')
                  }} strokeWidth={2} className="h-5 w-5" />
                </IconButton>
                </div>
                
                <p className='text-sm text-[#5d5d5d]'>Add a new customer or select one you've already created.</p>
                {/* video */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/WusqBQb_Www?si=a_eBgMtD35t3jn_O" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>  
                <div className='flex justify-between mt-4'>
                  <p className='text-[#5d5d5d] m-1'><span>{currentStep}</span> of <span>10</span></p>
                  <div>
                    <button onClick={() => {
                      let newStep = Number(currentStep) - 1
                      console.log(newStep)
                      setCurrentStep(`${newStep}`)
                    }} className='text-sm text-black border-[1px] border-black font-bold m-1 p-1 w-[80px] rounded-md'>Back</button>
                    <button onClick={() => {
                      let newStep = Number(currentStep) + 1
                      console.log(newStep)
                      setCurrentStep(`${newStep}`)
                    }} className='text-sm text-white bg-green-600 font-bold m-1 p-1 w-[80px] rounded-md'>Next</button>
                  </div>
                </div>
              </div>}
    </div>

    
      </div>

      {/* billing_address terms */}
      <div className='w-fit h-fit flex justify-start'>
        <div className='w-fit h-fit flex-col justify-between'>
          <div className='flex relative'>
              <p className='ml-4 mt-4'>Billing address</p>
          </div>
        <input type='text' value={billingAddress} onChange={e=>setBillingAddress(e.target.value)} placeholder='Billing address' className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-[200px] p-2.5 ml-4 mt-4" />
            {currentStep==='3'&&<div className='z-10 absolute left-[20px] w-fit h-fit bg-[#efefef] pl-2 pr-2 pb-2 border-[#dfdddd] border-solid border
              before:absolute before:top-[-15px] before:border-l-[10px] before:border-l-transparent before:border-b-[20px] before:border-b-[#efefef] before:border-r-[10px] before:border-r-transparent
              before:border-solid
              '>
                
                <div className='flex justify-between'>
                  <p className='text-[#333] mt-2 font-bold text-xl'>Add customer info</p>
                  <IconButton className='mt-2' variant="text" color="blue-gray">
                  <XMarkIcon onClick={() => {
                    dispatch({type: 'RESET_START_TOUR_TRUE_INVOICE'})
                    setCurrentStep('1')
                  }} strokeWidth={2} className="h-5 w-5" />
                </IconButton>
                </div>
                
                <p className='text-sm text-[#5d5d5d]'>Add a new customer or select one you've already created.</p>
                {/* video */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/WusqBQb_Www?si=a_eBgMtD35t3jn_O" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>  
                <div className='flex justify-between mt-4'>
                  <p className='text-[#5d5d5d] m-1'><span>{currentStep}</span> of <span>10</span></p>
                  <div>
                    <button onClick={() => {
                      let newStep = Number(currentStep) - 1
                      console.log(newStep)
                      setCurrentStep(`${newStep}`)
                    }} className='text-sm text-black border-[1px] border-black font-bold m-1 p-1 w-[80px] rounded-md'>Back</button>
                    <button onClick={() => {
                      let newStep = Number(currentStep) + 1
                      console.log(newStep)
                      setCurrentStep(`${newStep}`)
                    }} className='text-sm text-white bg-green-600 font-bold m-1 p-1 w-[80px] rounded-md'>Next</button>
                  </div>
                </div>
              </div>}
        </div>
        <div className='w-fit h-fit relative flex-col justify-between'>
        <div className='flex relative'>
              <p className='ml-4 mt-4'>Terms</p>
       </div>
        <input type='text' value={terms} onChange={e=>setTerms(e.target.value)} placeholder='Terms' className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-[200px] p-2.5 ml-4 mt-4" />
      {currentStep==='4'&&<div className='z-10 absolute left-[20px] w-fit h-fit bg-[#efefef] pl-2 pr-2 pb-2 border-[#dfdddd] border-solid border
              before:absolute before:top-[-15px] before:border-l-[10px] before:border-l-transparent before:border-b-[20px] before:border-b-[#efefef] before:border-r-[10px] before:border-r-transparent
              before:border-solid
              '>
                
                <div className='flex justify-between'>
                  <p className='text-[#333] mt-2 font-bold text-xl'>Add customer info</p>
                  <IconButton className='mt-2' variant="text" color="blue-gray">
                  <XMarkIcon onClick={() => {
                    dispatch({type: 'RESET_START_TOUR_TRUE_INVOICE'})
                    setCurrentStep('1')
                  }} strokeWidth={2} className="h-5 w-5" />
                </IconButton>
                </div>
                
                <p className='text-sm text-[#5d5d5d]'>Add a new customer or select one you've already created.</p>
                {/* video */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/WusqBQb_Www?si=a_eBgMtD35t3jn_O" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>  
                <div className='flex justify-between mt-4'>
                  <p className='text-[#5d5d5d] m-1'><span>{currentStep}</span> of <span>10</span></p>
                  <div>
                    <button onClick={() => {
                      let newStep = Number(currentStep) - 1
                      console.log(newStep)
                      setCurrentStep(`${newStep}`)
                    }} className='text-sm text-black border-[1px] border-black font-bold m-1 p-1 w-[80px] rounded-md'>Back</button>
                    <button onClick={() => {
                      let newStep = Number(currentStep) + 1
                      console.log(newStep)
                      setCurrentStep(`${newStep}`)
                    }} className='text-sm text-white bg-green-600 font-bold m-1 p-1 w-[80px] rounded-md'>Next</button>
                  </div>
                </div>
              </div>}
    </div>

    {/* dates */}

    <div className='w-fit h-fit relative flex-col justify-between'>
          <div className='flex relative'>
              <p className='ml-4 mt-4'>Invoice Date</p>
          </div>
        <input type='date' value={invoiceDate} onChange={e=>setInvoiceDate(e.target.value)} className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-[200px] p-2.5 ml-4 mt-4" />
    {currentStep==='5'&&<div className='z-10 absolute left-[20px] w-fit h-fit bg-[#efefef] pl-2 pr-2 pb-2 border-[#dfdddd] border-solid border
              before:absolute before:top-[-15px] before:border-l-[10px] before:border-l-transparent before:border-b-[20px] before:border-b-[#efefef] before:border-r-[10px] before:border-r-transparent
              before:border-solid
              '>
                
                <div className='flex justify-between'>
                  <p className='text-[#333] mt-2 font-bold text-xl'>Add customer info</p>
                  <IconButton className='mt-2' variant="text" color="blue-gray">
                  <XMarkIcon onClick={() => {
                    dispatch({type: 'RESET_START_TOUR_TRUE_INVOICE'})
                    setCurrentStep('1')
                  }} strokeWidth={2} className="h-5 w-5" />
                </IconButton>
                </div>
                
                <p className='text-sm text-[#5d5d5d]'>Add a new customer or select one you've already created.</p>
                {/* video */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/WusqBQb_Www?si=a_eBgMtD35t3jn_O" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>  
                <div className='flex justify-between mt-4'>
                  <p className='text-[#5d5d5d] m-1'><span>{currentStep}</span> of <span>10</span></p>
                  <div>
                    <button onClick={() => {
                      let newStep = Number(currentStep) - 1
                      console.log(newStep)
                      setCurrentStep(`${newStep}`)
                    }} className='text-sm text-black border-[1px] border-black font-bold m-1 p-1 w-[80px] rounded-md'>Back</button>
                    <button onClick={() => {
                      let newStep = Number(currentStep) + 1
                      console.log(newStep)
                      setCurrentStep(`${newStep}`)
                    }} className='text-sm text-white bg-green-600 font-bold m-1 p-1 w-[80px] rounded-md'>Next</button>
                  </div>
                </div>
              </div>}
        </div>
        <div className='w-fit h-fit relative flex-col justify-between'>
        <div className='flex relative'>
              <p className='ml-4 mt-4'>Due Date</p>
       </div>
        <input type='date' value={dueDate} onChange={e=>setDueDate(e.target.value)} className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-[200px] p-2.5 ml-4 mt-4" />
            {currentStep==='6'&&<div className='z-10 absolute left-[20px] w-fit h-fit bg-[#efefef] pl-2 pr-2 pb-2 border-[#dfdddd] border-solid border
              before:absolute before:top-[-15px] before:border-l-[10px] before:border-l-transparent before:border-b-[20px] before:border-b-[#efefef] before:border-r-[10px] before:border-r-transparent
              before:border-solid
              '>
                
                <div className='flex justify-between'>
                  <p className='text-[#333] mt-2 font-bold text-xl'>Add customer info</p>
                  <IconButton className='mt-2' variant="text" color="blue-gray">
                  <XMarkIcon onClick={() => {
                    dispatch({type: 'RESET_START_TOUR_TRUE_INVOICE'})
                    setCurrentStep('1')
                  }} strokeWidth={2} className="h-5 w-5" />
                </IconButton>
                </div>
                
                <p className='text-sm text-[#5d5d5d]'>Add a new customer or select one you've already created.</p>
                {/* video */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/WusqBQb_Www?si=a_eBgMtD35t3jn_O" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>  
                <div className='flex justify-between mt-4'>
                  <p className='text-[#5d5d5d] m-1'><span>{currentStep}</span> of <span>10</span></p>
                  <div>
                    <button onClick={() => {
                      let newStep = Number(currentStep) - 1
                      console.log(newStep)
                      setCurrentStep(`${newStep}`)
                    }} className='text-sm text-black border-[1px] border-black font-bold m-1 p-1 w-[80px] rounded-md'>Back</button>
                    <button onClick={() => {
                      let newStep = Number(currentStep) + 1
                      console.log(newStep)
                      setCurrentStep(`${newStep}`)
                    }} className='text-sm text-white bg-green-600 font-bold m-1 p-1 w-[80px] rounded-md'>Next</button>
                  </div>
                </div>
              </div>}
    </div>
      </div>

      {/* invoice_no, products, message_on_invoice, amount */}
      {/* invoice_no */}
      <div className='w-fit h-fit flex justify-start'>
        <div className='w-fit h-fit relative flex-col justify-between'>
          <div className='flex relative'>
              <p className='ml-4 mt-4'>Invoice no</p>
          </div>
        <input type='text' placeholder='Invoice no.' value={invoiceNo} onChange={e=>setInvoiceNo(e.target.value)} className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-[200px] p-2.5 ml-4 mt-4" />
    {currentStep==='7'&&<div className='z-10 absolute left-[20px] w-fit h-fit bg-[#efefef] pl-2 pr-2 pb-2 border-[#dfdddd] border-solid border
              before:absolute before:top-[-15px] before:border-l-[10px] before:border-l-transparent before:border-b-[20px] before:border-b-[#efefef] before:border-r-[10px] before:border-r-transparent
              before:border-solid
              '>
                
                <div className='flex justify-between'>
                  <p className='text-[#333] mt-2 font-bold text-xl'>Add customer info</p>
                  <IconButton className='mt-2' variant="text" color="blue-gray">
                  <XMarkIcon onClick={() => {
                    dispatch({type: 'RESET_START_TOUR_TRUE_INVOICE'})
                    setCurrentStep('1')
                  }} strokeWidth={2} className="h-5 w-5" />
                </IconButton>
                </div>
                
                <p className='text-sm text-[#5d5d5d]'>Add a new customer or select one you've already created.</p>
                {/* video */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/WusqBQb_Www?si=a_eBgMtD35t3jn_O" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>  
                <div className='flex justify-between mt-4'>
                  <p className='text-[#5d5d5d] m-1'><span>{currentStep}</span> of <span>10</span></p>
                  <div>
                    <button onClick={() => {
                      let newStep = Number(currentStep) - 1
                      console.log(newStep)
                      setCurrentStep(`${newStep}`)
                    }} className='text-sm text-black border-[1px] border-black font-bold m-1 p-1 w-[80px] rounded-md'>Back</button>
                    <button onClick={() => {
                      let newStep = Number(currentStep) + 1
                      console.log(newStep)
                      setCurrentStep(`${newStep}`)
                    }} className='text-sm text-white bg-green-600 font-bold m-1 p-1 w-[80px] rounded-md'>Next</button>
                  </div>
                </div>
              </div>}
        </div>

        {/* products */}

        <div className='w-fit h-fit relative flex-col justify-between'>
          <div className='flex relative'>
              <p className='ml-4 mt-4'>Products</p>
          </div>
        <textarea placeholder='enter products and price separated by semi colon, e.g. product_1 20,000; product_2 34,000, ....' value={products} onChange={e=>setProducts(e.target.value)} className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-[200px] p-2.5 ml-4 mt-4"></textarea>
      {currentStep==='8'&&<div className='z-10 absolute left-[20px] w-fit h-fit bg-[#efefef] pl-2 pr-2 pb-2 border-[#dfdddd] border-solid border
              before:absolute before:top-[-15px] before:border-l-[10px] before:border-l-transparent before:border-b-[20px] before:border-b-[#efefef] before:border-r-[10px] before:border-r-transparent
              before:border-solid
              '>
                
                <div className='flex justify-between'>
                  <p className='text-[#333] mt-2 font-bold text-xl'>Add customer info</p>
                  <IconButton className='mt-2' variant="text" color="blue-gray">
                  <XMarkIcon onClick={() => {
                    dispatch({type: 'RESET_START_TOUR_TRUE_INVOICE'})
                    setCurrentStep('1')
                  }} strokeWidth={2} className="h-5 w-5" />
                </IconButton>
                </div>
                
                <p className='text-sm text-[#5d5d5d]'>Add a new customer or select one you've already created.</p>
                {/* video */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/WusqBQb_Www?si=a_eBgMtD35t3jn_O" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>  
                <div className='flex justify-between mt-4'>
                  <p className='text-[#5d5d5d] m-1'><span>{currentStep}</span> of <span>10</span></p>
                  <div>
                    <button onClick={() => {
                      let newStep = Number(currentStep) - 1
                      console.log(newStep)
                      setCurrentStep(`${newStep}`)
                    }} className='text-sm text-black border-[1px] border-black font-bold m-1 p-1 w-[80px] rounded-md'>Back</button>
                    <button onClick={() => {
                      let newStep = Number(currentStep) + 1
                      console.log(newStep)
                      setCurrentStep(`${newStep}`)
                    }} className='text-sm text-white bg-green-600 font-bold m-1 p-1 w-[80px] rounded-md'>Next</button>
                  </div>
                </div>
              </div>}
        </div>
    {/* message_on_invoice */}

        <div className='w-fit h-fit relative flex-col justify-between'>
          <div className='flex relative'>
              <p className='ml-4 mt-4'>Message on invoice</p>
          </div>
        <input type='text' placeholder='Message on Invoice' value={messageOnInvoice} onChange={e=>setMessageOnInvoice(e.target.value)} className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-[200px] p-2.5 ml-4 mt-4" />
    {currentStep==='9'&&<div className='z-10 absolute left-[20px] w-fit h-fit bg-[#efefef] pl-2 pr-2 pb-2 border-[#dfdddd] border-solid border
              before:absolute before:top-[-15px] before:border-l-[10px] before:border-l-transparent before:border-b-[20px] before:border-b-[#efefef] before:border-r-[10px] before:border-r-transparent
              before:border-solid
              '>
                
                <div className='flex justify-between'>
                  <p className='text-[#333] mt-2 font-bold text-xl'>Add customer info</p>
                  <IconButton className='mt-2' variant="text" color="blue-gray">
                  <XMarkIcon onClick={() => {
                    dispatch({type: 'RESET_START_TOUR_TRUE_INVOICE'})
                    setCurrentStep('1')
                  }} strokeWidth={2} className="h-5 w-5" />
                </IconButton>
                </div>
                
                <p className='text-sm text-[#5d5d5d]'>Add a new customer or select one you've already created.</p>
                {/* video */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/WusqBQb_Www?si=a_eBgMtD35t3jn_O" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>  
                <div className='flex justify-between mt-4'>
                  <p className='text-[#5d5d5d] m-1'><span>{currentStep}</span> of <span>10</span></p>
                  <div>
                    <button onClick={() => {
                      let newStep = Number(currentStep) - 1
                      console.log(newStep)
                      setCurrentStep(`${newStep}`)
                    }} className='text-sm text-black border-[1px] border-black font-bold m-1 p-1 w-[80px] rounded-md'>Back</button>
                    <button onClick={() => {
                      let newStep = Number(currentStep) + 1
                      console.log(newStep)
                      setCurrentStep(`${newStep}`)
                    }} className='text-sm text-white bg-green-600 font-bold m-1 p-1 w-[80px] rounded-md'>Next</button>
                  </div>
                </div>
              </div>}
        </div>

        {/* amount */}
        <div className='w-fit h-fit relative flex-col justify-between'>
        <div className='flex relative'>
              <p className='ml-4 mt-4'>Amount</p>
       </div>
        <input type='number' value={amount} onChange={e=>setAmount(e.target.value)} className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-[200px] p-2.5 ml-4 mt-4" />
      {currentStep==='10'&&<div className='z-10 absolute left-[20px] w-fit h-fit bg-[#efefef] pl-2 pr-2 pb-2 border-[#dfdddd] border-solid border
              before:absolute before:top-[-15px] before:border-l-[10px] before:border-l-transparent before:border-b-[20px] before:border-b-[#efefef] before:border-r-[10px] before:border-r-transparent
              before:border-solid
              '>
                
                <div className='flex justify-between'>
                  <p className='text-[#333] mt-2 font-bold text-xl'>Add customer info</p>
                  <IconButton className='mt-2' variant="text" color="blue-gray">
                  <XMarkIcon onClick={() => {
                    dispatch({type: 'RESET_START_TOUR_TRUE_INVOICE'})
                    setCurrentStep('1')
                  }} strokeWidth={2} className="h-5 w-5" />
                </IconButton>
                </div>
                
                <p className='text-sm text-[#5d5d5d]'>Add a new customer or select one you've already created.</p>
                {/* video */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/WusqBQb_Www?si=a_eBgMtD35t3jn_O" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>  
                <div className='flex justify-between mt-4'>
                  <p className='text-[#5d5d5d] m-1'><span>{currentStep}</span> of <span>10</span></p>
                  <div>
                    <button onClick={() => {
                      let newStep = Number(currentStep) - 1
                      console.log(newStep)
                      setCurrentStep(`${newStep}`)
                    }} className='text-sm text-black border-[1px] border-black font-bold m-1 p-1 w-[80px] rounded-md'>Back</button>
                    
                  </div>
                </div>
              </div>}
    </div>
      </div>

      <div>
             <input onClick={e => handleCreateInvoice(e)} type="button" value="Create Invoice" placeholder='create invoice' className="hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer bg-green-500 border border-gray-300 text-white mb-6 text-sm rounded-lg  block w-fit p-2.5 ml-4 mt-4"></input>
        
        </div>
    </div>
  )

}


export default CreateFormInvoice