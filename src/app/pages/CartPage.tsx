import { Link } from 'react-router';
import { Trash2, Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCartStore } from '../store/useCartStore';
import { toast } from 'sonner';
import { WhatsAppIcon } from '../components/Icons/WhatsAppIcon';

export function CartPage() {
  const { items, removeItem, updateQuantity, getTotal, getItemCount } = useCartStore();

  const subtotal = getTotal();
  const deliveryFee = subtotal > 150000 ? 0 : 3500; // TBD properly in checkout
  const total = subtotal + deliveryFee;

  const orderAllViaWhatsApp = () => {
    if (items.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    const itemsText = items.map(item =>
      `• ${item.name} — ${item.color} — Size ${item.size} — ₦${item.price.toLocaleString()} × ${item.quantity}`
    ).join('\n');

    const message = encodeURIComponent(
      `Hi Drip Community! 👕\nMy order:\n\n${itemsText}\n\n🛒 Total: ₦${subtotal.toLocaleString()}\n📦 Deliver to: [TBD]\n📱 My number: [Phone]\n\nPlease confirm all available! 🔥`
    );
    window.open(`https://wa.me/2348133733316?text=${message}`, '_blank');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center py-24">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-8 text-foreground/20">
              <ShoppingBag size={48} />
            </div>
            <h1
              className="text-6xl md:text-8xl font-black text-foreground mb-6"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              BAG IS EMPTY
            </h1>
            <p className="text-foreground/40 mb-12 font-medium tracking-wide">
              Your drip level is currently critical. Browse our latest drops to fix it.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 bg-accent text-white px-12 py-5 font-black tracking-widest hover:scale-105 transition-transform"
              style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.25rem' }}
            >
              START SHOPPING
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-baseline gap-4 mb-12">
          <h1
            className="text-6xl md:text-8xl font-black text-foreground"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            YOUR BAG
          </h1>
          <span className="text-secondary font-mono text-xl font-bold">({getItemCount()} ITEMS)</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Cart Items List */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {items.map((item) => (
                  <motion.div
                    key={`${item.id}-${item.size}-${item.color}`}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col sm:flex-row gap-6 bg-card p-6 border border-border relative group"
                  >
                    <div className="w-full sm:w-40 aspect-[4/5] shrink-0 bg-muted overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>

                    <div className="flex-1 flex flex-col justify-between py-2">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-foreground font-bold text-lg group-hover:text-secondary transition-colors">{item.name}</h3>
                          <p className="font-mono text-lg font-bold text-foreground">₦{item.price.toLocaleString()}</p>
                        </div>
                        <div className="flex flex-wrap gap-4 text-xs font-black tracking-widest text-foreground/40 uppercase">
                          <p>COLOUR: <span className="text-foreground ml-1">{item.color}</span></p>
                          <p>SIZE: <span className="text-foreground ml-1">{item.size}</span></p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-8">
                        <div className="inline-flex items-center bg-muted border border-border p-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.size, item.color, Math.max(1, item.quantity - 1))}
                            className="w-10 h-10 flex items-center justify-center text-foreground hover:text-accent transition-colors"
                          >
                            -
                          </button>
                          <span className="w-10 text-center font-mono font-bold text-foreground">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                            className="w-10 h-10 flex items-center justify-center text-foreground hover:text-accent transition-colors"
                          >
                            +
                          </button>
                        </div>

                        <div className="flex gap-4">
                          <button className="text-foreground/20 hover:text-accent transition-colors">
                            <Heart size={20} />
                          </button>
                          <button
                            onClick={() => {
                              removeItem(item.id, item.size, item.color);
                              toast.error('Item removed from bag');
                            }}
                            className="text-foreground/20 hover:text-accent transition-colors"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <Link
              to="/shop"
              className="inline-flex items-center gap-2 mt-12 text-foreground/50 hover:text-secondary font-black tracking-widest text-xs uppercase transition-colors"
            >
              <ChevronLeft size={16} />
              Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">
              <div className="bg-card p-8 border border-border">
                <h2
                  className="text-4xl font-black text-foreground mb-8"
                  style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                >
                  SUMMARY
                </h2>

                <div className="space-y-4 border-b border-border pb-8 mb-8">
                  <div className="flex justify-between text-foreground/60 font-medium">
                    <span className="text-xs tracking-widest uppercase">Subtotal</span>
                    <span className="font-mono">₦{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-foreground/60 font-medium">
                    <span className="text-xs tracking-widest uppercase">Delivery Fee</span>
                    <span className="font-mono">
                      {deliveryFee === 0 ? 'FREE' : `₦${deliveryFee.toLocaleString()}`}
                    </span>
                  </div>
                  {deliveryFee === 0 ? (
                    <p className="text-[10px] text-[#25D366] font-black tracking-widest uppercase">🎉 Free Delivery Applied</p>
                  ) : (
                    <p className="text-[10px] text-secondary font-black tracking-widest uppercase italic">Add ₦{(150000 - subtotal).toLocaleString()} for Free Delivery</p>
                  )}
                </div>

                <div className="flex justify-between items-baseline mb-10">
                  <span className="text-foreground font-black tracking-widest text-lg uppercase" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Total</span>
                  <span className="text-foreground font-mono text-3xl font-black">₦{total.toLocaleString()}</span>
                </div>

                <div className="space-y-4">
                  <Link
                    to="/checkout"
                    className="block w-full bg-accent text-white py-6 font-black tracking-[0.2em] text-sm text-center hover:scale-[1.02] transition-transform"
                    style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                  >
                    PROCEED TO CHECKOUT
                  </Link>
                  <button
                    onClick={orderAllViaWhatsApp}
                    className="w-full bg-[#25D366] text-white py-6 font-black tracking-[0.2em] text-sm hover:scale-[1.02] transition-transform flex items-center justify-center gap-3"
                    style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                  >
                    <WhatsAppIcon size={20} />
                    ORDER VIA WHATSAPP
                  </button>
                </div>
              </div>

              {/* Promo Code */}
              <div className="bg-card p-8 border border-border">
                <h3 className="text-cream-heading font-black tracking-widest text-sm mb-4 uppercase" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  HAVE A PROMO CODE?
                </h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="flex-1 bg-muted border border-border text-foreground px-4 py-3 text-xs focus:outline-none focus:border-accent transition-colors"
                  />
                  <button className="bg-foreground text-background px-6 py-3 font-black tracking-widest text-[10px] hover:bg-accent hover:text-white transition-colors">
                    APPLY
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronLeft({ size, className }: { size?: number, className?: string }) {
  return (
    <svg 
      width={size || 24} 
      height={size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="m15 18-6-6 6-6"/>
    </svg>
  );
}
