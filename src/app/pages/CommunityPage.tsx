import { Star, Users, Package, MapPin, Instagram } from 'lucide-react';

export function CommunityPage() {
  const stats = [
    { label: 'Community Members', value: '5,000+', icon: Users },
    { label: 'Fits Delivered', value: '2,500+', icon: Package },
    { label: 'Cities Reached', value: '36+', icon: MapPin },
    { label: 'Customer Satisfaction', value: '99%', icon: Star },
  ];

  const testimonials = [
    {
      name: 'Tunde Adeyemi',
      city: 'Lagos',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      text: 'Best streetwear brand in Lagos, hands down. The quality of the heavy cotton tees is unmatched. Fast delivery and premium packaging.',
      rating: 5,
    },
    {
      name: 'Chiamaka Okafor',
      city: 'Abuja',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      text: 'Finally found a reliable Nigerian brand that gets the oversized fit right. No more ordering from abroad and waiting weeks!',
      rating: 5,
    },
    {
      name: 'Ibrahim Musa',
      city: 'Port Harcourt',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      text: 'Ordered the co-ord set, delivered in 3 days to PH. The material is premium and the fit is exactly as described. Highly recommended.',
      rating: 5,
    },
  ];

  const customerPhotos = [
    '/images/products/Artistry Combo.jfif',
    '/images/products/Black clean Combo.jfif',
    '/images/products/Blue Faded jean.jfif',
    '/images/products/Blue jean Jots.jfif',
    '/images/products/Cap.jfif',
    '/images/products/Jersey.jfif',
    '/images/products/Sneakers.jfif',
    '/images/products/White Clean Combo.jfif',
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-24">
          <h1
            className="text-6xl md:text-9xl font-black mb-6 text-foreground"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            THE COMMUNITY
          </h1>
          <p className="text-xl text-foreground/40 max-w-2xl mx-auto font-medium tracking-wide">
            More than customers. More than a store. We're a movement of style and self-expression.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 bg-card border border-border relative group hover:border-[#E8002D]/30 transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-background text-[#C9A96E] rounded-full mb-6 border border-border group-hover:scale-110 transition-transform">
                <stat.icon size={28} />
              </div>
              <div
                className="text-4xl md:text-6xl font-black mb-2 text-foreground"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                {stat.value}
              </div>
              <p className="text-[10px] font-black tracking-widest text-foreground/40 uppercase">{stat.label}</p>
            </div>
          ))}
        </div>

        <section className="mb-32">
          <div className="text-center mb-16">
            <h2
              className="text-5xl md:text-8xl font-black mb-4 text-foreground"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              DRIP OF THE WEEK
            </h2>
            <div className="flex items-center justify-center gap-2 text-[#C9A96E]">
              <Instagram size={20} />
              <p className="font-black tracking-widest text-lg uppercase">Tag @dripcommunity007</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {customerPhotos.map((photo, i) => (
              <div
                key={i}
                className="aspect-square bg-card overflow-hidden group cursor-pointer relative border border-border"
              >
                <img
                  src={photo}
                  alt="Community Style"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-[10px] font-black tracking-widest border border-white px-4 py-2 uppercase">View Look</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://wa.me/2348133733316?text=Hi%20Drip%20Community%20%F0%9F%91%95%20I%20want%20to%20submit%20my%20fit%20pic!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-foreground text-background px-12 py-6 font-black tracking-widest text-sm hover:bg-[#E8002D] hover:text-white transition-all uppercase"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              SUBMIT YOUR FIT PIC
            </a>
          </div>
        </section>

        <section className="mb-32">
          <h2
            className="text-5xl md:text-8xl font-black mb-16 text-center text-foreground"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            WHAT THEY SAY
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card border border-border p-10 relative group hover:border-[#E8002D]/30 transition-all">
                <div className="flex gap-1 mb-8">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" className="text-[#C9A96E]" />
                  ))}
                </div>

                <p className="mb-10 leading-relaxed text-foreground/60 font-medium italic">"{testimonial.text}"</p>

                <div className="flex items-center gap-4 pt-8 border-t border-border">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-background border border-border">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>
                  <div>
                    <p className="font-black text-foreground tracking-widest uppercase" style={{ fontSize: '12px' }}>{testimonial.name}</p>
                    <p className="text-[10px] text-foreground/20 font-black tracking-widest uppercase">{testimonial.city}, Nigeria</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#E8002D] text-white p-16 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
          <h2
            className="text-5xl md:text-8xl font-black mb-8 relative z-10"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            RESELLERS WELCOME
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto font-bold opacity-90 relative z-10">
            Looking to cop in bulk? We've got you covered. Special pricing for boutiques, resellers and corporate bulk orders.
          </p>
          <a
            href="https://wa.me/2348133733316?text=Hi%20Drip%20Community%20%F0%9F%91%95%20I'm%20interested%20in%20bulk%20pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-black px-12 py-6 font-black tracking-widest text-lg hover:scale-105 transition-transform relative z-10"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            ENQUIRE ABOUT BULK PRICING
          </a>
        </section>
      </div>
    </div>
  );
}
