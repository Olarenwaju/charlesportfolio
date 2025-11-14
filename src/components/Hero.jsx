/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import greenblur from "../assets/img/greenblur.png";
import { Dot } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const { ref: firstRef, inView: firstInView } = useInView();

  // Pulsating animation for the green dot
  const pulseVariant = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: [1, 1.2, 1],
      opacity: 1,
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  // Main text animation (center text)
  const mainTextVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Typewriter effect for "Available for hire"
  const typewriterVariant = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        duration: 5,
        delay: 0.8, // Starts after main text appears
        ease: "easeInOut",
      },
    },
  };

  // Container variant to sequence the animations
  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      ref={firstRef}
      initial="hidden"
      animate={firstInView ? "visible" : "hidden"}
      variants={containerVariant}
      className="px-4 sm:px-5 flex flex-col gap-x-4 gap-y-8 sm:gap-y-12 md:gap-y-16 py-8 sm:py-10 md:py-[20px] font-dmsans"
    >
      {/* Available for Hire Section with Typewriter Effect */}
      <motion.div
        className="flex items-center gap-1 sm:gap-2"
        variants={containerVariant}
      >
        {/* Pulsating Green Dot */}
        <motion.div
          variants={pulseVariant}
          initial="hidden"
          animate={firstInView ? "visible" : "hidden"}
        >
          <Dot
            className="fill-green-500 text-green-500 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            size={50}
          />
        </motion.div>

        {/* Typewriter Text */}
        <motion.div
          className="overflow-hidden whitespace-nowrap"
          variants={typewriterVariant}
        >
          <span className="text-xs sm:text-sm font-medium">
            Available for hire
          </span>
        </motion.div>
      </motion.div>

      {/* Main Content Section */}
      <motion.div
        className="relative w-full max-w-[1200px] mx-auto text-center font-dmsans pt-1 pb-12 sm:pb-16 md:pb-20 lg:pb-24"
        variants={mainTextVariant}
      >
        <img
          className="absolute -top-2/4 -left-1/4 pointer-events-none w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 opacity-50 sm:opacity-75"
          src={greenblur}
          alt="img"
        />

        <div className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-center leading-tight sm:leading-snug md:leading-normal lg:leading-10 tracking-tight sm:tracking-normal md:tracking-wide px-2">
          <motion.p className="uppercase">
            Charles Emmanuel, Creative Product Designer & No-Code Developer
          </motion.p>
        </div>

        <Link to="https://drive.google.com/drive/folders/1OmvfQS6QclY5dRj9tHNRpz32VWG_rw4X">
          <motion.button
            className="px-5 mr-3 uppercase py-2.5 sm:px-6 sm:py-3 mt-6 sm:mt-8 md:mt-10 md:px-8 md:py-4 bg-[#1d1d1f] hover:bg-white hover:text-black text-white text-xs sm:text-sm font-semibold tracking-widest rounded-full transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={firstInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 2.5 }} // Appears after typewriter
          >
            View Resume
          </motion.button>
        </Link>

        <motion.button
          onClick={() =>
            (window.location.href = "mailto:Charlesemmanuel4business@gmail.com")
          }
          className="uppercase px-5 py-2.5 sm:px-6 sm:py-3 mt-6 sm:mt-8 md:mt-10 md:px-8 md:py-4 bg-[#ffffff] hover:bg-[#1d1d1f] hover:text-white text-black font-bold text-xs sm:text-sm tracking-widest rounded-full transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={firstInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 2.5 }} // Appears after typewriter
        >
          CONTACT NOW
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
