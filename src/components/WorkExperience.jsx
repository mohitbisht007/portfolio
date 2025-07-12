import { useState } from "react"
import Work from "./Work"

export default function WorkExperiences() {

    const [button, setButton] = useState(1)
    const [isActive, setIsActive] = useState({
        button1: true,
        button2: false,
        button3: false
    })

    const handleOnClick = (btn) => {
        setButton(btn)
        if (btn === 1) { setIsActive({ button1: true, button2: false, button3: false }) }
        else if (btn === 2) { setIsActive({ button1: false, button2: true, button3: false }) }
        else if (btn === 3) { setIsActive({ button1: false, button2: false, button3: true }) }
    }



    return (
        <div className="md:w-[80%] mt-30 m-auto text-[#8892B0]">
            <div className="md:w-[90%] md:ml-20 mt-10">
                <div className="flex mb-7 text-center flex-col md:flex-row mb-7">
                    <h2 className="text-[25px] text-[#CCD6F6] font-bold"><span className="text-[#64FFDA] space-mono text-[20px]">02.</span> Where I’ve Worked </h2> &nbsp; &nbsp;
                    <div className="text-[#8892B0] border-t-1 ml-2 md:mt-5 md:w-[50%]"></div>
                </div>
                <div className="md:flex mb-5">
                    <div className="md:w-[30%] mb-15 flex md:flex-col space-mono text-[14px]">
                        <div onClick={() => handleOnClick(1)} className={`border-l-2 hover:border-l-[#64FFDA] hover:text-[#64FFDA] transition-all ease-in-out duration-300 ${isActive.button1 ? "border-l-[#64FFDA] text-[#64FFDA]" : ""} `}>
                            <button className={`py-3 px-4 text-start hover:bg-[#112240] ${isActive.button1 ? "bg-[#112240]" : ""}`}>Charya Global</button>
                        </div>
                        <div onClick={() => handleOnClick(2)} className={`border-l-2 hover:border-l-[#64FFDA]
                            hover:text-[#64FFDA] transition-all ease-in-out duration-200 ${isActive.button2 ? "border-l-[#64FFDA] text-[#64FFDA]" : ""}`}>
                            <button className={`py-3 px-4 text-start hover:bg-[#112240] ${isActive.button2 ? "bg-[#112240]" : ""}`}>Navodita InfoTech</button>
                        </div>
                        <div onClick={() => handleOnClick(3)} className={`border-l-2 hover:border-l-[#64FFDA]
                            hover:text-[#64FFDA] transition-all ease-in-out duration-300 ${isActive.button3 ? "border-l-[#64FFDA] text-[#64FFDA]" : ""}`}>
                            <button className={`py-3 px-4 text-start hover:bg-[#112240] ${isActive.button3 ? "bg-[#112240]" : ""}`}>The Hidden Hour</button>
                        </div>

                    </div>
                    <div>
                        {button === 1 && <Work
                            jobTitle="SEO Executive"
                            company="@ Charya Global"
                            date="July 2022 - Current"
                            work={["Engineered and improved major features of Starry's customer-facing Android web app using ES6, Handlebars, Backbone, Marionette, and CSS",
                                "Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with the Starry Station internet router",
                                "Collaborated with designers and other developers to ensure thoughtful and consistent user experiences across Starry’s iOS and Android mobile apps"]}
                        />}
                        {button === 2 && <Work
                            title="LMN"
                            date="20, July 2024"
                            work={["Worked at B", "Done B", "Provided B"]}
                        />}
                        {button === 3 && <Work
                            title="RST"
                            date="20, July 2025"
                            work={["Worked at C", "Done C", "Provided C"]}
                        />}
                    </div>
                </div>
            </div>
        </div>
    )
}