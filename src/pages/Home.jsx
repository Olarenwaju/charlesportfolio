/* eslint-disable no-mixed-spaces-and-tabs */
//import {Typewriter} from "react-simple-typewriter"
import Hero from "../components/Hero";
//import homegif from "../assets/img/home-gif.png"

//import { Link } from 'react-router-dom';

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

//import purpleblur from "../assets/img/purpleblur.png"
import SemiCircles from "../components/SemiCircles";
import Works from "../components/Works";
import Newfooter from "../components/Newfooter";

// Variants
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Home = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
  const { ref: projectsRef, inView: projectsInView } = useInView({
    triggerOnce: true,
  });

  // Handle hash navigation to footer
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#contact") {
      // Small delay to ensure footer is rendered
      setTimeout(() => {
        const footerElement = document.getElementById("contact");
        if (footerElement) {
          footerElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <motion.section
        ref={heroRef}
        variants={fadeUpVariant}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        className="max-w-[1440px] mx-auto pt-[80px] sm:pt-[90px] md:pt-[104.35px] px-4 sm:px-5"
      >
        <Hero />
      </motion.section>

      <motion.section
        className="max-w-[1440px] relative mx-auto bg-black pt-[60px] sm:pt-[80px] md:pt-[104.35px] px-4 sm:px-6 md:px-10 font-dmsans overflow-hidden"
        ref={projectsRef}
        variants={containerVariant}
        initial="hidden"
        animate={projectsInView ? "visible" : "hidden"}
      >
        <SemiCircles />

        <motion.p
          variants={fadeUpVariant}
          className="uppercase text-[24px] sm:text-[32px] md:text-[50px] lg:text-[80px] 
                    font-semibold leading-[30px] sm:leading-[40px] md:leading-[60px] lg:leading-[100px] 
                    xl:leading-[160px] pb-4 sm:pb-5 tracking-tight sm:tracking-normal md:tracking-wider 
                    bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent"
        >
          Selected Projects
        </motion.p>

        <Works />
      </motion.section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Newfooter />
      </motion.div>
    </>
  );
};

export default Home;
