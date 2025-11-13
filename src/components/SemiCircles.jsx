import purplecircle from "../assets/img/purple-semicircle.png"
import greencircle from "../assets/img/green-semicircle.png"
import { motion } from "framer-motion"

const SemiCircles = () => {
  return (
    <div className="right-0 top-1/4 w-full h-full hidden md:block">
        <motion.img 
            className="absolute w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[350px] lg:h-[350px] -right-16 md:-right-24 lg:-right-32 opacity-60 md:opacity-70 lg:opacity-80" 
            src={purplecircle }
            style={{ zIndex: 10, mixBlendMode: 'screen' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.img 
            className="absolute w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[350px] lg:h-[350px] top-10 md:top-16 lg:top-20 -right-12 md:-right-20 lg:-right-28 opacity-60 md:opacity-70 lg:opacity-80" 
            src={greencircle }
            style={{ zIndex: 10, mixBlendMode: 'screen' }}
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
    </div>
  )
}

export default SemiCircles;