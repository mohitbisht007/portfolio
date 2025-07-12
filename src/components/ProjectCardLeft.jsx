

export default function ProjectCardLeft({img, name, description, tech, links}) {
    return (
        <div className="border border-[#64FFDA] p-4 rounded-xl flex md:flex-row flex-col inter">
            <div className="md:w-[50%]">
                <img src={img} alt="" />
            </div>
            <div className="md:w-[50%] mt-4 text-end">
                <p className="space-mono text-[#64FFDA]">Featured Project</p>
                <h2 className="text-[#CCD6F6] font-bold text-[25px]">{name}</h2>
                <div className="bg-[#112240] p-4 mt-3 text-[15px] relative md:right-15 md:top-5 rounded-md"><p>{description}</p></div>
                <ul className="flex mt-10 justify-center md:justify-end text-[14px] gap-4 md:gap-10 space-mono">
                    {tech.map((li, idx) => <li key={idx}>{li}</li>)}
                </ul>
                <div className="flex justify-center gap-4 md:gap-10 md:justify-end mt-7 text-[20px]"> 
                    <a href={links.github}> <i className="fa-brands fa-github hover:text-[#64FFDA] cursor-pointer transition-all"></i></a>
                    <a href={links.project}><i className="fa-solid fa-arrow-up-right-from-square hover:text-[#64FFDA] cursor-pointer transition-all"></i></a>
                </div>
            </div>
        </div>
    )
}