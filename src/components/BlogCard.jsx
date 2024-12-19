import React from 'react';
import { motion } from 'framer-motion';
import { FiEye } from 'react-icons/fi'; // Example React Icon
import BlogThumbnail from '../images/blog-thumbnail.png';

const BlogCard = () => {
  return (
    <motion.div 
      className="blog-card flex items-center justify-center px-8 sm:px-16 md:px-32 lg:px-40 xl:px-56"
      transition={{ duration: 0.3 }}
    >
      <div className="card-container my-8 flex flex-col md:flex-row gap-8 border border-gray-400 bg-gray-100 rounded-lg shadow-lg overflow-hidden">
        <motion.div 
          className="card-left w-full md:w-1/3"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={BlogThumbnail} className="w-full h-auto" alt="Blog Thumbnail" />
        </motion.div>
        
        <motion.div 
          className="card-right w-full md:w-2/3 p-4"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold mb-2">Liderlikdə 5 səviyyə</h1>
          <div className="flex items-center mb-2 text-gray-500">
            <FiEye className="mr-2" /> 
            <span>Baxış sayı: 477</span>
          </div>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima saepe, recusandae totam quisquam illo ratione deserunt fugit quasi quia voluptate quod commodi corporis illum temporibus in dolorum, quas impedit accusamus obcaecati doloribus molestiae ducimus ipsum praesentium?
          </p>
          <h1 className="text-gray-500 text-sm">17.06.2023</h1>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default BlogCard;
