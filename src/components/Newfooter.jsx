import { ArrowUp, Dot } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowUpRight } from "lucide-react";

const Newfooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Hook for "Let's work together" section
  const { ref: workRef, inView: workInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Hook for "Charles Emmanuel" section
  const { ref: nameRef, inView: nameInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Faster animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer
      id="contact"
      className="max-w-[1300px] w-full mx-auto bg-black text-white min-h-screen flex flex-col justify-between pt-12 sm:pt-16 md:pt-20"
    >
      {/* Top Section */}
      <div className="flex justify-between items-start p-4 sm:p-6 md:p-8 lg:p-12">
        {/* Available for hire */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Dot
            className="fill-green-500 text-green-500 w-6 h-6 sm:w-10 sm:h-10"
            size={30}
          />
          <span className="text-xs sm:text-sm font-medium">
            Available for hire
          </span>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 sm:gap-2 hover:opacity-80 transition-opacity"
          aria-label="Back to top"
        >
          <span className="text-xs sm:text-sm hidden sm:inline">
            Back to top
          </span>
          <div className="bg-white text-black rounded-full p-1.5 sm:p-2">
            <ArrowUp size={12} className="sm:w-4 sm:h-4" />
          </div>
        </button>
      </div>

      {/* Main Content - Reduced spacing on mobile */}
      <motion.div
        ref={workRef}
        initial="hidden"
        animate={workInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 flex-grow justify-center"
      >
        {/* Corrected Animated Heading */}
        <motion.div
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-center leading-tight tracking-tight px-2"
          variants={staggerContainer}
        >
          {/* LET'S WORK */}
          <motion.div variants={staggerContainer}>
            {"LET'S".split("").map((char, index) => (
              <motion.span
                key={`lets-${index}`}
                variants={letterAnimation}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
            <motion.span
              variants={letterAnimation}
              className="inline-block whitespace-pre"
            >
              {" "}
            </motion.span>
            {"WORK".split("").map((char, index) => (
              <motion.span
                key={`work-${index}`}
                variants={letterAnimation}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          {/* TOGETHER on new line */}
          <motion.div variants={staggerContainer}>
            {"TOGETHER".split("").map((char, index) => (
              <motion.span
                key={`together-${index}`}
                variants={letterAnimation}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Contact Button */}
        <motion.button
          onClick={() =>
            (window.location.href = "mailto:Charlesemmanuel4business@gmail.com")
          }
          variants={fadeInUp}
          className="px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-[#1d1d1f] hover:bg-[#1d1d1f8b] text-white text-xs sm:text-sm font-semibold tracking-widest rounded-full transition-colors"
        >
          CONTACT NOW
        </motion.button>

        {/* Social Links */}
        <motion.div
          variants={fadeInUp}
          className=" flex gap-4 sm:gap-6 md:gap-8 lg:gap-12 text-xs sm:text-sm font-semibold tracking-widest flex-wrap justify-center"
        >
          <a
            href="https://www.linkedin.com/in/emmanuelcharles1/"
            target="_blank"
            rel="noopener noreferrer"
            className="group hover:text-gray-400 transition-colors flex items-center gap-1"
          >
            LINKEDIN
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
          <a
            href="https://dribbble.com/DesignHemperor"
            target="_blank"
            rel="noopener noreferrer"
            className="group hover:text-gray-400 transition-colors flex items-center gap-1"
          >
            DRIBBBLE
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
          <a
            href="https://x.com/chizzyhemperor?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="group hover:text-gray-400 transition-colors flex items-center gap-1"
          >
            TWITTER
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom Name Section - Fixed text size for laptop screens */}
      <motion.div
        ref={nameRef}
        initial="hidden"
        animate={nameInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10 lg:py-16 text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight">
          CHARLES EMMANUEL
        </h2>
      </motion.div>
    </footer>
  );
};

export default Newfooter;
