import { ArrowRight, Circle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import easypilot from "../assets/img/works/works-easypilot-img1.png";
import chopify from "../assets/img/works/works-chopify-img.png";
import rayinterior from "../assets/img/works/works-rayinterior-img.png";
import hostrrr from "../assets/img/works/works-hostrrr-img.png";
import starhomes from "../assets/img/works/works-starhomes-img.png";
import cashblast from "../assets/img/works/works-cashblast-img.png";
import plugtent from "../assets/img/works/works-plugtent-img.png";
import parseat from "../assets/img/allprojects/parseat.png";

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
};

const projects = [
  {
    id: 1,
    title: "EasyPilot",
    description:
      "EasyPilot is a mobile solution that connects car owners with verified, professional drivers who drive the owners' personal vehicles.",
    image: easypilot,
    link: "/easypilot",
    hasImageHover: true,
  },
  {
    id: 2,
    title: "Star Homes",
    description:
      "Star Homes is a real estate solution for luxurious yet affordable shortlet apartments in Lagos. The platform allows guests to explore available listings, book stays, and enjoy a comfortable, hassle-free experience.",
    image: starhomes,
    link: "/starhomes",
    hasImageHover: true,
  },
  {
    id: 3,
    title:
      "Portfolio Website For Ray Interiors (Figma UI + Framer Development)",
    description:
      "Ray Interiors is a portfolio website designed to showcase the work of an Interior decorator, highlighting their design expertise, past projects, and services.",
    image: rayinterior,
    link: "/",
    hasImageHover: true,
  },
  {
    id: 4,
    title: "Hostrrr",
    description:
      "Hostrrr is a social event-hosting platform (mobile app) that makes it easy for anyone to create, join, and enjoy meaningful gatherings, whether it's a private dinner, game night, or networking event.",
    image: hostrrr,
    link: "/hostrrr",
    hasImageHover: true,
  },
  {
    id: 5,
    title: "Onijekuje Chopify",
    description:
      "Star Homes is a real estate solution for luxurious yet affordable shortlet apartments in Lagos. The platform allows guests to explore available listings, book stays, and enjoy a comfortable, hassle-free experience.",
    image: chopify,
    link: "/onijekuje",
    hasImageHover: true,
  },
  {
    id: 6,
    title: "CashBlast",
    description:
      "CashBlast is a fintech product with a goal to solve the problem of mutilating the Nigerian currency while preserving the cherished tradition of spraying money at events.",
    image: cashblast,
    link: "/cashblast",
    hasImageHover: true,
  },
  {
    id: 7,
    title: "Plugtent",
    description:
      "A marketplace-model platform that allows businesses to leverage the creativity and audiences of content creators to market and advertise their products and services.",
    image: plugtent,
    link: "/plugtent",
    hasImageHover: true,
  },
  {
    id: 8,
    title: "Parseat",
    description:
      "Parseat is an event management tool targeted at solving seat management challenges for party/event organizers and individual party owners.",
    image: parseat,
    link: "/",
    hasImageHover: false,
  },
];

const AllProjects = () => {
  return (
    <div className="max-w-[1400px] w-full mx-auto font-dmsans pt-6 sm:pt-10 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
      {/* Masonry Layout using CSS Columns with better control */}
      <div className="columns-1 lg:columns-2 gap-4 lg:gap-6 [column-fill:balance]">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="inline-block w-full mb-4 lg:mb-6 bg-[#212121] rounded-box p-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            custom={index}
          >
            <div className="mb-2">
              {project.hasImageHover ? (
                <motion.div
                  className="overflow-hidden rounded-box"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="rounded-box w-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </motion.div>
              ) : (
                <img
                  src={project.image}
                  className="rounded-box w-full object-cover"
                  alt={project.title}
                />
              )}
            </div>

            <div className="p-3 sm:p-4 bg-[#252525] rounded-box">
              <div className="pb-3 sm:pb-5">
                <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-tight">
                  {project.title}
                </h1>
              </div>
              <p className="text-sm sm:text-base text-[#cccccc96] leading-relaxed">
                {project.description}
              </p>
              <div className="flex items-center justify-between pt-4 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Circle className="w-3 h-3 fill-emerald-500 text-emerald-500" />
                  <span className="text-xs sm:text-sm text-slate-300">
                    online
                  </span>
                </div>
                <Link
                  to={project.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 border border-[#333333] rounded-md p-2 text-white hover:text-slate-300 transition-colors text-xs sm:text-sm font-medium"
                >
                  View Project
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
