import { useState } from 'react';
import { Package, Truck, CheckCircle2, Clock, Search, MessageCircle, ChevronLeft, MapPin } from 'lucide-react';
import { WhatsAppIcon } from '../components/Icons/WhatsAppIcon';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';

export function TrackOrderPage() {
  const [trackingInput, setTrackingInput] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [orderStatus, setOrderStatus] = useState<any>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingInput) return;

    setIsSearching(true);
    
    // Simulate API call to Supabase
    setTimeout(() => {
      setOrderStatus({
        orderRef: 'DRP-562381-4921',
        status: 'dispatched',
        customerName: 'Emeka Obi',
        estimatedDelivery: 'May 28, 2026',
        items: [
          { name: 'Oversized "DRIP" Graphic Tee', size: 'L', quantity: 1, image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&q=80' },
          { name: 'Streetwear Cargo Pants', size: 'M', quantity: 1, image: 'https://images.unsplash.com/photo-1624371414361-e6e8ea01f116?w=400&q=80' },
        ],
        timeline: [
          { status: 'received', label: 'Order Received', date: 'May 24, 2026 - 10:30 AM', completed: true },
          { status: 'confirmed', label: 'Confirmed', date: 'May 24, 2026 - 11:15 AM', completed: true },
          { status: 'packed', label: 'Being Packed', date: 'May 25, 2026 - 9:00 AM', completed: true },
          { status: 'dispatched', label: 'Dispatched', date: 'May 25, 2026 - 2:30 PM', completed: true, current: true },
          { status: 'delivered', label: 'Delivered', date: 'Pending', completed: false },
        ],
      });
      setIsSearching(false);
    }, 1500);
  };

  const statusIcons = {
    received: Package,
    confirmed: CheckCircle2,
    packed: Package,
    dispatched: Truck,
    delivered: CheckCircle2,
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/shop" className="inline-flex items-center gap-2 text-foreground/50 hover:text-[#C9A96E] mb-8 font-black tracking-widest text-xs uppercase transition-colors">
            <ChevronLeft size={16} />
            Back to Shop
          </Link>

          <div className="mb-12">
            <h1
              className="text-6xl md:text-8xl font-black text-foreground leading-none mb-4"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              TRACK YOUR DRIP
            </h1>
            <p className="text-[#C9A96E] font-bold tracking-[0.2em] text-sm uppercase">STAY UPDATED ON YOUR SHIPMENT</p>
          </div>

          <form onSubmit={handleTrack} className="mb-16">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30" size={20} />
                <input
                  type="text"
                  value={trackingInput}
                  onChange={(e) => setTrackingInput(e.target.value)}
                  placeholder="Order Ref (e.g. DRP-XXXX) or Phone"
                  className="w-full bg-card border border-border text-foreground px-12 py-5 text-sm focus:outline-none focus:border-[#E8002D] transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={isSearching}
                className="bg-[#E8002D] text-white px-12 py-5 font-black tracking-widest text-sm hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:scale-100"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                {isSearching ? 'SEARCHING...' : 'TRACK ORDER'}
              </button>
            </div>
          </form>

          <AnimatePresence mode="wait">
            {orderStatus ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                {/* Order Header Card */}
                <div className="bg-card border border-border p-8 md:p-12">
                  <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
                    <div>
                      <p className="text-foreground/30 text-[10px] font-black tracking-widest uppercase mb-2">Order Reference</p>
                      <p className="text-[#C9A96E] font-mono text-3xl font-bold">{orderStatus.orderRef}</p>
                    </div>
                    <div className="md:text-right">
                      <p className="text-foreground/30 text-[10px] font-black tracking-widest uppercase mb-2">Estimated Delivery</p>
                      <p className="text-foreground font-bold text-xl">{orderStatus.estimatedDelivery}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-border">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center text-[#C9A96E]">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <p className="text-foreground/30 text-[10px] font-black tracking-widest uppercase mb-1">Shipping To</p>
                        <p className="text-foreground font-bold">{orderStatus.customerName}</p>
                        <p className="text-foreground/60 text-xs">Lagos, Nigeria</p>
                      </div>
                    </div>
                    <div className="flex -space-x-3 overflow-hidden md:justify-end">
                      {orderStatus.items.map((item: any, i: number) => (
                        <div key={i} className="w-16 h-16 rounded-full border-4 border-card overflow-hidden">
                          <img src={item.image} alt="" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tracking Timeline */}
                <div className="bg-card border border-border p-8 md:p-12">
                  <h2 className="text-3xl font-black text-foreground mb-12" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>ORDER STATUS</h2>
                  
                  {/* Desktop Pipeline */}
                  <div className="hidden md:flex justify-between relative mb-20">
                    <div className="absolute top-6 left-0 w-full h-1 bg-border" />
                    {orderStatus.timeline.map((step: any, i: number) => {
                      const Icon = statusIcons[step.status as keyof typeof statusIcons];
                      return (
                        <div key={i} className="relative z-10 flex flex-col items-center text-center px-2">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-card transition-all duration-500 ${
                            step.completed ? 'bg-[#25D366] text-white' : 'bg-background text-foreground/20'
                          } ${step.current ? 'ring-4 ring-[#E8002D]/30 animate-pulse' : ''}`}>
                            <Icon size={20} />
                          </div>
                          <div className="mt-4">
                            <p className={`text-[10px] font-black tracking-widest uppercase mb-1 ${step.completed ? 'text-foreground' : 'text-foreground/20'}`}>{step.label}</p>
                            <p className="text-[9px] text-foreground/30 font-bold">{step.date}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Mobile Pipeline */}
                  <div className="md:hidden space-y-12">
                    {orderStatus.timeline.map((step: any, i: number) => {
                      const Icon = statusIcons[step.status as keyof typeof statusIcons];
                      return (
                        <div key={i} className="flex gap-6 relative">
                          {i < orderStatus.timeline.length - 1 && (
                            <div className={`absolute left-6 top-12 w-0.5 h-12 ${step.completed ? 'bg-[#25D366]' : 'bg-border'}`} />
                          )}
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 z-10 border-4 border-card ${
                            step.completed ? 'bg-[#25D366] text-white' : 'bg-background text-foreground/20'
                          } ${step.current ? 'ring-4 ring-[#E8002D]/30 animate-pulse' : ''}`}>
                            <Icon size={20} />
                          </div>
                          <div>
                            <p className={`text-[10px] font-black tracking-widest uppercase mb-1 ${step.completed ? 'text-foreground' : 'text-foreground/20'}`}>{step.label}</p>
                            <p className="text-[9px] text-foreground/30 font-bold">{step.date}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-12 pt-12 border-t border-border text-center">
                    <p className="text-foreground/40 text-xs font-bold mb-8 tracking-widest uppercase">Something wrong with your order?</p>
                    <a
                      href={`https://wa.me/2348133733316?text=Hi%20Drip%20Community!%20My%20order%20ref%20is%20${orderStatus.orderRef}.%20Can%20I%20get%20an%20update%20please?%20%F0%9F%99%8F`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 font-black tracking-widest text-sm hover:scale-[1.02] transition-transform"
                      style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                    >
                      <WhatsAppIcon size={20} />
                      WHERE'S MY ORDER? 📦
                    </a>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-24 border border-dashed border-border"
              >
                <div className="w-20 h-20 bg-[#1A1A1A] rounded-full flex items-center justify-center mx-auto mb-6 text-white/10">
                  <Package size={32} />
                </div>
                <p className="text-white/40 font-bold tracking-widest text-sm uppercase">Enter your details above to track your drip</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
