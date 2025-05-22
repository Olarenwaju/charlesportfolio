import contactbg from "../assets/img/contact-img.png";



const Contact = () => {
  return (
    <div style={{backgroundImage: `url(${contactbg})`}} className="w-full md:max-w-[1100px] mx-auto mb-10 bg-cover bg-center md:py-20 sm:py-14 py-14 ">
        <div className="text-center">
          <p className="sm:text-[35px] text-[20px] tracking-wide font-semibold"> Connect With Me </p>
          <p className="sm:text-[24px] text-[12px] font-medium text-[#8338EA]"> DesignHemperor</p>
        </div>

        <ul className="w-full sm:max-w-[450px] max-w-[277px] flex flex-row flex-wrap sm:gap-y-2 justify-between items-center  mx-auto  md:text-[25px] sm:text-[20px] text-[15px] font-normal sm:pt-15 pt-14 px-5">

          <a href="https://www.linkedin.com/in/emmanuel-charles-8088b8205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
            <li className="underline underline-offset-2">LinkedIn</li>
          </a>
          <a href="https://x.com/chizzyhemperor?s=21" target="_blank" rel="noopener noreferrer">
            <li className="underline underline-offset-2">Twitter</li>
          </a>
          <a href="https://www.instagram.com/designhemperor?igsh=eGR0d3FhOWY4dDh4&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <li className="underline underline-offset-2">Instagram</li>
          </a>
          <a href="https://dribbble.com/DesignHemperor" target="_blank" rel="noopener noreferrer">
            <li className="underline underline-offset-2">Dribble</li>
          </a>

        </ul>
      
    </div>
  )
}

export default Contact