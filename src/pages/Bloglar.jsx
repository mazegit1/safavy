import React from 'react';
import { motion } from 'framer-motion';
import blogbg from '../images/blog-bg.png';
import BlogCard from '../components/BlogCard';

const Bloglar = () => {
  return (
    <>
      <div className="blog">
        <motion.div 
          className="blog-top flex items-center gap-8 flex-col text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={blogbg} className="w-full" alt="Blog Background" />
          <h1 className="font-semibold md:text-3xl text-3xl xl:text-4xl">Bloq</h1>
          <h3 className="text-xl xl:text-3xl md:text-2xl  mt-2">
            Bizi izləyin! Rəqəmsal təhsil və yenilikdən xəbərdar olun!
          </h3>
        </motion.div>

        <motion.div 
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </motion.div>
      </div>
      
    </>
  );
}

export default Bloglar;
