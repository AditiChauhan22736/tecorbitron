import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 bg-white shadow-lg z-50 font-[Poppins] rounded-full mx-auto mt-4"
      style={{ height: "70px", maxWidth: "1100px" }}
    >
      <div className="flex items-center justify-between px-8 h-full">
        {/* Logo */}
        <h1 className="text-xl font-bold text-black">Tecorbitron</h1>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-base">
          <a href="#about" className="hover:text-blue-500 transition">
            About
          </a>
          <a href="#services" className="hover:text-blue-500 transition">
            Services
          </a>
          <a href="#technologies" className="hover:text-blue-500 transition">
            Technologies
          </a>
          <a href="#industries" className="hover:text-blue-500 transition">
            Industries
          </a>
          <a href="#portfolio" className="hover:text-blue-500 transition">
            Portfolio
          </a>
          <a href="#blogs" className="hover:text-blue-500 transition">
            Blogs
          </a>
        </nav>

        {/* Contact Us Button */}
        <button className="hidden md:block px-5 py-2 bg-blue-500 text-white text-base rounded-full hover:bg-blue-600 transition">
          Contact
        </button>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden px-3 py-2 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-600 transition"
          onClick={toggleMobileMenu}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="hidden bg-white rounded-lg md:hidden">
        <nav className="flex flex-col space-y-3 p-4 text-base">
          <a href="#about" className="hover:text-blue-500 transition">
            About
          </a>
          <a href="#services" className="hover:text-blue-500 transition">
            Services
          </a>
          <a href="#technologies" className="hover:text-blue-500 transition">
            Technologies
          </a>
          <a href="#industries" className="hover:text-blue-500 transition">
            Industries
          </a>
          <a href="#portfolio" className="hover:text-blue-500 transition">
            Portfolio
          </a>
          <a href="#blogs" className="hover:text-blue-500 transition">
            Blogs
          </a>
          <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
            Contact
          </button>
        </nav>
      </div>
    </motion.header>
  );
};

// Function to toggle the mobile menu
const toggleMobileMenu = () => {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
};

export default Header;
