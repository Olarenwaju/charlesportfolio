/* eslint-disable react/no-unescaped-entities */

import Backbutton from "../components/Backbutton";
import greenblur from "../assets/img/greenblur.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

//////////////////////////////////////////////////////////////////////
import hostrrrhero from "../assets/img/hostrrr/hostrrr-hero.png";
import hostrrrimg1 from "../assets/img/hostrrr/hostrrr-img1.png";
import hostrrrimg2 from "../assets/img/hostrrr/hostrrr-img2.png";
import hostrrrimg3 from "../assets/img/hostrrr/hostrrr-img3.png";
import hostrrrimg4 from "../assets/img/hostrrr/hostrrr-img4.png";
import hostrrrimg5 from "../assets/img/hostrrr/hostrrr-img5.png";
import hostrrrimg6 from "../assets/img/hostrrr/hostrrr-img6.png";
import hostrrrimg7 from "../assets/img/hostrrr/hostrrr-img7.png";
import hostrrrimg8 from "../assets/img/hostrrr/hostrrr-img8.png";
import hostrrrimg9 from "../assets/img/hostrrr/hostrrr-img9.png";
import hostrrrimg10 from "../assets/img/hostrrr/hostrrr-img10.png";
import WorksCarousel from "../components/WorksCarousel";
import Newfooter from "../components/Newfooter";

// Animation variants
const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Scroll Animation Component
// eslint-disable-next-line react/prop-types
const ScrollAnimation = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

