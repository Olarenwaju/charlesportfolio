import onijekuje from "../assets/img/Onijekuje/onijekuje-chopify.png";
import onijekujeimg1 from "../assets/img/Onijekuje/onijekuje-img1.png";
import onijekujeimg3 from "../assets/img/Onijekuje/onijekuje-img3.png";
import onijekujeimg4 from "../assets/img/Onijekuje/onijekuje-img4.png";
import Newfooter from "../components/Newfooter";
import WorksCarousel from "../components/WorksCarousel";
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

const Onijekuje = () => {
  return (
    <>
      <section className="max-w-[1300px] w-full mx-auto pt-20 sm:pt-24 md:pt-[150px] px-4 sm:px-5 font-dmsans">
        <motion.div
          className="flex flex-col lg:flex-row justify-between pb-10 sm:pb-12 md:pb-16 gap-6 lg:gap-x-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-2xl sm:text-3xl md:text-[40px] lg:text-[50px] xl:text-[70px] pb-4 sm:pb-5">
            <div>
              <h1 className="pb-1 sm:pb-3 md:pb-5 leading-tight">
                Onijekuje <br className="hidden sm:block" /> Chopify
              </h1>
            </div>
            <div className="text-sm sm:text-base md:text-[15px] lg:text-[18px] xl:text-[20px] text-[#CCCCCC] font-normal leading-relaxed">
              <h1>
                A Nigerian restaurant that blends{" "}
                <br className="hidden sm:block" /> local authenticity with a
                modern dining experience
              </h1>
            </div>
          </div>

          <div className="max-w-[850px] w-full">
            <img
              src={onijekuje}
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
                  Landing Page . Restaurant <br />
                  Website
                </p>
              </div>
            </div>

            <div className="max-w-[850px] text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal">
              <p>
                Onijekuje Chopify is a modern culinary restaurant redefining how
                Nigerians experience food. Built on the foundation of authentic
                local flavors and innovative dining experiences, Onijekuje
                combines tradition with creativity to bring premium Nigerian
                meals to food lovers everywhere.
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
                <p className="text-[#cccccc] font-normal">Onijekuje Chopify</p>
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
                The goal of this project was to design a clean, high-performing
                landing page that communicates this brand&apos;s diversity while
                staying visually cohesive, one that feels proudly Nigerian, yet
                sleek enough to compete with any modern restaurant website.
              </motion.p>

              <ScrollAnimation>
                <motion.div>
                  <motion.h1
                    className="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold pb-3 sm:pb-4 leading-tight"
                    variants={fadeUpVariant}
                  >
                    The Challenge:
                  </motion.h1>
                  <motion.div
                    className="pb-6 sm:pb-8 md:pb-10 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#CCCCCC] font-normal"
                    variants={fadeUpVariant}
                  >
                    <p className="pb-6 sm:pb-8 md:pb-10">
                      The client needed a one-page website that instantly
                      communicates what Onijekuje Chopify represents , not just
                      as a restaurant, but as a cultural experience. The
                      challenge was achieving balance: reflecting the warmth and
                      familiarity of local cuisine while maintaining a premium,
                      clean aesthetic that appeals to modern diners.
                    </p>

                    <div>
                      <p className="pb-3 sm:pb-4 md:pb-5">
                        Key challenges included:
                      </p>
                      <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                        <li>
                          Capture Nigerian cultural essence without overwhelming
                          the design.
                        </li>
                        <li>
                          Create a smooth visual flow from brand introduction to
                          call-to-action.
                        </li>
                        <li>
                          Ensure responsiveness across devices without
                          compromising design appeal.
                        </li>
                        <li>
                          Designing a layout that&apos;s visually engaging
                          without overwhelming users.
                        </li>
                        <li>
                          Communicating credibility and location clearly to
                          drive offline visits.
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              </ScrollAnimation>

              <ScrollAnimation>
                <motion.div>
                  <motion.h1
                    className="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold pb-3 sm:pb-4 leading-tight"
                    variants={fadeUpVariant}
                  >
                    My Process:
                  </motion.h1>
                  <motion.div
                    className="pb-6 sm:pb-8 md:pb-10 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#CCCCCC] font-normal"
                    variants={fadeUpVariant}
                  >
                    <p className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] pb-3 sm:pb-4 md:pb-5 text-white font-semibold">
                      1. Research & Discovery
                    </p>
                    <p className="pb-6 sm:pb-8 md:pb-10">
                      I studied local restaurant websites and global food brands
                      to identify design gaps. The insight: most local eateries
                      lack a digital presence that feels both authentic and
                      premium. This became the foundation for Chopify&apos;s
                      design direction.
                    </p>

                    <p className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] pb-3 sm:pb-4 md:pb-5 text-white font-semibold">
                      2. Sketching & Layout Exploration
                    </p>
                    <p className="pb-6 sm:pb-8 md:pb-10">
                      I started with a simple sketch and layout structure; Hero
                      section, Menu, Upcoming Events, Reservations, Contact Us
                      Form. The focus was ensuring each section communicated
                      purpose within a single scroll experience.
                    </p>
                  </motion.div>
                </motion.div>
              </ScrollAnimation>

              <ScrollAnimation>
                <motion.img
                  src={onijekujeimg1}
                  className="w-full mx-auto pb-6 sm:pb-8 md:pb-10"
                  alt="onijekujeimg1"
                  variants={fadeUpVariant}
                />
              </ScrollAnimation>

              <ScrollAnimation>
                <motion.div>
                  <motion.h1
                    className="text-xl sm:text-2xl md:text-[24px] lg:text-[28px] font-bold pb-3 sm:pb-4 md:pb-5 text-white leading-tight"
                    variants={fadeUpVariant}
                  >
                    3. Final Outcome
                  </motion.h1>
                  <motion.p
                    className="pb-6 sm:pb-8 md:pb-10 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal"
                    variants={fadeUpVariant}
                  >
                    I focused on simplicity, warmth, and clarity. Using a
                    minimal yet bold style guide inspired by Nigerian culinary
                    aesthetics, I balanced traditional elements with a modern
                    digital presentation. I prioritized:
                  </motion.p>
                  <motion.ul
                    className="list-disc pl-5 sm:pl-6 pb-6 sm:pb-8 md:pb-10 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#CCCCCC] font-normal space-y-2"
                    variants={fadeUpVariant}
                  >
                    <li>
                      A clean navigation flow that lets users move effortlessly
                      between sections
                    </li>
                    <li>
                      Subtle animations to make interactions feel smooth and
                      lively.
                    </li>
                    <li>
                      Consistent typography and color palette that reflect the
                      brand&apos;s personality, vibrant, inviting, and
                      confident.
                    </li>
                  </motion.ul>

                  <motion.img
                    src={onijekujeimg3}
                    className="w-full mx-auto pb-6 sm:pb-8 md:pb-10"
                    alt="onijekujeimg3"
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
                    Impact Highlights:
                  </motion.h1>
                  <motion.div
                    className="pb-6 sm:pb-8 md:pb-10 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#CCCCCC] font-normal"
                    variants={fadeUpVariant}
                  >
                    <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                      <li>
                        Clear brand communication within the first scroll.
                      </li>
                      <li>
                        Increased engagement through high visual appeal and
                        structured layout.
                      </li>
                      <li>
                        Consistent traffic redirection from social media to the
                        landing page.
                      </li>
                    </ul>
                  </motion.div>
                </motion.div>
              </ScrollAnimation>
            </div>
          </motion.div>
        </ScrollAnimation>
      </section>

      <section className="max-w-[1300px] w-full mx-auto pt-12 sm:pt-16 md:pt-20 lg:pt-[100px] pb-12 sm:pb-16 md:pb-20 lg:pb-28 px-4 sm:px-5 font-dmsans">
        <ScrollAnimation>
          <motion.div
            className="text-2xl sm:text-3xl md:text-[40px] lg:text-[50px] xl:text-[70px] pb-4 sm:pb-5"
            variants={fadeUpVariant}
          >
            <h1 className="pb-1 sm:pb-3 md:pb-5">Feed Your Eyes</h1>
          </motion.div>
        </ScrollAnimation>

        <ScrollAnimation>
          <motion.div
            className="pb-12 sm:pb-16 md:pb-20 lg:pb-28"
            variants={fadeUpVariant}
          >
            <img
              src={onijekujeimg4}
              alt="onijekujeimg4"
              className="w-full h-auto"
            />
          </motion.div>
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
              href="https://www.onijekujechopify.com/"
              className="text-[#ffa500] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl underline break-words"
              target="_blank"
            >
              Onijekuje Chopify
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

export default Onijekuje;
