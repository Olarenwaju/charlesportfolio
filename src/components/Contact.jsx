import contactbg from "../assets/img/contact-img.png";



const Contact = () => {
  return (
    <div style={{backgroundImage: `url(${contactbg})`}} className="w-full md:max-w-[1100px] mx-auto mb-10 bg-cover bg-center md:py-20 sm:py-14 py-14 ">
        <div className="text-center">
          <p className="sm:text-[35px] text-[16px] tracking-wide font-semibold"> Connect With Me </p>
          <p className="sm:text-[24px] text-[12px] font-medium text-[#8338EA]"> DesignHemperor</p>
        </div>

        <ul className="w-full sm:max-w-[450px] max-w-[277px] flex flex-row flex-wrap sm:gap-y-2 justify-between items-center  mx-auto  md:text-[20px] sm:text-[15px] text-[10px] font-normal sm:pt-15 pt-14 px-5">

          <li className="underline underline-offset-2">LinkedIn</li>
          <li className="underline underline-offset-2">Twitter</li>
          <li className="underline underline-offset-2">Instagram</li>
          <li className="underline underline-offset-2">Dribble</li>

        </ul>
      
    </div>
  )
}

export default Contact