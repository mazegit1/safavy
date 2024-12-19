import React, { useState } from "react";
import logo from "../images/logo.svg";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { BsCartFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle popups
  const toggleProfilePopup = () => {
    setShowProfilePopup(!showProfilePopup);
    setShowCartPopup(false); // Close cart popup when profile is clicked
  };

  const toggleCartPopup = () => {
    setShowCartPopup(!showCartPopup);
    setShowProfilePopup(false); // Close profile popup when cart is clicked
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header fixed top-0 left-0 w-full z-50 shadow-lg transition-all duration-300 bg-white text-[#0E6097]">
      <div className="flex items-center justify-between px-6 lg:px-16 py-4">
        {/* Logo */}
        <a href="/" className="header-part1 flex items-center">
          <img src={logo} alt="main logo" className="h-10" />
        </a>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMenu}
            className="cursor-pointer p-2 rounded-md bg-gray-200 hover:bg-gray-300"
          >
            <GiHamburgerMenu size={24} />
          </motion.div>
        </div>

        {/* Navigation Links */}
        <div
          className={`header-part2 text-lg flex flex-col lg:flex-row gap-5 absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent  p-6 lg:p-0 transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          } lg:flex`}
        >
          <a
            className="hover:text-gray-500 transition-all ease-in-out duration-200"
            href="/"
          >
            Ana səhifə
          </a>
          <a
            className="hover:text-gray-500 transition-all ease-in-out duration-200"
            href="/kateqoriyalar"
          >
            Kateqoriyalar
          </a>
          <a
            className="hover:text-gray-500 transition-all ease-in-out duration-200"
            href="/bloqlar"
          >
            Bloqlar
          </a>
          <a
            className="hover:text-gray-500 transition-all ease-in-out duration-200"
            href="/elaqe"
          >
            Əlaqə
          </a>
          <a
            className="hover:text-gray-500 transition-all ease-in-out duration-200"
            href="/kurslar"
          >
            Kurslar
          </a>
        </div>

        {/* Search Bar */}
        <div className="header-part3 hidden lg:block">
          <motion.div
            className="search-input-container"
            animate={isFocused ? { scale: 1.05 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px",
              borderRadius: "20px",
              backgroundColor: "#F7F7F7",
              border: "1px solid #E0E0E0",
              width: "300px",
            }}
          >
            <FiSearch color="#1A73E8" size={20} style={{ marginRight: "8px" }} />
            <input
              type="text"
              placeholder="Search"
              value={inputValue}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onChange={(e) => setInputValue(e.target.value)}
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
                fontSize: "16px",
                width: "100%",
              }}
            />
          </motion.div>
        </div>

        {/* Icons */}
        <div className="header-part4 flex gap-5 relative items-center">
          <div className="relative">
            <motion.div
              onClick={toggleProfilePopup}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <AiOutlineUser size={24} />
            </motion.div>

            {showProfilePopup && (
              <div
                className="absolute top-12 right-0 bg-white text-black shadow-md border border-black rounded-md p-4 z-10"
                style={{ minWidth: "150px" }}
              >
                <p className="text-md">Profile Settings</p>
                <p className="text-md">Logout</p>
              </div>
            )}
          </div>

          <div className="relative">
            <motion.div
              onClick={toggleCartPopup}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <a href="/shop" className="wrapper">
                <BsCartFill size={24} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
