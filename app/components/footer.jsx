import React from "react";
import Image from "next/image";
import { BsYoutube } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className=" bg-[#543310]  w-screen p-4 ">
      <div className="w-full  flex container mx-auto flex-col  md:flex-row  md:justify-between  gap-6 md:gap-0   justify-center items-center ">
        <div>
          <Image
            src="/Assets/img/bit_logo_white.png"
            width={130}
            height={130}
            
          />
        </div>
        <div>
          <h3 className="text-center text-[#AF8F6F] md:mb-6 font-bold text-xl " >
            Alathukombai - Post, Sathyamangalam - 638 401, Erode District, Tamil
            Nadu, India.<br></br>Contact: +91 88381 20234, +91 80563 39378, +91 94428 05455, +91 70106 99437.
          </h3>
          <p  className=" hidden md:block text-center   font-semibold  text-[#AF8F6F]  " > &copy; All rights Reserved </p>
        </div>
        <div>
          <ul className="flex flex-row gap-3 " >
            <li>
              <a href="https://youtube.com/@muthamizhmandrambit8148?si=1i9O8YVScHNhuA05"> <BsYoutube className="text-white  text-3xl " /> </a>
            </li>
            <li>
              <a href="https://www.instagram.com/muthamizh_mandram_bit?igsh=MW9zN2Nua2licXhq"> <FaInstagram className="text-white  text-3xl " /> </a>
            </li>
            
          </ul>
        </div>
        <p  className="text-center md:hidden font-semibold  text-[#AF8F6F]   " > &copy; All rights Reserved</p>
      </div>
    </footer>
  );
}
