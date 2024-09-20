import { motion, AnimatePresence } from "framer-motion";
import { NavbarMenu } from "../../data/data";

function ResponsiveMenu({open}) {
  return (
    <AnimatePresence mode = "wait">
        {
            open && <motion.div 
               initial = {{opacity:0, y:-100}} 
               animate = {{opacity:1, y:0}}
               exit = {{opacity:0, y:-100}}
               transition={{duration: 0.3}}
               className="absolute top-20 left-0 w-full h-screen z-20 lg-hidden"
            >
                <div className="text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl">
                    <ul className="flex flex-col justify-center items-center gap-10">
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
            </motion.div>
        }
    </AnimatePresence>
  )
}

export default ResponsiveMenu;