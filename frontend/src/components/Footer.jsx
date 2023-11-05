import { AiFillMail } from 'react-icons/ai';
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";
import logo from '../assets/images/Logo.svg'
import Button from './Button';

const Footer = () => {
  return (
    <>
      <div className="bg-transparent-dark ">
        <div className="container text-white-text mx-auto px-12 py-12">
          <div className="flex justify-between items-center">
            <div className="w-1/4">
              <div className="flex items-center">
                <img src={logo} alt="logo" />
                <h1 className="text-white-yellow text-2xl font-bold ml-3">
                  Golden View Dine
                </h1>
              </div>
              <p className="text-[1rem] leading-6 capitalize tracking-widest mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sollicitudin
              </p>
              <ul className="flex justify-start items-center mt-4">
                <li className="bg-[#333539] rounded-lg p-1 mr-3 flex justify-center items-center">
                  <FaInstagram size={20} />
                </li>
                <li className="bg-[#333539] rounded-lg p-1 mr-3 flex justify-center items-center">
                  <FaTwitter size={20} />
                </li>
                <li className="bg-[#333539] rounded-lg p-1 mr-3 flex justify-center items-center">
                  <FaYoutube size={20} />
                </li>
              </ul>
            </div>
            <div className="w-1/4 flex flex-col justify-center items-center">
              <div className="">
                <h1 className="text-white-text text-xl capitalize font-bold mb-7">
                  Other Links
                </h1>
                <ul className="list-disc text-white-text text-[1rem] leading-6 tracking-widest capitalize flex flex-col gap-y-4">
                  <li>Privacy Policy</li>
                  <li>Terms & conditions </li>
                  <li>Blogs our team </li>
                  <li>Our kitchen</li>
                </ul>
              </div>
            </div>
            <div className="w-1/4">
              <h1 className="text-white-text text-xl capitalize font-bold mb-7">
                Contact Us
              </h1>
              <ul className="text-white-text text-[1rem] leading-6 tracking-widest capitalize flex flex-col gap-y-4">
                <li className="flex items-center">
                  <AiFillMail color="#A08040" size={25} />

                  <p className="ml-3">Gogreendineservice@gmail.com</p>
                </li>
                <li className="flex items-center">
                  <FaLocationDot color="#A08040" size={25} />
                  <p className="ml-3">
                    AZ complex bylane3 Mandari Rd Mumbai 1100867
                  </p>
                </li>
                <li className="flex items-center">
                  <BsTelephoneFill color="#A08040" size={25} />
                  <p className="ml-3">+1800 287 256</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center container px-8 mx-auto py-5 text-white">
        <div className="flex items-center w-1/4">
          <AiFillMail color="#A08040" size={25} />

          <p className="ml-5 text-lg capitalize font-bold text-white-text">Subscribe to our Newsletter</p>
        </div>
        <div className="flex justify-between items-center w-1/2">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            className="text-white border-white-yellow border-2 bg-transparent px-10 py-4 w-3/5"
          />
          <Button text={"Subscribe"} />
        </div>
      </div>
      <div className="bg-transparent-dark">
        <div className="container mx-auto px-8 py-3 text-sm text-white flex flex-col justify-center items-center">
          <p>Copyright © 2022 Golden Dine website</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </>
  );
}

export default Footer