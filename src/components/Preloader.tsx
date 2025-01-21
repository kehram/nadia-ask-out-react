import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Preloader = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/page1');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-white flex items-center justify-center relative overflow-hidden px-4"
    >
      <div className="flex items-center justify-center space-x-4 sm:space-x-12 md:space-x-32 relative">
        {/* Bangladesh Flag */}
        <div className="w-16 h-10 sm:w-24 sm:h-16 md:w-32 md:h-20 rounded-lg shadow-lg overflow-hidden relative">
          <div className="absolute inset-0 bg-[#006a4e]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-9 sm:h-9 md:w-12 md:h-12 rounded-full bg-[#f42a41]" />
        </div>

        {/* Dotted Line Path */}
        <div className="relative w-16 sm:w-24 md:w-32">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 5,
              ease: "linear",
            }}
            className="absolute top-1/2 -translate-y-1/2 h-0.5 overflow-hidden"
          >
            <div className="w-full border-t-2 border-dotted border-pink-400"></div>
          </motion.div>
          <motion.div
            initial={{ left: "0%" }}
            animate={{ left: "100%" }}
            transition={{
              duration: 5,
              ease: "linear",
            }}
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-pink-500 rounded-full"
          />
        </div>

        {/* Germany Flag */}
        <div className="w-16 h-10 sm:w-24 sm:h-16 md:w-32 md:h-20 rounded-lg shadow-lg overflow-hidden">
          <div className="h-full flex flex-col">
            <div className="flex-1 bg-black" />
            <div className="flex-1 bg-[#DD0000]" />
            <div className="flex-1 bg-[#FFCE00]" />
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 sm:w-40 md:w-48 h-1 bg-pink-100 rounded-full overflow-hidden"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          className="h-full bg-pink-500 rounded-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default Preloader;