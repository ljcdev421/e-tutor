import { NavbarMenu } from "../../data/data";
import { MdComputer, MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
        <motion.div
            initial = {{opacity:0}} 
            animate = {{opacity:1}}
            transition={{duration: 0.5, delay:0.5}}
        >
            <div className="container flex justify-between items-center py-6">
                {/* Logo section */}
                <div className="text-2xl flex items-center gap-2 font-bold">
                    <MdComputer className="text-3xl text-secondary"/>
                    <p>LjcSchool</p>
                </div>
                {/* Menu section */}
                <div className="hidden lg:block">
                    <ul className="flex items-center gap-6">
                        {
                            NavbarMenu.map((item)=>{
                                return (
                                    <li key={item.id}>
                                        <a href={item.link} className="inline-block text-gray-500 
                                        text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300 font-semibold" > 
                                            {item.title} 
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                {/* CTA Button section */}
                <div className="hidden lg:block space-x-6">
                    <button className="font-semibold">Se connecter</button>
                    <button className="text-white bg-secondary font-semibold rounded-full py-2 px-6">S'inscrire</button>
                </div>
                {/* Mobile hamberger menu section */}
                <div  className="lg:hidden" onClick={()=>setIsOpen(!isOpen)}>
                    <MdMenu className="text-4xl"/>
                </div>
            </div>
        </motion.div>
        <ResponsiveMenu open = {isOpen} />
    </>
  )
}

export default Navbar