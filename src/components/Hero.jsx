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
        className="px-5 flex flex-col gap-x-4 gap-y-16 py-10 md:py-[20px] font-dmsans">

        <div className="flex items-center gap-1">
          <Dot className="fill-green-500 text-green-500" size={50} />
          <span className="text-sm font-medium">Available for hire</span>
        </div>

        <div className="relative w-full max-w-[1200px] mx-auto text-center font-dmsans pt-1 pb-24">
            <img className="absolute -top-2/4 -left-1/4 pointer-events-none" src={greenblur} alt="img" />
            <div className="text-5xl md:text-7xl lg:text-8xl font-bold text-center leading-10 tracking-wide">
                <motion.p className="uppercase">Charles Emmanuel, Creative Product Designer & No-Code Developer</motion.p>
                <motion.p variants={textVariant} transition={{ duration: 0.5, delay: 0.4 }}></motion.p>
            </div>
            
            <button className="px-6 py-3 mt-10 md:px-8 md:py-4 bg-[#1d1d1f] hover:bg-gray-700 text-white text-xs md:text-sm font-semibold tracking-widest rounded-full transition-colors">
                CONTACT NOW
            </button>


        </div>

        
    </motion.div>
  )
}

export default Hero