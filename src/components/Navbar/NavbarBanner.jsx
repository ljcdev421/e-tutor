import { useState } from "react";
import { motion } from "framer-motion";

function NavbarBanner() {
    const [isOpen, setIsOpen] = useState(true);

  return (
    isOpen && (
        <motion.div className="bg-primary text-sm text-center font-semibold p-1 hidden lg:block relative">
            Es-tu un étudiant ou un élève en quête de professeur en ligne? 
            <a href="#" className="text-secondary ml-2">Discutons.</a>
            <div className="absolute top-1/2 right-10 cursor-pointer -translate-y-1/2"
                onClick={()=>setIsOpen(false)}
            >
                x
            </div>
        </motion.div>
    )
  )
}

export default NavbarBanner