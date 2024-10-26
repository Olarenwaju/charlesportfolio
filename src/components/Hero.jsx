/* eslint-disable react/no-unescaped-entities */
import heroimg from "../assets/img/hero-img.png"
import Button from "./Button"

const Hero = () => {
  return (
    <div className="px-5 flex flex-col lg:flex-row gap-x-4 gap-y-16 lg:justify-between items-center py-10 md:py-[20px] font-dmsans">
        <div className="w-full max-w-[929px] font-dmsans pt-5">
            <div className="text-white sm:text-[90px] text-[40px] sm:leading-[124.99px] leading-[46px] pb-5 font-bold tracking-wider">
                <p className="">Hi, I'm</p>
                <p className="">Charles Emmanuel.</p>
            </div>
            
            <p className="text-[#50DFB4] sm:text-[40px] text-[20px] sm:leading-[52px] leading-[20px] font-normal">"A product designer that loves creating seamless
                user experience with a touch of aesthetics."
            </p>

            <div className="flex items-center gap-x-3 mx-auto pt-10">
                <Button text="Get in touch" classname="bg-[#8338EA] hover:bg-[#8338EA]/90 md:px-[50px] md:py-[20px] text-[14px] sm:text-[16px] md:text-[20px] md:font-bold px-[25px] py-[15px] tracking-wider"/>
                <Button 
                    text="Resume"
                    classname="bg-[#1E1E1E] hover:bg-[#1E1E1E]/90 px-[25px]  md:px-[50px] md:py-[20px] text-[14px] sm:text-[16px] md:text-[20px] md:font-bold tracking-wider"
                />
            </div>


        </div>

        <img className="w-full max-w-[200px] sm:max-w-[350px]"
            src={heroimg}
        />
    </div>
  )
}

export default Hero