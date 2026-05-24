import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DarkModeToggle } from '../DarkModeToggle';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('drip_cart') || '[]');
    setCartCount(cart.reduce((sum: number, item: any) => sum + item.quantity, 0));
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Drops', path: '/drops' },
    { name: 'Community', path: '/community' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-nav-bg backdrop-blur-md py-3 shadow-md'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <div className="text-2xl md:text-3xl font-black tracking-tighter" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                <span className="text-foreground">DRIP</span>
                <span className="text-[#C9A96E] ml-1">COMMUNITY</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium tracking-[0.1em] transition-colors hover:text-[#C9A96E] ${
                    location.pathname === link.path ? 'text-[#C9A96E]' : 'text-foreground'
                  }`}
                >
                  {link.name.toUpperCase()}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <DarkModeToggle />
              
              <button className="hidden md:block text-foreground hover:text-[#C9A96E] transition-colors">
                <Search size={20} />
              </button>

              <Link to="/cart" className="relative text-foreground hover:text-[#C9A96E] transition-colors">
                <ShoppingCart size={22} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#E8002D] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-mono font-bold">
                    {cartCount}
                  </span>
                )}
              </Link>

              <Link to="/account" className="hidden md:block text-foreground hover:text-[#C9A96E] transition-colors">
                <span className="text-sm font-bold tracking-wider">ACCOUNT</span>
              </Link>

              <button
                className="lg:hidden text-foreground hover:text-[#C9A96E] transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-background z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="text-3xl font-black tracking-tighter" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                <span className="text-foreground">DRIP</span>
                <span className="text-[#C9A96E] ml-1">COMMUNITY</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-foreground">
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-5xl font-black text-foreground hover:text-[#C9A96E] transition-colors"
                    style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                  >
                    {link.name.toUpperCase()}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 + navLinks.length * 0.1 }}
              >
                <Link
                  to="/account"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-5xl font-black text-foreground hover:text-[#C9A96E] transition-colors"
                  style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                >
                  ACCOUNT
                </Link>
              </motion.div>
            </div>

            <div className="mt-auto pt-12 border-t border-border flex gap-6">
              <a href="https://instagram.com/dripcommunity007" target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-[#C9A96E] text-xs font-bold tracking-widest">
                INSTAGRAM
              </a>
              <a href="https://twitter.com/Dripcommunity00" target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-[#C9A96E] text-xs font-bold tracking-widest">
                TWITTER
              </a>
              <a href="https://wa.me/2348133733316" target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-[#C9A96E] text-xs font-bold tracking-widest">
                WHATSAPP
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
