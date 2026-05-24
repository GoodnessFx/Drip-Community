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

  const letters = ['D', 'R', 'I', 'P'];
  const communityLetters = 'COMMUNITY'.split('');

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 bg-[#080808] z-[100] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="flex items-center justify-center w-[80%] mb-2">
        {letters.map((letter, index) => (
          <motion.span
            key={`${letter}-${index}`}
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: index * 0.1,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-[20vw] leading-none font-black text-[#E8DCC8]"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      <div className="flex items-center gap-2 md:gap-4 mb-4">
        {communityLetters.map((letter, index) => (
          <motion.span
            key={`${letter}-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5 + index * 0.05,
              duration: 0.4,
            }}
            className="text-lg md:text-2xl font-bold tracking-[0.3em] text-[#C9A96E]"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="text-[#C9A96E] text-xs md:text-sm tracking-[0.5em] font-medium"
      >
        FASHION WITHOUT LIMIT
      </motion.p>

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
