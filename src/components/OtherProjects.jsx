import Button from "./Button";
import OtherProjectCard from "./OtherProjectCard";
import { projectData } from "../utils/projectData";
import { useState } from "react";

export default function OtherProject() {

    const [visibleCount, setVisibleCount] = useState(6);

    const handleShowMore = () => {
        setVisibleCount(prev => prev + 3)
    }

    const handleShowLess = () => {
        setVisibleCount(6)
    }

    return (
        <div className="md:w-[80%] m-auto p-3 mt-30 text-[#8892B0]">
            <h2 className=" text-center text-[25px] font-bold mb-10">Other Noteworthy Projects</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {projectData.slice(0, visibleCount).map((data, idx) => <OtherProjectCard title={data.title} description={data.description} tech={data.tech} links={data.links} />)}
            </div>

            <div className="text-center mt-20">
                <Button name={`${visibleCount >= projectData.length ? "Show Less" : "Show More"}`} clickfnc={visibleCount >= projectData.length ? handleShowLess : handleShowMore} />
            </div>
        </div>)
}