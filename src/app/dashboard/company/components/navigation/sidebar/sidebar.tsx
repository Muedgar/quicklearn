'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../logo/logo";
import Shortcut from "../shortcut/shortcut";
import { faPen, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Tabs from "../tabs/tabs";

export default function Sidebar() {
    const [show,setShow] = useState(false)
    return (
        <>
            <div className="w-2/12 h-screen bg-quick-nav">
                <div className="w-full h-fit flex flex-col justify-center items-center">
                    <Logo />
                    <Shortcut />
                </div>
                <div className="w-full h-fit overflow-y-auto">
                    <div className="w-full h-fit flex flex-row justify-between px-2 py-5 text-white">
                        <p className="text-sm font-lg p-2">MENU</p>
                        <FontAwesomeIcon onClick={() => setShow(true)} className="cursor-pointer hover:bg-black p-2 rounded-lg" icon={faPen} />
                    </div>
                </div>
                {show?
                <>
                <div onClick={(e) => {
                e.preventDefault()
                setShow(false)
             }} className="absolute z-30 top-0 left-0 w-screen h-screen bg-quick-nav-overlay"></div>
                <div className="absolute z-40 left-1/4 top-10 bg-white w-[700px] h-[500px] rounded-lg shadow-md">
                   <div className="">
                    <p className="text-quick-nav-shortcut-header font-bold text-2xl m-10">Customise your menu</p>
                    <FontAwesomeIcon onClick={(e) => {
                e.preventDefault()
                setShow(false)
             }} className="absolute top-5 right-5 cursor-pointer text-xl font-bold" icon={faX} />
                   </div>
                    <Tabs />
                </div>
                </>:
            <></>}
            </div>
        </>
    )
}
