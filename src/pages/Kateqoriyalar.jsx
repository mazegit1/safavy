import React from 'react';
import { IoBusiness } from "react-icons/io5";
import { FaLaptop, FaMoneyBillWave, FaLanguage, FaOpencart } from "react-icons/fa";
import { GiComputerFan } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";
import { SiGooglemarketingplatform } from "react-icons/si";
import categoriesbg from '../images/categories-bg.png';
import { motion } from 'framer-motion';

const Kateqoriyalar = () => {
  return (
    <>
      <div className="category">
        {/* Category Top Section */}
        <motion.div 
          className="category-top py-32 mt-20 relative flex flex-col items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${categoriesbg})` }}
        >
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
            Kateqoriyalar
          </h1>
        </motion.div>

        {/* Category Bottom Section */}
        <motion.div 
          className="category-bottom grid grid-cols-2 md:grid-cols-4 gap-6 p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="card flex items-center text-lg md:text-xl font-medium gap-3 bg-white shadow-lg rounded-lg p-4">
            <IoBusiness className="text-blue-500 text-3xl" />
            <h1>Biznes</h1>
          </div>

          <div className="card flex items-center text-lg md:text-xl font-medium gap-3 bg-white shadow-lg rounded-lg p-4">
            <FaLaptop className="text-blue-500 text-3xl" />
            <h1>Texnologiya</h1>
          </div>

          <div className="card flex items-center text-lg md:text-xl font-medium gap-3 bg-white shadow-lg rounded-lg p-4">
            <FaMoneyBillWave className="text-blue-500 text-3xl" />
            <h1>Maliyyə</h1>
          </div>

          <div className="card flex items-center text-lg md:text-xl font-medium gap-3 bg-white shadow-lg rounded-lg p-4">
            <FaLanguage className="text-blue-500 text-3xl" />
            <h1>Dillər</h1>
          </div>

          <div className="card flex items-center text-lg md:text-xl font-medium gap-3 bg-white shadow-lg rounded-lg p-4">
            <GiComputerFan className="text-blue-500 text-3xl" />
            <h1>İnşaat</h1>
          </div>

          <div className="card flex items-center text-lg md:text-xl font-medium gap-3 bg-white shadow-lg rounded-lg p-4">
            <MdDesignServices className="text-blue-500 text-3xl" />
            <h1>Dizayn Xidməti</h1>
          </div>

          <div className="card flex items-center text-lg md:text-xl font-medium gap-3 bg-white shadow-lg rounded-lg p-4">
            <SiGooglemarketingplatform className="text-blue-500 text-3xl" />
            <h1>Marketinq</h1>
          </div>

          <div className="card flex items-center text-lg md:text-xl font-medium gap-3 bg-white shadow-lg rounded-lg p-4">
            <FaOpencart className="text-blue-500 text-3xl" />
            <h1>E-ticarət</h1>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Kateqoriyalar;
