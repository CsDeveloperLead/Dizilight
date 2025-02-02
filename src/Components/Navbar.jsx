import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo1.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="w-full relative mx-auto flex flex-col bg-gradient-to-b from-[#0e0811] to-[#1e213d] rounded-2xl">
        {/* Navbar Container */}
        <div className="w-full h-auto flex justify-between items-center p-2 rounded-2xl xl:px-8 relative z-50">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="Truwix Logo" className="w-36" />
            {/* <span className="text-white text-xl font-bold">Truwix</span> */}
          </NavLink>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex w-auto h-auto gap-6 xl:gap-8 text-white xl:text-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#0085ab] font-semibold" : "hover:text-[#0085ab]"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/project"
              className={({ isActive }) =>
                isActive ? "text-[#0085ab] font-semibold" : "hover:text-[#0085ab]"
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-[#0085ab] font-semibold" : "hover:text-[#0085ab]"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-[#0085ab] font-semibold" : "hover:text-[#0085ab]"
              }
            >
              About Us
            </NavLink>
          </div>

          {/* Contact Button */}
          <NavLink to="/contact" className="hidden md:block">
            <button className="px-5 py-1.5 bg-[#010916] cursor-pointer border font-semibold border-[#0085ab] rounded-3xl text-white xl:px-8 xl:text-lg">
              Contact Us
            </button>
          </NavLink>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMenuOpen && (
          <div className="md:hidden w-full bg-[#1e213d] rounded-b-2xl p-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 text-white ${
                  isActive ? "text-[#0085ab] font-semibold" : "hover:text-[#0085ab]"
                }`
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/project"
              className={({ isActive }) =>
                `block py-2 text-white ${
                  isActive ? "text-[#0085ab] font-semibold" : "hover:text-[#0085ab]"
                }`
              }
              onClick={toggleMenu}
            >
              Projects
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `block py-2 text-white ${
                  isActive ? "text-[#0085ab] font-semibold" : "hover:text-[#0085ab]"
                }`
              }
              onClick={toggleMenu}
            >
              Services
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-2 text-white ${
                  isActive ? "text-[#0085ab] font-semibold" : "hover:text-[#0085ab]"
                }`
              }
              onClick={toggleMenu}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className="block py-2 text-white hover:text-[#0085ab]"
              onClick={toggleMenu}
            >
              Contact Us
            </NavLink>
          </div>
        )}

        {/* Gradient Bottom Border */}
        <div className="h-5 bg-gradient-to-r from-[#124fff] via-[#fdfefe] to-[#2e85ff] rounded-b-full absolute w-full -bottom-1 -z-10"></div>
      </div>
    </>
  );
};

export default Navbar;