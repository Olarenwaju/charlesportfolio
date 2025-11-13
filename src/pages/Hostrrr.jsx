/* eslint-disable react/no-unescaped-entities */

import Backbutton from "../components/Backbutton";
import greenblur from "../assets/img/greenblur.png"

//////////////////////////////////////////////////////////////////////
import hostrrrhero from "../assets/img/hostrrr/hostrrr-hero.png"
import hostrrrimg1 from "../assets/img/hostrrr/hostrrr-img1.png"
import hostrrrimg2 from "../assets/img/hostrrr/hostrrr-img2.png"
import hostrrrimg3 from "../assets/img/hostrrr/hostrrr-img3.png"
import hostrrrimg4 from "../assets/img/hostrrr/hostrrr-img4.png"
import hostrrrimg5 from "../assets/img/hostrrr/hostrrr-img5.png"
import hostrrrimg6 from "../assets/img/hostrrr/hostrrr-img6.png"
import hostrrrimg7 from "../assets/img/hostrrr/hostrrr-img7.png"
import hostrrrimg8 from "../assets/img/hostrrr/hostrrr-img8.png"
import hostrrrimg9 from "../assets/img/hostrrr/hostrrr-img9.png"
import hostrrrimg10 from "../assets/img/hostrrr/hostrrr-img10.png"
import WorksCarousel from "../components/WorksCarousel";
import Newfooter from "../components/Newfooter";




