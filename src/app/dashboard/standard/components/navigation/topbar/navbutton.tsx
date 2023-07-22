'use client'
import { useContext } from "react";
import { faBars, faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppContext } from "@/context/app.context";


export default function Navbutton() {
    const {state,dispatch} = useContext(AppContext)
    return (
        <>
            <div onClick={() => {
                if(state.open){
                    dispatch({type:"CLOSE"})
                }else{
                    dispatch({type:"OPEN"})
                }
            }} className="w-10 h-10 flex flex-row m-2 justify-center items-center cursor-pointer hover:bg-slate-300">
                <FontAwesomeIcon className="text-quick-nav-shortcut-header" icon={faBars} />
                {state.open?
                <FontAwesomeIcon className="text-quick-nav-shortcut-header" icon={faCaretRight} />:
                <FontAwesomeIcon className="text-quick-nav-shortcut-header" icon={faCaretLeft} />}
            </div>
        </>
    )
}
