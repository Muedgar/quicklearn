'use client'
import React, { useContext } from "react";
import Search from "./search";
import BalanceSheet from "./balancesheet";
import { AppContext } from "@/context/app.context";
import ProfitAndLoss from "./profitandloss";

const Menu = () => {
  const {state,dispatch} = useContext(AppContext)
    const handleChange = (e: { target: { value: any; }; }) => {
        console.log(e.target.value)
        if(e.target.value === "Balance Sheet") {
            dispatch({type:'SET_REPORT_BALANCE_SHEET'})
        }else {
            dispatch({type:'RESET_REPORT_BALANCE_SHEET'})
        }
  };

  async function generateReport() {
    let revenue = []
    let totalRevenue = 0

    

  }
  return (
    <>
      <div className="h-fit">
         <div className='flex justify-between mt-4'>
        <div className='flex justify-evenly'>
            <div>
            <select onChange={handleChange} className="focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-fit p-2.5 ml-4 mt-4">
                <option value="">Select Report</option>
                <option value="Profit & Loss Statement">Profit & Loss Statement</option>
                {/* <option value="Balance Sheet">Balance Sheet</option> */}
            </select>
        </div>
        
        </div>
    </div>
        {state.balanceSheet?
        '':
        <ProfitAndLoss />}
      </div>
    </>
  );
};

export default Menu;