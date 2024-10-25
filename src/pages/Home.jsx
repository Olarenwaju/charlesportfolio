import Hero from "../components/Hero"
import homegif from "../assets/img/home-gif.png"
import plugtentimg from "../assets/img/plugtent-img.png"
import starhomesimg from "../assets/img/starhomes-img.png"
import parseatimg from "../assets/img/parseat-img.png"
//import linkicon from "../assets/img/linkicon.png"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
        <section className="max-w-[1440px] mx-auto pt-[104.35px] px-5 ">
            <Hero />
        </section>

        <section className="max-w-[1440px] mx-auto pt-20 px-10">  
            <div className="flex flex-col lg:flex-row gap-x-8 gap-y-5 justify-between items-center">
                <div className="w-full max-w-[570px]">
                    <p className="text-left text-white sm:font-bold font-semibold text-[16px] sm:text-[30px] pb-5 md:pb-10 font-dmsans leading-[41px] tracking-wider"> 
                        -Charles Emmanuel, Product designer.
                    </p>

                    <img src={homegif} className="" alt="img" />
                </div>

                <div className="max-w-[700px] w-full">
                    <p className="font-dmsans text-[24px] md:text-[60px] lg:text-[90px] font-medium xl:leading-[100px] md:leading-[80px] leading-[50px] pb-4">Design is how it works</p>
                    <p className="font-dm md:text-[24px] text-[16px] text-[#CCCCCC] font-normal md:leading-[31px] leading-[25px]">
                        I help businesses and companies reach their goals by designing 
                        user-centric digital products & interactive but seamless experiences.
                    </p>
                </div>

            </div>
            
        </section>

        <section className="max-w-[1440px] mx-auto pt-[104.35px] px-10">
            <p className="uppercase lg:text-[100px] md:text-[80px] sm:text-[50px] text-[32px] font-semibold lg:leading-[160px] md:leading-[100px] leading-[40px] pb-10 sm:pb-[20]">Selected Projects</p>
            
            <div className="flex flex-col lg:flex-row gap-x-8 gap-y-5 justify-between items-center md:pb-36 pb-28">
                <div className="w-full max-w-[685px]">
                    <img src={plugtentimg} className="" alt="img" />
                </div>

                <div className="w-full max-w-[700px]">
                    <p className="font-dmsans text-[24px] md:text-[60px] lg:text-[90px] font-medium xl:leading-[100px] md:leading-[80px] leading-[50px] pb-4">Plugtent</p>
                    <p className="font-dmsans sm:text-[24px] text-[16px] font-normal sm:leading-[35px] leading-[25px] text-[#CCCCCC] pb-3">
                        A marketplace-model platform that allows businesses to leverage the
                        creativity and audiences of content creators to market and advertise their products and services.
                    </p>
                    <Link to="/plugtent" className="text-[#8338EA] md:text-[24px] text-[16px] border-b border-[#8338EA]">Learn More</Link>
                </div>

            </div>

            <div className="flex flex-col lg:flex-row gap-x-8 gap-y-5 justify-between items-center md:pb-36 pb-28">

                <div className="w-full max-w-[700px]">
                    <p className="font-dmsans text-[24px] md:text-[60px] lg:text-[90px] font-medium xl:leading-[100px] md:leading-[80px] leading-[50px] pb-4">Star Homes</p>
                    <p className="font-dmsans sm:text-[24px] text-[16px] font-normal sm:leading-[35px] leading-[25px] text-[#CCCCCC] pb-3">
                        Star Homes is a marketplace-model platform for luxurious and affordable short-term
                        apartment rentals in Lagos. The  platform allows the admin (Star Homes)
                        to list their apartments for shortlet, while guests can browse through available listings,
                        book their stay, and enjoy a comfortable and hassle-free experience.
                    </p>
                    <Link to="/starhomes" className="text-[#8338EA] md:text-[24px] text-[16px] border-b border-[#8338EA]">Learn More</Link>
                </div>

                <div className="w-full max-w-[685px] order-first lg:order-last">
                    <img src={starhomesimg} className="" alt="img" />
                </div>

            </div>

            <div className="flex flex-col lg:flex-row gap-x-8 gap-y-5 justify-between items-center md:pb-36 pb-28">
                <div className="w-full max-w-[685px]">
                    <img src={starhomesimg} className="" alt="img" />
                </div>

                <div className="w-full max-w-[700px]">
                    <p className="font-dmsans text-[24px] md:text-[60px] lg:text-[90px] font-medium xl:leading-[100px] md:leading-[80px] leading-[50px] pb-4">Vital Edge<br/>(Re -design)</p>
                    <p className="font-dmsans sm:text-[24px] text-[16px] font-normal sm:leading-[35px] leading-[25px] text-[#CCCCCC] pb-3">
                        Vital Edge is a lead generation platform empowering businesses
                        to effortlessly gather leads. By integrating a simple code snippet
                        into their websites, users can efficiently collect visitor data,
                        enabling them to improve their marketing strategies.
                    </p>
                    <Link to="/cashblast" className="text-[#8338EA] md:text-[24px] text-[16px] border-b border-[#8338EA]">Learn More</Link>
                </div>

            </div>

            <div className="flex flex-col lg:flex-row gap-x-8 gap-y-5 justify-between items-center md:pb-36 pb-28">

                <div className="w-full max-w-[700px]">
                    <p className="font-dmsans text-[24px] md:text-[60px] lg:text-[90px] font-medium xl:leading-[100px] md:leading-[80px] leading-[50px] pb-4">Custom Mailers</p>
                    <p className="font-dmsans sm:text-[24px] text-[16px] font-normal sm:leading-[31px] leading-[25px] text-[#CCCCCC] pb-3">
                        An e-commerce platform that allows users to order fully customizable gaming mouse 
                        pads either by providing a design image or using an embedded
                        AI tool to generate one.
                    </p>
                    <Link to="/custommailers" className="text-[#8338EA] md:text-[24px] text-[16px] border-b border-[#8338EA]">Learn More</Link>
                </div>

                <div className="w-full max-w-[685px] order-first lg:order-last">
                    <img src={starhomesimg} className="" alt="img" />
                </div>

            </div>

            <div className="flex flex-col lg:flex-row gap-x-8 gap-y-5 justify-between items-center pb-28">
                <div className="w-full max-w-[685px]">
                    <img src={parseatimg} className="" alt="img" />
                </div>

                <div className="w-full max-w-[700px]">
                    <p className="font-dmsans text-[24px] md:text-[60px] lg:text-[90px] font-medium xl:leading-[100px] md:leading-[80px] leading-[50px] pb-4">Parseat</p>
                    <p className="font-dmsans sm:text-[24px] text-[16px] font-normal sm:leading-[31px] leading-[25px] text-[#CCCCCC] pb-3">
                        Parseat is an event management tool targeted at solving seat management challenges
                        for party/event organizers and individual party owners.
                    </p>
                    <Link to="/parseat" className="text-[#8338EA] md:text-[24px] text-[16px] border-b border-[#8338EA]">Learn More</Link>
                </div>

            </div>

        </section>

        <section className="px-10 py-20">
            <Contact/>
        </section>
        
        
        <Footer/>

        
    </>
  )
}

export default Home