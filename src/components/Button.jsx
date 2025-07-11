export default function Button({name}){
    return (
        <button className="border 
        rounded-md 
        p-3
        text-[#64FFDA] 
        border-[#64FFDA] 
        transition-all duration-300 ease-in-out
        hover:-translate-x-1 hover:-translate-y-1
        hover:shadow-[3px_3px_0_#64FFDA] cursor-pointer">
            {name}
        </button>
    )
}