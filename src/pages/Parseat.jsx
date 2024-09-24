/* eslint-disable no-irregular-whitespace */
import parseathero from "../assets/img/parseathero-img.png"
import eventbright from "../assets/img/eventbright-img.png"
import sophie from "../assets/img/sophie-img.png"
import frank from "../assets/img/Frank-img.png"
import eventuserflow1 from "../assets/img/eventuserflow-img1.png"
import eventuserflow2 from "../assets/img/eventuserflow-img2.png"
import guestflow from "../assets/img/guestsflow.png"
import lowfidelity from "../assets/img/low-fidelity1.png"
import highfidelity from "../assets/img/high-fidelity.png"

import Button from "../components/Button"


const Parseat = () => {
  return (
    <>
        <section className="max-w-[1300px] w-full mx-auto pt-[150px] px-5 font-dmsans">
            <img src={parseathero} className="w-full mx-auto" alt="abt"/>
            <p className="hidden">Parseat Logo</p>
            <p className="hidden">Parseat is a tool targeted at solving seat management challenges for party/event organizers and individual party owners.</p>
            <p className="text-[24px] text-[#CCCCCC] pb-3 pt-14">Charles Emmanuel</p>
            <p className="text-[55px] font-bold leading-[78px] tracking-wider pb-6">Case Study For Parseat</p>
            <div className="flex md:flex-row flex-col gap-x-8 gap-y-8">
                <div className="max-w-[388px]">
                    <p className="uppercase text-[#cccccc97] text-[20px] font-medium leading-[26px] pb-2">To do</p>
                    <ul className="list-disc text-[18px] text-[#CCCCCC] font-normal leading-9 pl-5">
                        <li className="">
                            To design an aesthetically pleasing solution that targets solving seat management challenges
                            for party/event organizers and individual party owners.
                        </li>
                    </ul>
                    
                </div>

                <div className="max-w-[400px]">
                    <p className="uppercase text-[#cccccc97] text-[20px] font-medium leading-[26px] pb-2">Tools</p>
                    <ul className="list-disc text-[18px] text-[#CCCCCC] font-normal leading-9 pl-5">
                        <li>FigJam - User flow</li>
                        <li>Figma- Lo-Fi & Hi-Fi designs</li>
                        <li>Figma Mirror - Mobile Prototype & User Testing</li>
                    </ul>
                </div>
                
            </div>

        </section>

        <section className="max-w-[1300px] w-full mx-auto pt-[150px] px-5 font-dmsans">
            <p className="text-[80px] font-bold pb-10">The Problem</p>
            <p className="text-[32px] leading-[60px] text-[#CCCCCC] font-normal">
                “The couple or event planner wants to minimize wait time per guest at the entrance
                of the event hall during the check in process but guests have to look for their names
                on the seating chart typically stationed at the entrance to confirm their seat/table number”.
                Solution is typically approached by printing multiple seating charts which increases the wedding cost for couples. 
            </p>

        </section>

        <section className="max-w-[1300px] w-full mx-auto pt-[150px] px-5 font-dmsans">
            <p className="max-w-[840px] text-[80px] font-bold pb-10">Common Issues With Existing Solutions</p>

            <div className="flex flex-col md:flex-row items-center">
                <div>
                    <img src={eventbright} alt="event" /> 

                </div>

                <div className="max-w-[687px]">
                    <p className="text-[#F88827] text-[30px] font-bold leading-[60px] tracking-wider">Eventbrite</p>
                    <p className="text-[22px] font-normal text-[#CCCCCC] leading-10">
                        While Eventbrite remains a beautiful solution,
                        It however fell short of fully meeting my requirements as it lacked a crucial feature. Specifically, 
                        it lacked the capability to allow event organizers to conveniently upload their guest lists or assign table numbers. 
                        Recognizing the significance of these missing features, 
                        embarked on a journey to seek out a solution that would encompass them. 
                        This quest became an essential part of my project as I sought to bridge the gap and offer event organizers
                        a comprehensive tool that caters to their needs efficiently.
                    </p>

                </div>

            </div>

            <div className="flex flex-col md:flex-row items-center">
                <div>
                    <img src={eventbright} alt="event" /> 

                </div>

                <div className="max-w-[687px]">
                    <p className="text-[#F88827] text-[30px] font-bold leading-[60px] tracking-wider">Seatingchartmaker</p>
                    <p className="text-[22px] font-normal text-[#CCCCCC] leading-10">
                        I encountered another option that seemed promising at first. However, upon closer examination,
                        I discovered that it presented its own set of complexities. This particular solution was primarily 
                        designed for school seat management, which rendered it unsuitable for the unique requirements of the event industry.
                        The complexity of this solution made it difficult to understand and utilize effectively.
                        It lacked the intuitive user interface and tailored features necessary to cater specifically to the needs of event
                        organizers. Driven by the desire to provide a seamless and efficient event management experience for my users,
                        I committed myself to explore further and design a solution that is tailored precisely for their needs. 
                        By doing so, I aim to bridge the gap and create a user-friendly platform that simplifies guest 
                        list management and ensures a smooth and unforgettable event for all involved parties.
                    </p>

                </div>

            </div>

        </section>

        <section className="max-w-[1300px] w-full mx-auto pt-[150px] px-5 font-dmsans">
            <p className="text-[80px] font-bold pb-10">What are event organizers saying ?</p>

            <p className="text-[32px] leading-[60px] text-[#CCCCCC] font-normal">
                I had conversations with event organizers to gather insights on the solution that
                parseat would be offering and to gauge their thoughts and feedback on it.
            </p>

            <div className="flex flex-row gap-x-8 items-center p-5 bg-[#1A1A1A] rounded-lg my-10">
                <img src={sophie} alt="img" />

                <div className="">
                    <p className="uppercase text-[#F88827] text-[25px] font-bold leading-[32px] tracking-wider">Sophie</p>
                    <p className="max-w-[1000px] text-[#ccccccaf] text-[22px] font-light leading-[38px]">
                        As an event organizer, I should be able to access the platform and log in securely, 
                        easily upload my guest list, either in bulk or by adding guests individually, 
                        providing their names and any relevant contact information

                    </p>
                </div>
            </div>

            <div className="carousel w-full">

                <div id="slide1" className="carousel-item relative w-full">

                    <div className="flex flex-row gap-x-8 items-center p-5 bg-[#1A1A1A] rounded-lg my-10">
                        <img src={frank} className="rounded-md" alt="img" />

                        <div className="">
                            <p className="uppercase text-[#F88827] text-[25px] font-bold leading-[32px] tracking-wider">Frank</p>
                            <p className="max-w-[1000px] text-[#ccccccaf] text-[22px] font-light leading-[38px]">
                                The platform should provide a clear and intuitive interface that allows me 
                                to visualize the assigned seating plan, easily make changes, and view the overall status of 
                                the guest list and seating arrangements.

                            </p>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 

                <div id="slide2" className="carousel-item relative w-full">
                    <div className="flex flex-row gap-x-8 items-center p-5 bg-[#1A1A1A] rounded-lg my-10">
                        <img src={sophie} alt="img" />

                        <div className="">
                            <p className="uppercase text-[#F88827] text-[25px] font-bold leading-[32px] tracking-wider">Sophie</p>
                            <p className="max-w-[1000px] text-[#ccccccaf] text-[22px] font-light leading-[38px]">
                                As an event organizer, I should be able to access the platform and log in securely, 
                                easily upload my guest list, either in bulk or by adding guests individually, 
                                providing their names and any relevant contact information

                            </p>
                        </div>
                    </div>  
                    

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

        </section>

        <section className="max-w-[1300px] w-full mx-auto pt-[150px] px-5 font-dmsans">
            <p className="text-[80px] font-bold pb-10">My Process</p>

            <p className="text-[32px] leading-[60px] text-[#CCCCCC] font-normal pb-5">
                After conducting the research process as described above, I proceeded to delve into the development of the user flow.
                This involved designing a seamless and intuitive journey for event organizers within the parseat platform. 
                By carefully mapping out the steps and interactions required to achieve various tasks, I aimed to create
                a user-friendly experience that simplifies guest list management, relationship level assignment, and seat number allocation.
            </p>

            <p className="text-[32px] leading-[60px] text-[#CCCCCC] font-normal pb-5">
                Throughout this process, I considered the valuable feedback obtained from event organizers, 
                incorporating their insights to ensure that the user flow addresses their specific needs and pain points. 
                The objective was to provide a streamlined and efficient workflow that empowers event organizers to effortlessly
                upload their guest lists, assign relationship levels, and automatically allocate seat numbers based on these relationships.
            </p>

            <p className="text-[32px] leading-[60px] text-[#CCCCCC] font-normal pb-36">
                By dedicating attention to the user flow, I aimed to enhance the overall usability and effectiveness of parseat, 
                ultimately delivering a comprehensive event management solution that optimizes the planning experience for event organizers
                 in a way that aligns with their preferences and requirements.
            </p>

            <div className="text-center pb-20 mb-20">
                <p className="uppercase text-[60px] font-bold ">User flow for invited guests</p>
                <p className="text-[30px] pt-2"> ( To know their seat number ) </p>
                <img src={guestflow} className="pt-20 w-full max-w-[1100px] mx-auto"/>
                
            </div>

            <div className="text-center">
                <p className="uppercase text-[60px] font-bold pb-14"> User flow for Couples/Event Organizers</p>
                
                <img src={eventuserflow1} className="w-full max-w-[1190px] mx-auto mb-24" />
                <img src={eventuserflow2} className="w-full max-w-[1190px] mx-auto" />
            </div>

        </section>

        <section className="max-w-[1300px] w-full mx-auto pt-[150px] px-5 font-dmsans">
            <p className="text-[80px] font-semibold pb-5">Proposed Design Solutions</p>

            <div className="text-[30px] max-w-[1000px] leading-[60px] text-[#CCCCCC] font-normal pb-14">I translated my research into designs to provide a clearer representation of the propsed solution</div>

            <div className="mb-20">
                <p className="text-[40px] font-normal pb-10">Low fidelity designs</p>
                <img src={lowfidelity} alt="low fidelity"/>
            </div>

            <div>
                <p className="text-[40px] font-normal pb-10">High fidelity designs</p>
                <img src={highfidelity} alt="high fidelity"/>
            </div>

            <div className="text-4xl pt-20 text-[#CCCCCC]">
                Link to the live version: <button className="bg-[#8238ea55] rounded p-2 text-xl">Coming soon</button>
            </div>
            
        </section>

        <section className="text-center mx-auto py-28"> 
            <div className="flex flex-col">
                <p className="text-[60px] pb-5">Thank You For Viewing</p>
                <p className="text-5xl pb-5 text-[#CCCCCC]">Charles Emmanuel</p>
                <p className="text-2xl pb-10 text-[#CCCCCC]">Product Designer</p>

                <Button text="View my other works" classname="mx-auto max-w-[300px] bg-[#8338EA] hover:bg-[#8338EA]/90 md:px-[40px] md:py-[18px] text-[14px] sm:text-[16px] md:text-[20px] px-[25px] py-[15px] tracking-wider"/>

            </div>
            

        </section>

        
    </>
  )
} 

export default Parseat