import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Page5 = () => {
  const navigate = useNavigate();
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const moveButton = () => {
    if (noButtonRef.current) {
      const buttonWidth = noButtonRef.current.offsetWidth;
      const buttonHeight = noButtonRef.current.offsetHeight;
      const maxX = window.innerWidth - buttonWidth;
      const maxY = window.innerHeight - buttonHeight;
      
      const x = Math.random() * maxX;
      const y = Math.random() * maxY;
      
      noButtonRef.current.style.position = 'absolute';
      noButtonRef.current.style.left = `${x}px`;
      noButtonRef.current.style.top = `${y}px`;
    }
  };

  useEffect(() => {
    const button = noButtonRef.current;
    if (button) {
      button.addEventListener('touchstart', moveButton, { passive: true });
      button.addEventListener('mouseenter', moveButton);
      
      return () => {
        button.removeEventListener('touchstart', moveButton);
        button.removeEventListener('mouseenter', moveButton);
      };
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-white flex flex-col items-center justify-center p-4"
    >
      <div className="w-full max-w-md aspect-auto mb-8">
        <motion.img
          src="https://res.cloudinary.com/dcpagrefp/image/upload/v1/ua4vwlwbwnnzbjdw1nyy.gif"
          alt="Evil"
          className="w-full h-auto rounded-lg shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center mb-8"
      >
        <p className="text-2xl text-pink-600 font-semibold mb-4">
          Last chance! You know you want to say yes! 😈
        </p>
        <p className="text-pink-400">
          Date: 14.02.2025 | Place: Solista
        </p>
      </motion.div>

      <div className="space-x-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate('/page7')}
          className="bg-pink-400 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-pink-500 transition-colors"
        >
          Yes
        </motion.button>
        <motion.button
          ref={noButtonRef}
          className="bg-pink-200 text-pink-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-pink-300 transition-colors"
        >
          No
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Page5;