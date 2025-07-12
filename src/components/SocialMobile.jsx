export default function SocialMobile(){
    return (
        <div className="md:hidden justify-center items-center mt-10 h-full">
            <ul className="text-[#8892B0] flex w-full justify-center items-center text-[20px] gap-7">
            <li className="tranistion-all duration-300 hover:cursor-pointer hover:translate-y-[-10%] hover:text-[#64FFDA]"><i class="fa-brands fa-linkedin-in"></i></li>
            <li className="tranistion-all duration-300 hover:cursor-pointer hover:translate-y-[-10%] hover:text-[#64FFDA]"><i class="fa-brands fa-square-instagram"></i></li>
            <li className="tranistion-all duration-300 hover:cursor-pointer hover:translate-y-[-10%] hover:text-[#64FFDA]"><i class="fa-brands fa-github"></i></li>
            </ul>
        </div>
    )
}