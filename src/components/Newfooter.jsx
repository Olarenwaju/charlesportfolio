
import { ArrowUp, Dot } from "lucide-react"
import { Link } from "react-router-dom"

const Newfooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="max-w-[1300px] w-full mx-auto bg-black text-white min-h-screen flex flex-col justify-between pt-20">
      {/* Top Section */}
      <div className="flex justify-between items-start p-8 md:p-12">
        {/* Available for hire */}
        <div className="flex items-center gap-2">
          <Dot className="fill-green-500 text-green-500" size={20} />
          <span className="text-sm font-medium">Available for hire</span>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          aria-label="Back to top"
        >
          <span className="text-sm">Back to top</span>
          <div className="bg-white text-black rounded-full p-2">
            <ArrowUp size={16} />
          </div>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center gap-8 md:gap-12 px-8 md:px-12 py-20 flex-grow">
        {/* Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center leading-tight tracking-tight">
          LET&apos;S WORK
          <br />
          TOGETHER
        </h1>

        {/* Contact Button */}
        <button className="px-6 py-3 md:px-8 md:py-4 bg-[#1d1d1f] hover:bg-[#1d1d1f8b] text-white text-xs md:text-sm font-semibold tracking-widest rounded-full transition-colors">
          CONTACT NOW
        </button>

        {/* Social Links */}
        <div className="flex gap-8 md:gap-12 text-xs md:text-sm font-semibold tracking-widest">
          <Link href="#" className="hover:text-gray-400 transition-colors">
            LINKEDIN
          </Link>
          <Link href="#" className="hover:text-gray-400 transition-colors">
            DRIBBBLE
          </Link>
          <Link href="#" className="hover:text-gray-400 transition-colors">
            TWITTER
          </Link>
        </div>
      </div>

      {/* Bottom Name Section */}
      <div className="px-8 md:px-12 py-10 md:py-16 text-center">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">CHARLES EMMANUEL</h2>
      </div>
    </footer>
  )
}

export default Newfooter