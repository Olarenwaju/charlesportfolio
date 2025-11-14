import AllProjects from "../components/AllProjects";
import Newfooter from "../components/Newfooter";
import SemiCircles from "../components/SemiCircles";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import allprojects from "../assets/img/allprojects/allprojects.png";

import Backbutton from "../components/Backbutton";
import greenblur from "../assets/img/greenblur.png";
import purpleblur from "../assets/img/purpleblur.png";

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

const Allprojects = () => {
  const { ref: projectsRef, inView: projectsInView } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <section className="relative max-w-[1440px] w-full mx-auto pt-[150px] px-5 overflow-hidden">
        <img
          className="absolute -top-2/4 -left-1/4"
          src={greenblur}
          alt="img"
        />

        <div className="fixed z-50">
          <Backbutton />
        </div>

        <div className="relative">
          <img
            src={allprojects}
            className="w-full mx-auto pt-20"
            alt="all-projects"
          />

          <div className="absolute top-28 left-28">
            {/* <img src={charlesavatarimg} className="w-full " alt="avt"/> */}
          </div>
        </div>

        <img
          className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"
          src={purpleblur}
          alt="img"
        />

        <p className="max-w-[1300px] mx-auto md:pt-[115px] pt-[80px] italic md:text-[64px] sm:text-[45px] font-dmsans text-[30px] text-center sm:font-semibold font-medium md:leading-[80px] sm:leading-[40px] leading-[30px] pb-10 sm:pb-[20]">
          “There are three responses to a piece of design; yes, no, and WOW!{" "}
          <br /> Wow is the one I always aim for”
        </p>
      </section>

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
          I worked on all these!
        </motion.p>

        <AllProjects />
      </motion.section>

      <Newfooter />
    </>
  );
};

export default Allprojects;
