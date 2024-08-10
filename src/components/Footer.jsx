import Button from "./Button";


/* eslint-disable react/no-unescaped-entities */
const Footer = () => {
  return (
    <section className="bg-[#0B0B0B] px-5">

        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center lg:justify-between py-20">

            <div className="max-w-[500px] w-full pb-10">
                <p className="text-center lg:text-left font-bold sm:text-[60px] text-[40px] font-dmsans ">Do You Have A <br/> Next Level Idea?</p>
                <p className="text-center lg:text-left text-[#969696] sm:text-[24px] text-[14px]">Let's talk about it</p>
            </div>

            <div>
                <Button text="Get in touch" classname="bg-[#8338EA] hover:bg-[#8338EA]/90 md:px-[100px] w-full font-dmsans text-center md:py-[20px] text-[16px] md:text-[20px] md:font-bold px-[25px] py-[15px] tracking-wider"/>
                <p className="underline underline-offset-4 sm:text-[20px] text-[13px] pt-5 text-center lg:text-right">Charlesemmanuel4business@gmail.com</p>
            </div>
            
        
        </div>
        
          
    </section>
  )
}

export default Footer;