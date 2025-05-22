import purplecircle from "../assets/img/purple-semicircle.png"
import greencircle from "../assets/img/green-semicircle.png"
import { motion } from "framer-motion"

const SemiCircles = () => {
  return (
    <div className=" right-0 top-1/4 w-full h-full ">
        <motion.img 
            className="absolute w-[350px] h-[350px] -right-32 opacity-80" 
            src={purplecircle }
            style={{ zIndex: 10, mixBlendMode: 'screen' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.img 
            className="absolute w-[350px] h-[350px] top-20 -right-28 opacity-80" 
            src={greencircle }
            style={{ zIndex: 10, mixBlendMode: 'screen' }}
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
    </div>
  )
}

export default SemiCircles;