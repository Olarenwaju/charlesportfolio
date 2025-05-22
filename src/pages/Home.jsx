/* eslint-disable no-mixed-spaces-and-tabs */
import {Typewriter} from "react-simple-typewriter"
import Hero from "../components/Hero"
//import homegif from "../assets/img/home-gif.png"
import hemperor from "../assets/img/hemperor-gif.gif"
import plugtentimg from "../assets/img/plugtent-img.png"
import starhomesimg from "../assets/img/starhomes-img.png"
import parseatimg from "../assets/img/parseat-img.png"
import cashblastimg from "../assets/img/cashblast-img.png"
import custommailers from "../assets/img/custom-mailers-img.png"
//import linkicon from "../assets/img/linkicon.png"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import { Link } from 'react-router-dom';

import {motion} from "framer-motion";
import { useInView } from "react-intersection-observer";

import purpleblur from "../assets/img/purpleblur.png"
import SemiCircles from "../components/SemiCircles"

const Home = () => {
    //const { ref: firstRef, inView: firstInView } = useInView();
	const { ref: secondRef, inView: secondInView } = useInView();
	const { ref: thirdRef, inView: thirdInView } = useInView();
	const { ref: forthRef, inView: forthInView } = useInView();

	const textVariant = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

  return (
    <>
        <section className="max-w-[1440px] mx-auto pt-[104.35px] px-5 ">
            <Hero />
            
        </section>

        <section className="relative max-w-[1440px] mx-auto pt-20 pb-20 px-10 overflow-hidden">  
            <img className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2" src={purpleblur} alt="img" />
            <div className="flex flex-col lg:flex-row gap-x-8 gap-y-5 justify-between items-center">
                <motion.div 
                    variants={textVariant}
                    initial="hidden"
                    animate={secondInView ? "visible" : "hidden"}
                    transition={{ duration: 0.8 }}
                    ref={secondRef}
                    className="w-full max-w-[570px]">
                    <p className="text-left text-white sm:font-bold font-semibold text-[16px] sm:text-[30px] pb-5 md:pb-10 font-dmsans leading-[41px] tracking-wider"> 
                        -Charles Emmanuel, Product designer.
                    </p>

                    <img src={hemperor} className="" alt="img" />
                </motion.div>

                <motion.div 
                    variants={textVariant}
                    initial="hidden"
                    animate={thirdInView ? "visible" : "hidden"}
                    transition={{ duration: 0.5 }}
                    ref={thirdRef}
                    className="max-w-[700px] w-full">

                    <motion.p
                        variants={textVariant}
					    transition={{ duration: 0.5, delay: 0.4 }} 
                        className="font-dmsans text-[24px] md:text-[60px] lg:text-[90px] font-medium xl:leading-[100px] md:leading-[80px] leading-[50px] pb-4">
                            Design {''} 
                            <span>
                                <Typewriter words={['is how it works.', 'is innovation.', 'adds value.']}
                                    loop={true}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={100}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                    </motion.p>

                    <motion.p 
                        variants={textVariant}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="font-dm md:text-[24px] text-[20px] text-[#CCCCCC] font-normal md:leading-[31px] leading-[25px] font-dmsans">
                        I help businesses and companies reach their goals by designing 
                        user-centric digital products & interactive but seamless experiences.
                    </motion.p>
                </motion.div>

            </div>
            
        </section>

        <motion.section
            className="max-w-[1440px] relative mx-auto bg-black pt-[104.35px] px-10 font-dmsans overflow-hidden"
            variants={textVariant}
            initial="hidden"
            animate={forthInView ? "visible" : "hidden"}
            transition={{ duration: 0.5 }}
            ref={forthRef}> 

            {/* <div className="absolute inset-0 bg-black -z-50"></div> */}
            

            <SemiCircles />         

            <motion.p 
                variants={textVariant}
                transition={{ duration: 0.5, dela:0.2 }}
                className=" uppercase lg:text-[100px] md:text-[80px] sm:text-[50px] text-[32px] font-semibold lg:leading-[160px] md:leading-[100px] leading-[40px] pb-10 sm:pb-[20] tracking-wider">
                    Selected Projects
            </motion.p>

            
            
            <div className="flex flex-col lg:flex-row gap-x-8 gap-y-5 justify-between items-center md:pb-36 pb-28">
                <div className="w-full max-w-[685px]">
                    <motion.img  
                        src={plugtentimg} 
                        alt="img" 
                        className="z-20"
                        variants={textVariant}
					    transition={{ duration: 0.5, delay: 0.4 }}
                    />
                </div>

                <div className="w-full max-w-[700px]">
                    <motion.p className="text-3xl md:text-[60px] lg:text-[90px] leading-10 md:leading-[80px] font-normal pb-5 tracking-wider" variants={textVariant} transition={{duration:0.5, delay:0.6}}>Plugtent</motion.p>
                    <motion.p className="font-dmsans sm:text-[24px] text-[20px] font-normal sm:leading-[35px] leading-[25px] text-[#CCCCCC] pb-3" variants={textVariant} transition={{duration:0.5, delay:0.8}}>
                        A marketplace-model platform that allows businesses to leverage the
                        creativity and audiences of content creators to market and advertise their products and services.
                    </motion.p>
                    <Link to="/plugtent" className="text-[#8338EA] md:text-[24px] text-[16px]">
                        <span className="border-b border-[#8338EA]">Learn More</span> 
                        <span><i className="ri-arrow-right-double-line text-2xl text-[#8338EA] pl-3"></i></span>
                    </Link>
                </div>

            </div>

            <div className="flex flex-col lg:flex-row gap-x-8 gap-y-5 justify-between items-center md:pb-36 pb-28">

                <div className="w-full max-w-[700px]">
                    <motion.p className="text-3xl md:text-[60px] lg:text-[90px] leading-10 md:leading-[80px] font-normal pb-5 tracking-wider" variants={textVariant} transition={{duration:0.5, delay:1}}>Star Homes</motion.p>
                    <motion.p className="sm:text-[24px] text-[20px] font-normal sm:leading-[35px] leading-[25px] text-[#CCCCCC] pb-3" variants={textVariant} transition={{duration:0.5, delay:1.4}}>
                        Star Homes is a marketplace-model platform for luxurious and affordable short-term
                        apartment rentals in Lagos. The  platform allows the admin (Star Homes)
                        to list their apartments for shortlet, while guests can browse through available listings,
                        book their stay, and enjoy a comfortable and hassle-free experience.
                    </motion.p>
                    <Link to="/starhomes" className="text-[#8338EA] md:text-[24px] text-[16px]">
                        <span className="border-b border-[#8338EA]">Learn More</span> 
                        <span><i className="ri-arrow-right-double-line text-2xl text-[#8338EA] pl-3"></i></span>
                    </Link>
                </div>

                <div className="w-full max-w-[685px] order-first lg:order-last">
                    <motion.img variants={textVariant} transition={{duration:0.5, delay:1.8}} src={starhomesimg} className="" alt="img" />
                </div>

            </div>

            <div className="flex flex-col lg:flex-row gap-x-8 gap-y-5 justify-between items-center md:pb-36 pb-28">
                <div className="w-full max-w-[685px]">
                    <motion.img variants={textVariant} transition={{duration:0.5, delay:2.0}} src={cashblastimg} className="" alt="img" />
                </div>

                <div className="w-full max-w-[700px]">
                    <motion.p variants={textVariant} transition={{duration:0.5, delay:2.2}} className="text-3xl md:text-[60px] lg:text-[90px] leading-10 md:leading-[80px] font-normal pb-5 tracking-wider">CashBlast</motion.p>
                    <motion.p variants={textVariant} transition={{duration:0.5, delay:2.4}} className="sm:text-[24px] text-[20px] font-normal sm:leading-[35px] leading-[25px] text-[#CCCCCC] pb-3">
                        CashBlast is a fintech product with a goal to solve the problem of mutilating the Nigerian currency while preserving the cherished tradition of `spraying` money at events. 
                    </motion.p>
                    <Link to="/cashblast" className="text-[#8338EA] md:text-[24px] text-[16px]">
                        <span className="border-b border-[#8338EA]">Learn More</span> 
                        <span><i className="ri-arrow-right-double-line text-2xl text-[#8338EA] pl-3"></i></span>
                    </Link>
                </div>

            </div>

            <div className="flex flex-col lg:flex-row gap-x-8 gap-y-5 justify-between items-center md:pb-36 pb-28">

                <div className="w-full max-w-[700px]">
                    <motion.p variants={textVariant} transition={{duration:0.5, delay:2.6}} className="text-3xl md:text-[60px] lg:text-[90px] leading-10 md:leading-[80px] font-normal pb-5 tracking-wider">Custom Mailers</motion.p>
                    <motion.p variants={textVariant} transition={{duration:0.5, delay:2.8}} className="text-[20px] sm:text-[24px]  font-normal sm:leading-[31px] leading-[25px] text-[#CCCCCC] pb-3">
                        An e-commerce platform that allows users to order fully customizable gaming mouse 
                        pads either by providing a design image or using an embedded
                        AI tool to generate one.
                    </motion.p>
                    <Link to="/custommailers" className="text-[#8338EA] md:text-[24px] text-[16px]">
                        <span className="border-b border-[#8338EA]">Learn More</span> 
                        <span><i className="ri-arrow-right-double-line text-2xl text-[#8338EA] pl-3"></i></span>
                    </Link>
                </div>

                <div className="w-full max-w-[685px] order-first lg:order-last">
                    <motion.img variants={textVariant} transition={{duration:0.5, delay:3.0}} src={custommailers} className="" alt="img" />
                </div>

            </div>

            <div className="flex flex-col lg:flex-row gap-x-8 gap-y-5 justify-between items-center pb-28">
                <div className="w-full max-w-[685px]">
                    <img src={parseatimg} className="" alt="img" />
                </div>

                <div className="w-full max-w-[700px]">
                    <p className="text-3xl md:text-[60px] lg:text-[90px] leading-10 md:leading-[80px] font-normal pb-5 tracking-wider">Parseat</p>
                    <p className="text-[20px] sm:text-[24px] font-normal sm:leading-[31px] leading-[25px] text-[#CCCCCC] pb-3">
                        Parseat is an event management tool targeted at solving seat management challenges
                        for party/event organizers and individual party owners.
                        
                    </p>
                    <Link to="/parseat" className="text-[#8338EA] md:text-[24px] text-[16px]">
                        <span className="border-b border-[#8338EA]">Learn More</span> 
                        <span><i className="ri-arrow-right-double-line text-2xl text-[#8338EA] pl-3"></i></span>
                    </Link>
                </div>

            </div>

        </motion.section>

        <section className="px-10 py-20">
            <Contact/>
        </section>
        
        
        <Footer/>

        
    </>
  )
}

export default Home