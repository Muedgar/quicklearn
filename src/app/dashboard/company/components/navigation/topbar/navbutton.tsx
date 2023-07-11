import { faBars, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Navbutton() {
    return (
        <>
            <div className="w-10 h-10 flex flex-row m-2 justify-center items-center cursor-pointer hover:bg-slate-300">
                <FontAwesomeIcon icon={faBars} />
                <FontAwesomeIcon icon={faCaretRight} />
            </div>
        </>
    )
}
