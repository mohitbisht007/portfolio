export default function Work({jobTitle, company, date, work}) {
    return <div className="ml-10 md:w-[80%]">
        <h2 className="text-[#CCD6F6] font-bold inter text-[19px] mb-2">{jobTitle} 
            &nbsp; <span className="text-[#64FFDA]">{company}</span></h2>
        <p className="space-mono text-[14px]">{date}</p>
        <ul>
          {work.map((w,i) => <li className="m-4" key={i}><i className="fa-solid fa-right-long text-[#64FFDA]"></i> {w}</li>)}
        </ul>
    </div>
}