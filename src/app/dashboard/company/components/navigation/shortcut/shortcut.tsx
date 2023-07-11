'use client'

import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"


import "./shortcut.css"

export default function Shortcut() {
    const [show,setShow] = useState(false)
    return (
        <>
            <button onClick={() => setShow(true)} className="rounded-full border-white border-2 text-white px-3 w-3/4 hover:border-4"><FontAwesomeIcon icon={faPlus} /> New</button>
            {show?
             <>
             <div onClick={(e) => {
                e.preventDefault()
                setShow(false)
             }} className="triangle z-30 absolute top-0 left-0 w-screen h-screen bg-quick-nav-overlay">
                
            </div>
            <div className="absolute z-40 top-32 left-10 overflow-x-auto overflow-y-auto bg-white w-fit rounded-lg shadow-md h-96 flex flex-row justify-evenly">
                    <div className="mx-10 mt-5 pb-5">
                        <p className="text-base text-quick-nav-shortcut-header font-semibold leading-tight">CUSTOMERS</p>
                        <ul>
                            <li className="text-quick-nav-shortcut-ul-li my-2 cursor-pointer hover:bg-quick-nav-shortcut-ul-li-hover p-2 whitespace-nowrap">Invoice</li>
                            <li className="text-quick-nav-shortcut-ul-li my-2 cursor-pointer hover:bg-quick-nav-shortcut-ul-li-hover p-2 whitespace-nowrap">Receive Payment</li>
                            <li className="text-quick-nav-shortcut-ul-li my-2 cursor-pointer hover:bg-quick-nav-shortcut-ul-li-hover p-2 whitespace-nowrap">Estimate</li>
                            <li className="text-quick-nav-shortcut-ul-li my-2 cursor-pointer hover:bg-quick-nav-shortcut-ul-li-hover p-2 whitespace-nowrap">Credit note</li>
                            <li className="text-quick-nav-shortcut-ul-li my-2 cursor-pointer hover:bg-quick-nav-shortcut-ul-li-hover p-2 whitespace-nowrap">Sales receipt</li>
                            <li className="text-quick-nav-shortcut-ul-li my-2 cursor-pointer hover:bg-quick-nav-shortcut-ul-li-hover p-2 whitespace-nowrap">Refund receipt</li>
                            <li className="text-quick-nav-shortcut-ul-li my-2 cursor-pointer hover:bg-quick-nav-shortcut-ul-li-hover p-2 whitespace-nowrap">Delayed credit</li>
                            <li className="text-quick-nav-shortcut-ul-li my-2 cursor-pointer hover:bg-quick-nav-shortcut-ul-li-hover p-2 whitespace-nowrap">Delayed change</li>
                        </ul>
                    </div>
                    <div className="mx-10 mt-5 pb-5">
                        <p className="text-base text-quick-nav-shortcut-header font-semibold leading-tight">SUPPLIERS</p>
                        <ul>
                            <li className="text-quick-nav-shortcut-ul-li my-2 cursor-pointer hover:bg-quick-nav-shortcut-ul-li-hover p-2 whitespace-nowrap">Expense</li>
                            <li className="text-quick-nav-shortcut-ul-li my-2 cursor-pointer hover:bg-quick-nav-shortcut-ul-li-hover p-2 whitespace-nowrap">Cheque</li>
                            <li className="text-quick-nav-shortcut-ul-li my-2 cursor-pointer hover:bg-quick-nav-shortcut-ul-li-hover p-2 whitespace-nowrap">Estimate</li>
                            <li className="text-quick-nav-shortcut-ul-li my-2 cursor-pointer hover:bg-quick-nav-shortcut-ul-li-hover p-2 whitespace-nowrap">Bill</li>
                            <li className="text-quick-nav-shortcut-ul-li my-2 cursor-pointer hover:bg-quick-nav-shortcut-ul-li-hover p-2 whitespace-nowrap">Pay bills</li>
                            <li className="text-quick-nav-shortcut-ul-li my-2 cursor-pointer hover:bg-quick-nav-shortcut-ul-li-hover p-2 whitespace-nowrap">Purchase order</li>
                            <li className="text-quick-nav-shortcut-ul-li my-2 cursor-pointer hover:bg-quick-nav-shortcut-ul-li-hover p-2 whitespace-nowrap">Supplier credit</li>
                            <li className="text-quick-nav-shortcut-ul-li my-2 cursor-pointer hover:bg-quick-nav-shortcut-ul-li-hover p-2 whitespace-nowrap">Credit card credit</li>
                        </ul>
                    </div>
                    <div className="mx-10 mt-5 pb-5">
                        <p className="text-base text-quick-nav-shortcut-header font-semibold leading-tight">EMPLOYEES</p>
                        <ul>
                            <li className="text-quick-nav-shortcut-ul-li my-2 cursor-pointer hover:bg-quick-nav-shortcut-ul-li-hover p-2 whitespace-nowrap">Single time activity</li>
                            <li className="text-quick-nav-shortcut-ul-li my-2 cursor-pointer hover:bg-quick-nav-shortcut-ul-li-hover p-2 whitespace-nowrap">Weekly timesheet</li>
                        </ul>
                    </div>
                    <div className="mx-10 mt-5 pb-5">
                        <p className="text-base text-quick-nav-shortcut-header font-semibold leading-tight">OTHER</p>
                        <ul>
                            <li className="text-quick-nav-shortcut-ul-li my-2 cursor-pointer hover:bg-quick-nav-shortcut-ul-li-hover p-2 whitespace-nowrap">Bank Deposit</li>
                            <li className="text-quick-nav-shortcut-ul-li my-2 cursor-pointer hover:bg-quick-nav-shortcut-ul-li-hover p-2 whitespace-nowrap">Transfer</li>
                            <li className="text-quick-nav-shortcut-ul-li my-2 cursor-pointer hover:bg-quick-nav-shortcut-ul-li-hover p-2 whitespace-nowrap">Journal entry</li>
                            <li className="text-quick-nav-shortcut-ul-li my-2 cursor-pointer hover:bg-quick-nav-shortcut-ul-li-hover p-2 whitespace-nowrap">Statement</li>
                            <li className="text-quick-nav-shortcut-ul-li my-2 cursor-pointer hover:bg-quick-nav-shortcut-ul-li-hover p-2 whitespace-nowrap">Pay down credit card</li>
                        </ul>
                    </div>
                </div>
             </>
            :
            <></>
            }
        </>
    )
}