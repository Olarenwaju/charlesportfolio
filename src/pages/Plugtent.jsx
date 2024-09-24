/* eslint-disable react/no-unescaped-entities */
import plugtentheroimg from "../assets/img/plugtent-hero.png"
import designsystem1 from "../assets/img/designsystem-1.png";
import designsystem2 from "../assets/img/designsystem-2.png";
import designsystem3 from "../assets/img/designsystem-3.png";
import designsystem4 from "../assets/img/designsystem-4.png";
import designsystem5 from "../assets/img/designsystem-5.png";
import designsystem6 from "../assets/img/designsystem-6.png";
import existinglofi1 from "../assets/img/existinglofi-1.png"
import existinglofi2 from "../assets/img/existinglofi-2.png"
import solutionsimg from "../assets/img/solutionsimg.png"
import solutionsimg2 from "../assets/img/solutionsimg-2.png"
import workedfeatures1 from "../assets/img/workedfeatures1.png"
import workedfeatures2 from "../assets/img/workedfeatures2.png"
import workedfeatures3 from "../assets/img/workedfeatures3.png"
import workedfeatures4 from "../assets/img/workedfeatures4.png"
import workedfeatures5 from "../assets/img/workedfeatures5.png"
import workedfeatures6 from "../assets/img/workedfeatures6.png"
import plugtentappstore from "../assets/img/plugtent-appstore.png"
import plugtentgoogleplay from "../assets/img/plugtent-googleplay.png"
import plugtentlogo from "../assets/img/plugtent-logo.png"

import Button from "../components/Button"

