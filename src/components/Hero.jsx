/* eslint-disable react/no-unescaped-entities */

//import Button from "./Button"
import {motion} from "framer-motion"
import { useInView } from "react-intersection-observer";
import greenblur from "../assets/img/greenblur.png"
import { Dot } from "lucide-react"


const Hero = () => {
    const { ref: firstRef, inView: firstInView } = useInView();
	// const { ref: secondRef, inView: secondInView } = useInView();
	// const { ref: thirdRef, inView: thirdInView } = useInView();

    const textVariant = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};
    


  return (
    <motion.div 
        ref={firstRef}
        variants={textVariant}
        initial="hidden"
        animate={firstInView ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
        className="px-4 sm:px-5 flex flex-col gap-x-4 gap-y-8 sm:gap-y-12 md:gap-y-16 py-8 sm:py-10 md:py-[20px] font-dmsans">

        <div className="flex items-center gap-1 sm:gap-2">
          <Dot className="fill-green-500 text-green-500 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" size={50} />
          <span className="text-xs sm:text-sm font-medium">Available for hire</span>
        </div>

        <div className="relative w-full max-w-[1200px] mx-auto text-center font-dmsans pt-1 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
            <img className="absolute -top-2/4 -left-1/4 pointer-events-none w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 opacity-50 sm:opacity-75" src={greenblur} alt="img" />
            <div className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-center leading-tight sm:leading-snug md:leading-normal lg:leading-10 tracking-tight sm:tracking-normal md:tracking-wide px-2">
                <motion.p className="uppercase">Charles Emmanuel, Creative Product Designer & No-Code Developer</motion.p>
                <motion.p variants={textVariant} transition={{ duration: 0.5, delay: 0.4 }}></motion.p>
            </div>
            
            <button className="px-5 py-2.5 sm:px-6 sm:py-3 mt-6 sm:mt-8 md:mt-10 md:px-8 md:py-4 bg-[#1d1d1f] hover:bg-gray-700 text-white text-xs sm:text-sm font-semibold tracking-widest rounded-full transition-colors">
                CONTACT NOW
            </button>


        </div>

        
    </motion.div>
  )
}

export default Hero