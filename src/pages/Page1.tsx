import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Page1 = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-4"
    >
      <div className="text-3xl md:text-4xl text-pink-600 mb-8">
        <TypeAnimation
          sequence={['Hi Nadia Afrin Asha!']}
          wrapper="span"
          speed={50}
          cursor={true}
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate('/page2')}
        className="bg-pink-400 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-pink-500 transition-colors"
      >
        Hi?
      </motion.button>
    </motion.div>
  );
};

export default Page1;