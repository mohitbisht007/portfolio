import { useEffect, useState } from "react";
import Button from "./Button";

export default function NavBar() {

    const [open, setOpen] = useState(false)

    useEffect(() => {
        document.body.style.overflowX = "hidden";
    }, []);

    return (
        <nav className="space-mono flex flex-col justify-between text-[#8892B0] p-5">
            <div onClick={() => setOpen(false)} className={`fixed inset-0 z-10 bg-[#0A192F]/50 backdrop-blur-[2px] transition-all duration-300 ease-in-out md:hidden ${
    open ? 'opacity-100' : 'opacity-0 pointer-events-none'} `}>
            </div>
            <div className="flex justify-between items-center w-full">
                <Button />
                <div className="hidden md:flex justify-between p-6 z-20 text-[13px] text-[#CCD6F6]">
                    <ul className="flex gap-7 justify-center items-center">
                        <li className="tranition-all duration-300 cursor-pointer hover:text-[#64FFDA]"><span className="text-[#64FFDA]">01.</span> About</li>
                        <li className="tranition-all duration-300 cursor-pointer hover:text-[#64FFDA]"><span className="text-[#64FFDA]">02.</span> Experience</li>
                        <li className="tranition-all duration-300 cursor-pointer hover:text-[#64FFDA]"><span className="text-[#64FFDA]">03.</span> Work</li>
                        <li className="tranition-all duration-300 cursor-pointer hover:text-[#64FFDA]"><span className="text-[#64FFDA]">04.</span> Contact</li>
                        <li><Button name="Resume"  /></li>
                    </ul>
                </div>
                <button onClick={() => setOpen(!open)} className="flex cursor-pointer flex-col items-end md:hidden z-40">
                    <span className={`
                border-t-3 mb-2 border-[#64FFDA] w-[30px] 
                transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}></span>
                    <span className={`
                border-t-3 mb-2 border-[#64FFDA] w-[22px] 
                transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
                    <span className={`
                border-t-3 border-[#64FFDA] w-[14px] 
                transition-all duration-300 ${open ? "-rotate-45 -translate-y-2 w-[30px]" : ""}`}></span>
                </button>
            </div>
            <div className={`fixed top-0 right-0 h-full w-3/4 bg-[#112240] transform transition-all duration-300 ease-in-out
            md:hidden justify-between p-6 z-20 text-[20px] text-[#CCD6F6] ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}`}>
                <ul className="flex flex-col gap-10 h-full justify-center items-center">
                    <li className="tranition-all duration-300 cursor-pointer hover:text-[#64FFDA]"><span className="text-[#64FFDA]">01.</span> About</li>
                    <li className="tranition-all duration-300 cursor-pointer hover:text-[#64FFDA]"><span className="text-[#64FFDA]">02.</span> Experience</li>
                    <li className="tranition-all duration-300 cursor-pointer hover:text-[#64FFDA]"><span className="text-[#64FFDA]">03.</span> Work</li>
                    <li className="tranition-all duration-300 cursor-pointer hover:text-[#64FFDA]"><span className="text-[#64FFDA]">04.</span> Contact</li>
                    <li><Button name="Resume" /></li>
                </ul>
            </div>
        </nav>
    )
}