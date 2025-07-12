import me from "../assets/mohit.JPG"

export default function Aboutme() {
    return (
        <div className="w-full p-5 md:w-[80%] m-auto flex md:flex-row flex-col text-[#8892B0]">
            <div className="md:w-[60%] md:p-5">
                <div className="flex flex-col md:flex-row mb-7">
                    <h2 className=" text-[25px] text-[#CCD6F6] font-bold"><span className="text-[#64FFDA] space-mono text-[20px]">01.</span> About Me </h2> &nbsp; &nbsp;
                    <div className="text-[#8892B0] border-t-1 ml-2 md:mt-5 w-[60%]"></div>
                </div>

                <p>Hello! My name is Mohit Bisht and I enjoy creating functional and user-friendly web applications.
                    My journey into web development began when I explored the basics of HTML and CSS through YouTube tutorials. That initial curiosity turned into a passion, and I eventually took up courses to strengthen my foundation in Full Stack Development.</p> <br />

                <p>Since then, I’ve worked at Charya Global Pvt ltd and Navodita InfoTech as an Intern and built several real-world web projects—including a tech product shopping app, a weather application, and an Airbnb-style staycation clone.</p> <br />

                <p>I’m currently focused on sharpening my React and Node.js skills by building end-to-end applications with intuitive user interfaces and solid backend logic.</p> <br />
                <p>Here are a few technologies I’ve been working with recently:</p> <br />

                <div className="flex justify-between space-mono md:w-[70%] text-[13px]">
                    <ul className="flex flex-col gap-2">
                        <li> <span className="text-[#64FFDA]"><i class="fa-solid fa-right-long"></i></span> JavaScript (ES6+)</li>
                        <li><span className="text-[#64FFDA]"><i class="fa-solid fa-right-long"></i></span> React</li>
                        <li><span className="text-[#64FFDA]"><i class="fa-solid fa-right-long"></i></span> Node.js</li>
                    </ul>
                    <ul className="flex flex-col gap-2">
                        <li><span className="text-[#64FFDA]"><i class="fa-solid fa-right-long"></i></span> MongoDB</li>
                        <li><span className="text-[#64FFDA]"><i class="fa-solid fa-right-long"></i></span> Express.js</li>
                        <li><span className="text-[#64FFDA]"><i class="fa-solid fa-right-long"></i></span> Tailwind / Bootstrap</li>
                    </ul>
                </div>
            </div>
            <div className="md:w-[40%] w-[80%] m-auto p-4 mt-20">
                <img src={`${me}`} alt="" className="shadow-[10px_10px_0_#64FFDA] rounded-md" />
            </div>
        </div>
    )
}