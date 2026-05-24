import { Phone, Mail, MapPin, Instagram, Twitter, Clock, Send, QrCode } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { WhatsAppIcon } from '../components/Icons/WhatsAppIcon';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'Order Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = encodeURIComponent(
      `Hi Drip Community! 👕\n\nName: ${formData.name}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\n\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/2348133733316?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h1
              className="text-6xl md:text-8xl font-black text-foreground leading-none mb-4"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              CONTACT THE <span className="text-accent">COMMUNITY</span>
            </h1>
            <p className="text-secondary font-bold tracking-[0.2em] text-sm uppercase">WE'RE ALWAYS LISTENING</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Column: Info */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-3xl font-black text-foreground mb-8" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>TAP TO CHAT</h2>
                <div className="grid grid-cols-1 gap-4">
                  <a
                    href="https://wa.me/2348133733316"
                    className="flex items-center gap-6 p-6 bg-[#25D366] text-white hover:scale-[1.02] transition-transform"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <WhatsAppIcon size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black tracking-widest uppercase mb-1">WhatsApp Line 1</p>
                      <p className="text-xl font-black tracking-widest" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>+234 813 373 3316</p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/2349035658994"
                    className="flex items-center gap-6 p-6 bg-[#25D366]/80 text-white hover:scale-[1.02] transition-transform"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <WhatsAppIcon size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black tracking-widest uppercase mb-1">WhatsApp Line 2</p>
                      <p className="text-xl font-black tracking-widest" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>+234 903 565 8994</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-[#C9A96E] text-[10px] font-black tracking-widest uppercase mb-4">Our Base</h3>
                  <div className="flex gap-3 text-foreground/60">
                    <MapPin size={18} className="shrink-0 text-[#E8002D]" />
                    <p className="text-sm font-medium">Lagos, Nigeria<br />Nationwide Delivery</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-[#C9A96E] text-[10px] font-black tracking-widest uppercase mb-4">Working Hours</h3>
                  <div className="flex gap-3 text-foreground/60">
                    <Clock size={18} className="shrink-0 text-[#E8002D]" />
                    <p className="text-sm font-medium">Mon - Sat: 9AM - 8PM<br />Sun: 11AM - 6PM</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[#C9A96E] text-[10px] font-black tracking-widest uppercase mb-6">Follow The Drip</h3>
                <div className="flex gap-4">
                  <a href="https://instagram.com/dripcommunity007" target="_blank" rel="noreferrer" className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-foreground hover:bg-[#E8002D] hover:border-[#E8002D] hover:text-white transition-all">
                    <Instagram size={20} />
                  </a>
                  <a href="https://twitter.com/Dripcommunity00" target="_blank" rel="noreferrer" className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-foreground hover:bg-[#E8002D] hover:border-[#E8002D] hover:text-white transition-all">
                    <Twitter size={20} />
                  </a>
                  <div className="ml-auto flex items-center gap-4 bg-card px-6 py-3 border border-dashed border-border">
                    <QrCode size={32} className="text-[#C9A96E]" />
                    <p className="text-[8px] font-black tracking-[0.2em] text-foreground/40 uppercase">Scan to<br />WhatsApp</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              <div className="bg-card border border-border p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8002D]/5 rounded-full blur-3xl" />
                <h2 className="text-4xl font-black text-foreground mb-10" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>SEND A MESSAGE</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black tracking-widest text-foreground/40 uppercase">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-background border border-border text-foreground px-5 py-4 focus:outline-none focus:border-[#E8002D] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black tracking-widest text-foreground/40 uppercase">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-background border border-border text-foreground px-5 py-4 focus:outline-none focus:border-[#E8002D] transition-colors"
                        placeholder="+234 ..."
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black tracking-widest text-foreground/40 uppercase">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full bg-background border border-border text-foreground px-5 py-4 focus:outline-none focus:border-[#E8002D] transition-colors"
                    >
                      <option>Order Inquiry</option>
                      <option>Product Question</option>
                      <option>Bulk/Wholesale</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black tracking-widest text-foreground/40 uppercase">Message</label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-background border border-border text-foreground px-5 py-4 focus:outline-none focus:border-[#E8002D] transition-colors resize-none"
                      placeholder="How can we help you today?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-foreground text-background py-6 font-black tracking-widest text-sm hover:bg-[#E8002D] hover:text-white transition-all flex items-center justify-center gap-3"
                    style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                  >
                    <Send size={20} />
                    SEND VIA WHATSAPP
                  </button>
                  <p className="text-center text-[10px] text-foreground/20 font-bold tracking-widest uppercase italic">Submitting this form will open WhatsApp with your message pre-filled</p>
                </form>
              </div>

              {/* Map Embed Placeholder */}
              <div className="mt-8 aspect-video bg-card border border-border relative overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&q=80" 
                  alt="Lagos Map" 
                  className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-50 transition-opacity"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-[#E8002D] rounded-full flex items-center justify-center text-white mb-4 animate-bounce">
                    <MapPin size={24} />
                  </div>
                  <p className="text-foreground font-black tracking-widest uppercase text-sm" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>LAGOS, NIGERIA</p>
                  <p className="text-foreground/40 text-[10px] font-bold">NATIONWIDE DELIVERY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
