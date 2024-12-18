import React from 'react';
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <>
      <div className="qeydiyyat flex flex-col items-center justify-center gap-12 py-6 text-center">
        <h1 className="text-3xl md:text-4xl font-medium text-blue-800">
          Elə indi <span className="text-blue-800 text-4xl font-semibold">Qeydiyatdan keç,</span> sən de<span className="text-blue-800 text-4xl font-semibold">Safavy</span> ilə birlikdə uğura doğru irəlilə!
        </h1>
        <a href="/">
          <div className="button text-3xl font-medium px-12 py-4 rounded-xl border-gray-400 hover:bg-blue-800 transition-all ease-in-out duration-200 shadow-xl text-white bg-blue-900 w-fit">
            <h1>Qeydiyyatdan keç</h1>
          </div>
        </a>
      </div>

      <div className="footer bg-gray-100 py-10">
        {/* Top Section */}
        <div className="footer-top grid grid-cols-1 md:grid-cols-3 px-10 md:px-32 lg:px-96 gap-10 justify-items-center">
          <div className="part flex flex-col text-lg md:text-2xl font-semibold">
            <a className='hover:text-blue-600 transition-all ease-in-out duration-200' href="">Haqqimizda</a>
            <a className='hover:text-blue-600 transition-all ease-in-out duration-200' href="">Bloq</a>
            <a className='hover:text-blue-600 transition-all ease-in-out duration-200' href="">Əlaqə</a>
          </div>
          <div className="part flex flex-col text-lg md:text-2xl font-semibold">
            <a className='hover:text-blue-600 transition-all ease-in-out duration-200' href="">Təhlükəsizlik qaydaları</a>
            <a className='hover:text-blue-600 transition-all ease-in-out duration-200' href="">Xəta bildir</a>
            <a className='hover:text-blue-600 transition-all ease-in-out duration-200' href="">F.A.Q</a>
          </div>
          <div className="part flex flex-col text-lg md:text-2xl font-semibold">
            <a className='hover:text-blue-600 transition-all ease-in-out duration-200' href="">Karyera</a>
            <a className='hover:text-blue-600 transition-all ease-in-out duration-200' href="">İstifadə qaydaları</a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom flex flex-wrap items-center justify-center gap-8 md:gap-20 pt-10">
          <motion.div
            className="card flex items-center text-lg md:text-2xl lg:text-5xl font-medium gap-3 md:gap-6 border border-gray-300 rounded-md hover:bg-gray-100 hover:shadow-xl transition-all ease-in-out duration-200 w-fit px-4 py-2 md:px-6 md:py-3"
          >
            <FaApple className='text-blue-500' />
            <h1>App Store</h1>
          </motion.div>
          <motion.div
            className="card flex items-center text-lg md:text-2xl lg:text-5xl font-medium gap-3 md:gap-6 border border-gray-300 rounded-md hover:bg-gray-100 hover:shadow-xl transition-all ease-in-out duration-200 w-fit px-4 py-2 md:px-6 md:py-3"
          >
            <FaGooglePlay className='text-blue-500' />
            <h1>Google Play</h1>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Footer;
