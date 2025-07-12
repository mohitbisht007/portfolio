import Button from "./Button";

export default function Contact() {
    return (
        <div className="md:w-[80%] text-center m-auto p-3 mt-30 text-[#8892B0]">
            <div className="mt-10">
                <p className="text-[#64FFDA] space-mono text-[18px] mb-2" > 04. What's Next </p>
                <h2 className="mb-7 text-[45px] text-[#CCD6F6] font-bold">Get In Touch</h2>
                <p className="w-[60%] mb-10 m-auto">Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
                <Button name="Email Me"/>
            </div>
        </div>
    )
}