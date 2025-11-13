import { ArrowRight, Circle } from "lucide-react"

const WorksCarousel = () => {
  return (
    <section className="max-w-[1300px] w-full mx-auto pt-[50px] px-5 font-dmsans">
        <div className="text-[40px] sm:text-[70px] pb-5">
            <h1 className="pb-1 sm:pb-5">Some of my other stuff</h1>
        </div>

        <div className="carousel rounded-box space-x-4 p-4">
            <div className="carousel-item max-w-[500px] bg-[#25252544] rounded-box  space-x-4 p-2"> 
                <div className="">
                   {/* <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" className="w-full" alt=""/> */}

                    <div className="p-3 bg-[#252525] rounded-box">
                        <div className="pb-5 text-3xl">
                            <h1>Portfolio Website For Ray Interiors</h1>
                            <h1>Figma UI + Framer Development</h1>
                        </div>

                        <p className="text-base font-[#cccccc96]">
                            Ray Interiors is a portfolio website designed to showcase 
                            the work of an Interior decorator, highlighting their 
                            design expertise, past projects, and services. 
                        </p>

                        <div className="flex items-center justify-between pt-4">
                            <div className="flex items-center gap-2">
                            <Circle className="w-3 h-3 fill-emerald-500 text-emerald-500" />
                            <span className="text-xs md:text-sm text-slate-300">online</span>
                            </div>
                            <a
                            href="https://www.rayinteriors.com/" target="_blank"
                            className="inline-flex items-center gap-2 text-white hover:text-slate-300 transition-colors text-xs md:text-sm font-medium"
                            >
                            View Project
                            <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            <div className="carousel-item max-w-[500px] bg-[#25252544] rounded-box  space-x-4 p-2"> 
                <div>
                    <img src="" alt=""/>

                    <div className="p-3 bg-[#252525] rounded-box">
                        <h1 className="pb-5 text-3xl">Star Homes</h1>
                        <p className="pb-2 text-base font-[#cccccc96]">
                            Star Homes is a real estate solution for luxurious yet 
                            affordable shortlet apartments in Lagos. The platform 
                            allows guests to explore available listings, book stays, 
                            and enjoy a comfortable, hassle-free experience.
                        </p>

                        <div className="flex items-center justify-between pt-4">
                            <div className="flex items-center gap-2">
                            <Circle className="w-3 h-3 fill-emerald-500 text-emerald-500" />
                            <span className="text-xs md:text-sm text-slate-400">online</span>
                            </div>
                            <a
                            href="https://www.rayinteriors.com/" target="_blank"
                            className="inline-flex items-center gap-2 text-white hover:text-slate-300 transition-colors text-sm md:text-base font-medium"
                            >
                            View Project
                            <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            <div className="carousel-item max-w-[500px] bg-[#25252544] rounded-box  space-x-4 p-2"> 
                <div>
                    <img src="" alt=""/>

                    <div className="p-3 bg-[#252525] rounded-box">
                        <h1 className="pb-5 text-3xl">Plugtent</h1>
                        <p className="pb-2">
                            Star Homes is a real estate solution for luxurious yet 
                            affordable shortlet apartments in Lagos. The platform 
                            allows guests to explore available listings, book stays, 
                            and enjoy a comfortable, hassle-free experience.
                        </p>

                        <div className="flex items-center justify-between pt-4">
                            <div className="flex items-center gap-2">
                            <Circle className="w-3 h-3 fill-emerald-500 text-emerald-500" />
                            <span className="text-xs md:text-sm text-slate-400">online</span>
                            </div>
                            <a
                            href="https://www.rayinteriors.com/" target="_blank"
                            className="inline-flex items-center gap-2 text-white hover:text-slate-300 transition-colors text-sm md:text-base font-medium"
                            >
                            View Project
                            <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    
    </section>
  )
}

export default WorksCarousel