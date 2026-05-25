import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { ShoppingBag, Truck, ShieldCheck, Users, RefreshCw, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { WhatsAppIcon } from '../components/Icons/WhatsAppIcon';
import { products } from '../data/products';

export function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredProducts = products.slice(0, 4);

  const socialProof = [
    'Emeka from Lagos just ordered an Oversized Tee ⚡',
    'Chidi from Abuja just copped the Co-ord Set 🔥',
    'Amina from PH just ordered Cargo Pants 📦',
    'Tunde from Ibadan just grabbed the Signature Hoodie ⚡',
  ];

  const [currentProof, setCurrentProof] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProof((prev) => (prev + 1) % socialProof.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/images/hero-section.jfif" 
            alt="Drip Community Hero"
            className="w-full h-full object-cover object-center md:object-[center_15%] transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-background" />
        </div>

        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto"
          >
            <h1
              className="text-[15vw] sm:text-[18vw] md:text-[12vw] font-black text-white leading-[0.8] tracking-tighter mb-8 drop-shadow-2xl"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              FRESH IS NOT<br />OPTIONAL.
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <Link
                to="/shop"
                className="w-full sm:w-auto bg-accent text-white px-12 py-5 font-black tracking-widest hover:scale-105 transition-transform"
                style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.25rem' }}
              >
                SHOP NOW
              </Link>
              <Link
                to="/shop?filter=new"
                className="w-full sm:w-auto border-2 border-white text-white px-12 py-5 font-black tracking-widest hover:bg-accent hover:border-accent transition-all"
                style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.25rem' }}
              >
                NEW ARRIVALS
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-12 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] tracking-[0.3em] text-foreground/50 uppercase font-bold">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-px h-12 bg-gradient-to-b from-[#C9A96E] to-transparent"
            />
          </motion.div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="bg-[#E8002D] py-4 overflow-hidden border-y border-white/10">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="whitespace-nowrap flex items-center gap-8"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-white font-black text-xl md:text-2xl tracking-tighter flex items-center gap-8" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              NEW ARRIVALS ✦ FRESH FITS ✦ PREMIUM SHIRTS ✦ STREETWEAR ✦ NATIONWIDE DELIVERY ✦ DM TO ORDER ✦ FASHION WITHOUT LIMIT ✦ DRIP COMMUNITY ✦
            </span>
          ))}
        </motion.div>
      </div>

      {/* Social Proof Ticker */}
      <div className="bg-muted py-3 text-center border-b border-border">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentProof}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-xs md:text-sm text-foreground/80 font-medium tracking-wide"
          >
            {socialProof[currentProof]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Featured Products */}
      <section className="py-24 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2
                className="text-6xl md:text-8xl font-black text-foreground leading-none"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                LATEST DROPS
              </h2>
              <p className="text-[#C9A96E] tracking-[0.2em] font-bold text-sm mt-2">PREMIUM STREETWEAR COLLECTION</p>
            </div>
            <Link to="/shop" className="text-foreground border-b-2 border-[#E8002D] pb-1 font-bold tracking-widest text-sm hover:text-[#C9A96E] transition-colors">
              VIEW ALL SHOP
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden border border-border">
              <img src="/images/products/Artistry Combo.jfif" alt="New Season" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-black text-foreground mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>NEW SEASON</h3>
                <Link to="/shop?filter=new" className="text-xs font-black tracking-widest text-accent border-b-2 border-accent pb-1">DISCOVER</Link>
              </div>
            </div>
            <div className="relative group overflow-hidden border border-border">
              <img src="/images/products/Black clean Combo.jfif" alt="The Collection" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-black text-foreground mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>THE COLLECTION</h3>
                <Link to="/shop" className="text-xs font-black tracking-widest text-accent border-b-2 border-accent pb-1">SHOP ALL</Link>
              </div>
            </div>
            <div className="relative group overflow-hidden border border-border">
              <img src="/images/products/White Clean Combo.jfif" alt="Join Community" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-black text-foreground mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>COMMUNITY</h3>
                <Link to="/community" className="text-xs font-black tracking-widest text-accent border-b-2 border-accent pb-1">JOIN US</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Now Section */}
      <section className="py-24 px-4 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2
              className="text-5xl md:text-7xl font-black text-foreground leading-none mb-4"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              TRENDING NOW
            </h2>
            <div className="w-24 h-1 bg-accent" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -10 }}
                className="group bg-card border border-border overflow-hidden"
              >
                <Link to={`/product/${product.id}`}>
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {product.badge && (
                      <span className="absolute top-4 left-4 bg-accent text-white px-3 py-1 text-[10px] font-black tracking-widest uppercase">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <p className="text-[#C9A96E] text-[10px] font-black tracking-widest uppercase mb-2">{product.category}</p>
                    <h3 className="text-foreground font-bold text-sm mb-3 group-hover:text-secondary transition-colors line-clamp-1">{product.name}</h3>
                    <p className="font-mono text-lg font-black text-secondary">₦{product.price.toLocaleString()}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-24 border-t border-border bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { icon: Truck, title: "FAST DELIVERY", desc: "Nationwide shipping" },
              { icon: ShieldCheck, title: "SECURE PAY", desc: "100% safe checkout" },
              { icon: RefreshCw, title: "EASY RETURNS", desc: "7-day exchange" },
              { icon: MapPin, title: "MADE IN LAGOS", desc: "Born & bred fits" }
            ].map((badge, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-background border border-border rounded-full flex items-center justify-center mx-auto mb-6 text-secondary group-hover:scale-110 transition-transform">
                  <badge.icon size={28} />
                </div>
                <h4 className="text-foreground font-black tracking-widest text-sm mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>{badge.title}</h4>
                <p className="text-foreground/40 text-[10px] font-bold tracking-widest uppercase">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
