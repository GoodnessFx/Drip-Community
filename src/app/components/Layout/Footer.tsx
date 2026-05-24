import { Link } from 'react-router';
import { Instagram, MapPin, Truck, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from '../Icons/WhatsAppIcon';
import { XIcon } from '../Icons/XIcon';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-24 pb-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <div className="text-3xl font-black tracking-tighter" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                <span className="text-foreground">DRIP</span>
                <span className="text-secondary ml-1">COMMUNITY</span>
              </div>
            </Link>
            <p className="text-foreground/40 text-sm font-medium leading-relaxed max-w-xs">
              Nigeria's premier streetwear brand. High-quality fits, bold designs, and fashion without limits.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/dripcommunity007" target="_blank" rel="noreferrer" className="w-10 h-10 bg-muted border border-border rounded-full flex items-center justify-center text-foreground hover:bg-accent hover:border-accent hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://twitter.com/Dripcommunity00" target="_blank" rel="noreferrer" className="w-10 h-10 bg-muted border border-border rounded-full flex items-center justify-center text-foreground hover:bg-accent hover:border-accent hover:text-white transition-all">
                <XIcon size={18} />
              </a>
              <a href="https://wa.me/2348133733316" target="_blank" rel="noreferrer" className="w-10 h-10 bg-muted border border-border rounded-full flex items-center justify-center text-foreground hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all">
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-foreground font-black text-lg tracking-widest mb-8 uppercase" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>SHOP</h4>
            <ul className="space-y-4 text-sm font-bold tracking-widest text-foreground/40 uppercase">
              <li><Link to="/shop" className="hover:text-secondary transition-colors">All Products</Link></li>
              <li><Link to="/shop?category=shirts" className="hover:text-secondary transition-colors">Shirts</Link></li>
              <li><Link to="/shop?category=tees" className="hover:text-secondary transition-colors">Oversized Tees</Link></li>
              <li><Link to="/shop?category=coords" className="hover:text-secondary transition-colors">Co-ords</Link></li>
              <li><Link to="/shop?category=hoodies" className="hover:text-secondary transition-colors">Hoodies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-black text-lg tracking-widest mb-8 uppercase" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>HELP</h4>
            <ul className="space-y-4 text-sm font-bold tracking-widest text-foreground/40 uppercase">
              <li><Link to="/track" className="hover:text-secondary transition-colors">Track Order</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors">Size Guide</Link></li>
              <li><Link to="/admin/login" className="hover:text-secondary transition-colors">Admin Login</Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-foreground font-black text-lg tracking-widest mb-8 uppercase" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>JOIN THE MOVEMENT</h4>
            <p className="text-foreground/40 text-[10px] font-black tracking-widest uppercase">Get 10% off your first order when you join our WhatsApp community.</p>
            <a 
              href="https://wa.me/2348133733316?text=Hi%20Drip%20Community%20%F0%9F%91%95%20I%20want%20to%20join%20the%20movement!"
              target="_blank"
              rel="noreferrer"
              className="block w-full bg-accent text-white py-4 text-center font-black tracking-widest text-sm hover:scale-[1.02] transition-transform"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              JOIN WHATSAPP
            </a>
          </div>
        </div>

        {/* Trust Strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-12 border-y border-border mb-12">
          <div className="flex items-center gap-4">
            <Truck size={24} className="text-secondary" />
            <div>
              <p className="text-foreground text-[10px] font-black tracking-widest uppercase">Nationwide Delivery</p>
              <p className="text-foreground/30 text-[9px] font-bold uppercase">All 36 States + FCT</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ShieldCheck size={24} className="text-secondary" />
            <div>
              <p className="text-foreground text-[10px] font-black tracking-widest uppercase">Quality Guaranteed</p>
              <p className="text-foreground/30 text-[9px] font-bold uppercase">Premium Materials Only</p>
            </div>
          </div>
          <div className="flex items-center gap-4 col-span-2 md:col-span-1">
            <MapPin size={24} className="text-secondary" />
            <div>
              <p className="text-foreground text-[10px] font-black tracking-widest uppercase">Born In Lagos</p>
              <p className="text-foreground/30 text-[9px] font-bold uppercase">Serving Nigeria Daily</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-foreground/20 text-[10px] font-black tracking-[0.2em] uppercase">© 2026 DRIP COMMUNITY. FASHION WITHOUT LIMIT.</p>
          <div className="flex gap-8 text-[10px] font-black tracking-widest text-foreground/20 uppercase">
            <Link to="/about" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link to="/about" className="hover:text-foreground transition-colors">Terms</Link>
            <Link to="/about" className="hover:text-foreground transition-colors">Returns</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
