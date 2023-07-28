'use client'
import React from "react";
import Stats from "./stats";
import Search from "./search";
import Table from "./table";

const Menu = () => {
  const [openTab, setOpenTab] = React.useState(1);
  const [filter, setFilter] = React.useState("menu");
  return (
    <>
      <div className="flex flex-wrap h-fit">
        <Search />
        <Table />
      </div>
    </>
  );
};

export default Menu;