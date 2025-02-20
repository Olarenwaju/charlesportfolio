import { useState } from "react"
import { Link, useLocation } from "react-router-dom";


const Header = () => {
    //const [isShrinking, setIsShrinking] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    //const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const location = useLocation();
    const { pathname } = location;

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    };

    const handleClick = () => {
        setIsOpen(false)
    }


  return (
    <div className="w-full fixed top-0 z-50 left-0 right-0">
        <div className="max-w-[1392px] bg-black w-full flex items-center justify-between gap-x-3 mx-auto py-[40px] px-5 md:px-10">
            <div className="text-white text-[20px] sm:[33px] font-dmsans z-40">
                <Link to="/"> DesignHemperor </Link>
            </div>

            <ul
                className={`uppercase flex flex-col lg:hidden ${
                    isOpen ? "left-0" : "left-[-100%]"
                } absolute top-0 left-0 z-10 shadow-xl px-5 transition-all h-screen w-[75%] sm:w-[50%] bg-black pt-[150px] gap-y-3 gap-x-[70px] items-start font-outfit font-semibold text-white text-[18px] leading-[24px]`}
            >
                <Link to="/" onClick={handleClick}>Home</Link>
                <Link to="/about" onClick={handleClick}>About</Link>
                <Link to="/contact" onClick={handleClick}>Contact Me</Link>
            </ul>

            <ul className="hidden lg:flex gap-x-[70px] items-center w-fit font-dmsans text-[#ffffffb4] font-normal text-[18px] leading-[24px] uppercase">
                <Link to="/">Home
                    <div
                        className={`${
                            pathname === "/" && "border border-[#fff]"
                        } w-[80%] rounded-full mx-auto mt-1`}
                    ></div>
                </Link>

                <Link to="/about">About
                    <div
                        className={`${
                            pathname === "/about" && "border border-[#fff]"
                        } w-[80%] rounded-full mx-auto mt-1`}
                    ></div>
                </Link>

                <Link to="/contact">Contact Me
                    <div
                        className={`${
                            pathname === "/case-studies" && "border border-[#fff]"
                        } w-[80%] rounded-full mx-auto mt-1`}
                    ></div>
                </Link>
            </ul>

            <button
					onClick={toggleMenu}
					className="text-white focus:outline-none lg:hidden">
					{isOpen ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-10 w-10 transition duration-300 transform rotate-90"
							fill="none"
							viewBox="0 0 24 24"
							stroke="#fff">
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
							className="h-10 w-10 transition duration-300 transform rotate-0"
							fill="none"
							viewBox="0 0 24 24"
							stroke="#fff">
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
  )
}

export default Header;