const Plugtent = () => {
  return (
    <>
        <section className="max-w-[1300px] w-full mx-auto pt-[150px] px-5 font-dmsans">
            <img src={plugtentheroimg } className="w-full mx-auto" alt="abt"/>

                <p className="text-[24px] text-[#CCCCCC] pb-3 pt-14">Charles Emmanuel</p>
                <p className="text-[55px] font-bold leading-[78px] tracking-wider pb-6">Case Study For Plugtent</p>
                <div className="flex md:flex-row flex-col gap-x-8 gap-y-8">
                    <div className="max-w-[388px]">
                        <p className="uppercase text-[#cccccc97] text-[20px] font-medium leading-[26px] pb-2">Role</p>
                        <ul className="list-disc text-[18px] text-[#CCCCCC] font-normal leading-9 pl-5">
                            <li className="">
                            My primary responsibility was to review and enhance the low-fidelity screens initially crafted by 
                            another designer and transform it into  user-centric high-fidelity interfaces.
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
            <div className="pb-28">
                <p className="text-[80px] font-bold pb-10">The Brief</p>
                <p className="text-[32px] leading-[60px] text-[#CCCCCC] font-normal">
                    PlugTent is a marketplace-model platform that allows businesses to leverage the creativity and audiences of content creators to market and advertise their products and services.
                    Businesses get to create paid campaigns using creatives (images, videos, text) that they come up with internally. These campaigns would be showcased to content creators who then
                    decided to send proposals to be a part of the involved company or brand’s campaign. Upon acceptance, content creators generate content, subject to business approval, and share it across their social media channels via PlugTent. The business/brand’s campaign budget is split among content creators based on the percentage of the overall campaign goal that each content creator is able to achieve.
                </p>

            </div>

            <div>

                <p className="text-[80px] font-bold pb-10">Problems I faced:</p>
                <p className="text-[32px] leading-[60px] text-[#CCCCCC] font-normal">
                    The project faced a major challenge as the handing over of the project from the initial designer to myself, 
                    occured under tight timelines. Tasked with thoroughly studying the existing low-fidelity screens and project 
                    requirement document (PRD) within a limited timeframe, I recognized the potential risk posed by the imminent 
                    departure of the previous designer. The tight schedule raised concerns about the depth of understanding and
                    the seamless continuation of the design process. Despite these time constraints and uncertainties,
                    the project demanded a meticulous transformation of the low-fidelity screens into high-fidelity designs, 
                    a task that required not only swift adaptation but also a profound comprehension of the project scope. 
                    The success of the project depended on my ability to navigate these challenges efficiently and deliver a refined, 
                    innovative, and user-centric final product, which I did. 😊😎
                </p>
            </div>
                

        </section>

        <section className="max-w-[1300px] w-full mx-auto pt-[150px] px-5 font-dmsans">
            <div>
                <p className="text-[75px] font-bold leading-[78px] tracking-wider pb-6">Goals</p>
                <p className="text-[32px] text-[#CCCCCC] pb-10">The Key expectations from Plugtent</p>

                <div className="flex md:flex-row flex-col gap-x-10 gap-y-8 mb-14">
                    <div className="max-w-[550px] mr-20">
                        <p className=" text-white text-[40px] font-bold leading-[26px] pb-10">Businesses:</p>
                        <ul className="list-disc text-[30px] text-[#CCCCCC] font-normal leading-9 pl-20">
                            <li className="leading-[50px] pb-5">Sign up using their E-mail</li>
                            <li className="leading-[50px] pb-5">Make payment for campaign using debit cards</li>
                            <li className="leading-[50px] pb-5">Choose to invite creators to join a campaign</li>
                            <li className="leading-[50px] pb-5">Choose to invite multiple co-workers to join workspace and manage campaign on their behalf</li>
                                                   
                        </ul>
                        
                    </div>

                    <div className="max-w-[550px]">
                        <p className=" text-white text-[40px] font-bold leading-[26px] pb-10">&nbsp;</p>
                        <ul className="list-disc text-[30px] text-[#CCCCCC] font-normal leading-9 pl-5">
                            <li className="leading-[50px] pb-5">Create campaign using texts, images or videos</li>
                            <li className="leading-[50px] pb-5">Accept or reject a creator proposal to join capmpaigns</li>
                            <li className="leading-[50px] pb-5">Approve or reject a content submitted by creators</li>   
                        </ul>
                    </div>
                    
                </div>

                <div className="flex md:flex-row flex-col gap-x-8 gap-y-8">
                    <div className="max-w-[550px] mr-20">
                        <p className=" text-white text-[40px] font-bold leading-[26px] pb-10">Content Creators:</p>
                        <ul className="list-disc text-[30px] text-[#CCCCCC] font-normal leading-9 pl-20">
                            <li className="leading-[50px] pb-5">Sign up using their email</li>
                            <li className="leading-[50px] pb-5">Connect atleast one(1) social media channel before proceeding to dashboard.</li>
                            <li className="leading-[50px] pb-5">Add projects to portfolio</li>
                            <li className="leading-[50px] pb-5">Search for preferred type of campaign</li>
                        </ul>
                        
                    </div>

                    <div className="max-w-[550px]">
                        <p className=" text-white text-[40px] font-bold leading-[26px] pb-10">&nbsp;</p>
                        <ul className="list-disc text-[30px] text-[#CCCCCC] font-normal leading-9 pl-5">

                            <li className="leading-[50px] pb-5">Send proposal to join a campaign</li>
                            <li className="leading-[50px] pb-5">If proposal is accepted, proceed to create and submit content.</li>
                            <li className="leading-[50px] pb-5">Share approved content to connected social media channel(s) and earn!</li>
                        </ul>
                    </div>
                    
                </div>

            </div>

        </section>

        <section className="max-w-[1300px] w-full mx-auto pt-[150px] px-5 font-dmsans">
            <p className="text-[80px] font-bold pb-10">Design System</p>
            <p className="text-[32px] leading-[60px] text-[#CCCCCC] font-normal pb-20">
            The next plan of action was to work on a design system which includes the style guide and necessary components needed to
            help communicate the brand’s identity and also give the product an exciting feel
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
            <p className="text-[80px] font-bold pb-10">Issue With <br /> Existing Lo-Fi</p>

            <div className="flex flex-col md:flex-row items-center pb-20    ">
                <div className="w-full md:w-1/2">
                    <img src={existinglofi1} alt="lof1" />
                </div>

                <div className="w-full md:w-1/2">
                    <p className="text-3xl text-[#1692F4] leading-10 font-bold pb-5 tracking-wider">Absence Of Content Category</p>
                    <p className="leading-10 text-[21px] text-[#cccccc] font-normal">
                        After reviewing the amazing work done by the previous designer, 
                        one notable issue I identified was the absence of a content category
                        feature in the creator sign-up form. Introducing this feature has the 
                        potential to significantly enhance the 'invited creators' process for businesses. 
                        By incorporating content categories, businesses gain the advantage to specify 
                        preferences when inviting creators. For instance, a company like <span className="text-[#1692F4]">Infinix </span> 
                        would prefer creators in the Tech Content category, therefore inviting someone like <span className="text-[#1692F4]">Kagan</span> to join 
                        their campaign for the launch of a new phone, rather than reaching out to creators like <span className="text-[#1692F4]">Opeyemi Famakin </span>,
                        who specializes in food content. This refinement ensures a more targeted and effective 
                        approach in connecting businesses with creators based on their content expertise.</p>

                </div>

            </div>

            <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2">
                    <p className="text-3xl text-[#1692F4] leading-10 font-bold pb-5 tracking-wider">Not Enough Campaign Specific Metrics</p>
                    <p className="leading-10 text-[21px] text-[#cccccc] font-normal">
                        Another issue i noticed with the existing design was the fact that there wasn't enough 
                        campaign specific metrics on the dashboard and on the the campaign page. showcasing 
                        campaign metrics in form of charts could help businesses track the performance of their 
                        campaign based on engagements, impressions, highest performing creator etc
                    </p>

                </div>

                <div className="w-full md:w-1/2">
                    <img src={existinglofi2} alt="lof1" />
                </div>


            </div>

        </section>

        <section className="max-w-[1300px] w-full mx-auto pt-[150px] px-5 font-dmsans">
            <p className="text-[80px] font-bold pb-10">Proposed Solutions To <br /> Issues Highlighted Above</p>

            <div className="flex flex-col md:flex-row items-center pb-20 pt-10">
                <div className="w-full md:w-1/2">
                    <img src={solutionsimg} alt="lof1" />
                </div>

                <div className="w-full md:w-1/2">
                    <p className="text-3xl text-[#1692F4] leading-10 font-bold pb-5 tracking-wider">Added Content Category To Sign Up Form.</p>
                    <p className="leading-[50px] text-[21px] text-[#cccccc] font-normal">
                        To address the first issue highlighted above pertaining to content category, 
                        I added an additional input field for creators to select atmost two(2) content categories. 
                        This modification serves to enhance the user experience by enabling businesses to efficiently
                         filter and invite creators aligned with specific content categories.
                    </p>

                </div>

            </div>

            <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2">
                    <p className="text-3xl text-[#1692F4] leading-10 font-bold pb-5 tracking-wider">Comprehensive Charts</p>
                    <p className="leading-[50px] text-[21px] text-[#cccccc] font-normal">
                        To address the second issue highlighted above, I implementing a comprehensive chart on both the dashboard 
                        and campaign page. This enhancement significantly improved the data visualization capabilities for
                        businesses, allowing them to effortlessly access and interpret campaign-specific metrics, including 
                        engagements, impressions, highest performing creator etc. The added functionality also enables 
                        businesses to select specific time periods for viewing campaign statistics, providing a more detailed 
                        understanding of performance trends over designated intervals."

                    </p>

                </div>

                <div className="w-full md:w-1/2">
                    <img src={solutionsimg2} alt="lof1" />
                </div>


            </div>


        </section>

        <section className="max-w-[1300px] w-full mx-auto pt-[150px] px-5 font-dmsans pb-20">
            <p className="text-[80px] font-bold pb-10">Other Features I worked On</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
                <div>
                    <img className="w-full h-auto object-cover pb-7" src={workedfeatures1} alt="" />   
                    <p className="text-3xl font-bold pb-5">Share Campaign</p>
                    <p className="text-[#cccccc] leading-8 text-[18px]">
                        A feature that allows businesses share their campaigns to prospective creators 
                        outside of plugtent thereby improving collaboration with creators. 
                        This feature also acts as a recruitment tool for content creators to join PlugTent's platform.
                    </p>

                </div>
                
                <div>
                    <img className="w-full h-auto object-cover pb-7" src={workedfeatures2} alt="" />   
                    <p className="text-3xl  font-bold pb-5">Messaging Feature</p>
                    <p className="text-[#cccccc] leading-8 text-[18px]">
                        A feature that allows businesses & creators communicate within Plugtent. 
                        This feature empowers businesses to articulate their content requirements, 
                        ensuring creators have a comprehensive understanding of the envisioned scope.
                    </p>

                </div>

                <div>
                    <img className="w-full h-auto object-cover pb-7" src={workedfeatures3} alt="" />
                    <p className="text-3xl font-bold pb-5">Guaranteed Payment</p>   
                    <p className="text-[#cccccc] leading-8 text-[18px]">
                        A feature that allows businesses to choose to gift creators a certain sum for every submitted 
                        content even before publication on the creator's channels. This serves as a morale boost, 
                        enticing more creators to participate in their campaigns.
                    </p>

                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
                <div>
                    <img className="w-full h-auto object-cover pb-7" src={workedfeatures4} alt="" />   
                    <p className="text-3xl font-bold pb-5">Business Wallets</p>
                    <p className="text-[#cccccc] leading-8 text-[18px]">
                        A feature that allows businesses share their campaigns to prospective creators 
                        outside of plugtent thereby improving collaboration with creators. This feature 
                        also acts as a recruitment tool for content creators to join PlugTent's platform.
                    </p>

                </div>
                
                <div>
                    <img className="w-full h-auto object-cover pb-7" src={workedfeatures5} alt="" />   
                    <p className="text-3xl  font-bold pb-5">Creator Discovery</p>
                    <p className="text-[#cccccc] leading-8 text-[18px]">
                        An additional feature that allows businesses get access to public creators 
                        who are not yet registered on Plugtent. This required Plugtent having to
                        connect a 3rd party software
                    </p>

                </div>

                <div>
                    <img className="w-full h-auto object-cover pb-7" src={workedfeatures6} alt="" />
                    <p className="text-3xl font-bold pb-5">Create Campaign Redesign</p>   
                    <p className="text-[#cccccc] leading-8 text-[18px]">
                        I re-designed the campaign creation flow, making the process 
                        more detailed and seamless. I also integrated a WYSIWYG feature 
                        on the description box for a better UX.
                    </p>

                </div>

            </div>

            

        </section>

        <section className="max-w-[1300px] mx-auto pb-20">
            <div className="bg-[#1A1A1A] p-10 rounded flex flex-col md:flex-row items-center gap-4">
                <div className="pr-20">
                    <p className="text-2xl text-white font-normal pb-5">A link to the live version:</p>
                    <a href="https://www.plugtent.com/" className="text-6xl text-[#1692F4] font-semibold tracking-wide border-b-4 border-[#1692f4]" target="_blank">Plugtent Web App</a>
                </div>

                <div className="pr-20">
                    <p className="text-2xl text-white font-normal pb-5">&nbsp;</p>
                    <div className="pt-4">
                        <p className="pb-2 text-[#cccccc]">Download the app</p>

                        <div className="flex flex-row">
                            <img className="pr-5" src={plugtentappstore} alt="appstore"/>
                            <img src={plugtentgoogleplay} alt="googleplay" />

                        </div>
                         
                    </div>
                </div>

                <div>
                    <img src={plugtentlogo} alt="plugtent-logo" />
                </div>

            </div>

        </section>

        <section className="text-center mx-auto py-14"> 
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

export default Plugtent