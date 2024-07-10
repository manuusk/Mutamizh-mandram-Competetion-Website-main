"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className="bg-[#543310]  z-10">
        <nav className="flex justify-between items-center w-[99%] p-1 mx-auto">
          <div>
            <img
              src="/Assets/img/bitmain.png"
              alt="logo"
              height={500}
              width={300}
              align="left"
            />
          </div>
          <div
            className={`duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 ${
              menuOpen ? "top-[60px] bg-[#543310]" : "top-[-100%]"
            } md:w-auto w-full flex items-center px-5 transition-all ease-in-out z-20`}
          >
            <ul className="flex md:flex-row flex-col  font-semibold text-medium md:items-center md:gap-[4vw] text-[#F8F4E1] gap-8">
              <li>
                <a href="#home" onClick={onToggleMenu}>Home</a>
              </li>
              <li>
                <a href="#about" onClick={onToggleMenu}>About</a>
              </li>
              <li>
                <a href="#gallery" onClick={onToggleMenu}>Gallery</a>
              </li>
              <li>
                <a href="#details" onClick={onToggleMenu}>Schedule</a>
              </li>
              <li className="md">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfeIVl1OVQhwxd5eNKCv7VDKmbfar-hLCVJQ-lo_gcowrz6mA/viewform"
                  target="_blank"
                  className="bg-[#AF8F6F] text-[#543310] block px-3 py-1 md:px-5 md:py-2 rounded-full"
                  onClick={onToggleMenu}
                >
                  Register
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center md:hidden  gap-6">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfeIVl1OVQhwxd5eNKCv7VDKmbfar-hLCVJQ-lo_gcowrz6mA/viewform"
              target="_blank"
              className="bg-[#AF8F6F] text-[#543310] hidden md:block px-3 py-1 md:px-5 md:py-2 rounded-full"
            >
              Register
            </a>
            <span className=" " >
              {menuOpen ? (
                <IoClose
                  onClick={onToggleMenu}
                  className="text-3xl text-[#AF8F6F] cursor-pointer md:hidden"
                  aria-label="Close Menu"
                />
              ) : (
                <GiHamburgerMenu
                  onClick={onToggleMenu}
                  className="text-3xl text-[#AF8F6F] cursor-pointer md:hidden"
                  aria-label="Open Menu"
                />
              )}
            </span>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
