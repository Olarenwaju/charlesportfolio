/* eslint-disable react/no-unescaped-entities */
import custommailershero from "../assets/img/custommailersmainimg.png"
import custommailerprocess from "../assets/img/custommailersprocess-img.png"
import custommailersflow from "../assets/img/custommailersflow-img.png"
import custommailersdesign1 from "../assets/img/custommailersdesign-img1.png"
import custommailersdesign2 from "../assets/img/custommailersdesign-img2.png"
import designsolutions from "../assets/img/designsolutions-img.png"
import instructionalvideo from "../assets/img/instructionalvideo.png"
import customizationpage from "../assets/img/customizationpage-img.png"
import distinctivedesign from "../assets/img/distinctivedesign-img.png"
import dashboard from "../assets/img/dashboard-img.png"
import cart from "../assets/img/cart-img.png"
import ordertracking from "../assets/img/order-img.png"
import signin from "../assets/img/signin.png"
import Button from "../components/Button"

//import SemiCircles from "../components/SemiCircles";
import Backbutton from "../components/Backbutton";
import greenblur from "../assets/img/greenblur.png";



const Custommailers = () => {
  return (
    <>
        <section className="relative max-w-[1300px] w-full mx-auto pt-[150px] px-5 font-dmsans">
            <img className="absolute -top-2/4 -left-1/4" src={greenblur} alt="img" />

            <div className="fixed z-50">
                <Backbutton/>
            </div>

            <p className="text-[30px] sm:text-[40px] md:text-[55px] pt-20 font-semibold pb-16">Custom Mailers Depot: An e-commerce platform for ordering fully customizable poly mailers</p>

            <p className="text-[20px] sm:text-[30px] leading-[40px] sm:leading-[50px] text-[#CCCCCC] font-normal">
                This case study explores a design sprint focused on crafting a e-commerce solution. 
                I collaborated remotely over 4-5 weeks with stakeholders to envision and design a user-friendly experience.
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

            <img src={custommailershero} className="w-full mx-auto pb-10" alt="abt"/>

        </section>

        <section className="max-w-[1300px] w-full mx-auto pt-24 sm:pt-[150px] px-5 font-dmsans">
            <div className="flex flex-col lg:flex-row justify-between pb-16 gap-x-10">
                <div className="text-[40px] sm:text-5xl leading-[45px] sm:leading-[55px] font-bold uppercase pb-5">
                    <h1 className="pb-1 sm:pb-5">The</h1>
                    <h1 className="text-[#999999]">Brief</h1>
                </div>

                <div className="max-w-[850px] text-[20px] sm:text-[30px] leading-[40px] sm:leading-[50px] text-[#CCCCCC] font-normal">
                    Custom Mailers Depot is an innovative e-commerce solution that allows users to order fully customizable poly 
                    mailers tailored to their specific needs. Users can either upload their own design images to personalize their 
                    mailers or use the platform’s embedded AI design tool to generate unique, professional-quality designs effortlessly. 
                    This allows businesses and individuals to create branded or custom packaging without needing advanced design skills, 
                    offering flexibility and creativity in how their mailers look thereby making it easy and accessible for all users.
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between pb-16 gap-x-10">
                <div className="text-[40px] sm:text-5xl leading-[45px] sm:leading-[55px] font-bold uppercase pb-5">
                    <h1 className="pb-1 sm:pb-5">Key</h1>
                    <h1 className="text-[#999999]">Requirements</h1>
                </div>

                <div className="max-w-[850px] text-[20px] sm:text-[30px] leading-[40px] sm:leading-[50px] text-[#CCCCCC] font-normal">
                    <p className="">
                        The solution is designed to provide users with full control over their poly mailer customization, 
                        addressing various aspects of design and packaging. To achieve this, the following key features were implemented:
                    </p>

                    <div>

                        <p className="text-white text-[30px] sm:text-[35px] font-bold pt-14 pb-10">Landing Page</p>
                        <ul className="list-disc">
                            <li><span className="text-white">Hero Section:</span> which would provide users with a brief, clear and concise overview of what the platform offers</li>
                            <li>
                                <span className="text-white">My Product Section: </span>should showcase the various types of mailers available. Each option should be clickable, 
                                allowing users to explore more about each type of mailer and customization possibilities
                            </li>
                            <li> <span className="text-white">How to Order:</span> An instructional video and step-by-step guide explaining how to select, customize, and order through the platform</li>
                            <li><span className="text-white">Review Section:</span>Testimonials from satisfied clients, featuring star ratings and customer quotes about the ease of use and quality.</li>
                            <li><span className="text-white">FAQ Section: </span>should provide answers to common questions about shipping, customization, and policies.</li>
                        </ul>

                    </div>
                   

                    <div>
                        <p className="text-white text-[30px] sm:text-[35px] font-bold pt-14 pb-10">Customization Page</p>
                        <ul>
                            <li>Users should be able to upload their own designs or use an AI tool for customization, offering creative freedom to match their branding. </li>
                            <li>Users should be  choose from various mailer styles for different uses, select material and thickness options based on durability and aesthetics.</li>
                            <li>Users should be able to customize edge types for enhanced appearance and functionality. </li>
                            <li>Users should also be able to order different quantities across multiple sizes in one order.</li>
                        </ul>

                    </div>

                    <div>
                        <p className="text-white text-[30px] sm:text-[35px] font-bold pt-14 pb-10">Other Features</p>
                        <ul>
                            <li><span className="text-white">Dashboard:</span> users should be able to access a user-friendly dashboard to easily manage their order, manage their profiles and contact support if need be, all in one place.</li>
                            <li><span className="text-white">Add to Cart: </span> Users should be able to effortlessly add their customized poly mailers to cart with a single click, making the ordering process quick and convenient..</li>
                            <li><span className="text-white">Delivery Speed:</span> Users should be able to choose their preferred delivery speed to ensure their items arrive when they need them. </li>
                            <li><span className="text-white">Order Tracking: </span> Real-time order tracking, allowing users to monitor the production status of their item.</li>
                        </ul>

                    </div>
        
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between pb-16 gap-x-10">
                <div className="text-[40px] sm:text-5xl leading-[45px] sm:leading-[55px] font-bold uppercase pb-5">
                    <h1 className="pb-1 sm:pb-5">My Research</h1>
                    <h1 className="text-[#999999]">Process</h1>
                </div>

                <div className="max-w-[850px] text-[20px] sm:text-[30px] leading-[40px] sm:leading-[50px] text-[#CCCCCC] font-normal">
                    <p className="pb-10">
                        I conducted thorough research and competitive analysis to identify strengths and weaknesses among competitor 
                        products, revealing opportunities for improvement and differentiation. Here is what i discovered:
                    </p>

                    <img src={custommailerprocess} className="w-full mx-auto pb-10" alt="abt"/>
                    
                </div>

            </div>

            <div className="flex flex-col lg:flex-row justify-between pb-16 gap-x-10">
                <div className="text-[40px] sm:text-5xl leading-[45px] sm:leading-[55px] font-bold uppercase pb-5">
                    <h1 className="pb-1 sm:pb-5" >User</h1>
                    <h1 className="text-[#999999]">Flow</h1>
                </div>

                <div className="max-w-[850px] text-[20px] sm:text-[30px] leading-[40px] sm:leading-[50px] text-[#CCCCCC] font-normal">
                    <p className="pb-10">
                        After completing my research, I proceeded to develop the user flow focusing on creating a seamless and 
                        intuitive experience. I carefully mapped out each step to ensure seamless order flow, from product 
                        selection, order customization and check out. 
                    </p>

                    <img src={custommailersflow} className="w-full mx-auto pb-10" alt="abt"/>
                    
                </div>
                
            </div>

            <div className="flex flex-col lg:flex-row justify-between pb-16 gap-x-10">
                <div className="text-[40px] sm:text-5xl leading-[45px] sm:leading-[55px] font-bold uppercase pb-5">
                    <h1 className="pb-1 sm:pb-5">Design</h1>
                    <h1 className="text-[#999999]">System</h1>
                </div>

                <div className="max-w-[850px] text-[20px] sm:text-[30px] leading-[40px] sm:leading-[50px] text-[#CCCCCC] font-normal">
                    <p className="pb-10">
                        The next step was to develop a design system, including a style guide and essential components, 
                        to effectively communicate the brand’s identity and give the product a vibrant and exciting feel.
                    </p>

                    <img src={custommailersdesign1} className="w-full mx-auto pb-10" alt="abt"/>

                    <img src={custommailersdesign2} className="w-full mx-auto pb-10" alt="abt"/>
                    
                </div>
                
            </div>

            <div className="flex flex-col lg:flex-row justify-between pb-16 gap-x-10">
                <div className="text-[40px] sm:text-5xl leading-[45px] sm:leading-[55px] font-bold uppercase pb-5">
                    <h1 className="pb-1 sm:pb-5">Design</h1>
                    <h1 className="text-[#999999]">Solutions</h1>
                </div>

                <div className="max-w-[850px] text-[20px] sm:text-[30px] leading-[40px] sm:leading-[50px] text-[#CCCCCC] font-normal">
                    <p className="pb-10">
                        I proceeded to design the high-fidelity screens
                    </p>

                    <img src={designsolutions} className="w-full mx-auto pb-10" alt="abt"/>

                    
                </div>
                
            </div>

            <div className="flex flex-col lg:flex-row justify-between pb-16 gap-x-10">
                <div className="text-[40px] sm:text-5xl leading-[45px] sm:leading-[55px] font-bold uppercase pb-5">
                    <h1 className="pb-1 sm:pb-5">Instructional</h1>
                    <h1 className="text-[#999999]">Video</h1>
                </div>

                <div className="max-w-[850px] text-[20px] sm:text-[30px] leading-[40px] sm:leading-[50px] text-[#CCCCCC] font-normal">
                    <img src={instructionalvideo} className="w-full mx-auto pb-10" alt="abt"/>

                    <img src={customizationpage} className="w-full mx-auto pb-10" alt="abt"/>

                    <img src={distinctivedesign} className="w-full mx-auto pb-10" alt="abt"/>

                </div>
                
            </div>

            <div className="flex flex-col lg:flex-row justify-between pb-16 gap-x-10">
                <div className="text-[40px] sm:text-5xl leading-[45px] sm:leading-[55px] font-bold uppercase pb-5">
                    <h1 className="pb-1 sm:pb-5">Feed your</h1>
                    <h1 className="text-[#999999]">Eyes</h1>
                </div>

                <div className="max-w-[850px] text-[20px] sm:text-[30px] leading-[40px] sm:leading-[50px] text-[#CCCCCC] font-normal">
                    <img src={dashboard} className="w-full mx-auto pb-10" alt="abt"/>

                    <img src={cart} className="w-full mx-auto pb-10" alt="abt"/>

                    <img src={ordertracking} className="w-full mx-auto pb-10" alt="abt"/>

                    <img src={signin} className="w-full mx-auto pb-10" alt="abt"/>

                </div>
                
            </div>

        </section>

        <section className="max-w-[1250px] mx-auto pb-20 pt-28 px-5">
            <div className="bg-[#1A1A1A] p-10 rounded flex flex-col md:flex-row md:justify-between justify-center items-center gap-4">
                <div className="pr-20">
                <p className="text-2xl text-white font-normal pb-5">A link to the live version:</p>
                <a href="https://www.custommailersdepot.com/" className="text-3xl md:text-6xl text-[#FFA500] font-semibold" target="_blank">Custom Mailers Depot</a>
                </div>
            </div>

            <div className="flex flex-col text-center mx-auto py-14">
                <p className="text-[40px] md:text-[60px] pb-2 sm:pb-5">Thank You For Viewing</p>
                <p className="text-[35px] md:text-5xl pb-5 text-[#CCCCCC]">Charles Emmanuel</p>
                <p className="text-2xl pb-10 text-[#CCCCCC]">Product Designer</p>

                <Button text="View my other works" classname="mx-auto max-w-[300px] bg-[#8338EA] hover:bg-[#8338EA]/90 md:px-[40px] md:py-[18px] text-[14px] sm:text-[16px] md:text-[20px] px-[25px] py-[15px] tracking-wider"/>

            </div>

        </section>
    </>
  )
}

export default Custommailers