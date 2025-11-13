import { ArrowRight, Circle } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

import easypilot from "../assets/img/works/works-easypilot-img.png"
import chopify from "../assets/img/works/works-chopify-img.png"
import rayinterior from "../assets/img/works/works-rayinterior-img.png"
import hostrrr from "../assets/img/works/works-hostrrr-img.png"
import starhomes from "../assets/img/works/works-starhomes-img.png"
import cashblast from "../assets/img/works/works-cashblast-img.png"
import plugtent from "../assets/img/works/works-plugtent-img.png"

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
}

const Works = () => {
  return (
    <div className="max-w-[1400px] w-full mx-auto font-dmsans pt-6 sm:pt-10 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-0">

      {/* === Row 1 === */}
      <div className="flex flex-col lg:flex-row justify-center items-center mx-auto gap-4 lg:gap-x-4">
        {/* EasyPilot */}
        <motion.div
          className="w-full max-w-[600px] bg-[#25252544] rounded-box"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          custom={0}
        >
            <motion.div 
              className="m-2 overflow-hidden rounded-box"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}  
            >
                <motion.img 
                    src={easypilot}
                    alt="easypilot"
                    className="rounded-box max-h-[250px] sm:max-h-[300px] lg:max-h-[386px] w-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                />
            </motion.div>
          <div className="p-3 sm:p-4 bg-[#252525] rounded-box m-2">
            <div className="pb-3 sm:pb-5">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">EasyPilot</h1>
            </div>
            <p className="text-sm sm:text-base text-[#cccccc96] leading-relaxed">
              EasyPilot is a mobile solution that connects car owners with verified, professional drivers who drive the owners&apos; personal vehicles.
            </p>
            <div className="flex items-center justify-between pt-4 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <Circle className="w-3 h-3 fill-emerald-500 text-emerald-500" />
                <span className="text-xs sm:text-sm text-slate-300">online</span>
              </div>
              <Link to="/easypilot" target="_blank" className="inline-flex items-center gap-2 text-white hover:text-slate-300 transition-colors text-xs sm:text-sm font-medium">
                View Project
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Chopify */}
        <motion.div
          className="w-full max-w-[600px] bg-[#25252544] rounded-box"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          custom={1}
        >
            <motion.div 
                className="m-2 overflow-hidden rounded-box"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }} 
            >
                <motion.img 
                    src={chopify} 
                    alt="chopify" 
                    className="rounded-box max-h-[250px] sm:max-h-[300px] lg:max-h-[386px] w-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }} 
                />
            </motion.div>
          <div className="p-3 sm:p-4 bg-[#252525] rounded-box m-2">
            <div className="pb-3 sm:pb-5">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">Onijekuje Chopify</h1>
            </div>
            <p className="text-sm sm:text-base text-[#cccccc96] leading-relaxed">
              Star Homes is a real estate solution for luxurious yet affordable shortlet apartments in Lagos. The platform allows guests to explore available listings, book stays, and enjoy a comfortable, hassle-free experience.
            </p>
            <div className="flex items-center justify-between pt-4 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <Circle className="w-3 h-3 fill-emerald-500 text-emerald-500" />
                <span className="text-xs sm:text-sm text-slate-300">online</span>
              </div>
              <Link to="/onijekuje" target="_blank" className="inline-flex items-center gap-2 text-white hover:text-slate-300 transition-colors text-xs sm:text-sm font-medium">
                View Project
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* === Row 2 === */}
      <div className="flex flex-col lg:flex-row justify-center items-center mx-auto gap-4 lg:gap-x-4 mt-4 lg:mt-0">
        {/* Ray Interiors */}
        <motion.div
          className="w-full max-w-[600px] bg-[#25252544] rounded-box"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={2}
        >
          <div className="m-2">
            <img src={rayinterior} className="rounded-box max-h-[250px] sm:max-h-[300px] lg:max-h-[386px] w-full object-cover" alt="rayinterior" />
          </div>
          <div className="p-3 sm:p-4 bg-[#252525] rounded-box m-2">
            <div className="pb-3 sm:pb-5">
              <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-tight">Portfolio Website For Ray Interiors (Figma UI + Framer Development)</h1>
            </div>
            <p className="text-sm sm:text-base text-[#cccccc96] leading-relaxed">
              Ray Interiors is a portfolio website designed to showcase the work of an Interior decorator, highlighting their design expertise, past projects, and services.
            </p>
            <div className="flex items-center justify-between pt-4 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <Circle className="w-3 h-3 fill-emerald-500 text-emerald-500" />
                <span className="text-xs sm:text-sm text-slate-300">online</span>
              </div>
              <Link to="/" target="_blank" className="inline-flex items-center gap-2 text-white hover:text-slate-300 transition-colors text-xs sm:text-sm font-medium">
                View Project
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Hostrrr */}
        <motion.div
          className="w-full max-w-[600px] bg-[#25252544] rounded-box"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={3}
        >
          <div className="m-2">
            <img src={hostrrr} className="rounded-box max-h-[250px] sm:max-h-[300px] lg:max-h-[386px] w-full object-cover" alt="hostrrr" />
          </div>
          <div className="p-3 sm:p-4 bg-[#252525] rounded-box m-2">
            <div className="pb-3 sm:pb-5">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">Hostrrr</h1>
            </div>
            <p className="text-sm sm:text-base text-[#cccccc96] leading-relaxed">
              Hostrrr is a social event-hosting platform (mobile app) that makes it easy for anyone to create, join, and enjoy meaningful gatherings, whether it&apos;s a private dinner, game night, or networking event.
            </p>
            <div className="flex items-center justify-between pt-4 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <Circle className="w-3 h-3 fill-emerald-500 text-emerald-500" />
                <span className="text-xs sm:text-sm text-slate-300">online</span>
              </div>
              <Link to="/hostrrr" target="_blank" className="inline-flex items-center gap-2 text-white hover:text-slate-300 transition-colors text-xs sm:text-sm font-medium">
                View Project
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* === Row 3 === */}
      <div className="flex flex-col lg:flex-row justify-center items-center mx-auto gap-4 lg:gap-x-4 mt-4 lg:mt-0">
        {/* Star Homes */}
        <motion.div
          className="w-full max-w-[600px] bg-[#25252544] rounded-box"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={4}
        >
          <div className="m-2">
            <img src={starhomes} className="rounded-box max-h-[250px] sm:max-h-[300px] lg:max-h-[386px] w-full object-cover" alt="starhomes" />
          </div>
          <div className="p-3 sm:p-4 bg-[#252525] rounded-box m-2">
            <div className="pb-3 sm:pb-5">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">Star Homes</h1>
            </div>
            <p className="text-sm sm:text-base text-[#cccccc96] leading-relaxed">
              Star Homes is a real estate solution for luxurious yet affordable shortlet apartments in Lagos. The platform allows guests to explore available listings, book stays, and enjoy a comfortable, hassle-free experience.
            </p>
            <div className="flex items-center justify-between pt-4 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <Circle className="w-3 h-3 fill-emerald-500 text-emerald-500" />
                <span className="text-xs sm:text-sm text-slate-300">online</span>
              </div>
              <Link to="/starhomes" target="_blank" className="inline-flex items-center gap-2 text-white hover:text-slate-300 transition-colors text-xs sm:text-sm font-medium">
                View Project
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* CashBlast */}
        <motion.div
          className="w-full max-w-[600px] bg-[#25252544] rounded-box"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={5}
        >
          <div className="m-2">
            <img src={cashblast} className="rounded-box max-h-[250px] sm:max-h-[300px] lg:max-h-[386px] w-full object-cover" alt="cashblast" />
          </div>
          <div className="p-3 sm:p-4 bg-[#252525] rounded-box m-2">
            <div className="pb-3 sm:pb-5">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">CashBlast</h1>
            </div>
            <p className="text-sm sm:text-base text-[#cccccc96] leading-relaxed">
              CashBlast is a fintech product with a goal to solve the problem of mutilating the Nigerian currency while preserving the cherished tradition of spraying money at events.
            </p>
            <div className="flex items-center justify-between pt-4 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <Circle className="w-3 h-3 fill-emerald-500 text-emerald-500" />
                <span className="text-xs sm:text-sm text-slate-300">online</span>
              </div>
              <Link to="/cashblast" className="inline-flex items-center gap-2 text-white hover:text-slate-300 transition-colors text-xs sm:text-sm font-medium">
                View Project
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* === Row 4 === */}
      <div className="flex flex-col lg:flex-row justify-center items-center mx-auto gap-4 lg:gap-x-4 mt-4 lg:mt-0">
        {/* Plugtent */}
        <motion.div
          className="w-full max-w-[600px] bg-[#25252544] rounded-box"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={6}
        >
          <div className="m-2">
            <img src={plugtent} className="rounded-box max-h-[250px] sm:max-h-[300px] lg:max-h-[386px] w-full object-cover" alt="plugtent" />
          </div>
          <div className="p-3 sm:p-4 bg-[#252525] rounded-box m-2">
            <div className="pb-3 sm:pb-5">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">Plugtent</h1>
            </div>
            <p className="text-sm sm:text-base text-[#cccccc96] leading-relaxed">
              A marketplace-model platform that allows businesses to leverage the creativity and audiences of content creators to market and advertise their products and services.
            </p>
            <div className="flex items-center justify-between pt-4 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <Circle className="w-3 h-3 fill-emerald-500 text-emerald-500" />
                <span className="text-xs sm:text-sm text-slate-300">online</span>
              </div>
              <Link to="/plugtent" target="_blank" className="inline-flex items-center gap-2 text-white hover:text-slate-300 transition-colors text-xs sm:text-sm font-medium">
                View Project
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* All Works */}
        <motion.div
          className="w-full max-w-[600px] bg-[#25252544] rounded-box p-4 sm:p-5"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={7}
        >
          <div className="p-3 sm:p-4 bg-[#252525] rounded-box">
            <div className="pb-3 sm:pb-5">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">All my Works</h1>
            </div>
            <div className="flex items-center justify-between pt-4 flex-wrap gap-2">
              <p className="text-sm sm:text-base text-[#cccccc96]">See all of my works</p>
              <a href="https://www.rayinteriors.com/" target="_blank" className="inline-flex items-center gap-2 text-white hover:text-slate-300 transition-colors text-xs sm:text-sm font-medium">
                View Project
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Works
