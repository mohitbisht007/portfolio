import { useState } from "react"
import Work from "./Work"

export default function WorkExperiences() {

    const [button, setButton] = useState(1)
    const [isActive, setIsActive] = useState({
        button1: true,
        button2: false,
        button3: false,
        button4: false,
    })

    const handleOnClick = (btn) => {
        setButton(btn)
        if (btn === 1) { setIsActive({ button1: true, button2: false, button3: false, button4: false  }) }
        else if (btn === 2) { setIsActive({ button1: false, button2: true, button3: false, button4: false }) }
        else if (btn === 3) { setIsActive({ button1: false, button2: false, button3: true, button4: false }) }
        else if (btn === 4) { setIsActive({ button1: false, button2: false, button3: false, button4: true }) }
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
                            <button className={`py-3 px-4 text-start hover:bg-[#112240] ${isActive.button3 ? "bg-[#112240]" : ""}`}>Charya Global</button>
                        </div>
                        <div onClick={() => handleOnClick(4)} className={`border-l-2 hover:border-l-[#64FFDA]
                            hover:text-[#64FFDA] transition-all ease-in-out duration-300 ${isActive.button4 ? "border-l-[#64FFDA] text-[#64FFDA]" : ""}`}>
                            <button className={`py-3 px-4 text-start hover:bg-[#112240] ${isActive.button4 ? "bg-[#112240]" : ""}`}>The Hidden Hour</button>
                        </div>

                    </div>
                    <div>
                        {button === 1 && <Work
                            jobTitle="Front End Developer"
                            company="@ Charya Global"
                            date="July 2025 - Current"
                            work={["Converted Figma designs and wireframes into pixel-perfect web pages.",
                                "Integrated SEO best practices into frontend code to improve search engine visibility.",
                                "Collaborated with the backend team to connect APIs and ensure smooth data flow.",
                                "Optimized website performance for faster load times and better user experience.",
                                "Implemented dynamic UI components using React.js for improved interactivity."
                            ]}
                        />}

                        {button === 2 && <Work
                            jobTitle="Full Stack Developer"
                            company="Navodita InfoTech"
                            date="May 2025 - June-2025"
                            work={["Developed a fully functional e-commerce application for tech products using the MERN stack (MongoDB, Express.js, React, Node.js).",
                                "Implemented user authentication (login/signup), product listings, filtering, and cart functionalities.",
                                "Built RESTful APIs for managing users, products, and orders.",
                                "Designed responsive UI using React and Bootstrap to ensure a smooth user experience across devices",
                                "Managed application state using React Context API and optimized performance."]}
                        />}
                        {button === 3 && <Work
                            jobTitle="SEO Executive"
                            company="@ Charya Global"
                            date="July 2022 - April 2025"
                            work={["Conducted keyword research and competitor analysis through SEO Tools.",
                                "Optimized on-page such as meta tags, URLs, and content.",
                                "Created and managed high-quality backlinks through SEO techniques.",
                                "Monitored website traffic and performance with GSC and GA.",
                                "Collaborated with the web development teams to align SEO goals."
                            ]}
                        />}
                        {button === 4 && <Work
                            jobTitle="Computer Operator"
                            company="@ The Hidden Hour"
                            date="March 2021 - April 2021"
                            work ={[
                                "Greeted and assisted customers, providing game briefings and safety instructions.",
                                "Managed booking and billing operations using in-house software.",
                                "Coordinated with team to reset game and prepare for the next session.",
                                "Provided technical support for any equipment or clue-related issues."
                            ]}
                        />}
                    </div>
                </div>
            </div>
        </div>
    )
}