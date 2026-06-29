import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 bg-[#080808] z-[100] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.16),transparent_40%)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center px-6"
      >
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-[#C9A96E]/12 blur-3xl scale-110" />
          <div className="relative w-40 md:w-52 drop-shadow-[0_0_28px_rgba(201,169,110,0.16)]">
            <img
              src="/images/brand/drip-community-logo.png"
              alt="Drip Community"
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl md:text-7xl font-black text-[#E8DCC8] text-center leading-none"
          style={{ fontFamily: 'Bebas Neue, sans-serif' }}
        >
          DRIP COMMUNITY
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="mt-4 text-[#C9A96E] text-[11px] md:text-sm tracking-[0.45em] font-medium text-center"
        >
          FASHION WITHOUT LIMIT
        </motion.p>
      </motion.div>

      <div className="fixed bottom-0 left-0 w-full h-1 bg-white/5 overflow-hidden">
        <motion.div
          className="h-full bg-[#E8002D]"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </motion.div>
  );
}
