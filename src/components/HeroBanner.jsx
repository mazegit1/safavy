import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Import your image
import sliderImage from "../images/sliderImage.svg";

const HeroBanner = () => {
  const [animationKey, setAnimationKey] = useState(0); // Key to force re-render and animation
  const [isLeft, setIsLeft] = useState(true); // Direction for animation

  // Animation variants
  const variants = {
    enterFromLeft: { x: "-100%", opacity: 0, scale: 0.9, rotate: -10 },
    enterFromRight: { x: "100%", opacity: 0, scale: 0.9, rotate: 10 },
    center: { x: 0, opacity: 1, scale: 1, rotate: 0 },
    exitToLeft: { x: "-100%", opacity: 0, scale: 0.9, rotate: -10 },
    exitToRight: { x: "100%", opacity: 0, scale: 0.9, rotate: 10 },
  };

  const handleNext = () => {
    setIsLeft(false); // Set direction to right
    setAnimationKey((prev) => prev + 1); // Trigger animation
  };

  const handlePrev = () => {
    setIsLeft(true); // Set direction to left
    setAnimationKey((prev) => prev + 1); // Trigger animation
  };

  return (
    <div className="banner mt-20 relative overflow-hidden bg-gradient-to-r  bg-black p-2 rounded-lg shadow-2xl">
      {/* Left Navigation Button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black p-3 rounded-full z-10 shadow-lg hover:scale-110 transition-transform"
      >
        <FaChevronLeft size={24} />
      </button>

      {/* Animated Image */}
      <AnimatePresence initial={false} custom={isLeft}>
        <motion.img
          key={animationKey} // Force re-render on key change
          src={sliderImage}
          className="w-full rounded-lg shadow-xl"
          custom={isLeft}
          initial={isLeft ? "enterFromLeft" : "enterFromRight"}
          animate="center"
          exit={isLeft ? "exitToLeft" : "exitToRight"}
          variants={variants}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        />
      </AnimatePresence>

      {/* Right Navigation Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black p-3 rounded-full z-10 shadow-lg hover:scale-110 transition-transform"
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
};

export default HeroBanner;
