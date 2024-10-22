/* eslint-disable react/no-unescaped-entities */
import plugtentheroimg from "../assets/img/plugtent-hero.png"
import researchemoji1 from "../assets/img/researchemoji1.png"
import designsystem1 from "../assets/img/designsystem-1.png";
import designsystem2 from "../assets/img/designsystem-2.png";
import designsystem3 from "../assets/img/designsystem-3.png";
import designsystem4 from "../assets/img/designsystem-4.png";
import designsystem5 from "../assets/img/designsystem-5.png";
import designsystem6 from "../assets/img/designsystem-6.png";
import starhomesguest from "../assets/img/starhomesguest.png";
import starhomesadmin from "../assets/img/starhomesadmin.png";
import solutionsgif1 from "../assets/img/solutionsgif1.png";
import solutionsgif2 from "../assets/img/solutionsgif2.png";
import solutionsgif3 from "../assets/img/solutionsgif3.png";
import feed1 from "../assets/img/feed1.png";
import feed2 from "../assets/img/feed2.png";
import feed3 from "../assets/img/feed3.png";
import feed4 from "../assets/img/feed4.png";
import feed5 from "../assets/img/feed5.png";
import feed6 from "../assets/img/feed6.png";
import feed7 from "../assets/img/feed7.png";
import feed8 from "../assets/img/feed8.png";
import feed9 from "../assets/img/feed9.png";
import feed10 from "../assets/img/feed10.png";
import feed11 from "../assets/img/feed11.png";
import feed12 from "../assets/img/feed12.png";
import starhomeslogo from "../assets/img/starhomeslogo.png";
import Button from "../components/Button";



