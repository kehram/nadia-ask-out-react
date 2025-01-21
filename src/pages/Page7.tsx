import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import Confetti from 'react-confetti';

const Page7 = () => {
  const imageUrl = "https://res.cloudinary.com/dcpagrefp/image/upload/f_auto,q_auto/ojxpvx9tp9ohxxrf4gpf";

  // Preload image
  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-white flex flex-col items-center justify-center p-4"
    >
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        recycle={false}
        numberOfPieces={200}
        colors={['#EC4899', '#F472B6', '#FDF2F8', '#FCE7F3']}
      />

      <motion.img
        src={imageUrl}
        alt="Happy couple"
        className="w-80 h-80 object-cover rounded-lg shadow-lg mb-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-8"
      >
        <p className="text-3xl text-pink-600 font-semibold mb-4">
          So... Issa date? 😘
        </p>
        <p className="text-xl text-pink-500 mb-8">
          I knew you would say yes! 🫶
        </p>
      </motion.div>

      <div className="space-x-4">
        <motion.a
          href="tel:+8801798557540"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="inline-flex items-center bg-gradient-to-r from-pink-500 to-pink-400 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:from-pink-600 hover:to-pink-500 transition-all text-sm"
        >
          <Phone className="mr-2" size={16} />
          Call Me
        </motion.a>
        <motion.a
          href="https://m.me/hasib.mamur"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:from-blue-700 hover:to-blue-600 transition-all text-sm"
        >
          <MessageCircle className="mr-2" size={16} />
          Messenger
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Page7;