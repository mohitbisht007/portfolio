export default function OtherProjectCard({ title, description, tech, links }) {
    return (
    <div className=" bg-[#112240] p-8 tranistion-all duration-300 hover:cursor-pointer hover:translate-y-[-3%]">
        <div className="flex justify-between my-5">
            <i className="fa-solid fa-folder text-[#64FFDA] text-[30px]"></i>
            <div className="flex gap-4 text-[18px]">
                <a href={links.github} > <i className="fa-brands fa-github hover:text-[#64FFDA] cursor-pointer transition-all"></i></a>
                <a href={links.project} ><i className="fa-solid fa-arrow-up-right-from-square hover:text-[#64FFDA] cursor-pointer transition-all"></i></a>
            </div>
        </div>
        <div>
            <h2 className="text-[20px] text-[#CCD6F6] font-bold mb-3">{title}</h2>
            <p>{description}</p>
            <ul className="text-[#737F9D] space-mono mt-3 flex gap-4 text-[13px] my-3">
                {tech.map((li, idx) => <li key={idx}>{li}</li>)}
            </ul>
        </div>
    </div>
    )
}