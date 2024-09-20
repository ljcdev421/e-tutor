import HeroImg from "../../assets/hero.png";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideRight } from "../../utilities/animation";

function Hero() {
  return (
    <>
       <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
             {/* info */}
            <div className="flex flex-col justify-center py-14 md:pf-16 xl:pr-40 md:py-0">
                <div className="text-center md:text-left space-y-6">
                    <motion.p 
                        variants={SlideRight(0.4)}
                        initial= "hidden"
                        animate = "visible"
                        className="text-orange-600 uppercase font-semibold"
                    >
                        100% de Garantie de Satisfaction
                    </motion.p>
                    <motion.h1 
                        variants={SlideRight(0.6)}
                        initial= "hidden"
                        animate = "visible"
                        className="text-5xl font-semibold lg:text-6xl !leading-tight"
                    >
                        Trouver le Parfait <span className="text-primary">Tuteur</span> 
                    </motion.h1>
                    <motion.p
                        variants={SlideRight(0.8)}
                        initial= "hidden"
                        animate = "visible"
                    >
                        Nous vous aidons à trouver le tuteur parfait
                        pour chaque leçon. C'est completement gartuit et privé.
                    </motion.p>
                    {/* section des bouttons */}
                    <motion.div 
                        variants={SlideRight(1)}
                        initial= "hidden"
                        animate = "visible"
                        className="flex gap-8 justify-center md:justify-start !mt-8 items-center"
                    >
                        <button className="primary-btn">
                            Commencer
                        </button>
                        <button className="flex justify-end items-center gap-2 font-semibold">
                            <span className="w-10 h-10 bg-secondary/15 rounded-full flex justify-center items-center">
                                <FaPlay className="text-secondary"/>
                            </span>
                            Voir comment ça marche
                        </button>
                    </motion.div>
                </div>
            </div>
            {/* image */}
            <div className="flex justify-center items-center">
                <motion.img 
                    initial = {{opacity:0, x:200}}
                    animate = {{opacity:1, x:0}}
                    transition = {{type:"spring", stiffness:100, delay:0.2 }}
                    src={HeroImg} alt="" className="w-[350px] md:w-[550px]"
                />
            </div>
       </div>
    </>
  )
}

export default Hero