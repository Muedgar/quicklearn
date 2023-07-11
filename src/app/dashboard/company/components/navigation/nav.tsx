import Sidebar from "./sidebar/sidebar";
import Navbutton from "./topbar/navbutton";

export default function Nav() {
    return (
        <>
            <div className="relative w-screen h-screen flex flex-row justify-evenly">
                <Sidebar />
                <div className="w-full h-16 relative bg-black">
                    <Navbutton />
                </div>
            </div>
        </>
    )
}