const Starhomes = () => {
  return (
    <>
        <section className="max-w-[1300px] w-full mx-auto pt-[150px] px-5 font-dmsans">
            <p className="text-2xl text-[#cccccc] pb-10">Star Homes - Case Study</p>
            <p className="text-6xl font-semibold pb-20">A Luxurious and Affordable Solution for Short-Term Accommodation Needs.</p>

            <img src={plugtentheroimg } className="w-full mx-auto pb-10" alt="abt"/>

            <div className="flex md:flex-row flex-col gap-x-8 gap-y-8">
                <div className="max-w-[388px]">
                    <p className="uppercase text-[#cccccc97] text-[20px] font-medium leading-[26px] pb-2">Role</p>
                    <ul className="list-disc text-[17px] text-[#CCCCCC] font-normal leading-9 pl-5">
                        <li className="">
                            My primary responsibility was to review and enhance the
                            low-fidelity screens initially crafted by another designer 
                            and transform it into  user-centric high-fidelity interfaces.
                        </li>
                    </ul>
                        
                </div>

                <div className="max-w-[500px] pr-8">
                    <p className="uppercase text-[#cccccc97] text-[20px] font-medium leading-[26px] pb-2">Tools</p>
                    <ul className="text-[17px] text-[#CCCCCC] font-normal leading-9">
                        <li>FigJam - User flow</li>
                        <li>Figma- Lo-Fi & Hi-Fi designs</li>
                        <li>Figma Mirror - Mobile Prototype & User Testing</li>
                    </ul>
                </div>

                <div className="max-w-[400px]">
                    <p className="uppercase text-[#cccccc97] text-[20px] font-medium leading-[26px] pb-2">Platforms That Aided My Research</p>
                    <ul className="text-[17px] text-[#CCCCCC] font-normal leading-9">
                        <li>Airbnb</li>
                        <li>Bookings.com</li>
                        <li>Nigeria Property Center</li>
                    </ul>
                </div>
                    
            </div>

        </section>

        <section className="max-w-[1300px] w-full mx-auto pt-[150px] px-5 font-dmsans">
            <div className="pb-28">
                <p className="text-[80px] font-bold pb-10">The Brief</p>
                <p className="text-[32px] leading-[60px] text-[#CCCCCC] font-normal">
                    Star Homes is a marketplace-model platform for luxurious and affordable short-term apartment rentals in Lagos.
                    The  platform allows the admin (Star Homes) to list their apartments for shortlet, while guests can browse through 
                    available listings, book their stay, and enjoy a comfortable and hassle-free experience.
                </p>

            </div>

            <div>

                <p className="text-[80px] font-bold pb-10">The Problem</p>
                <p className="text-[32px] leading-[60px] text-[#CCCCCC] font-normal">
                    The problem addressed by this solution lies in the business's reliance on third-party platforms, 
                    such as Airbnb, Bookings.com etc for lead generation. Despite the availability of these platforms, 
                    businesses express a strong preference for direct lead generation. 
                    This preference stems from the need to maintain control and stability in operations, 
                    as relying on third-party platforms introduces uncertainties and limitations. 
                    Therefore, designing a solution that enables direct lead generation for businesses, 
                    like Star Homes, becomes essential to address this challenge and ensure sustained control and stability in operations.
                </p>
            </div> 

        </section>

        <section className="max-w-[1300px] w-full mx-auto pt-[150px] px-5 font-dmsans pb-[100px]">
            <div>
                <p className="text-[75px] font-bold leading-[78px] tracking-wider pb-6">Goals</p>
                <p className="text-[32px] text-[#CCCCCC] pb-10">The Key expectations from Star Homes</p>

                <div className="flex md:flex-row flex-col gap-x-10 gap-y-8 mb-14">
                    <div className="max-w-[550px] mr-20">
                        <p className=" text-white text-[40px] font-bold leading-[26px] pb-10">As a Guest</p>
                        <ul className="list-disc text-[30px] text-[#CCCCCC] font-normal leading-9 pl-20">
                            <li className="leading-[50px] pb-5">Land on landing page</li>
                            <li className="leading-[50px] pb-5">Search/select preferred apartment</li>
                            <li className="leading-[50px] pb-5">Filter results based on check in date/duration of stay.</li>
                                                   
                        </ul>
                        
                    </div>

                    <div className="max-w-[550px]">
                        <p className=" text-white text-[40px] font-bold leading-[26px] pb-10">&nbsp;</p>
                        <ul className="list-disc text-[30px] text-[#CCCCCC] font-normal leading-9 pl-5">
                            <li className="leading-[50px] pb-5">If apartment not availble, view similar listings</li>
                            <li className="leading-[50px] pb-5">Place Booking & Download receipt</li> 
                        </ul>
                    </div>
                    
                </div>

                <div className="flex md:flex-row flex-col gap-x-8 gap-y-8 pb-28">
                    <div className="max-w-[550px] mr-20">
                        <p className=" text-white text-[40px] font-bold leading-[26px] pb-10">As an admin:</p>
                        <ul className="list-disc text-[30px] text-[#CCCCCC] font-normal leading-9 pl-20">
                            <li className="leading-[50px] pb-5">Dashboard</li>
                            <li className="leading-[50px] pb-5">List/delete a property</li>
                            <li className="leading-[50px] pb-5">Update available nights from calendar</li>
                            
                        </ul>
                        
                    </div>

                    <div className="max-w-[550px]">
                        <p className=" text-white text-[40px] font-bold leading-[26px] pb-10">&nbsp;</p>
                        <ul className="list-disc text-[30px] text-[#CCCCCC] font-normal leading-9 pl-5">

                            <li className="leading-[50px] pb-5">See all bookings: Upcoming check- ins, currently hosting & checking out.</li>
                            <li className="leading-[50px] pb-5">Account Settings: Payment details, invite/remove Team members, Update passwords.</li>
                            
                        </ul>
                    </div>
                    
                </div>

                <h2 className="text-[75px] font-bold leading-[78px] tracking-wider pb-6">Research</h2>

                <p className="text-[32px] text-[#CCCCCC] pb-10">
                    I conducted interviews and engaged with several apartment owners actively involved in the short-term rental business to gather 
                    insights into their preferences regarding direct lead generation instead of depending on third party platforms for leads.  
                    Based on my analysis and findings, the following conclusions were drawn.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">

                    <div className="relative bg-[#2A2A2A] rounded-[10px] px-9 pt-20 pb-10 ">
                        <div className="absolute -top-[70px] left-[115px]">
                            <img className="max-w-[170px] h-auto" src={researchemoji1} alt="Smiley"/>
                        </div>
                        
                        <h2 className="text-3xl font-semibold pb-5 text-center"> 80% Loved It!</h2>
                        <p className="text-[#c4c4c4] leading-8 text-[22px] text-left">
                            Most respondents loved the idea, viewing it as an opportunity to enhance control, reduce reliance on third-party platforms, 
                            and increase profitability.
                        </p>

                    </div>

                    <div className="relative bg-[#2A2A2A] rounded-[10px] px-9 pt-20 pb-10 ">
                        <div className="absolute -top-[70px] left-[115px]">
                            <img className="max-w-[170px] h-auto" src={researchemoji1} alt="Smiley"/>
                        </div>
                        
                        <h2 className="text-3xl font-semibold pb-5 text-center"> 15% Were Neutral</h2>
                        <p className="text-[#c4c4c4] leading-8 text-[22px] text-left">
                            This set of respondents remained neutral towards the idea, 
                            neither expressing opposition nor enthusiasm like the majority.
                        </p>

                    </div>

                    <div className="relative bg-[#2A2A2A] rounded-[10px] px-9 pt-20 pb-10 ">
                        <div className="absolute -top-[70px] left-[115px]">
                            <img className="max-w-[170px] h-auto" src={researchemoji1} alt="Smiley"/>
                        </div>
                        
                        <h2 className="text-3xl font-semibold pb-5 text-center">5% Didn’t Like the idea</h2>
                        <p className="text-[#c4c4c4] leading-8 text-[22px] text-left">
                            These set of respondents disliked the concept due to concerns about increased marketing costs.
                        </p>

                    </div>

                </div>

            </div>

        </section>

        <section className="max-w-[1300px] w-full mx-auto pt-[150px] px-5 font-dmsans">
            <p className="text-[80px] font-bold pb-10">Design System</p>
            <p className="text-[32px] leading-[60px] text-[#CCCCCC] font-normal pb-20">
                The next plan of action was to create a design system which includes the style guide and necessary 
                components needed to help communicate the brand’s identity and also give the product an exciting feel
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
                <img className="w-full h-auto object-cover" src={designsystem1} alt="" />
                <img className="w-full h-auto object-cover" src={designsystem2} alt="" />
                <img className="w-full h-auto object-cover" src={designsystem3} alt="" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <img  className="w-full h-auto object-cover" src={designsystem4} alt="" />
                <img  className="w-full h-auto object-cover" src={designsystem5} alt="" />
                <img  className="w-full h-auto object-cover" src={designsystem6} alt="" />
            </div>

        </section>

        <section className="max-w-[1300px] w-full mx-auto pt-[150px] px-5 font-dmsans">

            <h2 className="text-[75px] font-bold leading-[78px] tracking-wider pb-6">User Flows</h2>

            <p className="text-[32px] text-[#CCCCCC] pb-20">
                As much as user information is needed for Admin decisions, it is important to keep the process as short and effective as possible. 
                That's why I've prioritized creating a seamless user experience that eliminates the need for guests to create an account before
                booking an apartment. By keeping the process short and efficient, we ensure that guests can easily navigate through the platform
                and complete their bookings hassle-free. This approach not only enhances user satisfaction but also encourages more bookings 
                and contributes to the overall success of our platform
            </p>

            <div className="w-full md:max-w-[1200px] mx-auto pb-16">
                <img src={starhomesguest}  alt="guest"/>
            </div>

            <div className="w-full md:max-w-[1200px] mx-auto pb-16">
                <img src={starhomesadmin}  alt="admin"/>
            </div>


        </section>

        <section className="max-w-[1300px] w-full mx-auto pt-[150px] px-5 font-dmsans">
            <h2 className="text-[80px] font-bold pb-10">Design Solutions</h2>

            <div className="flex flex-col md:flex-row items-center pb-28">
                <div className="w-full md:w-1/2">
                    <p className="text-3xl text-[#8338EA] leading-10 font-bold pb-5 tracking-wider">Seamless Booking Flow</p>
                    <p className="leading-10 text-[21px] text-[#cccccc] font-normal">
                        Understanding that users' primary objective on the platform is to effortlessly book a shortlet apartment, 
                        I prioritized streamlining this process. Upon selecting their desired apartment type, users can swiftly 
                        proceed by choosing a pricing plan and specifying their duration of stay. 
                        This streamlined approach ensures a seamless booking experience, 
                        requiring only minimal input such as their names and contact details.
                    </p>

                </div>

                <div className="w-full md:w-1/2">
                    <img src={solutionsgif1} alt="lof1" />
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center pb-20    ">
                <div className="w-full md:w-1/2">
                    <img src={solutionsgif2} alt="lof1" />
                </div>

                <div className="w-full md:w-1/2">
                    <p className="text-3xl text-[#8338EA] leading-10 font-bold pb-5 tracking-wider">Users Should Be Treated As Babies. 👶</p>
                    <p className="leading-10 text-[21px] text-[#cccccc] font-normal">
                        I approach user experience with the mindset of nurturing, much like caring for a baby. 
                        I anticipate that users may face confusion or challenges despite the streamlined booking process.
                        which is why I asked myself the question; what happens if a user gets confused and still could not 
                        successfully book an apartment even after making the process seamless? In response, 
                        I designed a “contact us” CTA on the bookings page for such guests. Furthermore, 
                        I extended support by designing a dedicated Help Center/Contact Us page on the website, 
                        ensuring accessibility for users who may overlook the initial CTA.
                    </p>

                </div>

            </div>

            <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2">
                    <p className="text-3xl text-[#8338EA] leading-10 font-bold pb-5 tracking-wider">Unique Admin Dashboard</p>
                    <p className="leading-10 text-[21px] text-[#cccccc] font-normal">
                        I took my time to efficiently design the admin dashboard tailored to the operational needs of the busines. 
                        The dashboard offers a comprehensive overview of guest reservations, including upcoming check-ins, current occupants, 
                        and scheduled check-outs. Additionally, I integrated a user-friendly property listing page, 
                        empowering admins to effortlessly list available apartments for booking. 
                        Furthermore, the dashboard features a dynamic calendar page, providing admins with a 
                        clear view of their monthly schedule for each apartment and the flexibility to adjust 
                        nightly prices for specific dates.
                    </p>

                </div>

                <div className="w-full md:w-1/2">
                    <img src={solutionsgif3} alt="lof1" />
                </div>
            </div>

        </section>

        <section className="max-w-[1300px] w-full mx-auto pt-[150px] px-5 font-dmsans">
            <h2 className="text-[75px] font-bold leading-[78px] tracking-wider pb-6">Feed Your Eyes</h2>

            <p className="text-[32px] text-[#CCCCCC] pb-20">
                Here are some high-fidelity screens I've designed as part of the design process. 
                These screens represent the final stage of my design iteration, incorporating detailed visual elements, 
                interactive features, and user interface components to provide a more accurate depiction of the final product.
            </p>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-10">
                <div>
                    <img className="w-full h-auto object-cover pb-7" src={feed1} alt="" />   
                    <p className="text-3xl font-bold pb-5">Landing Page</p>

                </div>
                
                <div>
                    <img className="w-full h-auto object-cover pb-7" src={feed2} alt="" />   
                    <p className="text-3xl  font-bold pb-5">Pricing Plan</p>

                </div>

                <div>
                    <img className="w-full h-auto object-cover pb-7" src={feed3} alt="" />
                    <p className="text-3xl font-bold pb-5">Booking Page</p>   

                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-10">
                <div>
                    <img className="w-full h-auto object-cover pb-7" src={feed4} alt="" />   
                    <p className="text-3xl font-bold pb-5">Unavailable Apartment</p>

                </div>
                
                <div>
                    <img className="w-full h-auto object-cover pb-7" src={feed5} alt="" />   
                    <p className="text-3xl  font-bold pb-5">Help Centre</p>

                </div>

                <div>
                    <img className="w-full h-auto object-cover pb-7" src={feed6} alt="" />
                    <p className="text-3xl font-bold pb-5">Apartment Booked</p>   

                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-10">
                <div>
                    <img className="w-full h-auto object-cover pb-7" src={feed7} alt="" />   
                    <p className="text-3xl font-bold pb-5">Admin Sign In</p>

                </div>
                
                <div>
                    <img className="w-full h-auto object-cover pb-7" src={feed8} alt="" />   
                    <p className="text-3xl  font-bold pb-5">Admin dashboard</p>

                </div>

                <div>
                    <img className="w-full h-auto object-cover pb-7" src={feed9} alt="" />
                    <p className="text-3xl font-bold pb-5">Property Listing</p>   

                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-10">
                <div>
                    <img className="w-full h-auto object-cover pb-7" src={feed10} alt="" />   
                    <p className="text-3xl font-bold pb-5">Listing Amenities</p>

                </div>
                
                <div>
                    <img className="w-full h-auto object-cover pb-7" src={feed11} alt="" />   
                    <p className="text-3xl  font-bold pb-5">Listing Images</p>

                </div>

                <div>
                    <img className="w-full h-auto object-cover pb-7" src={feed12} alt="" />
                    <p className="text-3xl font-bold pb-5">Calendar</p>   

                </div>

            </div>

        </section>

        <section className="max-w-[1250px] mx-auto pb-20 pt-28">
            <div className="bg-[#1A1A1A] p-10 rounded flex flex-col md:flex-row md:justify-between justify-center items-center gap-4">
                <div className="pr-20">
                    <p className="text-2xl text-white font-normal pb-5">A link to the live version:</p>
                    <a href="https://www.plugtent.com/" className="text-6xl text-[#8338EA] font-semibold tracking-wide" target="_blank">Starhomes Website</a>
                </div>

                

                <div className="pr-10">
                    <img src={starhomeslogo} alt="starhomes-logo" />
                </div>

            </div>

            <div className="flex flex-col text-center mx-auto py-14">
                <p className="text-[60px] pb-5">Thank You For Viewing</p>
                <p className="text-5xl pb-5 text-[#CCCCCC]">Charles Emmanuel</p>
                <p className="text-2xl pb-10 text-[#CCCCCC]">Product Designer</p>

                <Button text="View my other works" classname="mx-auto max-w-[300px] bg-[#8338EA] hover:bg-[#8338EA]/90 md:px-[40px] md:py-[18px] text-[14px] sm:text-[16px] md:text-[20px] px-[25px] py-[15px] tracking-wider"/>

            </div>

        </section>


    </>
  )
}

export default Starhomes