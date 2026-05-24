import { useState, useEffect } from 'react';
import { Clock, Bell } from 'lucide-react';
import { WhatsAppIcon } from '../components/Icons/WhatsAppIcon';
import { products } from '../data/products';

export function DropsPage() {
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 23, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const upcomingDrops = [
    {
      ...products[0],
      brand: 'Drip Community',
      releaseDate: 'May 28, 2026',
      isLive: true,
    },
    {
      ...products[1],
      brand: 'Drip Community',
      releaseDate: 'June 5, 2026',
      isLive: false,
    },
    {
      ...products[2],
      brand: 'Drip Community',
      releaseDate: 'June 12, 2026',
      isLive: false,
    },
  ];

  const pastDrops = [
    {
      ...products[5],
      brand: 'Drip Community',
      releaseDate: 'March 15, 2026',
      soldOut: true,
    },
    {
      ...products[6],
      brand: 'Drip Community',
      releaseDate: 'February 28, 2026',
      soldOut: true,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12">
          <h1
            className="text-5xl md:text-8xl font-black mb-4 text-foreground"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            DROPS
          </h1>
          <p className="text-foreground/40 text-lg font-bold tracking-widest uppercase">
            Don't miss out on the latest fits. Be first in line.
          </p>
        </div>

        <div className="bg-[#E8002D] text-white p-12 mb-16 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 mb-4 bg-black/20 px-4 py-2 rounded-full">
              <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
              <span className="text-[10px] font-black tracking-widest">NEXT DROP IN</span>
            </div>
            <h2
              className="text-5xl md:text-8xl font-black mb-8"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              {upcomingDrops[0].name.toUpperCase()}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: 'DAYS', value: timeLeft.days },
                { label: 'HOURS', value: timeLeft.hours },
                { label: 'MINUTES', value: timeLeft.minutes },
                { label: 'SECONDS', value: timeLeft.seconds },
              ].map((item) => (
                <div key={item.label} className="bg-black/20 backdrop-blur-md p-6 border border-white/10">
                  <div className="text-4xl md:text-5xl font-mono font-black mb-2">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-[10px] tracking-widest font-black opacity-60">{item.label}</div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/2348133733316?text=Hi%20Drip%20Community%20%F0%9F%91%95%20Notify%20me%20when%20the%20next%20drop%20goes%20live!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-black px-12 py-5 font-black tracking-widest text-sm hover:scale-105 transition-transform"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              <WhatsAppIcon size={20} />
              NOTIFY ME VIA WHATSAPP
            </a>
          </div>
        </div>

        <section className="mb-24">
          <h2
            className="text-4xl md:text-6xl font-black mb-12 text-foreground"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            UPCOMING RELEASES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingDrops.map((drop) => (
              <div key={drop.id} className="bg-card border border-border overflow-hidden group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  {!drop.isLive && (
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-10" />
                  )}
                  <img
                    src={drop.image}
                    alt={drop.name}
                    className={`w-full h-full object-cover ${drop.isLive ? 'group-hover:scale-110' : ''} transition-transform duration-700`}
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className={`px-3 py-1 text-[10px] font-black tracking-widest ${
                      drop.isLive ? 'bg-[#E8002D]' : 'bg-white/20'
                    } text-white uppercase`}>
                      {drop.isLive ? 'LIVE NOW' : 'COMING SOON'}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-[10px] text-[#C9A96E] font-black tracking-widest mb-2 uppercase">
                    {drop.brand}
                  </p>
                  <h3 className="text-xl font-bold text-foreground mb-4">{drop.name}</h3>
                  <div className="flex items-center justify-between mb-8">
                    <p className="text-[10px] text-foreground/40 flex items-center gap-2 font-black tracking-widest uppercase">
                      <Clock size={14} />
                      {drop.releaseDate}
                    </p>
                    <p className="font-mono font-bold text-[#E8DCC8] text-lg">₦{drop.price.toLocaleString()}</p>
                  </div>

                  <a
                    href={`https://wa.me/2348133733316?text=Hi%20Drip%20Community%20%F0%9F%91%95%20Notify%20me%20about%20${encodeURIComponent(drop.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full border-2 border-border text-foreground py-4 text-center font-black tracking-widest text-xs hover:bg-[#E8002D] hover:border-[#E8002D] hover:text-white transition-all uppercase"
                    style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                  >
                    GET NOTIFIED
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2
            className="text-4xl md:text-6xl font-black mb-12 text-foreground"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            PAST DROPS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastDrops.map((drop) => (
              <div key={drop.id} className="bg-card border border-border overflow-hidden relative group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={drop.image}
                    alt={drop.name}
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <span className="bg-white text-black px-8 py-4 font-black tracking-widest text-sm" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>SOLD OUT</span>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-[10px] text-foreground/40 font-black tracking-widest mb-2 uppercase">
                    {drop.brand}
                  </p>
                  <h3 className="text-xl font-bold text-foreground/60 mb-2 uppercase tracking-tight">{drop.name}</h3>
                  <p className="text-[10px] text-foreground/30 font-black tracking-widest uppercase">Released {drop.releaseDate}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-32 bg-card border border-border p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#E8002D]/5 rounded-full blur-3xl" />
          <h3
            className="text-5xl md:text-8xl font-black mb-6 text-foreground"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            NEVER MISS A FIT
          </h3>
          <p className="mb-12 max-w-xl mx-auto text-foreground/40 font-medium tracking-wide">
            Join our WhatsApp community and get instant notifications when new clothing collections go live.
          </p>
          <a
            href="https://wa.me/2348133733316?text=Hi%20Drip%20Community%20%F0%9F%91%95%20Add%20me%20to%20drop%20alerts!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-12 py-6 font-black tracking-widest text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(37,211,102,0.2)]"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            <WhatsAppIcon size={24} />
            JOIN DROP ALERTS
          </a>
        </div>
      </div>
    </div>
  );
}
