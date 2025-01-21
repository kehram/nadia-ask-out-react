import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { Phone, MessageCircle, Calendar, MapPin } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const images = [
  "https://res.cloudinary.com/dcpagrefp/image/upload/f_auto,q_auto/wnzdax7prwd2g2iov59l",
  "https://res.cloudinary.com/dcpagrefp/image/upload/f_auto,q_auto/kpggbzlxnkz867039kwx",
  "https://res.cloudinary.com/dcpagrefp/image/upload/f_auto,q_auto/nvuahxbc7aexkkzt7yf8",
  "https://res.cloudinary.com/dcpagrefp/image/upload/f_auto,q_auto/v1737496826/Screenshot_2025-01-22_040009_vzrpo0.png"
];

const Page6 = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Preload images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered) {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [isHovered]);

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
      
      <motion.div
        className="w-80 h-80 rounded-2xl shadow-2xl overflow-hidden mb-8 relative group"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt="Date preview"
            className="w-full h-full object-cover transform transition-transform group-hover:scale-110"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="text-white text-sm">Image {currentImage + 1} of {images.length}</p>
        </div>
      </motion.div>

      <div className="text-center mb-8">
        <TypeAnimation
          sequence={[
            'I love you so much! 💕',
            1500,
            'Yay! I\'m so excited! 🎉',
            1500,
            'Can\'t wait for February 14th! 🥳',
            1500,
            'So, I can even call you my Valentine, too? OMG! 🤩',
            1500,
            'It\'s a bit sad that I can\'t come over 🙁',
            1500,
          ]}
          wrapper="h2"
          speed={50}
          repeat={2}
          className="text-3xl text-pink-600 font-bold mb-4"
        />
        <div className="flex items-center justify-center space-x-4 text-pink-400 mt-4">
          <Calendar className="w-5 h-5" />
          <span>14.02.2025</span>
          <MapPin className="w-5 h-5 ml-2" />
          <span>Solista</span>
        </div>
      </div>

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

export default Page6;