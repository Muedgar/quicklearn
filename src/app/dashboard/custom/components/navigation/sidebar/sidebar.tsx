'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../logo/logo";
import Shortcut from "../shortcut/shortcut";
import { faCaretRight, faPen, faX } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import Tabs from "../tabs/tabs";
import { AppContext } from "@/context/app.context";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import Link from "next/link";
import { logOut } from "@/redux/features/signin-slice";
import { signOut } from "@/redux/features/auth-slice";
import { setSplashCustom, setSplashSignIn } from "@/redux/features/splash";

export default function Sidebar() {
    const {state} = useContext(AppContext)
    const dispatch = useDispatch<AppDispatch>()
    
    const [show,setShow] = useState(false)
    const menuItems = ['Log Out']
    return (
        <>
            <div className={state.open?"w-2/12 h-screen bg-quick-nav":"w-0 h-screen bg-quick-nav"}>
                <div className="w-full h-fit flex flex-col justify-center items-center">
                    <Logo />
                    
                </div>
                <div className="w-full h-fit overflow-y-auto">
                    <div className="w-full h-fit flex flex-row justify-between px-2 py-5 text-white">
                        <p className="text-sm font-lg p-2">MENU</p>
                        {/* <FontAwesomeIcon onClick={() => setShow(true)} className="cursor-pointer hover:bg-black p-2 rounded-lg" icon={faPen} /> */}
                    </div>
                </div>
                <Link className="hidden" href={'/signin'} id="customMoveToSignin"></Link>
                <div className="overflow-auto h-96">
                {
                    menuItems.map((item:string,index:number) => (
                    <div onClick={() => {
                        if(item === 'Log Out') {
                            // show splash screen
                            dispatch(logOut())
                            dispatch(signOut())
                            dispatch(setSplashCustom(true))
                            dispatch(setSplashSignIn(false))
                            // navigate to log in screen
                            document.getElementById("customMoveToSignin")?.click();
                        }
                    }} key={index} className="flex flex-row justify-between px-2 hover:bg-black hover:text-white py-1">
                    <h1 className="text-sm font-sm p-2 text-quick-nav-item">{item}</h1>
                    <FontAwesomeIcon className="text-white cursor-pointer p-2 rounded-lg"  icon={faCaretRight} />
                </div>
                ))
                }
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
