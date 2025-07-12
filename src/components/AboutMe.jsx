import me from "../assets/me.avif"

export default function Aboutme() {
    return (
        <div className="w-full p-5 md:w-[80%] m-auto flex md:flex-row flex-col text-[#8892B0]">
            <div className="md:w-[60%] md:p-5">
                <div className="flex flex-col md:flex-row mb-7">
                <h2 className=" text-[25px] text-[#CCD6F6] font-bold"><span className="text-[#64FFDA] space-mono text-[20px]">01.</span> About Me </h2> &nbsp; &nbsp;
                <div className="text-[#8892B0] border-t-1 ml-2 md:mt-5 w-[60%]"></div>
                </div>
                
                <p>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p> <br />
                <p>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p> <br />
                <p>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.</p> <br />
                <p>Here are a few technologies I’ve been working with recently:</p> <br />

                <div className="flex justify-between space-mono md:w-[70%] text-[13px]">
                <ul className="flex flex-col gap-2">
                    <li> <span className="text-[#64FFDA]"><i class="fa-solid fa-right-long"></i></span> JavaScript</li>
                    <li><span className="text-[#64FFDA]"><i class="fa-solid fa-right-long"></i></span> React</li>
                    <li><span className="text-[#64FFDA]"><i class="fa-solid fa-right-long"></i></span> Tailwind</li>
                </ul>
                <ul className="flex flex-col gap-2">
                    <li><span className="text-[#64FFDA]"><i class="fa-solid fa-right-long"></i></span> JavaScript</li>
                    <li><span className="text-[#64FFDA]"><i class="fa-solid fa-right-long"></i></span> React</li>
                    <li><span className="text-[#64FFDA]"><i class="fa-solid fa-right-long"></i></span> Tailwind</li>
                </ul>
                </div>
            </div>
            <div className="md:w-[40%] w-[80%] m-auto p-4 mt-20">
                <img src={`${me}`} alt="" className="shadow-[10px_10px_0_#64FFDA] rounded-md" />
            </div>
        </div>
    )
}