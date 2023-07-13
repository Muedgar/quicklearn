'use client'
import React, {useState,Fragment} from 'react'
import Main from "./components/main/main";
import Nav from "./components/navigation/nav";

import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Company() {
  const [openRight, setOpenRight] = useState(false);
 
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  return (
    <>
     <Nav />
     <Main />
     {/* this should dispatch an action */}
     <div className="flex flex-wrap gap-4">
        <Button onClick={openDrawerRight}>Open Drawer Right</Button>
      </div>
    <Fragment>
      {/* this should render accordingly */}
      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Drawer on Right
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
          >
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </div>
      </Drawer>
      
    </Fragment>
    </>
  );
}
