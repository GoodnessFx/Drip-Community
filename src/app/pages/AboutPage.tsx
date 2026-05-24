import { ShieldCheck, Heart, TrendingUp, Users, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function AboutPage() {
  const values = [
    {
      icon: Users,
      title: 'Community',
      description: 'Built by creatives, for creatives. We\'re more than a clothing brand — we\'re a movement.',
    },
    {
      icon: ShieldCheck,
      title: 'Authenticity',
      description: 'Every piece is original, designed with intent, and crafted to the highest standards.',
    },
    {
      icon: Heart,
      title: 'Accessibility',
      description: 'Fashion Without Limit. We believe premium style should be within reach for everyone.',
    },
    {
      icon: TrendingUp,
      title: 'Lagos-Made',
      description: 'Born in the heart of Lagos, serving Nigeria. Local roots, global vision.',
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="mb-20 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-9xl font-black text-foreground mb-6 leading-none"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              WE ARE <span className="text-[#E8002D]">DRIP COMMUNITY</span>
            </motion.h1>
            <p className="text-[#C9A96E] font-black tracking-[0.4em] text-sm uppercase">Fashion Without Limit</p>
          </div>

          {/* Story Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
            <div className="relative aspect-[4/5] overflow-hidden bg-card border border-border">
              <img 
                src="/images/products/Jersey.jfif" 
                alt="Drip Community Brand Story" 
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-foreground" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>THE ORIGIN STORY</h2>
              <div className="space-y-6 text-foreground/60 leading-relaxed font-medium">
                <p>
                  Drip Community started with a simple belief: <strong className="text-foreground">Fashion Without Limit</strong>. We saw a gap in the Nigerian fashion scene — the space between high-end luxury and fast fashion.
                </p>
                <p>
                  We wanted to create clothes that spoke the language of the streets, with the quality of a boutique. Streetwear that wasn't just a copy of Western trends, but a reflection of the energy, hustle, and vibrancy of Lagos.
                </p>
                <p>
                  Today, Drip Community is more than just a clothing brand. It's a platform for self-expression. Every oversized tee, every co-ord set, and every hoodie is designed to make you feel like the best version of yourself.
                </p>
                <p>
                  We're not just selling clothes. We're building a community of people who understand that style is a superpower.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="bg-card p-12 md:p-20 border border-border text-center mb-32 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#E8002D]/5 rounded-full blur-3xl" />
            <h2
              className="text-5xl md:text-7xl font-black text-foreground mb-8"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              OUR MISSION
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl mx-auto font-bold italic">
              "To democratize streetwear in Nigeria by delivering premium, design-led clothing that empowers our community to express themselves without limits."
            </p>
          </div>

          {/* Values Grid */}
          <div className="mb-32">
            <h2
              className="text-4xl md:text-6xl font-black text-foreground mb-12 text-center"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              OUR CORE VALUES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-card p-10 border border-border group hover:border-[#E8002D]/30 transition-all">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-background border border-border text-[#C9A96E] mb-6 rounded-full group-hover:scale-110 transition-transform">
                    <value.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-black text-foreground mb-4 tracking-widest uppercase" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>{value.title}</h3>
                  <p className="text-foreground/40 font-medium leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Banner */}
          <div className="bg-[#E8002D] text-white p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2
                className="text-5xl md:text-7xl font-black mb-8"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                QUALITY GUARANTEED
              </h2>
              <p className="leading-relaxed max-w-2xl mx-auto mb-10 font-bold text-lg">
                Every Drip Community piece undergoes rigorous quality checks. We use premium heavy-weight cotton, high-density prints, and reinforced stitching to ensure your drip lasts as long as your ambition.
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={20} />
                  <span className="text-[10px] font-black tracking-widest uppercase">Premium Fabrics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={20} />
                  <span className="text-[10px] font-black tracking-widest uppercase">Expert Tailoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={20} />
                  <span className="text-[10px] font-black tracking-widest uppercase">Secure Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