const Hostrrr = () => {
  return (
    <>
        <section className="max-w-[1300px] w-full mx-auto pt-[150px] px-5 font-dmsans">
            <img className="absolute -top-2/4 -left-1/4" src={greenblur} alt="img" />
            <div className="fixed z-50">
                <Backbutton/>
            </div>
            <img src={hostrrrhero } className="w-full mx-auto pb-10" alt="abt"/>
            <p className="text-[30px] sm:text-[40px] md:text-[55px] font-semibold pb-16">
                Hostrrr: An e-commerce platform for ordering fully customizable poly mailers
            </p>

            <div className="max-w-[900px] flex justify-between gap-x-4 py-10 text-xs sm:text-lg">
 
                <div className="text-center">
                    <h1 className="">My Role</h1>
                    <p className="text-[#cccccca9]">Product Designer</p>
                </div>

                <div className="text-center">
                    <h1 className="">Timeline</h1>
                    <p className="text-[#cccccca9]">4 - 5 weeks</p>
                </div>

                <div className="text-center">
                    <h1 className="">Location</h1>
                    <p className="text-[#cccccca9]">Remote</p>
                </div>

                <div className="text-center">
                    <h1 className="">Tools</h1>
                    <p className="text-[#cccccca9]">Figma, figjam</p>
                </div>

            </div>

        </section>

        <section className="max-w-[1300px] w-full mx-auto pt-[100px] px-5 font-dmsans">
            <div className="pb-28">
                <p className="text-[50px] sm:text-[60px] md:text-[80px] font-bold pb-5 sm:pb-10">Overview</p>
                <p className="text-[20px] sm:text-[30px] leading-[40px] sm:leading-[50px] text-[#CCCCCC] font-normal">
                    Hostrrr is a social event-hosting platform (mobile app) that makes it easy for anyone to create, 
                    join, and enjoy meaningful gatherings, whether it’s a private dinner, game night, or networking event. 
                    The app helps users plan events effortlessly, manage food arrangements, verify guests for safety, 
                    and connect attendees before the big day.
                </p>

            </div>

            <img src={hostrrrimg1} className="mx-auto" alt="hostrrrimg1" />

            <div className="pt-20">
                <p className="text-[50px] sm:text-[60px] md:text-[80px] font-bold pb-5">My Role</p>
                <p className="text-[20px] sm:text-[30px] leading-[40px] sm:leading-[50px] text-[#CCCCCC] font-normal pb-5 sm:pb-10">
                    I was responsible for auditing the existing UI, identifying UX flaws, redesigning core experiences ( for both hosts and guests ), 
                    and establishing a consistent visual and interaction language across the app
                </p>

                <p className="text-[50px] sm:text-[60px] md:text-[80px] font-bold pb-5">The Problem</p>
                <p className="text-[20px] sm:text-[30px] leading-[40px] sm:leading-[50px] text-[#CCCCCC] font-normalpb-5 sm:pb-10">
                    When I joined the project, Hostrrr already had some existing designs, but they were inconsistent, 
                    visually outdated, and lacked UX depth. Font sizes were too small, there was no design system, 
                    and the experience felt fragmented. My job was to take over the design, fix the UX, build a scalable system, 
                    and introduce new features that elevated the overall experience for both hosts and guests. 
                    The previous design had good ideas but poor execution:
                </p>

                <ul className="list-disc pb-10 text-[20px] sm:text-[28px] leading-[40px] sm:leading-[40px] text-[#CCCCCC] font-normal pb-5">
                    <li>Inconsistent font sizes and spacing</li>
                    <li>No design system or reusable component structure</li>
                    <li>Weak visual hierarchy</li>
                    <li>UX flows that were confusing and unstructured</li>                   
                    <li>Missing product features crucial for trust and community engagement</li>
                </ul>

                <p className="text-[20px] sm:text-[30px] leading-[40px] sm:leading-[50px] text-[#CCCCCC] font-normalpb-5 sm:pb-10">
                    These issues made the app feel unpolished and hard to use, especially for first-time hosts or guests trying to
                    navigate event setup or registration
                </p>
                
            </div>

        </section>

        <section className="max-w-[1300px] w-full mx-auto pt-[50px] px-5 font-dmsans pb-[100px]">
            <div>
                <p className="text-[50px] sm:text-[60px] md:text-[80px] font-bold pb-5">The Goal</p>
                <p className="text-[20px] sm:text-[30px] leading-[40px] sm:leading-[50px] text-[#CCCCCC] font-normal pb-2 sm:pb-10">To redesign Hostrrr into a modern, social, and user-friendly platform by:</p>
                
                <ul className="list-disc pb-10 sm:pb-20 text-[20px] sm:text-[28px] leading-[40px] sm:leading-[40px] text-[#CCCCCC] font-normal ">
                    <li>Inconsistent font sizes and spacing</li>
                    <li>No design system or reusable component structure</li>
                    <li>Weak visual hierarchy</li>
                    <li>UX flows that were confusing and unstructured</li>                   
                    <li>Missing product features crucial for trust and community engagement</li>
                </ul>

                <img src={hostrrrimg2} className="mx-auto" alt="hostrrrimg2" />

                <h2 className="text-[50px] sm:text-[60px] md:text-[80px] font-bold pt-12 pb-5">UI Design Improvements</h2>

                <p className="text-[20px] sm:text-[30px] leading-[40px] sm:leading-[50px] text-[#CCCCCC] font-normal pb-2">The new interface feels warmer, cleaner, and social by design.</p>
                
                <ul className="list-disc pb-5 sm:pb-10 text-[20px] sm:text-[28px] leading-[40px] sm:leading-[40px] text-[#CCCCCC] font-normal ">
                    <li>Clear typography hierarchy with readable sizes</li>
                    <li>Thoughtful empty states, and error states.</li>
                    <li>Weak visual hierarchy</li>
                    <li>UX flows that were confusing and unstructured</li>                   
                    <li>Missing product features crucial for trust and community engagement</li>
                </ul>

                
                <h2 className="text-[50px] sm:text-[60px] md:text-[80px] font-bold pt-5 pb-5">New Features Introduced</h2>

                <p className="text-[20px] sm:text-[30px] leading-[40px] sm:leading-[50px] text-[#CCCCCC] font-normal pb-2">
                    To make Hostrrr feel more social, secure, and dynamic, I added several new features and flows:
                </p>
                
                <ul className="list-disc pb-2 text-[20px] sm:text-[28px] leading-[40px] sm:leading-[40px] text-[#CCCCCC] font-normal ">
                    <li className="text-white">Verification Flow:</li>
                </ul>

                <p className="text-[20px] sm:text-[30px] leading-[40px] sm:leading-[50px] text-[#CCCCCC] font-normal pb-20">
                    Before users can host or join an event, they must complete identity verification; small gatherings (≤5 guests) 
                    require ID + selfie, while larger ones require address verification in addition to ID verification. 
                    This increased trust and reduced safety concerns.
                </p>

                <img src={hostrrrimg3} className="mx-auto" alt="hostrrrimg3" />

                <ul className="list-disc pt-20 pb-2 text-[20px] sm:text-[28px] leading-[40px] sm:leading-[40px] text-[#CCCCCC] font-normal ">
                    <li className="text-white">In-App Wallet</li>
                </ul>

                <p className="text-[20px] sm:text-[30px] leading-[40px] sm:leading-[50px] text-[#CCCCCC] font-normal pb-20">
                    Enables secure transactions within the platform for event payments, ticketing, or food contributions.
                </p>

                <img src={hostrrrimg4} className="mx-auto" alt="hostrrrimg4" />

                <ul className="list-disc pt-20 pb-2 text-[20px] sm:text-[28px] leading-[40px] sm:leading-[40px] text-[#CCCCCC] font-normal ">
                    <li className="text-white">Messaging Feature:</li>
                </ul>

                <p className="text-[20px] sm:text-[30px] leading-[40px] sm:leading-[50px] text-[#CCCCCC] font-normal pb-20">
                A   llows direct host-to-guest communication and pre-event chat rooms for guests to connect, share ideas, or plan collaboratively
                </p>

                <img src={hostrrrimg5} className="mx-auto" alt="hostrrrimg5" />

                <ul className="list-disc pt-20 pb-2 text-[20px] sm:text-[28px] leading-[40px] sm:leading-[40px] text-[#CCCCCC] font-normal ">
                    <li className="text-white">Support & FAQ Page:</li>
                </ul>

                <p className="text-[20px] sm:text-[30px] leading-[40px] sm:leading-[50px] text-[#CCCCCC] font-normal pb-5">
                    Simplified support access and guided users through common issues without needing external help
                </p>

                <ul className="list-disc pt-2 pb-2 text-[20px] sm:text-[28px] leading-[40px] sm:leading-[40px] text-[#CCCCCC] font-normal ">
                    <li className="text-white">Settings & Account Page:</li>
                </ul>

                <p className="text-[20px] sm:text-[30px] leading-[40px] sm:leading-[50px] text-[#CCCCCC] font-normal pb-5">
                    Gave users control over profile info, privacy, and event preferences.
                </p>
                <ul className="list-disc pt-22 pb-2 text-[20px] sm:text-[28px] leading-[40px] sm:leading-[40px] text-[#CCCCCC] font-normal ">
                    <li className="text-white">Scan Barcode (Check-In):</li>
                </ul>

                <p className="text-[20px] sm:text-[30px] leading-[40px] sm:leading-[50px] text-[#CCCCCC] font-normal pb-5">
                    Guests scan a host-provided QR code upon arrival — confirming attendance and enhancing event safety.
                </p>

                <ul className="list-disc pt-22 pb-2 text-[20px] sm:text-[28px] leading-[40px] sm:leading-[40px] text-[#CCCCCC] font-normal ">
                    <li className="text-white">Share Event Feature:</li>
                </ul>

                <p className="text-[20px] sm:text-[30px] leading-[40px] sm:leading-[50px] text-[#CCCCCC] font-normal pb-5 sm:pb-10">
                    Both hosts and attendees can share events outside the app to invite friends or contacts to join.
                </p>

                <img src={hostrrrimg6} className="mx-auto" alt="hostrrrimg6" />

                <p className="text-[20px] sm:text-[30px] leading-[40px] sm:leading-[50px] text-[#CCCCCC] font-normal py-5">
                    A major UX improvement was refining how food is managed at events. Hosts can now choose one of four structured food setups:
                </p>

                <ul className="list-disc pb-2 text-[20px] sm:text-[28px] leading-[40px] sm:leading-[40px] text-[#CCCCCC] font-normal ">
                    <li>Host’s Treat: The host provides food for everyone.</li>
                    <li>Ordering Food: Guests order and pay for their own meals.</li>
                    <li>Potluck: Guests bring dishes to share (they can select categories like Starters, Main Meals, Desserts, or Drinks).</li>
                    <li>Assigned Dish: The host assigns specific food or recipes to guests.</li>
                </ul>
                <p className="text-[20px] sm:text-[30px] leading-[40px] sm:leading-[50px] text-[#CCCCCC] font-normal pt-2 pb-10">
                    Each option includes tailored microcopy that keeps things clear and social.
                </p>

                <img src={hostrrrimg7} className="mx-auto" alt="hostrrrimg6" />

                <h2 className="text-[50px] sm:text-[60px] md:text-[80px] font-bold pt-5">Results</h2>
                
                <ul className="list-disc pb-5 sm:pb-10 text-[20px] sm:text-[28px] leading-[40px] sm:leading-[40px] text-[#CCCCCC] font-normal ">
                    <li>Improved user flow and readability across the app</li>
                    <li>Introduced a sense of community and trust</li>
                    <li>Reduced user confusion by 60% (based on prototype testing feedback)</li>
                    <li>Built a scalable design system for future feature rollouts</li>                   
                    <li>Clearer, more engaging onboarding experience</li>
                </ul>

                <h2 className="text-[50px] sm:text-[60px] md:text-[80px] font-bold pt-5">I feel like a proud Dad!</h2>
                <p className="text-[20px] sm:text-[30px] leading-[40px] sm:leading-[50px] text-[#CCCCCC] font-normal pt-2 pb-10">
                    
                    Taking over Hostrrr was both a redesign and reimagination project. 
                    I didn’t just make it look better, I made it work better.
                    Rebuilding from messy foundations required strategic UX thinking and structure.
                    Introducing features like verification, QR check-in, and messaging helped transform Hostrrr 
                    into a more trusted, human, and connected event experience.
                    It reinforced my belief that great design isn’t just what users see, 
                    it’s what helps them feel safe, informed, and connected.
                </p>

            </div>

        </section>

        <section className="max-w-[1300px] w-full mx-auto pt-[50px] px-5 font-dmsans">
            <p className="text-[50px] sm:text-[60px] md:text-[80px] font-bold pb-5 sm:pb-10">Feed Your Eyes</p>
            <img src={hostrrrimg8} className="w-full mx-auto pb-5 sm:pb-10" alt="abt"/>
            <img src={hostrrrimg9} className="w-full mx-auto pb-5 sm:pb-10" alt="abt"/>
            <img src={hostrrrimg10} className="w-full mx-auto pb-5 sm:pb-10" alt="abt"/>

            <div className="bg-[#1a1a1a] p-16 rounded-box">
                <p className="pb-5">A link to the live version:</p>
                <a href="" className="text-[#ffa500] text-6xl underline" target="_blank">
                    Hostrrr   
                </a>  
            </div>
        </section>

        <WorksCarousel />

        <Newfooter/>

    </>
  )
}

export default Hostrrr;