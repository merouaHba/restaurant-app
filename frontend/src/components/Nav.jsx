import  { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 p-4">
      <div className="flex justify-between items-center">
        <div className="text-white text-2xl">
          <img src="logo.svg" alt="Logo Image" className="h-10 w-10" />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <div className="h-1 w-6 my-1 bg-white"></div>
            <div className="h-1 w-6 my-1 bg-white"></div>
            <div className="h-1 w-6 my-1 bg-white"></div>
          </button>
        </div>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:w-auto`}
        >
          <li>
            <a href="#" className="text-white hover:text-blue-400 mx-2">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-400 mx-2">
              Solutions
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-400 mx-2">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-400 mx-2">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-400 mx-2">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
