import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Page2 = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-4"
    >
      <motion.img
        src="https://res.cloudinary.com/dcpagrefp/image/upload/v1/ybt4kcxcmda4hbgwxqbx.gif"
        alt="Please"
        className="w-64 h-64 object-cover rounded-lg shadow-lg mb-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.1 }}
      />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center mb-8"
      >
        <p className="text-2xl text-pink-600 font-semibold mb-4">
          I think you stole my heart. 💝<br />
          Can I steal you for a lunch date? 💐
        </p>
        <p className="text-pink-400">
          Date: 14.02.2025 | Place: Solista
        </p>
      </motion.div>
      <div className="space-x-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate('/page3')}
          className="bg-pink-200 text-pink-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-pink-300 transition-colors"
        >
          No
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate('/page6')}
          className="bg-pink-400 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-pink-500 transition-colors"
        >
          Yes
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Page2;