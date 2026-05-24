import { Link } from 'react-router';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background large 404 text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[50vw] font-black text-foreground/[0.02] leading-none" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>404</span>
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#C9A96E] font-black tracking-[0.5em] text-sm uppercase mb-6">Error Code: 404</p>
          <h1
            className="text-7xl md:text-9xl font-black text-foreground mb-6 leading-none"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            LOST IN THE <span className="text-[#E8002D]">DRIP</span>
          </h1>
          <p className="text-foreground/40 mb-12 max-w-md mx-auto font-medium tracking-wide">
            The page you're looking for doesn't exist or has been moved to another drop. Let's get you back to the collection.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 bg-[#E8002D] text-white px-12 py-5 font-black tracking-widest text-lg hover:scale-105 transition-transform"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              <ShoppingBag size={20} />
              SHOP ANYWAY
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-3 border border-border text-foreground px-12 py-5 font-black tracking-widest text-lg hover:bg-foreground hover:text-background transition-all"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              BACK TO BASE
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
