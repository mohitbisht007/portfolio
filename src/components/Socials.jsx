export default function Social(){
    return (
        <div className="hidden w-[10%] fixed md:flex justify-center items-center h-full">
            <ul className="text-[#8892B0] flex flex-col w-full justifyl-center items-center text-[20px] gap-4">
            <li className="tranistion-all duration-300 hover:cursor-pointer hover:translate-y-[-10%] hover:text-[#64FFDA]"><i class="fa-brands fa-github"></i></li>
            <li className="tranistion-all duration-300 hover:cursor-pointer hover:translate-y-[-10%] hover:text-[#64FFDA]"><i class="fa-brands fa-linkedin-in"></i></li>
            <li className="tranistion-all duration-300 hover:cursor-pointer hover:translate-y-[-10%] hover:text-[#64FFDA]"><i class="fa-brands fa-square-instagram"></i></li>
            <span className="h-[150px] border-l-2"></span>
            </ul>
        </div>
    )
}