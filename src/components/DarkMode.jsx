import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark', !darkMode);
  };

  return (
    <motion.div
      onClick={toggleDarkMode}
      className="fixed bottom-5 left-5 flex items-center space-x-2 bg-white dark:bg-gray-800 p-3 rounded-full cursor-pointer shadow-lg transition-all duration-300"
    >
      {darkMode ? <FaMoon className="text-gray-700 text-xl" /> : <FaSun className="text-yellow-500 text-xl" />}
      <span className="text-gray-700 dark:text-gray-300">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </span>
    </motion.div>
  );
};

export default DarkMode;
