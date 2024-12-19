import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const LightAndDarkMode = ({ darkMode, setDarkMode }) => {
  return (
    <div className="fixed bottom-4 left-4 z-50 cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <FaSun size={28} color="white" /> : <FaMoon size={28} color="black" />}
    </div>
  );
};

export default LightAndDarkMode;
