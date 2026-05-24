import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WhatsAppIcon } from '../Icons/WhatsAppIcon';

export function WhatsAppFloat() {
  return (
    <AnimatePresence>
      <motion.a
        href="https://wa.me/2348133733316"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] flex items-center justify-center group"
      >
        <WhatsAppIcon size={28} />
        <div className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
          Chat with us! 💬
        </div>
      </motion.a>
    </AnimatePresence>
  );
}
