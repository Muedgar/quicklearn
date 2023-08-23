'use client'
import React from "react";
import Stats from "./stats";
import Search from "./search";
import Table from "./table";

const Dashboard = () => {
  const [openTab, setOpenTab] = React.useState(1);
  const [filter, setFilter] = React.useState("menu");
  return (
    <>
      <div className="flex flex-wrap h-fit">
        <div className="w-full">
          <ul
            className="flex mx-4 list-none flex-start  flex-row border-b-2 border-quick-nav-customise-menu"
            role="tablist"
          >
            <li className="text-center">
              <a
                className={
                  "pl-10 pr-10 text-md font-extrabold " +
                  (openTab === 1
                    ? "border-b-4 text-[#393a3d] border-quick-nav-border"
                    : "text-[#6b6c72] hover:text-[#393a3d] bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                  setFilter("menu")
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                All Invoices
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mt-1 p-1">
            
            <div className="flex-auto overflow-auto h-full">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <Stats />
                  <Search />
                  <Table />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;