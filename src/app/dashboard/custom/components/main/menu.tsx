'use client'
import React, { useContext } from "react";
import Search from "./search";
import BalanceSheet from "./balancesheet";
import { AppContext } from "@/context/app.context";
import ProfitAndLoss from "./profitandloss";

const Menu = () => {
  const {state} = useContext(AppContext)
  return (
    <>
      <div className="flex flex-wrap h-fit">
        <Search />
        {state.balanceSheet?
        <BalanceSheet />:
        <ProfitAndLoss />}
      </div>
    </>
  );
};

export default Menu;