const Hostrrr = () => {
  return (
    <>
      <section className="max-w-[1300px] w-full mx-auto pt-20 sm:pt-24 md:pt-[150px] px-4 sm:px-5 font-dmsans relative">
        <img
          className="absolute -top-2/4 -left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 opacity-50 sm:opacity-75 pointer-events-none hidden sm:block"
          src={greenblur}
          alt="img"
        />
        <div className="fixed z-50">
          <Backbutton />
        </div>
        <motion.img
          src={hostrrrhero}
          className="w-full mx-auto pb-6 sm:pb-8 md:pb-10"
          alt="abt"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <motion.p
          className="
            text-xl sm:text-2xl md:text-[30px] lg:text-[40px] xl:text-[55px]
            font-semibold pb-8 sm:pb-12 md:pb-16
            leading-[28px] sm:leading-[34px] md:leading-[42px] lg:leading-[54px] xl:leading-[68px]
          "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Hostrrr: An e-commerce platform for ordering fully customizable poly
          mailers
        </motion.p>

        <motion.div
          className="max-w-[900px] grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-x-4 py-6 sm:py-8 md:py-10 text-xs sm:text-sm md:text-base lg:text-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center">
            <h1 className="font-semibold pb-1">My Role</h1>
            <p className="text-[#cccccca9]">Product Designer</p>
          </div>

          <div className="text-center">
            <h1 className="font-semibold pb-1">Timeline</h1>
            <p className="text-[#cccccca9]">4 - 5 weeks</p>
          </div>

          <div className="text-center">
            <h1 className="font-semibold pb-1">Location</h1>
            <p className="text-[#cccccca9]">Remote</p>
          </div>

          <div className="text-center">
            <h1 className="font-semibold pb-1">Tools</h1>
            <p className="text-[#cccccca9]">Figma, figjam</p>
          </div>
        </motion.div>
      </section>

      <section className="max-w-[1300px] w-full mx-auto pt-12 sm:pt-16 md:pt-20 lg:pt-[100px] px-4 sm:px-5 font-dmsans">
        <ScrollAnimation>
          <div className="pb-12 sm:pb-16 md:pb-20 lg:pb-28">
            <motion.p
              className="text-3xl sm:text-4xl md:text-[50px] lg:text-[60px] xl:text-[80px] font-bold pb-4 sm:pb-6 md:pb-8 lg:pb-10 leading-tight"
              variants={fadeUpVariant}
            >
              Overview
            </motion.p>
            <motion.p
              className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal"
              variants={fadeUpVariant}
            >
              Hostrrr is a social event-hosting platform (mobile app) that makes
              it easy for anyone to create, join, and enjoy meaningful
              gatherings, whether it&apos;s a private dinner, game night, or
              networking event. The app helps users plan events effortlessly,
              manage food arrangements, verify guests for safety, and connect
              attendees before the big day.
            </motion.p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <motion.img
            src={hostrrrimg1}
            className="mx-auto w-full h-auto pb-6 sm:pb-8 md:pb-10"
            alt="hostrrrimg1"
            variants={fadeUpVariant}
          />
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="pt-12 sm:pt-16 md:pt-20">
            <motion.p
              className="text-3xl sm:text-4xl md:text-[50px] lg:text-[60px] xl:text-[80px] font-bold pb-5 sm:pb-10 leading-tight"
              variants={fadeUpVariant}
            >
              My Role
            </motion.p>
            <motion.p
              className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal pb-4 sm:pb-6 md:pb-10 lg:pb-14"
              variants={fadeUpVariant}
            >
              I was responsible for auditing the existing UI, identifying UX
              flaws, redesigning core experiences ( for both hosts and guests ),
              and establishing a consistent visual and interaction language
              across the app
            </motion.p>

            <motion.p
              className="text-3xl sm:text-4xl md:text-[50px] lg:text-[60px] xl:text-[80px] font-bold pb-5 sm:pb-10 leading-tight"
              variants={fadeUpVariant}
            >
              The Problem
            </motion.p>
            <motion.p
              className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal pb-4 sm:pb-6 md:pb-8 lg:pb-10"
              variants={fadeUpVariant}
            >
              When I joined the project, Hostrrr already had some existing
              designs, but they were inconsistent, visually outdated, and lacked
              UX depth. Font sizes were too small, there was no design system,
              and the experience felt fragmented. My job was to take over the
              design, fix the UX, build a scalable system, and introduce new
              features that elevated the overall experience for both hosts and
              guests. The previous design had good ideas but poor execution:
            </motion.p>

            <motion.ul
              className="list-disc pl-5 sm:pl-6 pb-6 sm:pb-8 md:pb-10 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#CCCCCC] font-normal space-y-2"
              variants={fadeUpVariant}
            >
              <li>Inconsistent font sizes and spacing</li>
              <li>No design system or reusable component structure</li>
              <li>Weak visual hierarchy</li>
              <li>UX flows that were confusing and unstructured</li>
              <li>
                Missing product features crucial for trust and community
                engagement
              </li>
            </motion.ul>

            <motion.p
              className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal pb-4 sm:pb-6 md:pb-8 lg:pb-10"
              variants={fadeUpVariant}
            >
              These issues made the app feel unpolished and hard to use,
              especially for first-time hosts or guests trying to navigate event
              setup or registration
            </motion.p>
          </div>
        </ScrollAnimation>
      </section>

      <section className="max-w-[1300px] w-full mx-auto pt-8 sm:pt-12 md:pt-16 lg:pt-[50px] px-4 sm:px-5 font-dmsans pb-12 sm:pb-16 md:pb-20 lg:pb-[100px]">
        <ScrollAnimation>
          <div>
            <motion.p
              className="text-3xl sm:text-4xl md:text-[50px] lg:text-[60px] xl:text-[80px] font-bold pb-5 sm:pb-10 leading-tight"
              variants={fadeUpVariant}
            >
              The Goal
            </motion.p>
            <motion.p
              className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal pb-4 sm:pb-6 md:pb-8 lg:pb-10"
              variants={fadeUpVariant}
            >
              To redesign Hostrrr into a modern, social, and user-friendly
              platform by:
            </motion.p>

            <motion.ul
              className="list-disc pl-5 sm:pl-6 pb-8 sm:pb-12 md:pb-16 lg:pb-20 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#CCCCCC] font-normal space-y-2"
              variants={fadeUpVariant}
            >
              <li>Inconsistent font sizes and spacing</li>
              <li>No design system or reusable component structure</li>
              <li>Weak visual hierarchy</li>
              <li>UX flows that were confusing and unstructured</li>
              <li>
                Missing product features crucial for trust and community
                engagement
              </li>
            </motion.ul>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <motion.img
            src={hostrrrimg2}
            className="mx-auto w-full h-auto pb-6 sm:pb-8 md:pb-10"
            alt="hostrrrimg2"
            variants={fadeUpVariant}
          />
        </ScrollAnimation>

        <ScrollAnimation>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-[50px] lg:text-[60px] xl:text-[80px] font-bold pt-8 sm:pt-10 md:pt-12 pb-5 sm:pb-10 leading-tight"
            variants={fadeUpVariant}
          >
            UI Design Improvements
          </motion.h2>
        </ScrollAnimation>

        <ScrollAnimation>
          <motion.p
            className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal pb-4 sm:pb-6"
            variants={fadeUpVariant}
          >
            The new interface feels warmer, cleaner, and social by design.
          </motion.p>

          <motion.ul
            className="list-disc pl-5 sm:pl-6 pb-6 sm:pb-8 md:pb-10 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#CCCCCC] font-normal space-y-2"
            variants={fadeUpVariant}
          >
            <li>Clear typography hierarchy with readable sizes</li>
            <li>Thoughtful empty states, and error states.</li>
            <li>Weak visual hierarchy</li>
            <li>UX flows that were confusing and unstructured</li>
            <li>
              Missing product features crucial for trust and community
              engagement
            </li>
          </motion.ul>
        </ScrollAnimation>

        <ScrollAnimation>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-[50px] lg:text-[60px] xl:text-[80px] font-bold pt-6 sm:pt-8 md:pt-10 lg:pt-5 pb-5 sm:pb-10 leading-tight"
            variants={fadeUpVariant}
          >
            New Features Introduced
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal pb-4 sm:pb-6"
            variants={fadeUpVariant}
          >
            To make Hostrrr feel more social, secure, and dynamic, I added
            several new features and flows:
          </motion.p>

          <motion.ul
            className="list-disc pl-5 sm:pl-6 pb-2 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#CCCCCC] font-normal"
            variants={fadeUpVariant}
          >
            <li className="text-white font-semibold">Verification Flow:</li>
          </motion.ul>

          <motion.p
            className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal pb-12 sm:pb-16 md:pb-20"
            variants={fadeUpVariant}
          >
            Before users can host or join an event, they must complete identity
            verification; small gatherings (≤5 guests) require ID + selfie,
            while larger ones require address verification in addition to ID
            verification. This increased trust and reduced safety concerns.
          </motion.p>
        </ScrollAnimation>

        <ScrollAnimation>
          <motion.img
            src={hostrrrimg3}
            className="mx-auto w-full h-auto pb-6 sm:pb-8 md:pb-10"
            alt="hostrrrimg3"
            variants={fadeUpVariant}
          />
        </ScrollAnimation>

        <ScrollAnimation>
          <motion.ul
            className="list-disc pl-5 sm:pl-6 pt-12 sm:pt-16 md:pt-20 pb-2 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#CCCCCC] font-normal"
            variants={fadeUpVariant}
          >
            <li className="text-white font-semibold">In-App Wallet</li>
          </motion.ul>

          <motion.p
            className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal pb-12 sm:pb-16 md:pb-20"
            variants={fadeUpVariant}
          >
            Enables secure transactions within the platform for event payments,
            ticketing, or food contributions.
          </motion.p>
        </ScrollAnimation>

        <ScrollAnimation>
          <motion.img
            src={hostrrrimg4}
            className="mx-auto w-full h-auto pb-6 sm:pb-8 md:pb-10"
            alt="hostrrrimg4"
            variants={fadeUpVariant}
          />
        </ScrollAnimation>

        <ScrollAnimation>
          <motion.ul
            className="list-disc pl-5 sm:pl-6 pt-12 sm:pt-16 md:pt-20 pb-2 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#CCCCCC] font-normal"
            variants={fadeUpVariant}
          >
            <li className="text-white font-semibold">Messaging Feature:</li>
          </motion.ul>

          <motion.p
            className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal pb-12 sm:pb-16 md:pb-20"
            variants={fadeUpVariant}
          >
            Allows direct host-to-guest communication and pre-event chat rooms
            for guests to connect, share ideas, or plan collaboratively
          </motion.p>
        </ScrollAnimation>

        <ScrollAnimation>
          <motion.img
            src={hostrrrimg5}
            className="mx-auto w-full h-auto pb-6 sm:pb-8 md:pb-10"
            alt="hostrrrimg5"
            variants={fadeUpVariant}
          />
        </ScrollAnimation>

        <ScrollAnimation>
          <motion.ul
            className="list-disc pl-5 sm:pl-6 pt-12 sm:pt-16 md:pt-20 pb-2 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#CCCCCC] font-normal"
            variants={fadeUpVariant}
          >
            <li className="text-white font-semibold">Support & FAQ Page:</li>
          </motion.ul>

          <motion.p
            className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal pb-4 sm:pb-5"
            variants={fadeUpVariant}
          >
            Simplified support access and guided users through common issues
            without needing external help
          </motion.p>

          <motion.ul
            className="list-disc pl-5 sm:pl-6 pt-4 sm:pt-6 pb-2 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#CCCCCC] font-normal"
            variants={fadeUpVariant}
          >
            <li className="text-white font-semibold">
              Settings & Account Page:
            </li>
          </motion.ul>

          <motion.p
            className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal pb-4 sm:pb-5"
            variants={fadeUpVariant}
          >
            Gave users control over profile info, privacy, and event
            preferences.
          </motion.p>
          <motion.ul
            className="list-disc pl-5 sm:pl-6 pt-4 sm:pt-6 pb-2 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#CCCCCC] font-normal"
            variants={fadeUpVariant}
          >
            <li className="text-white font-semibold">
              Scan Barcode (Check-In):
            </li>
          </motion.ul>

          <motion.p
            className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal pb-4 sm:pb-5"
            variants={fadeUpVariant}
          >
            Guests scan a host-provided QR code upon arrival — confirming
            attendance and enhancing event safety.
          </motion.p>

          <motion.ul
            className="list-disc pl-5 sm:pl-6 pt-4 sm:pt-6 pb-2 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#CCCCCC] font-normal"
            variants={fadeUpVariant}
          >
            <li className="text-white font-semibold">Share Event Feature:</li>
          </motion.ul>

          <motion.p
            className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal pb-6 sm:pb-8 md:pb-10"
            variants={fadeUpVariant}
          >
            Both hosts and attendees can share events outside the app to invite
            friends or contacts to join.
          </motion.p>
        </ScrollAnimation>

        <ScrollAnimation>
          <motion.img
            src={hostrrrimg6}
            className="mx-auto w-full h-auto pb-6 sm:pb-8 md:pb-10"
            alt="hostrrrimg6"
            variants={fadeUpVariant}
          />
        </ScrollAnimation>

        <ScrollAnimation>
          <motion.p
            className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal py-4 sm:py-5"
            variants={fadeUpVariant}
          >
            A major UX improvement was refining how food is managed at events.
            Hosts can now choose one of four structured food setups:
          </motion.p>

          <motion.ul
            className="list-disc pl-5 sm:pl-6 pb-4 sm:pb-6 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#CCCCCC] font-normal space-y-2"
            variants={fadeUpVariant}
          >
            <li>Host&apos;s Treat: The host provides food for everyone.</li>
            <li>Ordering Food: Guests order and pay for their own meals.</li>
            <li>
              Potluck: Guests bring dishes to share (they can select categories
              like Starters, Main Meals, Desserts, or Drinks).
            </li>
            <li>
              Assigned Dish: The host assigns specific food or recipes to
              guests.
            </li>
          </motion.ul>
          <motion.p
            className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal pt-2 sm:pt-3 pb-6 sm:pb-8 md:pb-10"
            variants={fadeUpVariant}
          >
            Each option includes tailored microcopy that keeps things clear and
            social.
          </motion.p>
        </ScrollAnimation>

        <ScrollAnimation>
          <motion.img
            src={hostrrrimg7}
            className="mx-auto w-full h-auto pb-6 sm:pb-8 md:pb-10"
            alt="hostrrrimg6"
            variants={fadeUpVariant}
          />
        </ScrollAnimation>

        <ScrollAnimation>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-[50px] lg:text-[60px] xl:text-[80px] font-bold pt-6 sm:pt-8 md:pt-10 lg:pt-5 pb-5 sm:pb-10 leading-tight"
            variants={fadeUpVariant}
          >
            Results
          </motion.h2>

          <motion.ul
            className="list-disc pl-5 sm:pl-6 pb-6 sm:pb-8 md:pb-10 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#CCCCCC] font-normal space-y-2"
            variants={fadeUpVariant}
          >
            <li>Improved user flow and readability across the app</li>
            <li>Introduced a sense of community and trust</li>
            <li>
              Reduced user confusion by 60% (based on prototype testing
              feedback)
            </li>
            <li>Built a scalable design system for future feature rollouts</li>
            <li>Clearer, more engaging onboarding experience </li>
          </motion.ul>
        </ScrollAnimation>

        <ScrollAnimation>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-[50px] lg:text-[60px] xl:text-[80px] font-bold pt-6 sm:pt-8 md:pt-10 lg:pt-5 pb-5 sm:pb-10 leading-tight"
            variants={fadeUpVariant}
          >
            I feel like a proud Dad!
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal pt-2 sm:pt-3 pb-6 sm:pb-8 md:pb-10"
            variants={fadeUpVariant}
          >
            Taking over Hostrrr was both a redesign and reimagination project. I
            didn't just make it look better, I made it work better. Rebuilding
            from messy foundations required strategic UX thinking and structure.
            Introducing features like verification, QR check-in, and messaging
            helped transform Hostrrr into a more trusted, human, and connected
            event experience. It reinforced my belief that great design isn't
            just what users see, it's what helps them feel safe, informed, and
            connected.
          </motion.p>
        </ScrollAnimation>
      </section>

      <section className="max-w-[1300px] w-full mx-auto pt-8 sm:pt-12 md:pt-16 lg:pt-[50px] px-4 sm:px-5 font-dmsans">
        <ScrollAnimation>
          <motion.p
            className="text-3xl sm:text-4xl md:text-[50px] lg:text-[60px] xl:text-[80px] font-bold pb-4 sm:pb-6 md:pb-8 lg:pb-10 leading-tight"
            variants={fadeUpVariant}
          >
            Feed Your Eyes
          </motion.p>
        </ScrollAnimation>
        <ScrollAnimation>
          <motion.img
            src={hostrrrimg8}
            className="w-full mx-auto pb-4 sm:pb-6 md:pb-8 lg:pb-10"
            alt="abt"
            variants={fadeUpVariant}
          />
        </ScrollAnimation>
        <ScrollAnimation>
          <motion.img
            src={hostrrrimg9}
            className="w-full mx-auto pb-4 sm:pb-6 md:pb-8 lg:pb-10"
            alt="abt"
            variants={fadeUpVariant}
          />
        </ScrollAnimation>
        <ScrollAnimation>
          <motion.img
            src={hostrrrimg10}
            className="w-full mx-auto pb-4 sm:pb-6 md:pb-8 lg:pb-10"
            alt="abt"
            variants={fadeUpVariant}
          />
        </ScrollAnimation>

        <ScrollAnimation>
          <motion.div
            className="bg-[#1a1a1a] p-6 sm:p-8 md:p-12 lg:p-16 rounded-box"
            variants={fadeUpVariant}
          >
            <p className="pb-3 sm:pb-4 md:pb-5 text-sm sm:text-base">
              A link to the live version:
            </p>
            <a
              href=""
              className="text-[#ffa500] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl underline break-words"
              target="_blank"
            >
              Hostrrr
            </a>
          </motion.div>
        </ScrollAnimation>
      </section>

      <section className="max-w-[1300px] w-full mx-auto pt-[100px] px-5 font-dmsans">
        <ScrollAnimation>
          <motion.div
            className="text-[40px] sm:text-[70px] pb-5"
            variants={fadeUpVariant}
          >
            <h1 className="pb-1 sm:pb-5">Some of my other stuff</h1>
          </motion.div>
        </ScrollAnimation>
        <WorksCarousel />
      </section>

      <Newfooter />
    </>
  );
};

export default Hostrrr;
