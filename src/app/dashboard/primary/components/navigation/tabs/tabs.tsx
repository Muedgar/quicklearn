import React from "react";
import ListMenu from "./menu";
import Title from "./title";
import Footer from "./footer";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  const [filter, setFilter] = React.useState("menu");
  return (
    <>
      <div className="flex flex-wrap">
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
                Menu
              </a>
            </li>
            <li className="ml-5 text-center">
              <a
                className={
                  "pl-10 pr-10 text-md font-extrabold " +
                  (openTab === 2
                    ? "border-b-4 text-[#393a3d] border-quick-nav-border"
                    : "text-[#6b6c72] hover:text-[#393a3d] bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                  setFilter("bookmarks")
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Bookmarks
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mt-1 p-1">
            <Title title={filter} />
            <div className="flex-auto overflow-auto h-52">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  
                  <ListMenu />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                 
                  <ListMenu />
                </div>
              </div>
            </div>
              <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;