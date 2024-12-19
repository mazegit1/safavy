import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {  
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaTelegramPlane
} from 'react-icons/fa';
import LightAndDarkMode from '../components/LightAndDarkMode';

const Elaqe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Ad/Soyad vacibdir.";
    if (!formData.email) tempErrors.email = "E-poçt vacibdir.";
    if (!formData.message) tempErrors.message = "Mesaj vacibdir.";
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm());

    if (!Object.keys(errors).length) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        alert("Mesajınız uğurla göndərildi!");
        setFormData({ name: '', email: '', message: '' });
      }, 2000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className={`contact-section py-56 ${darkMode ? 'bg-black text-white' : 'bg-gray-50 text-black'}`}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Sualınız var?</h2>
        <p className="text-lg">Bizimlə əlaqə saxlayın.</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="container mx-auto mt-8">
        <form onSubmit={handleSubmit} className={`bg-gray-200 p-8 ${darkMode ? 'bg-gray-800' : ''} text-black rounded-lg shadow-lg`}>
          <div className="form-group mb-6">
            <label htmlFor="name" className="block text-black mb-2">Ad/Soyad:</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Enter your full name" 
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-300 text-black rounded-lg" 
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>

          <div className="form-group mb-6">
            <label htmlFor="email" className="block text-black mb-2">E-poçt:</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter your email" 
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-300 text-black rounded-lg" 
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          <div className="form-group mb-6">
            <label htmlFor="message" className="block text-black mb-2">Mesaj:</label>
            <textarea 
              id="message" 
              placeholder="Enter your message" 
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-gray-300 text-black rounded-lg"></textarea>
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting} 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg">
            {isSubmitting ? 'Göndərilir...' : 'Göndər'}
          </button>

          <button 
            type="button" 
            onClick={() => setFormData({ name: '', email: '', message: '' })}
            className="mt-4 w-full bg-gray-400 hover:bg-gray-500 text-white py-3 px-6 rounded-lg">
            Sifarişi Təzələyin
          </button>
        </form>

        <div className="contact-info mt-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center">
            <h4 className="text-xl font-semibold mb-4">Bizimlə Əlaqə</h4>
            <div className="social-icons flex justify-center space-x-4">
              <a href="tel:+1234567890" className="text-gray-300 hover:text-blue-600"><FaPhoneAlt /></a>
              <a href="mailto:example@example.com" className="text-gray-300 hover:text-blue-600"><FaEnvelope /></a>
              <a href="https://facebook.com" className="text-gray-300 hover:text-blue-600"><FaFacebookF /></a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-blue-600"><FaTwitter /></a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-blue-600"><FaLinkedinIn /></a>
              <a href="https://whatsapp.com" className="text-gray-300 hover:text-blue-600"><FaWhatsapp /></a>
              <a href="https://telegram.org" className="text-gray-300 hover:text-blue-600"><FaTelegramPlane /></a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <LightAndDarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default Elaqe;
