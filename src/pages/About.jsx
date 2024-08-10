import aboutimg from "../assets/img/about-hero.png"
//import charlesavatarimg from "../assets/img/charlesavater-img.png"
import creativity from "../assets/img/aboutcreativity-img.png"
import problemsolverimg from "../assets/img/problemsolver-img.png"
import emphathy from "../assets/img/emphathy-img.png"
import userresearch from "../assets/img/userresearch-img.png"
import experience from "../assets/img/experience-img.png"
import zuricert from "../assets/img/zuricerts-img.png"
import Contact from "../components/Contact"
import Footer from "../components/Footer"


const About = () => {
  return (
    <>
      <section className="max-w-[1440px] w-full mx-auto pt-[150px] px-5">
        <div className="relative">
          <img src={aboutimg} className="w-full mx-auto" alt="abt"/>

          <div className="absolute top-28 left-28">
           {/* <img src={charlesavatarimg} className="w-full " alt="avt"/> */}
          </div>
        </div>
        
        <p className="md:pt-[115px] pt-[80px] italic md:text-[64px] sm:text-[45px] font-dmsans text-[24px] text-center sm:font-semibold font-medium md:leading-[80px] sm:leading-[40px] leading-[30px] pb-10 sm:pb-[20]">
          “If you think good design is expensive you should look at the cost of bad design.”
        </p>

        <p className="max-w-[1200px] mx-auto text-left font-dmsans sm:text-[32px] text-[16px] font-normal text-[#ffffffcb] md:leading-[70px] leading-[32px] sm:pb-16 pb-10">
          I am a user focused and data driven Product designer specialized in creating seamless user experience with a touch of aesthetics.
          I help businesses and companies reach their goals by designing user-centric digital products & interactive experiences.
          My thirst and persistent quest for knowledge as a designer has given me the rquired but in-depth knowledge required
          in detecting the user pain points and how to best convert the solution to better design iteration while putting
          the business goal in mind.
        </p>

        <p className="max-w-[1200px] mx-auto text-left font-dmsans sm:text-[32px] text-[16px] font-normal text-[#ffffffcb] md:leading-[70px] leading-[32px]">
          I’m a critical thinker and an empathy driven product designer that uses accumulated experience in UX design to create/facilitate usable, 
          functional & delightful digital products.
        </p>


      </section>

      <section className="max-w-[1300px] w-full mx-auto md:pt-[150px] pt-[100px]  px-5 pb-14">

        <p className="uppercase lg:text-[125px] md:text-[100px] sm:text-[80px] text-[40px] font-dmsans font-bold text-left pb-10">
          Skills
        </p>

        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-x-5 gap-y-5">

          <div className="max-w-[300px] w-full bg-[#101010] pt-5 pb-12 px-5 rounded border-b-[#8338EA] border-b-[3px]">

            <img src={creativity} alt="creativity"/>
            <p className="text-[24px] font-bold pb-5">Creativity</p>
            <p className="text-[16px] font-normal font-dmsans text-[#ADADAD]">
              My creative skill empowers me with the ability to interpret and build a product from ideation to reality using the information
              a client or stakeholder provides.
            </p>

          </div>

          <div className="max-w-[300px] w-full bg-[#101010] pt-5 pb-12 px-5 rounded border-b-[#8338EA] border-b-[3px]">

            <img src={problemsolverimg} alt="problemsolver"/>
            <p className="text-[24px] font-bold pb-5">Problem Solver</p>
            <p className="text-[16px] font-normal font-dmsans text-[#ADADAD]">
              This enable me easily identify and eliminate flaws in a product. 
              It enables me as a designer to consider the problems different ways.
            </p>

          </div>

          <div className="max-w-[300px] w-full bg-[#101010] pt-5 pb-12 px-5 rounded border-b-[#8338EA] border-b-[3px]">

            <img src={emphathy} alt="emphathy"/>
            <p className="text-[24px] font-bold pb-5">Empathy</p>
            <p className="text-[16px] font-normal font-dmsans text-[#ADADAD]">
              I possess skills that enable me understand my users. This skill also enable me use the information gotten to produce 
              innovative products that meet those needs.
            </p>

          </div>

          <div className="max-w-[300px] w-full bg-[#101010] pt-5 pb-12 px-5 rounded border-b-[#8338EA] border-b-[3px]">

            <img src={userresearch} alt="user"/>
            <p className="text-[24px] font-bold pb-5">User Research</p>
            <p className="text-[16px] font-normal font-dmsans text-[#ADADAD]">
              I implement the use of user research to identify consumer needs. It helps me design a product which provides a solution for
              users that satisfy market demands.
            </p>

          </div>

        </div>

      </section>


      <section className="max-w-[1300px] w-full mx-auto md:pt-[150px] pt-[100px] px-5 pb-14">
        <p className="uppercase lg:text-[125px] md:text-[100px] sm:text-[80px] text-[40px] font-dmsans font-bold text-left pb-10">
          Experiences
        </p>  

        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between  items-center text-left gap-x-5 gap-y-5 font-dmsans pb-14 border-b border-[#ffffff57]">

          <p className="w-full">
            <img src={experience} alt="exp"/>
          </p>

          <div className=" w-full">          
            <p className="text-[30px] font-bold leading-[33px] tracking-wider">Product Designer</p>
            <p className="text-[#50DFB4] text-[15px] font-normal leading-9">Algocrib (Aug 2022 - Dec 2022)</p>
          </div>

          <p className=" w-full text-[#ADADAD] text-[16px] font-normal">
            A digital company passionate about using technology, innovation, 
            strategy and design to build engaging websites, brands and digital
            products for organizations across multiple industries.
          </p>

        </div>

        <div className="max-w-[1200px] mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-x-5 gap-y-5 font-dmsans pt-14">

          <p className="w-full">
            <img src={experience} alt="exp"/>
          </p>

          <div className=" w-full">          
            <p className="text-[30px] font-bold leading-[33px] tracking-wider">Product Designer</p>
            <p className="text-[#50DFB4] text-[15px] font-normal leading-9">Leftlane Technologies</p>
          </div>

          <p className=" w-full text-[#ADADAD] text-[16px] font-normal">
            Left Lane is a multi-talented and multi-faceted team of tech professionals and enthusiasts,
            created to bridge the gap between dreams and actuality by leveraging technology and global 
            stellar talent in a remote world.  
          </p>

        </div>

      </section>

      <section className="max-w-[1300px] w-full mx-auto md:pt-[150px] pt-[100px] px-5 sm:pb-40 pb-14">
        <p className="uppercase lg:text-[125px] md:text-[100px] sm:text-[80px] text-[40px] font-dmsans font-bold text-left pb-10">
          Certifications
        </p> 

        <div className="max-w-[1400px] w-full mx-auto flex flex-row justify-center">
          <img src={zuricert} className="w-full" alt="cert" />
        </div>

      </section>

      <section className="px-10 md:pt-[150px] pt-[100px] pb-20">

        <Contact />

      </section>

      <Footer />




    </>
  )
}

export default About;