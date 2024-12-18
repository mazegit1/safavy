import React, { useState, useEffect } from "react";
import statistics from '../images/statistics.svg';
import { motion } from "framer-motion";

const Statistics = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const statisticsSection = document.querySelector('.statistics');
      const rect = statisticsSection.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
      setInView(isInView);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      className="statistics bg-cover bg-center py-20 my-6 mx-auto text-white text-xl font-semibold" 
      initial={{ opacity: 0, y: 100 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{
        backgroundImage: `url(${statistics})`,
      }}
    >
      <div className="title text-center py-4 text-3xl">
        <h1>Safavy - Elm və bacarıqlara yiyələnmək istəyən insanlara təhsili əlçatan edir...</h1>
      </div>
      <div className="content pt-12 flex flex-wrap justify-center gap-6 px-4">
        <div className="stat-card bg-black px-6 py-4 rounded-xl flex flex-col items-center text-center">
          <h3>Mövcud kurs sayı</h3>
          <h1>
            {inView ? (
              <CountTo target={5234} duration={2000} />
            ) : (
              "5,234"
            )}
          </h1>
        </div>
        <div className="stat-card bg-black px-6 py-4 rounded-xl flex flex-col items-center text-center">
          <h3>Tələbələrin sayı</h3>
          <h1>
            {inView ? (
              <CountTo target={3334} duration={2000} />
            ) : (
              "3,334"
            )}
          </h1>
        </div>
        <div className="stat-card bg-black px-6 py-4 rounded-xl flex flex-col items-center text-center">
          <h3>Təlimçilərin sayı</h3>
          <h1>
            {inView ? (
              <CountTo target={6434} duration={2000} />
            ) : (
              "6,434"
            )}
          </h1>
        </div>
      </div>
    </motion.div>
  );
};

const CountTo = ({ target, duration }) => {
  const [count, setCount] = useState(0);
  const increment = target / (duration / 16.67); // Approximate frame time (60 FPS)

  useEffect(() => {
    let timer;
    if (count < target) {
      timer = setTimeout(() => setCount(count + increment), 16.67);
    }
    return () => clearTimeout(timer);
  }, [count, target, increment]);

  return <>{count.toFixed()}</>;
};

export default Statistics;
