import ProjectCardLeft from "./ProjectCardLeft";
import p1 from "../assets/p1.png"
import ProjectCardRight from "./ProjectCardRight";

export default function Projects() {
    return (
        <div className="md:w-[80%] m-auto p-3 mt-30 text-[#8892B0]">
            <div className="mt-10 mb-7">
                <div className="flex flex-col md:flex-row mb-7">
                    <h2 className=" text-[25px] text-[#CCD6F6] font-bold"><span className="text-[#64FFDA] space-mono text-[20px]">03.</span> Things I’ve Build </h2> &nbsp; &nbsp;
                    <div className="text-[#8892B0] border-t-1 ml-2 md:mt-5 w-[50%]"></div>
                </div>
            </div>

            <div className="flex mt-20 flex-col gap-10">
                <ProjectCardLeft
                    img={p1}
                    name="Halcyon Theme"
                    description="A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm."
                    tech={["VS Code", "React", "Node", "Tailwind"]}
                    links={{
                        github: "https://github.com/",
                        project: "https:netlify.com"
                    }}
                />

                <ProjectCardRight
                    img={p1}
                    name="Halcyon Theme"
                    description="A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm."
                    tech={["VS Code", "React", "Node", "Tailwind"]}
                    links={{
                        github: "https://github.com/",
                        project: "https:netlify.com"
                    }}
                />

                <ProjectCardLeft
                    img={p1}
                    name="Halcyon Theme"
                    description="A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm."
                    tech={["VS Code", "React", "Node", "Tailwind"]}
                    links={{
                        github: "https://github.com/",
                        project: "https:netlify.com"
                    }}
                />
            </div>
        </div>
    )
}