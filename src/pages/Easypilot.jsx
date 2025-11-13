import easypilothero from "../assets/img/easypilot/Easypilot-hero.png"
import skillimg1 from "../assets/img/easypilot/easypilot-skill-img1.png"
import skillimg2 from "../assets/img/easypilot/easypilot-skill-img2.png"
import skillimg3 from "../assets/img/easypilot/easypilot-skill-img3.png"
import Newfooter from "../components/Newfooter"
import WorksCarousel from "../components/WorksCarousel"

const Easypilot = () => {
  return (
    <>
    <section className="max-w-[1300px] w-full mx-auto pt-24 sm:pt-[150px] px-5 font-dmsans">
        <div className="flex flex-col lg:flex-row justify-between pb-16 gap-x-10">
            <div className="text-[40px] sm:text-[70px] pb-5">
                <div>
                    <h1 className="pb-1 sm:pb-5">EasyPilot</h1>
                </div>
                <div className="text-[15px] sm:text-[20px] text-[#CCCCCC] font-normal">
                    <h1>Redefining Convenience and Trust <br /> Between Car Owners and Drivers</h1>
                </div>
            </div>

            <div className="max-w-[850px] w-full">
                <img src={easypilothero} className="w-full mx-auto pb-10" alt="easypilot"/>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between pb-16 gap-x-10">
            <div>

                <div className="pb-10 text-[15px] sm:text-[17px] leading-[10px] sm:leading-[30px] text-[#CCCCCC] font-normal">
                    <h1 className="text-white text-base font-semibold">Role</h1>
                    <p className="text-[#cccccc] font-normal">UI/UX Designer</p>
                </div>

                <div className="text-[15px] sm:text-[17px] leading-[10px] sm:leading-[30px] text-[#CCCCCC] font-normal">
                    <h1 className="text-white text-base font-semibold">Product Type</h1>
                    <p className="text-[#cccccc] font-normal">Mobile App, <br />Admin Dashboard, Ride <br/> Management System</p>
                </div>

            </div>

           

            <div className="max-w-[850px] text-[20px] sm:text-[30px] leading-[40px] sm:leading-[50px] text-[#CCCCCC] font-normal">
                <p className="">
                    EasyPilot is a mobile solution that connects car owners with verified, 
                    professional drivers who drive the owners’ personal vehicles. 
                    It was designed to simplify how car owners hire trusted drivers, 
                    whether for daily commutes, errands, or intercity travel, 
                    while creating flexible earning opportunities for drivers.
                </p>
            </div>

        </div>

        <div className="flex flex-col lg:flex-row justify-between pb-16 gap-x-10">
            <div>
                <div className="pb-10 text-[15px] sm:text-[20px] leading-[10px] sm:leading-[30px] text-[#CCCCCC] font-normal">
                    <h1 className="text-white text-base font-semibold">Client</h1>
                    <p className="text-[#cccccc] font-normal">Easy Pilot</p>
                </div>

                <div className="text-[15px] sm:text-[20px] leading-[10px] sm:leading-[30px] text-[#CCCCCC] font-normal">
                    <h1 className="text-white text-base font-semibold">Skills Applied</h1>
                    <div className="text-[#cccccc] font-normal">
                        <p >User Research & Persona</p>
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

                <p className="pb-10 text-[20px] sm:text-[30px] leading-[40px] sm:leading-[50px] text-[#CCCCCC] font-normal">
                    The goal was to craft a secure, transparent, 
                    and easy-to-use ecosystem where both drivers and car owners could 
                    interact with confidence, eliminating the traditional stress of
                     finding a reliable driver on short notice.
                </p>
                

                <img src={skillimg1} className="w-full mx-auto pb-10" alt="easypilot"/>

                <div>
                    <h1 className="text-[20px] sm:text-[36px] font-bold pb-3">
                        The Challenge: Modernizing How Drivers and Car 
                        Owners Connect
                    </h1>
                    <div className="pb-10 text-[20px] sm:text-[28px] leading-[40px] sm:leading-[40px] text-[#CCCCCC] font-normal">
                        <p className="pb-10">
                            Before EasyPilot, both car owners and professional drivers faced 
                            structural limitations in how driving services operated.
                            Existing ride-hailing platforms like <span className="font-bold">Uber, Bolt, and InDrive </span> 
                            catered primarily to drivers who already owned cars, leaving 
                            a gap for skilled drivers without vehicles. At the same time, 
                            many car owners wanted flexibility, they preferred using their 
                            own cars for trips but didn’t want to deal with the stress of 
                            driving themselves.
                        </p>
                        <p className="pb-10">
                            Traditional methods of hiring drivers through word-of-mouth or local 
                            agents often lacked reliability, safety verification, 
                            and accountability. Car owners had no structured way to 
                            confirm a driver’s identity or professionalism, 
                            while drivers had no stable system to find verified 
                            clients or build credibility.
                        </p>
                        <div>
                            <p className="pb-5">The challenge was to design a balanced ecosystem that:</p>
                            <ul className="list-disc">
                                <li>Connects verified car owners with trusted, licensed drivers effortlessly.</li>
                                <li>Provides a structured income system for drivers without vehicles.</li>
                                <li>Enables car owners to maximize their vehicle usage without compromising safety or convenience.</li>
                            </ul>
                        </div>
                        <p>
                            Ensures trust, transparency, and flexibility on both sides — 
                            whether for daily commutes, logistics, or personal trips.
                        </p>
                    </div>

                </div>

                <div>
                    <h1 className="text-[20px] sm:text-[36px] font-bold pb-3">
                        My Approach: Designing a Trust-First Mobility
                        Ecosystem
                    </h1>
                    <div className="pb-10 text-[20px] sm:text-[28px] leading-[40px] sm:leading-[40px] text-[#CCCCCC] font-normal">
                        <p className="pb-10">
                            My design strategy focused on clarity, trust, and fluidity across all user touchpoints from onboarding to trip completion.
                        </p>
                        <p className="text-[20px] sm:text-[28px] leading-[40px] sm:leading-[40px] font-bold pb-5 text-white">
                            1. Simplifying Onboarding for Two Unique Users
                        </p>
                        <ul className="list-disc">
                            <li>Designed intuitive onboarding flows for both drivers and car owners.</li>
                            <li>Integrated verification steps (ID, guarantor details, vehicle info) without overwhelming users.</li>
                            <li> Used progress indicators and guided microcopy to build user confidence.</li>
                        </ul>

                    </div>
                    
                    <img src={skillimg2} className="w-full mx-auto pb-10" alt="easypilot"/>
                </div>

                <div>
                    <h1 className="text-[20px] sm:text-[28px] leading-[40px] sm:leading-[40px] font-bold pb-5 text-white">2. Building a Secure Trip Experience</h1>
                    <ul className="list-disc pb-10 text-[20px] sm:text-[28px] leading-[40px] sm:leading-[40px] text-[#CCCCCC] font-normal">
                        <li>Created a trip flow powered by real-time GPS, PIN verification, and time tracking.</li>
                    </ul>
                    <p className="pb-5 text-[20px] sm:text-[28px] leading-[40px] sm:leading-[40px]">Introduced Security Prompts</p>
                    <ul className="list-disc pb-10 text-[20px] sm:text-[28px] leading-[40px] sm:leading-[40px] text-[#CCCCCC] font-normal">
                        <li>Car owners verify the driver’s identity before handing over keys.</li>
                        <li>Drivers confirm trip completion via a secure code shared by the owner</li>
                        <li>Added an SOS feature for emergencies — discreet yet accessible</li>
                    </ul>
                    <img src={skillimg3} className="w-full mx-auto pb-10" alt="easypilot"/>
                </div>

                <div>
                    <h1 className="text-[20px] sm:text-[28px] leading-[40px] sm:leading-[40px] font-bold pb-5 text-white">3. Designing Role-Based Dashboards</h1>
                    <div className="pb-10 text-[20px] sm:text-[28px] leading-[40px] sm:leading-[40px] text-[#CCCCCC] font-normal">
                        <p>Developed separate yet connected experiences:</p>
                        
                        <ul className="list-disc">
                            <li>Car Owners Dashboard: Manage vehicles, fund wallets, and view trip history</li>
                            <li>Drivers Dashboard: Access available trips, go online/offline, track earnings, withdraw earnings.</li>
                            <li>Focused on data hierarchy and minimal clutter, ensuring at-a-glance clarity.</li>
                        </ul>
                        <img src={easypilothero} className="w-full mx-auto pb-10" alt="easypilot"/>
                    </div>
                    
                </div>

                <div>
                    <h1 className="text-[20px] sm:text-[28px] leading-[40px] sm:leading-[40px] font-bold pb-5 text-white">4. Handling Edge Cases Gracefully</h1>
                    <div className="pb-10 text-[20px] sm:text-[28px] leading-[40px] sm:leading-[40px] text-[#CCCCCC] font-normal">
                        <ul className="list-disc pb-10">
                            <li>Crafted flows for situations like expired timers, delayed trip endings, and cancellation penalties.</li>
                            <li>Designed contextual pop-ups to educate users rather than overwhelm them.</li>
                            <li>Introduced wallet balance management and clear breakdown of charges to maintain transparency.</li>
                        </ul>

                        <h1 className="text-[20px] sm:text-[28px] leading-[40px] sm:leading-[40px] font-bold pb-5 text-white">5. Elevating Trust Through Microcopy & Visual Language</h1>
                        <ul className="list-disc pb-10">
                            <li>Wrote guided prompts and confirmations that sound human, not robotic.</li>
                            <li>Adopted a warm yet professional tone to build reassurance (“Your driver is on the way”, “Trip ended successfully”, “Verification pending”).</li>
                            <li>Visual consistency: neutral backgrounds, bold accent colors, and clear status indicators for trust and clarity.</li>
                        </ul>

                        <img src={easypilothero} className="w-full mx-auto pb-10" alt="easypilot"/>

                        <h1>Summary: Empowering Drivers, Simplifying Mobility</h1>
                        <p className="pb-10">
                            EasyPilot redefines how drivers and car owners connect, 
                            offering verified, reliable drivers to car owners 
                            who preferred using their own cars for trips 
                            but didn’t want to deal with the stress of driving 
                            themselves while also helping skilled drivers earn 
                            without owning a car. <br />
                            Through smart verification, and a smooth digital experience, 
                            the platform makes every ride secure, accountable, 
                            and effortless.
                        </p>

                    </div>
                </div>
            </div>

        </div>
    </section>

    <section className="max-w-[1300px] w-full mx-auto pt-[100px] px-5 font-dmsans">
        <div className="text-[40px] sm:text-[70px] pb-5">
            <h1 className="pb-1 sm:pb-5">Feed Your Eyes</h1>
        </div>

        <div className="pb-28">

            <div className="carousel rounded-box space-x-4 p-4">
                <div className="carousel-item">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                    alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                    alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                    alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                    alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                    alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                    alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                    alt="Burger" />
                </div>
            </div>

        </div>

    </section>

    <WorksCarousel />

    <Newfooter/>
    
    </>
  )
}

export default Easypilot