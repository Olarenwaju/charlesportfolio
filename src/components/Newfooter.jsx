
import { ArrowUp, Dot } from "lucide-react"
import { Link } from "react-router-dom"

const Newfooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="max-w-[1300px] w-full mx-auto bg-black text-white min-h-screen flex flex-col justify-between pt-12 sm:pt-16 md:pt-20 mt-10">
      {/* Top Section */}
      <div className="flex justify-between items-start p-4 sm:p-6 md:p-8 lg:p-12">
        {/* Available for hire */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Dot className="fill-green-500 text-green-500 w-4 h-4 sm:w-5 sm:h-5" size={20} />
          <span className="text-xs sm:text-sm font-medium">Available for hire</span>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 sm:gap-2 hover:opacity-80 transition-opacity"
          aria-label="Back to top"
        >
          <span className="text-xs sm:text-sm hidden sm:inline">Back to top</span>
          <div className="bg-white text-black rounded-full p-1.5 sm:p-2">
            <ArrowUp size={12} className="sm:w-4 sm:h-4" />
          </div>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-12 px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 flex-grow">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-center leading-tight tracking-tight px-2">
          LET&apos;S WORK
          <br />
          TOGETHER
        </h1>

        {/* Contact Button */}
        <button className="px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-[#1d1d1f] hover:bg-[#1d1d1f8b] text-white text-xs sm:text-sm font-semibold tracking-widest rounded-full transition-colors">
          CONTACT NOW
        </button>

        {/* Social Links */}
        <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-12 text-xs sm:text-sm font-semibold tracking-widest flex-wrap justify-center">
          <Link to="#" className="hover:text-gray-400 transition-colors">
            LINKEDIN
          </Link>
          <Link to="#" className="hover:text-gray-400 transition-colors">
            DRIBBBLE
          </Link>
          <Link to="#" className="hover:text-gray-400 transition-colors">
            TWITTER
          </Link>
        </div>
      </div>

      {/* Bottom Name Section */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 lg:py-16 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight">CHARLES EMMANUEL</h2>
      </div>
    </footer>
  )
}

export default Newfooter