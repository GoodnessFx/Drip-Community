import { motion } from 'motion/react';
import { User, Package, Heart, MapPin, LogOut, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

export function AccountPage() {
  const menuItems = [
    { icon: Package, label: 'My Orders', desc: 'Track, return or buy things again', path: '/track' },
    { icon: Heart, label: 'Wishlist', desc: 'Items you have saved for later', path: '/shop' },
    { icon: MapPin, label: 'Addresses', desc: 'Edit addresses for orders', path: '#' },
    { icon: User, label: 'Profile', desc: 'Edit login, name and mobile number', path: '#' },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-20 h-20 bg-card rounded-full flex items-center justify-center border border-border">
              <User size={40} className="text-[#C9A96E]" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-black text-foreground leading-none mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                MY ACCOUNT
              </h1>
              <p className="text-foreground/40 text-xs font-bold tracking-widest uppercase">Welcome back, Community Member</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {menuItems.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="flex items-center justify-between p-8 bg-card border border-border hover:border-[#E8002D]/30 transition-all group"
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center text-[#C9A96E] group-hover:text-[#E8002D] transition-colors">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-foreground font-bold text-lg mb-1">{item.label}</h3>
                    <p className="text-foreground/30 text-xs font-medium">{item.desc}</p>
                  </div>
                </div>
                <ChevronRight size={20} className="text-foreground/10 group-hover:text-[#E8002D] transition-colors" />
              </Link>
            ))}
          </div>

          <button className="flex items-center gap-3 text-foreground/40 hover:text-[#E8002D] font-black tracking-widest text-xs uppercase transition-colors">
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
