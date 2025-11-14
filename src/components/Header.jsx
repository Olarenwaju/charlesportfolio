import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  //const [isShrinking, setIsShrinking] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  //const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    setIsOpen(false);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setIsOpen(false);

    if (pathname === "/") {
      // If already on home page, scroll to footer
      const footerElement = document.getElementById("contact");
      if (footerElement) {
        footerElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // If on another page, navigate to home and set hash for scroll
      navigate("/");
      // Set hash after navigation
      window.location.hash = "#contact";
      // Use setTimeout to ensure the page has loaded before scrolling
      setTimeout(() => {
        const footerElement = document.getElementById("contact");
        if (footerElement) {
          footerElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    }
  };

  return (
    <div className="w-full fixed top-0 z-50 left-0 right-0">
      <div className="max-w-[1392px] bg-black w-full flex items-center justify-between gap-x-3 mx-auto py-4 sm:py-6 md:py-[40px] px-4 sm:px-5 md:px-10">
        <div className="text-white text-base sm:text-lg md:text-[20px] lg:text-[24px] font-dmsans z-40">
          <Link to="/"> DesignHemperor </Link>
        </div>

        <ul
          className={`uppercase flex flex-col lg:hidden ${
            isOpen ? "left-0" : "left-[-100%]"
          } absolute top-0 left-0 z-30 shadow-xl px-6 sm:px-8 transition-all h-screen w-[75%] sm:w-[50%] md:w-[40%] bg-black pt-[120px] sm:pt-[150px] gap-y-4 sm:gap-y-6 items-start font-outfit font-semibold text-white text-base sm:text-lg leading-[24px]`}
        >
          <Link
            to="/"
            onClick={handleClick}
            className="hover:text-gray-300 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={handleClick}
            className="hover:text-gray-300 transition-colors"
          >
            About
          </Link>
          <Link
            to="/all-projects"
            onClick={handleClick}
            className="hover:text-gray-300 transition-colors"
          >
            All Projects
          </Link>
          <Link
            to="/contact"
            onClick={handleContactClick}
            className="hover:text-gray-300 transition-colors"
          >
            Contact Me
          </Link>
        </ul>

        <ul className="hidden lg:flex gap-x-8 xl:gap-x-[70px] items-center w-fit font-dmsans text-[#ffffffb4] font-normal text-base lg:text-[18px] leading-[24px] uppercase">
          <Link to="/" className="hover:text-white transition-colors">
            Home
            <div
              className={`${
                pathname === "/" && "border border-[#fff]"
              } w-[80%] rounded-full mx-auto mt-1`}
            ></div>
          </Link>

          <Link to="/about" className="hover:text-white transition-colors">
            About
            <div
              className={`${
                pathname === "/about" && "border border-[#fff]"
              } w-[80%] rounded-full mx-auto mt-1`}
            ></div>
          </Link>

          <Link
            to="/all-projects"
            className="hover:text-white transition-colors"
          >
            All Projects
            <div
              className={`${
                pathname === "/all-projects" && "border border-[#fff]"
              } w-[80%] rounded-full mx-auto mt-1`}
            ></div>
          </Link>

          <Link
            to="/contact"
            onClick={handleContactClick}
            className="hover:text-white transition-colors"
          >
            Contact Me
            <div
              className={`${
                pathname === "/contact" && "border border-[#fff]"
              } w-[80%] rounded-full mx-auto mt-1`}
            ></div>
          </Link>
        </ul>

        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none lg:hidden z-40 relative"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 sm:h-10 sm:w-10 transition duration-300 transform rotate-90"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fff"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 sm:h-10 sm:w-10 transition duration-300 transform rotate-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fff"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
