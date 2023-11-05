import { FiSearch } from "react-icons/fi"; 
import { HashLink } from "react-router-hash-link";
import logo from "../assets/images/Logo.svg";
import { useState } from "react";



const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="container mx-auto px-16 my-12 relative bg-transparent z-50">
      <div className="hidden md:flex justify-between items-stretch h-full bg-[#101418]">
        <div className=" w-1/12">
          <img src={logo} alt="logo" className="h-full w-full object-cover" />
        </div>
        <ul className="flex justify-between items-center w-2/5 text-white-yellow font-bold text-xl">
          <li className="">
            <HashLink smooth to="/">
              Home
            </HashLink>
          </li>
          <li className="cursor-pointer">
            <HashLink smooth to="/#about">
              About Us
            </HashLink>
          </li>
          <li className="cursor-pointer">
            <HashLink smooth to="/#special">
              Special
            </HashLink>
          </li>
          <li className="cursor-pointer">
            <HashLink smooth to="/#menu">
              Menu
            </HashLink>
          </li>

          <li className=" cursor-pointer">
            <FiSearch color="#A08040" />
          </li>
        </ul>
        <div className="w-1/4 bg-main-gold text-center m-0 flex justify-center items-center">
          <HashLink smooth to="/reservation">
            <p className="font-bold text-2xl text-white relative after:absolute after:w-8 after:h-[2px] after:bg-white after:block after:top-1/2 after:-right-10 before:absolute before:w-8 before:h-[2px] before:bg-white before:block before:top-1/2 before:-left-10">
              Book Now
            </p>
          </HashLink>
        </div>
      </div>
      <div className="md:hidden flex justify-between items-center p-2 h-full bg-[#101418]">
        <div className=" w-1/6">
          <img src={logo} alt="logo" className="h-full w-full object-cover" />
        </div>
        <ul
          className={`${
            isNavOpen ? "flex flex-col" : "hidden"
          } justify-between items-center w-2/5 text-white-yellow font-bold text-xl`}
        >
          <li className="">
            <HashLink smooth to="/">
              Home
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#about">
              About Us
            </HashLink>
          </li>

          <li>
            <HashLink smooth to="#special">
              Special
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#menu">
              Menu
            </HashLink>
          </li>
          <li className=" cursor-pointer">
            <FiSearch color="#A08040" />
          </li>
          <li className="w-1/4 bg-main-gold text-center m-0 flex justify-center items-center">
            <HashLink smooth to="/reservation">
              <p className="font-bold text-2xl text-white relative after:absolute after:w-8 after:h-[2px] after:bg-white after:block after:top-1/2 after:-right-10 before:absolute before:w-8 before:h-[2px] before:bg-white before:block before:top-1/2 before:-left-10">
                Book Now
              </p>
            </HashLink>
          </li>
        </ul>
        <div className="relative">
          <div
            className="absolute cursor-pointer right-5 top-1/2 translate-x-[-5%] translate-y-[-50%] z-100 transition-all duration-700 ease-in-out"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <div
              className={`w-[30px] h-[3px] bg-white-yellow my-2 transition duration-300 ease-in-out ${
                !isNavOpen
                  ? "block"
                  : "opacity-50 group-hover:opacity-100 transform -rotate-45 translate-x-[-5px] translate-y-[6px]"
              }`}
            ></div>
            <div
              className={`w-[30px] h-[3px] bg-white-yellow my-2 transition duration-300 ease-in-out ${
                !isNavOpen
                  ? "block"
                  : "opacity-50 group-hover:opacity-100 transition-all duration-700 ease-in-out w-0"
              }`}
            ></div>
            <div
              className={`w-[30px] h-[3px] bg-white-yellow my-2 transition duration-300 ease-in-out ${
                !isNavOpen
                  ? "block"
                  : "opacity-50 group-hover:opacity-100 transform rotate-45 translate-x-[-5px] translate-y-[-6px]"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header