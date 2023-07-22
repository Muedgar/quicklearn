import Image from "next/image";
import React from "react";

import './menu.css'
function ListMenu() {
  const [menuItems, setMenuItems] = React.useState([
    "Invoicing",
    "Banking",
    "Customers & Leads",
    "Cash flow",
    "Expenses",
    "Employees",
    "Time",
    "Reports",
    "Taxes",
    "Accounting",
    "Apps",
    "Dashboard",
    "Banking",
    "Get things done",
    "Customers",
    "Time entries"
  ]);

  //save reference for dragItem and dragOverItem
  const dragItem = React.useRef<any>(null);
  const dragOverItem = React.useRef<any>(null);

  //const handle drag sorting
  const handleSort = () => {
    //duplicate items
    let _menuItems = [...menuItems];

    //remove and save the dragged item content
    const draggedItemContent = _menuItems.splice(dragItem.current, 1)[0];

    //switch the position
    _menuItems.splice(dragOverItem.current, 0, draggedItemContent);

    //reset the position ref
    dragItem.current = null;
    dragOverItem.current = null;

    //update the actual array
    setMenuItems(_menuItems);
  };


  return (
    <div className="">
      <div className="list-sort">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="list-item"
            draggable
            onDragStart={(e) => (dragItem.current = index)}
            onDragEnter={(e) => (dragOverItem.current = index)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
          >
            <div className="flex flex-row justify-start items-left h-10 m-5 cursor-grab">
                <Image alt="menu logo" src={'/menulogo.png'} width={20} height={10} className="object-contain" />
                  <label className="mt-2  ml-5 container-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                <h3 className="text-black text-lg pt-2 font-light">{item}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListMenu;
