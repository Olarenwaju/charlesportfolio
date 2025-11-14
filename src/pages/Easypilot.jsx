import easypilothero from "../assets/img/easypilot/Easypilot-hero.png";
import skillimg1 from "../assets/img/easypilot/easypilot-skill-img1.png";
import skillimg2 from "../assets/img/easypilot/easypilot-skill-img2.png";
import skillimg3 from "../assets/img/easypilot/easypilot-skill-img3.png";
import FeedYourEyes from "../components/FeedYourEyes";
import Newfooter from "../components/Newfooter";
import WorksCarousel from "../components/WorksCarousel";
import Backbutton from "../components/Backbutton";
import greenblur from "../assets/img/greenblur.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

const Easypilot = () => {
  return (
    <>
      <section className="relative max-w-[1300px] w-full mx-auto pt-20 sm:pt-24 md:pt-[150px] px-4 sm:px-5 font-dmsans">
        <img
          className="absolute -top-3/4 -left-1/4"
          src={greenblur}
          alt="img"
        />

        <div className="fixed z-50">
          <Backbutton />
        </div>

        <motion.div
          className="flex flex-col lg:flex-row justify-between pt-20 pb-10 sm:pb-12 md:pb-16 gap-6 lg:gap-x-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-2xl sm:text-3xl md:text-[40px] lg:text-[50px] xl:text-[70px] pb-4 sm:pb-5">
            <div>
              <h1 className="pb-1 sm:pb-3 md:pb-5 leading-tight">EasyPilot</h1>
            </div>
            <div className="text-sm sm:text-base md:text-[15px] lg:text-[18px] xl:text-[20px] text-[#CCCCCC] font-normal leading-relaxed">
              <h1>
                Redefining Convenience and Trust{" "}
                <br className="hidden sm:block" /> Between Car Owners and
                Drivers
              </h1>
            </div>
          </div>

          <div className="max-w-[850px] w-full">
            <img
              src={easypilothero}
              className="w-full mx-auto pb-6 sm:pb-8 md:pb-10"
              alt="easypilot"
            />
          </div>
        </motion.div>

        <ScrollAnimation>
          <motion.div
            className="flex flex-col lg:flex-row justify-between pb-10 sm:pb-12 md:pb-16 gap-6 lg:gap-x-10"
            variants={fadeUpVariant}
          >
            <div>
              <div className="pb-6 sm:pb-8 md:pb-10 text-sm sm:text-base md:text-[15px] lg:text-[17px] leading-relaxed sm:leading-[25px] md:leading-[30px] text-[#CCCCCC] font-normal">
                <h1 className="text-white text-sm sm:text-base font-semibold pb-1">
                  Role
                </h1>
                <p className="text-[#cccccc] font-normal">UI/UX Designer</p>
              </div>

              <div className="text-sm sm:text-base md:text-[15px] lg:text-[17px] leading-relaxed sm:leading-[25px] md:leading-[30px] text-[#CCCCCC] font-normal">
                <h1 className="text-white text-sm sm:text-base font-semibold pb-1">
                  Product Type
                </h1>
                <p className="text-[#cccccc] font-normal">
                  Mobile App, <br />
                  Admin Dashboard, Ride <br /> Management System
                </p>
              </div>
            </div>

            <div className="max-w-[850px] text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal">
              <p>
                EasyPilot is a mobile solution that connects car owners with
                verified, professional drivers who drive the owners&apos;
                personal vehicles. It was designed to simplify how car owners
                hire trusted drivers, whether for daily commutes, errands, or
                intercity travel, while creating flexible earning opportunities
                for drivers.
              </p>
            </div>
          </motion.div>
        </ScrollAnimation>

        <ScrollAnimation>
          <motion.div
            className="flex flex-col lg:flex-row justify-between pb-10 sm:pb-12 md:pb-16 gap-6 lg:gap-x-10"
            variants={fadeUpVariant}
          >
            <div>
              <div className="pb-6 sm:pb-8 md:pb-10 text-sm sm:text-base md:text-[15px] lg:text-[18px] xl:text-[20px] leading-relaxed sm:leading-[25px] md:leading-[30px] text-[#CCCCCC] font-normal">
                <h1 className="text-white text-sm sm:text-base font-semibold pb-1">
                  Client
                </h1>
                <p className="text-[#cccccc] font-normal">Easy Pilot</p>
              </div>

              <div className="text-sm sm:text-base md:text-[15px] lg:text-[18px] xl:text-[20px] leading-relaxed sm:leading-[25px] md:leading-[30px] text-[#CCCCCC] font-normal">
                <h1 className="text-white text-sm sm:text-base font-semibold pb-2 sm:pb-3">
                  Skills Applied
                </h1>
                <div className="text-[#cccccc] font-normal space-y-1 sm:space-y-2">
                  <p>User Research & Persona</p>
                  <p>User Flow Mapping</p>
                  <p>Wireframing & Low-Fidelity</p>
                  <p>Design</p>
                  <p>Mobile App Design</p>
                  <p>Admin Panel Design</p>
                  <p>Design System Creation</p>
                  <p>Prototyping & Interaction</p>
                  <p>Usability Testing</p>
                  <p>UI/UX Writing</p>
                  <p>Stakeholder Collaboration</p>
                  <p>Accessibility Design</p>
                  <p>Visual Design & Layout</p>
                  <p>Design Handoff & Developer</p>
                  <p>Collaboration</p>
                </div>
              </div>
            </div>

            <div className="max-w-[850px] w-full">
              <motion.p
                className="pb-6 sm:pb-8 md:pb-10 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal"
                variants={fadeUpVariant}
              >
                The goal was to craft a secure, transparent, and easy-to-use
                ecosystem where both drivers and car owners could interact with
                confidence, eliminating the traditional stress of finding a
                reliable driver on short notice.
              </motion.p>

              <motion.img
                src={skillimg1}
                className="w-full mx-auto pb-6 sm:pb-8 md:pb-10"
                alt="easypilot"
                variants={fadeUpVariant}
              />

              <ScrollAnimation>
                <motion.div>
                  <motion.h1
                    className="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold pb-3 sm:pb-4 leading-tight"
                    variants={fadeUpVariant}
                  >
                    The Challenge: Modernizing How Drivers and Car Owners
                    Connect
                  </motion.h1>
                  <motion.div
                    className="pb-6 sm:pb-8 md:pb-10 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#CCCCCC] font-normal"
                    variants={fadeUpVariant}
                  >
                    <p className="pb-6 sm:pb-8 md:pb-10">
                      Before EasyPilot, both car owners and professional drivers
                      faced structural limitations in how driving services
                      operated. Existing ride-hailing platforms like{" "}
                      <span className="font-bold">
                        Uber, Bolt, and InDrive{" "}
                      </span>
                      catered primarily to drivers who already owned cars,
                      leaving a gap for skilled drivers without vehicles. At the
                      same time, many car owners wanted flexibility, they
                      preferred using their own cars for trips but didn’t want
                      to deal with the stress of driving themselves.
                    </p>
                    <p className="pb-6 sm:pb-8 md:pb-10">
                      Traditional methods of hiring drivers through
                      word-of-mouth or local agents often lacked reliability,
                      safety verification, and accountability. Car owners had no
                      structured way to confirm a driver&apos;s identity or
                      professionalism, while drivers had no stable system to
                      find verified clients or build credibility.
                    </p>
                    <div>
                      <p className="pb-3 sm:pb-4 md:pb-5">
                        The challenge was to design a balanced ecosystem that:
                      </p>
                      <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                        <li>
                          Connects verified car owners with trusted, licensed
                          drivers effortlessly.
                        </li>
                        <li>
                          Provides a structured income system for drivers
                          without vehicles.
                        </li>
                        <li>
                          Enables car owners to maximize their vehicle usage
                          without compromising safety or convenience.
                        </li>
                      </ul>
                    </div>
                    <p className="pt-4 sm:pt-5">
                      Ensures trust, transparency, and flexibility on both sides
                      — whether for daily commutes, logistics, or personal
                      trips.
                    </p>
                  </motion.div>
                </motion.div>
              </ScrollAnimation>

              <ScrollAnimation>
                <motion.div>
                  <motion.h1
                    className="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold pb-3 sm:pb-4 leading-tight"
                    variants={fadeUpVariant}
                  >
                    My Approach: Designing a Trust-First Mobility Ecosystem
                  </motion.h1>
                  <motion.div
                    className="pb-6 sm:pb-8 md:pb-10 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#CCCCCC] font-normal"
                    variants={fadeUpVariant}
                  >
                    <p className="pb-6 sm:pb-8 md:pb-10">
                      My design strategy focused on clarity, trust, and fluidity
                      across all user touchpoints from onboarding to trip
                      completion.
                    </p>
                    <p className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] font-bold pb-3 sm:pb-4 md:pb-5 text-white">
                      1. Simplifying Onboarding for Two Unique Users
                    </p>
                    <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                      <li>
                        Designed intuitive onboarding flows for both drivers and
                        car owners.
                      </li>
                      <li>
                        Integrated verification steps (ID, guarantor details,
                        vehicle info) without overwhelming users.
                      </li>
                      <li>
                        Used progress indicators and guided microcopy to build
                        user confidence.
                      </li>
                    </ul>
                  </motion.div>

                  <motion.img
                    src={skillimg2}
                    className="w-full mx-auto pb-6 sm:pb-8 md:pb-10"
                    alt="easypilot"
                    variants={fadeUpVariant}
                  />
                </motion.div>
              </ScrollAnimation>

              <ScrollAnimation>
                <motion.div>
                  <motion.h1
                    className="text-xl sm:text-2xl md:text-[24px] lg:text-[28px] font-bold pb-3 sm:pb-4 md:pb-5 text-white leading-tight"
                    variants={fadeUpVariant}
                  >
                    2. Building a Secure Trip Experience
                  </motion.h1>
                  <ul className="list-disc pl-5 sm:pl-6 pb-4 sm:pb-6 md:pb-8 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#CCCCCC] font-normal space-y-2">
                    <li>
                      Created a trip flow powered by real-time GPS, PIN
                      verification, and time tracking.
                    </li>
                  </ul>
                  <p className="pb-3 sm:pb-4 md:pb-5 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px]">
                    Introduced Security Prompts
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 pb-6 sm:pb-8 md:pb-10 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#CCCCCC] font-normal space-y-2">
                    <li>
                      Car owners verify the driver&apos;s identity before
                      handing over keys.
                    </li>
                    <li>
                      Drivers confirm trip completion via a secure code shared
                      by the owner
                    </li>
                    <li>
                      Added an SOS feature for emergencies — discreet yet
                      accessible
                    </li>
                  </ul>
                  <motion.img
                    src={skillimg3}
                    className="w-full mx-auto pb-6 sm:pb-8 md:pb-10"
                    alt="easypilot"
                    variants={fadeUpVariant}
                  />
                </motion.div>
              </ScrollAnimation>

              <ScrollAnimation>
                <motion.div>
                  <motion.h1
                    className="text-xl sm:text-2xl md:text-[24px] lg:text-[28px] font-bold pb-3 sm:pb-4 md:pb-5 text-white leading-tight"
                    variants={fadeUpVariant}
                  >
                    3. Designing Role-Based Dashboards
                  </motion.h1>
                  <motion.div
                    className="pb-6 sm:pb-8 md:pb-10 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#CCCCCC] font-normal"
                    variants={fadeUpVariant}
                  >
                    <p className="pb-3 sm:pb-4">
                      Developed separate yet connected experiences:
                    </p>

                    <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                      <li>
                        Car Owners Dashboard: Manage vehicles, fund wallets, and
                        view trip history
                      </li>
                      <li>
                        Drivers Dashboard: Access available trips, go
                        online/offline, track earnings, withdraw earnings.
                      </li>
                      <li>
                        Focused on data hierarchy and minimal clutter, ensuring
                        at-a-glance clarity.
                      </li>
                    </ul>
                    <motion.img
                      src={easypilothero}
                      className="w-full mx-auto pt-4 sm:pt-6 pb-6 sm:pb-8 md:pb-10"
                      alt="easypilot"
                      variants={fadeUpVariant}
                    />
                  </motion.div>
                </motion.div>
              </ScrollAnimation>

              <ScrollAnimation>
                <motion.div>
                  <motion.h1
                    className="text-xl sm:text-2xl md:text-[24px] lg:text-[28px] font-bold pb-3 sm:pb-4 md:pb-5 text-white leading-tight"
                    variants={fadeUpVariant}
                  >
                    4. Handling Edge Cases Gracefully
                  </motion.h1>
                  <motion.div
                    className="pb-6 sm:pb-8 md:pb-10 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#CCCCCC] font-normal"
                    variants={fadeUpVariant}
                  >
                    <ul className="list-disc pl-5 sm:pl-6 pb-6 sm:pb-8 md:pb-10 space-y-2">
                      <li>
                        Crafted flows for situations like expired timers,
                        delayed trip endings, and cancellation penalties.
                      </li>
                      <li>
                        Designed contextual pop-ups to educate users rather than
                        overwhelm them.
                      </li>
                      <li>
                        Introduced wallet balance management and clear breakdown
                        of charges to maintain transparency.
                      </li>
                    </ul>

                    <h1 className="text-xl sm:text-2xl md:text-[24px] lg:text-[28px] font-bold pb-3 sm:pb-4 md:pb-5 text-white leading-tight">
                      5. Elevating Trust Through Microcopy & Visual Language
                    </h1>
                    <ul className="list-disc pl-5 sm:pl-6 pb-6 sm:pb-8 md:pb-10 space-y-2">
                      <li>
                        Wrote guided prompts and confirmations that sound human,
                        not robotic.
                      </li>
                      <li>
                        Adopted a warm yet professional tone to build
                        reassurance (&quot;Your driver is on the way&quot;,
                        &quot;Trip ended successfully&quot;, &quot;Verification
                        pending&quot;).
                      </li>
                      <li>
                        Visual consistency: neutral backgrounds, bold accent
                        colors, and clear status indicators for trust and
                        clarity.
                      </li>
                    </ul>

                    <motion.img
                      src={easypilothero}
                      className="w-full mx-auto pb-6 sm:pb-8 md:pb-10"
                      alt="easypilot"
                      variants={fadeUpVariant}
                    />

                    <motion.h1
                      className="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold pb-3 sm:pb-4"
                      variants={fadeUpVariant}
                    >
                      Summary: Empowering Drivers, Simplifying Mobility
                    </motion.h1>
                    <motion.p
                      className="pb-6 sm:pb-8 md:pb-10"
                      variants={fadeUpVariant}
                    >
                      EasyPilot redefines how drivers and car owners connect,
                      offering verified, reliable drivers to car owners who
                      preferred using their own cars for trips but didn&apos;t
                      want to deal with the stress of driving themselves while
                      also helping skilled drivers earn without owning a car.{" "}
                      <br />
                      Through smart verification, and a smooth digital
                      experience, the platform makes every ride secure,
                      accountable, and effortless.
                    </motion.p>
                  </motion.div>
                </motion.div>
              </ScrollAnimation>
            </div>
          </motion.div>
        </ScrollAnimation>
      </section>

      <section className="max-w-[1300px] w-full mx-auto pt-[100px] px-5 font-dmsans">
        <ScrollAnimation>
          <motion.div className="pb-28" variants={fadeUpVariant}>
            <FeedYourEyes />
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

export default Easypilot;
