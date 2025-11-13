/* eslint-disable react/no-unknown-property */
import { ArrowRight, Circle } from "lucide-react";
import { Link } from "react-router-dom";
import easypilot from "../assets/img/works/works-easypilot-img.png";
import chopify from "../assets/img/works/works-chopify-img.png";
import rayinterior from "../assets/img/works/works-rayinterior-img.png";
import hostrrr from "../assets/img/works/works-hostrrr-img.png";
import starhomes from "../assets/img/works/works-starhomes-img.png";

const projects = [
  {
    id: 1,
    title: "EasyPilot",
    description:
      "EasyPilot is a mobile solution that connects car owners with verified, professional drivers who drive the owners' personal vehicles.",
    image: easypilot,
    link: "/easypilot",
    status: "online",
  },
  {
    id: 2,
    title:
      "Portfolio Website For Ray Interiors (Figma UI + Framer Development)",
    description:
      "Ray Interiors is a portfolio website designed to showcase the work of an Interior decorator, highlighting their design expertise, past projects, and services.",
    image: rayinterior,
    link: "/rayinteriors",
    status: "online",
  },
  {
    id: 3,
    title: "Onijekuje Chopify",
    description:
      "A food delivery platform that connects users with their favorite local restaurants and provides seamless ordering experience.",
    image: chopify,
    link: "/chopify",
    status: "online",
  },
  {
    id: 4,
    title: "Hostrrr",
    description:
      "Hostrrr is a social event-hosting platform (mobile app) that makes it easy for anyone to create, join, and enjoy meaningful gatherings, whether it's a private dinner, game night, or networking event.",
    image: hostrrr,
    link: "/hostrrr",
    status: "online",
  },
  {
    id: 5,
    title: "Star Homes",
    description:
      "Star Homes is a real estate solution for luxurious yet affordable shortlet apartments in Lagos. The platform allows guests to explore available listings, book stays, and enjoy a comfortable, hassle-free experience.",
    image: starhomes,
    link: "/starhomes",
    status: "online",
  },
];

const WorksCarousel = () => {
  // Duplicate the projects array to create seamless infinite scroll
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section className="max-w-[1300px] w-full mx-auto pt-[50px] px-5 font-dmsans">
      <div className="text-[40px] sm:text-[70px] pb-5">
        <h1 className="pb-1 sm:pb-5">Some of my other stuff</h1>
      </div>

      <div className="overflow-hidden w-full">
        <div
          className="flex space-x-5 gap-4 lg:gap-x-4 animate-scroll"
          style={{
            animation: "scroll 30s linear infinite",
            width: `calc(${projects.length * 100}% + ${
              projects.length * 16
            }px)`,
          }}
        >
          {duplicatedProjects.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="w-full max-w-[500px] bg-[#25252544] rounded-box flex-shrink-0"
            >
              <div className="m-2 overflow-hidden rounded-box h-[250px] sm:h-[300px] lg:h-[386px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-box w-full h-full object-cover"
                />
              </div>

              <div className="p-3 sm:p-4 bg-[#252525] rounded-box m-2">
                <div className="pb-3 sm:pb-5">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
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
                      {project.status}
                    </span>
                  </div>
                  <Link
                    to={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-white hover:text-slate-300 transition-colors text-xs sm:text-sm font-medium"
                  >
                    View Project
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style jsx="true">
          {`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default WorksCarousel;
