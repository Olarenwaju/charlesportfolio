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
    <div className="max-w-[1400px] w-full mx-auto font-dmsans pt-10 pb-20">

      {/* === Row 1 === */}
      <div className="flex flex-col lg:flex-row justify-center items-start mx-auto gap-x-4 space-x-4 space-y-4">
        {/* EasyPilot */}
        <motion.div
          className="max-w-[600px] bg-[#25252544] rounded-box"
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
                    className="rounded-box max-h-[386px] w-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                />
            </motion.div>
          <div className="p-3 bg-[#252525] rounded-box m-2">
            <div className="pb-5 text-4xl font-semibold">
              <h1>EasyPilot</h1>
            </div>
            <p className="text-base font-[#cccccc96]">
              EasyPilot is a mobile solution that connects car owners with verified, professional drivers who drive the owners’ personal vehicles.
            </p>
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-2">
                <Circle className="w-3 h-3 fill-emerald-500 text-emerald-500" />
                <span className="text-xs md:text-sm text-slate-300">online</span>
              </div>
              <Link to="/easypilot" target="_blank" className="inline-flex items-center gap-2 text-white hover:text-slate-300 transition-colors text-xs md:text-sm font-medium">
                View Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Chopify */}
        <motion.div
          className="max-w-[600px] bg-[#25252544] rounded-box"
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
                    className="rounded-box max-h-[386px] w-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }} 
                />
            </motion.div>
          <div className="p-3 bg-[#252525] rounded-box m-2">
            <div className="pb-5 text-4xl font-semibold">
              <h1>Onijekuje Chopify</h1>
            </div>
            <p className="text-base font-[#cccccc96]">
              Star Homes is a real estate solution for luxurious yet affordable shortlet apartments in Lagos. The platform allows guests to explore available listings, book stays, and enjoy a comfortable, hassle-free experience.
            </p>
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-2">
                <Circle className="w-3 h-3 fill-emerald-500 text-emerald-500" />
                <span className="text-xs md:text-sm text-slate-300">online</span>
              </div>
              <Link to="/onijekuje" target="_blank" className="inline-flex items-center gap-2 text-white hover:text-slate-300 transition-colors text-xs md:text-sm font-medium">
                View Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* === Row 2 === */}
      <div className="flex flex-col lg:flex-row justify-center items-center mx-auto gap-x-4 space-x-4 space-y-4">
        {/* Ray Interiors */}
        <motion.div
          className="max-w-[600px] bg-[#25252544] rounded-box"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={2}
        >
          <div className="m-2">
            <img src={rayinterior} className="rounded-box max-h-[386px] w-full" alt="rayinterior" />
          </div>
          <div className="p-3 bg-[#252525] rounded-box m-2">
            <div className="pb-5 text-4xl font-semibold">
              <h1>Portfolio Website For Ray Interiors (Figma UI + Framer Development)</h1>
            </div>
            <p className="text-base font-[#cccccc96]">
              Ray Interiors is a portfolio website designed to showcase the work of an Interior decorator, highlighting their design expertise, past projects, and services.
            </p>
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-2">
                <Circle className="w-3 h-3 fill-emerald-500 text-emerald-500" />
                <span className="text-xs md:text-sm text-slate-300">online</span>
              </div>
              <Link to="/" target="_blank" className="inline-flex items-center gap-2 text-white hover:text-slate-300 transition-colors text-xs md:text-sm font-medium">
                View Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Hostrrr */}
        <motion.div
          className="max-w-[600px] bg-[#25252544] rounded-box"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={3}
        >
          <div className="m-2">
            <img src={hostrrr} className="rounded-box max-h-[386px] w-full" alt="hostrrr" />
          </div>
          <div className="p-3 bg-[#252525] rounded-box m-2">
            <div className="pb-5 text-4xl font-semibold">
              <h1>Hostrrr</h1>
            </div>
            <p className="text-base font-[#cccccc96]">
              Hostrrr is a social event-hosting platform (mobile app) that makes it easy for anyone to create, join, and enjoy meaningful gatherings, whether it’s a private dinner, game night, or networking event.
            </p>
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-2">
                <Circle className="w-3 h-3 fill-emerald-500 text-emerald-500" />
                <span className="text-xs md:text-sm text-slate-300">online</span>
              </div>
              <Link to="/hostrrr" target="_blank" className="inline-flex items-center gap-2 text-white hover:text-slate-300 transition-colors text-xs md:text-sm font-medium">
                View Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* === Row 3 === */}
      <div className="flex flex-col lg:flex-row justify-center items-center mx-auto gap-x-4 space-x-4 space-y-4">
        {/* Star Homes */}
        <motion.div
          className="max-w-[600px] bg-[#25252544] rounded-box"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={4}
        >
          <div className="m-2">
            <img src={starhomes} className="rounded-box max-h-[386px] w-full" alt="starhomes" />
          </div>
          <div className="p-3 bg-[#252525] rounded-box m-2">
            <div className="pb-5 text-4xl font-semibold">
              <h1>Star Homes</h1>
            </div>
            <p className="text-base font-[#cccccc96]">
              Star Homes is a real estate solution for luxurious yet affordable shortlet apartments in Lagos. The platform allows guests to explore available listings, book stays, and enjoy a comfortable, hassle-free experience.
            </p>
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-2">
                <Circle className="w-3 h-3 fill-emerald-500 text-emerald-500" />
                <span className="text-xs md:text-sm text-slate-300">online</span>
              </div>
              <Link to="/starhomes" target="_blank" className="inline-flex items-center gap-2 text-white hover:text-slate-300 transition-colors text-xs md:text-sm font-medium">
                View Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* CashBlast */}
        <motion.div
          className="max-w-[600px] bg-[#25252544] rounded-box"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={5}
        >
          <div className="m-2">
            <img src={cashblast} className="rounded-box max-h-[386px] w-full" alt="cashblast" />
          </div>
          <div className="p-3 bg-[#252525] rounded-box m-2">
            <div className="pb-5 text-4xl font-semibold">
              <h1>CashBlast</h1>
            </div>
            <p className="text-base font-[#cccccc96]">
              CashBlast is a fintech product with a goal to solve the problem of mutilating the Nigerian currency while preserving the cherished tradition of spraying money at events.
            </p>
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-2">
                <Circle className="w-3 h-3 fill-emerald-500 text-emerald-500" />
                <span className="text-xs md:text-sm text-slate-300">online</span>
              </div>
              <Link href="/cashblast" target="_blank" className="inline-flex items-center gap-2 text-white hover:text-slate-300 transition-colors text-xs md:text-sm font-medium">
                View Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* === Row 4 === */}
      <div className="flex flex-col lg:flex-row justify-center items-center mx-auto gap-x-4 space-x-4 space-y-4">
        {/* Plugtent */}
        <motion.div
          className="max-w-[600px] bg-[#25252544] rounded-box"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={6}
        >
          <div className="m-2">
            <img src={plugtent} className="rounded-box max-h-[386px] w-full" alt="plugtent" />
          </div>
          <div className="p-3 bg-[#252525] rounded-box m-2">
            <div className="pb-5 text-4xl font-semibold">
              <h1>Plugtent</h1>
            </div>
            <p className="text-base font-[#cccccc96]">
              A marketplace-model platform that allows businesses to leverage the creativity and audiences of content creators to market and advertise their products and services.
            </p>
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-2">
                <Circle className="w-3 h-3 fill-emerald-500 text-emerald-500" />
                <span className="text-xs md:text-sm text-slate-300">online</span>
              </div>
              <Link to="/plugtent" target="_blank" className="inline-flex items-center gap-2 text-white hover:text-slate-300 transition-colors text-xs md:text-sm font-medium">
                View Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* All Works */}
        <motion.div
          className="w-[600px] bg-[#25252544] rounded-box p-5"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={7}
        >
          <div className="p-3 bg-[#252525] rounded-box">
            <div className="pb-5 text-4xl font-semibold">
              <h1>All my Works</h1>
            </div>
            <div className="flex items-center justify-between pt-4">
              <p className="text-base font-[#cccccc96]">See all of my works</p>
              <a href="https://www.rayinteriors.com/" target="_blank" className="inline-flex items-center gap-2 text-white hover:text-slate-300 transition-colors text-xs md:text-sm font-medium">
                View Project
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Works
