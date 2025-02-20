/* eslint-disable react/no-unescaped-entities */
//import heroimg from "../assets/img/hero-img.png"
import herogif from "../assets/img/Hemperor-head-gif.gif"
import Button from "./Button"
import {motion} from "framer-motion"
import { useInView } from "react-intersection-observer";
import greenblur from "../assets/img/greenblur.png"


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
        className="px-5 flex flex-col lg:flex-row gap-x-4 gap-y-16 lg:justify-between items-center py-10 md:py-[20px] font-dmsans">

        <div className="relative w-full max-w-[929px] font-dmsans pt-5">
            <img className="absolute -top-2/4 -left-1/4" src={greenblur} alt="img" />
            <div className="text-white sm:text-[90px] text-[40px] sm:leading-[124.99px] leading-[46px] pb-5 font-bold tracking-wider">
                <motion.p >Hi, I'm</motion.p>
                <motion.p variants={textVariant} transition={{ duration: 0.5, delay: 0.4 }}>Charles Emmanuel.</motion.p>
            </div>
            
            <motion.p 
                variants={textVariant}
                transition={{ duration: 0.5, delay: 0.8 }}
            
            className="text-[#50DFB4] sm:text-[40px] text-[20px] sm:leading-[52px] leading-[20px] font-normal">"A product designer that loves creating seamless
                user experience with a touch of aesthetics."
            </motion.p>

            <motion.div 
                variants={textVariant}
                transition={{ duration: 0.5, delay: 1.2 }}
            className="flex items-center gap-x-3 mx-auto pt-10">
                <Button text="Get in touch" classname="bg-[#8338EA] hover:bg-[#8338EA]/90 md:px-[50px] md:py-[20px] text-[14px] sm:text-[16px] md:text-[20px] md:font-bold px-[25px] py-[15px] tracking-wider"/>
                <Button 
                    text="Resume"
                    classname="bg-[#1E1E1E] hover:bg-[#1E1E1E]/90 px-[25px]  md:px-[50px] md:py-[20px] text-[14px] sm:text-[16px] md:text-[20px] md:font-bold tracking-wider"
                />
            </motion.div>


        </div>

        <motion.img 
            variants={textVariant} transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full max-w-[200px] sm:max-w-[350px]"
            src={herogif}
        />
    </motion.div>
  )
}

export default Hero