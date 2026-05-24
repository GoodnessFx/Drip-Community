import { useState, useEffect } from 'react';
import { Check, ChevronLeft, ChevronRight, CreditCard, Landmark, Truck, MapPin, Package, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCartStore } from '../store/useCartStore';
import { toast } from 'sonner';
import { Link } from 'react-router';
import { WhatsAppIcon } from '../components/Icons/WhatsAppIcon';

const NIGERIAN_STATES = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno',
  'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT - Abuja', 'Gombe',
  'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos',
  'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto',
  'Taraba', 'Yobe', 'Zamfara'
];

export function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const { items, getTotal, clearCart } = useCartStore();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [orderRef, setOrderRef] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    whatsapp: '',
    email: '',
    address: '',
    city: '',
    state: 'Lagos',
    landmark: '',
    deliveryMethod: 'home' as 'home' | 'pickup',
    paymentMethod: 'paystack' as 'paystack' | 'transfer' | 'pod',
    paymentProof: null as File | null,
  });

  const subtotal = getTotal();
  
  const calculateDelivery = () => {
    if (formData.deliveryMethod === 'pickup') return 0;
    if (formData.state === 'Lagos') return 1500;
    const swStates = ['Ogun', 'Oyo', 'Osun', 'Ondo', 'Ekiti'];
    if (swStates.includes(formData.state)) return 2500;
    return 3500;
  };

  const deliveryFee = calculateDelivery();
  const total = subtotal + deliveryFee;

  const handleNext = () => {
    if (currentStep === 1) {
      if (!formData.fullName || !formData.phone) {
        toast.error('Please fill in required contact info');
        return;
      }
    }
    if (currentStep === 2) {
      if (formData.deliveryMethod === 'home' && (!formData.address || !formData.city)) {
        toast.error('Please fill in delivery address');
        return;
      }
    }
    setCurrentStep(prev => Math.min(prev + 1, 4));
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo(0, 0);
  };

  const generateOrderRef = () => {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.floor(1000 + Math.random() * 9000);
    return `DRP-${timestamp}-${random}`;
  };

  const handlePlaceOrder = () => {
    const ref = generateOrderRef();
    setOrderRef(ref);
    
    // In a real app, save to Supabase here
    
    setIsOrderPlaced(true);
    clearCart();
    
    // WhatsApp confirmation message
    const itemsText = items.map(item => `• ${item.name} (${item.size})`).join('\n');
    const message = encodeURIComponent(
      `Hi Drip Community! 🔥\nMy order is placed!\n\nRef: ${ref}\nItems:\n${itemsText}\n\nTotal: ₦${total.toLocaleString()}\nPayment: ${formData.paymentMethod.toUpperCase()}\n\nPlease confirm! 🙏`
    );
    
    setTimeout(() => {
      window.open(`https://wa.me/2348133733316?text=${message}`, '_blank');
    }, 2000);
  };

  if (isOrderPlaced) {
    return (
      <div className="min-h-screen bg-background pt-32 pb-16 flex flex-col items-center px-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full bg-card p-12 border border-border text-center"
        >
          <div className="w-20 h-20 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-8">
            <Check size={40} className="text-white" />
          </div>
          <h2 className="text-5xl font-black text-foreground mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>ORDER PLACED!</h2>
          <p className="text-foreground/60 mb-8 font-medium">Drip Community will confirm within 1 hour via WhatsApp.</p>
          
          <div className="bg-muted p-6 mb-8 border border-border">
            <p className="text-foreground/30 text-[10px] font-black tracking-widest uppercase mb-2">Order Reference</p>
            <p className="text-secondary font-mono text-2xl font-bold">{orderRef}</p>
          </div>

          <div className="space-y-4">
            <Link
              to="/track"
              className="block w-full bg-foreground text-background py-5 font-black tracking-widest text-sm hover:bg-accent hover:text-white transition-all"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              TRACK MY ORDER
            </Link>
            <Link
              to="/"
              className="block w-full text-foreground/40 py-4 font-black tracking-widest text-xs hover:text-foreground transition-colors uppercase"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <h1
                className="text-6xl md:text-8xl font-black text-foreground leading-none mb-2"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                CHECKOUT
              </h1>
              <p className="text-secondary font-bold tracking-[0.2em] text-sm uppercase">Step {currentStep} of 4</p>
            </div>
            
            {/* Step Indicator */}
            <div className="flex items-center gap-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 transition-all ${
                      currentStep >= step
                        ? 'bg-accent border-accent text-white'
                        : 'border-border text-foreground/20'
                    }`}
                  >
                    {currentStep > step ? <Check size={18} /> : step}
                  </div>
                  {step < 4 && (
                    <div className={`w-8 md:w-12 h-px mx-2 ${currentStep > step ? 'bg-accent' : 'bg-border'}`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Form Area */}
            <div className="lg:col-span-8">
              <div className="bg-card border border-border p-8 md:p-12">
                <AnimatePresence mode="wait">
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                          <Users size={20} />
                        </div>
                        <h2 className="text-3xl font-black text-foreground" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>CONTACT INFO</h2>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black tracking-widest text-foreground/40 uppercase">Full Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full bg-muted border border-border text-foreground px-5 py-4 focus:outline-none focus:border-accent transition-colors"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black tracking-widest text-foreground/40 uppercase">Phone Number *</label>
                          <input
                            type="tel"
                            required
                            placeholder="080 0000 0000"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-muted border border-border text-foreground px-5 py-4 focus:outline-none focus:border-accent transition-colors"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black tracking-widest text-foreground/40 uppercase">WhatsApp Number</label>
                          <div className="flex items-center gap-3 mt-1 mb-2">
                            <input
                              type="checkbox"
                              id="same-as-phone"
                              className="w-4 h-4 accent-accent"
                              onChange={(e) => {
                                if (e.target.checked) setFormData({ ...formData, whatsapp: formData.phone });
                              }}
                            />
                            <label htmlFor="same-as-phone" className="text-xs text-foreground/60 font-medium">Same as phone</label>
                          </div>
                          <input
                            type="tel"
                            placeholder="WhatsApp Number"
                            value={formData.whatsapp}
                            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                            className="w-full bg-muted border border-border text-foreground px-5 py-4 focus:outline-none focus:border-accent transition-colors"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black tracking-widest text-foreground/40 uppercase">Email Address (Optional)</label>
                          <input
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-muted border border-border text-foreground px-5 py-4 focus:outline-none focus:border-accent transition-colors"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10"
                    >
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                          <Truck size={20} />
                        </div>
                        <h2 className="text-3xl font-black text-cream-heading" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>DELIVERY</h2>
                      </div>

                      {/* Method Selection */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button
                          onClick={() => setFormData({ ...formData, deliveryMethod: 'home' })}
                          className={`flex flex-col p-6 border transition-all text-left ${
                            formData.deliveryMethod === 'home' ? 'bg-accent/10 border-accent' : 'bg-muted border-border opacity-60'
                          }`}
                        >
                          <Truck size={24} className="mb-4 text-secondary" />
                          <span className="text-foreground font-black tracking-widest text-sm" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>HOME DELIVERY</span>
                          <span className="text-foreground/40 text-[10px] font-bold mt-1 uppercase">Doorstep delivery nationwide</span>
                        </button>
                        <button
                          onClick={() => setFormData({ ...formData, deliveryMethod: 'pickup' })}
                          className={`flex flex-col p-6 border transition-all text-left ${
                            formData.deliveryMethod === 'pickup' ? 'bg-accent/10 border-accent' : 'bg-muted border-border opacity-60'
                          }`}
                        >
                          <Package size={24} className="mb-4 text-secondary" />
                          <span className="text-foreground font-black tracking-widest text-sm" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>STORE PICKUP</span>
                          <span className="text-foreground/40 text-[10px] font-bold mt-1 uppercase">Lagos Only - FREE</span>
                        </button>
                      </div>

                      {formData.deliveryMethod === 'home' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="md:col-span-2 space-y-2">
                            <label className="text-[10px] font-black tracking-widest text-foreground/40 uppercase">Full Address *</label>
                            <input
                              type="text"
                              required
                              placeholder="House number, Street name"
                              value={formData.address}
                              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                              className="w-full bg-muted border border-border text-foreground px-5 py-4 focus:outline-none focus:border-accent transition-colors"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-black tracking-widest text-foreground/40 uppercase">City *</label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. Ikeja"
                              value={formData.city}
                              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                              className="w-full bg-muted border border-border text-foreground px-5 py-4 focus:outline-none focus:border-accent transition-colors"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-black tracking-widest text-foreground/40 uppercase">State *</label>
                            <select
                              value={formData.state}
                              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                              className="w-full bg-muted border border-border text-foreground px-5 py-4 focus:outline-none focus:border-accent transition-colors"
                            >
                              {NIGERIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                          </div>
                          <div className="md:col-span-2 space-y-2">
                            <label className="text-[10px] font-black tracking-widest text-foreground/40 uppercase">Closest Landmark</label>
                            <input
                              type="text"
                              placeholder="e.g. Near Shoprite"
                              value={formData.landmark}
                              onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
                              className="w-full bg-muted border border-border text-foreground px-5 py-4 focus:outline-none focus:border-accent transition-colors"
                            />
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                          <Package size={20} />
                        </div>
                        <h2 className="text-3xl font-black text-cream-heading" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>REVIEW ORDER</h2>
                      </div>

                      <div className="space-y-4 max-h-[400px] overflow-y-auto pr-4 no-scrollbar">
                        {items.map((item, i) => (
                          <div key={i} className="flex gap-4 p-4 bg-muted border border-border group">
                            <div className="w-16 h-20 shrink-0 overflow-hidden">
                              <img src={item.image} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                              <p className="text-foreground font-bold text-sm mb-1">{item.name}</p>
                              <p className="text-foreground/40 text-[10px] font-black tracking-widest uppercase">{item.size} | {item.color} | QTY: {item.quantity}</p>
                            </div>
                            <p className="text-cream-heading font-mono font-bold">₦{(item.price * item.quantity).toLocaleString()}</p>
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-border">
                        <div>
                          <p className="text-[10px] font-black tracking-widest text-secondary uppercase mb-4">Shipping To</p>
                          <div className="text-foreground/60 text-sm space-y-1 font-medium">
                            <p className="text-foreground font-bold">{formData.fullName}</p>
                            <p>{formData.phone}</p>
                            {formData.deliveryMethod === 'home' ? (
                              <p>{formData.address}, {formData.city}, {formData.state}</p>
                            ) : (
                              <p className="text-accent">Store Pickup - Lagos</p>
                            )}
                          </div>
                          <button onClick={() => setCurrentStep(2)} className="text-[10px] font-black tracking-widest text-accent mt-4 hover:underline uppercase">Edit Delivery</button>
                        </div>
                        <div>
                          <p className="text-[10px] font-black tracking-widest text-secondary uppercase mb-4">Contact Details</p>
                          <div className="text-foreground/60 text-sm space-y-1 font-medium">
                            <p>{formData.email || 'No email provided'}</p>
                            <p>WhatsApp: {formData.whatsapp}</p>
                          </div>
                          <button onClick={() => setCurrentStep(1)} className="text-[10px] font-black tracking-widest text-accent mt-4 hover:underline uppercase">Edit Contact</button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10"
                    >
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                          <CreditCard size={20} />
                        </div>
                        <h2 className="text-3xl font-black text-cream-heading" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>PAYMENT</h2>
                      </div>

                      <div className="space-y-4">
                        <button
                          onClick={() => setFormData({ ...formData, paymentMethod: 'paystack' })}
                          className={`flex items-center gap-6 w-full p-6 border transition-all text-left ${
                            formData.paymentMethod === 'paystack' ? 'bg-accent/10 border-accent' : 'bg-muted border-border opacity-60'
                          }`}
                        >
                          <CreditCard size={24} className="text-secondary" />
                          <div>
                            <span className="text-foreground font-black tracking-widest text-sm block" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>PAYSTACK (CARD / BANK / USSD)</span>
                            <span className="text-foreground/40 text-[10px] font-bold uppercase">Fast & Secure instant payment</span>
                          </div>
                        </button>

                        <button
                          onClick={() => setFormData({ ...formData, paymentMethod: 'transfer' })}
                          className={`flex items-center gap-6 w-full p-6 border transition-all text-left ${
                            formData.paymentMethod === 'transfer' ? 'bg-accent/10 border-accent' : 'bg-muted border-border opacity-60'
                          }`}
                        >
                          <Landmark size={24} className="text-secondary" />
                          <div>
                            <span className="text-foreground font-black tracking-widest text-sm block" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>BANK TRANSFER</span>
                            <span className="text-foreground/40 text-[10px] font-bold uppercase">Manual verification required</span>
                          </div>
                        </button>

                        {formData.state === 'Lagos' && (
                          <button
                            onClick={() => setFormData({ ...formData, paymentMethod: 'pod' })}
                            className={`flex items-center gap-6 w-full p-6 border transition-all text-left ${
                              formData.paymentMethod === 'pod' ? 'bg-accent/10 border-accent' : 'bg-muted border-border opacity-60'
                            }`}
                          >
                            <Truck size={24} className="text-secondary" />
                            <div>
                              <span className="text-foreground font-black tracking-widest text-sm block" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>PAY ON DELIVERY</span>
                              <span className="text-foreground/40 text-[10px] font-bold uppercase">Available in Lagos only</span>
                            </div>
                          </button>
                        )}
                      </div>

                      {formData.paymentMethod === 'transfer' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-8 bg-muted border border-secondary/20 space-y-4"
                        >
                          <p className="text-secondary font-black tracking-widest text-sm" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>BANK DETAILS</p>
                          <div className="grid grid-cols-2 gap-4 text-xs">
                            <div>
                              <p className="text-foreground/40 uppercase font-black tracking-tighter mb-1">Bank Name</p>
                              <p className="text-foreground font-bold uppercase">Zenith Bank</p>
                            </div>
                            <div>
                              <p className="text-foreground/40 uppercase font-black tracking-tighter mb-1">Account Number</p>
                              <p className="text-foreground font-mono font-bold text-lg">1234567890</p>
                            </div>
                            <div className="col-span-2">
                              <p className="text-foreground/40 uppercase font-black tracking-tighter mb-1">Account Name</p>
                              <p className="text-foreground font-bold uppercase">DRIP COMMUNITY GLOBAL</p>
                            </div>
                          </div>
                          <div className="pt-4 border-t border-border">
                            <label className="block text-[10px] font-black tracking-widest text-accent uppercase mb-3">Upload Payment Proof *</label>
                            <input
                              type="file"
                              accept="image/*"
                              className="text-xs text-foreground/40 file:bg-card file:border-0 file:text-foreground file:px-4 file:py-2 file:mr-4 file:font-bold"
                            />
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Footer Navigation */}
                <div className="flex justify-between items-center mt-12 pt-12 border-t border-border">
                  <button
                    onClick={handleBack}
                    className={`flex items-center gap-2 text-foreground/40 text-xs font-black tracking-widest uppercase hover:text-foreground transition-colors ${
                      currentStep === 1 ? 'invisible' : 'visible'
                    }`}
                  >
                    <ChevronLeft size={16} />
                    Back
                  </button>
                  
                  {currentStep < 4 ? (
                    <button
                      onClick={handleNext}
                      className="bg-foreground text-background px-10 py-5 font-black tracking-widest text-sm hover:bg-accent hover:text-white transition-all flex items-center gap-2"
                      style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                    >
                      CONTINUE
                      <ChevronRight size={18} />
                    </button>
                  ) : (
                    <button
                      onClick={handlePlaceOrder}
                      className="bg-accent text-white px-12 py-6 font-black tracking-widest text-lg hover:scale-[1.02] transition-transform flex items-center gap-3 shadow-[0_0_30px_rgba(232,0,45,0.3)]"
                      style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                    >
                      <ShieldCheck size={24} />
                      PLACE ORDER ₦{total.toLocaleString()}
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Side Summary */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-6">
                <div className="bg-card border border-border p-8">
                  <h3 className="text-cream-heading font-black tracking-widest text-lg mb-8 uppercase" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>ORDER SUMMARY</h3>
                  <div className="space-y-4 mb-8">
                    {items.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex justify-between text-xs font-medium">
                        <span className="text-foreground/60">{item.quantity}× {item.name}</span>
                        <span className="text-foreground font-mono">₦{(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    ))}
                    {items.length > 3 && <p className="text-[10px] text-secondary font-black tracking-widest uppercase">+ {items.length - 3} more items</p>}
                  </div>

                  <div className="space-y-3 pt-6 border-t border-border">
                    <div className="flex justify-between text-xs">
                      <span className="text-foreground/40 uppercase tracking-widest font-black">Subtotal</span>
                      <span className="text-foreground font-mono">₦{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-foreground/40 uppercase tracking-widest font-black">Delivery</span>
                      <span className="text-foreground font-mono">{deliveryFee === 0 ? 'FREE' : `₦${deliveryFee.toLocaleString()}`}</span>
                    </div>
                    <div className="flex justify-between items-baseline pt-4">
                      <span className="text-cream-heading font-black tracking-widest text-lg uppercase" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Total</span>
                      <span className="text-foreground font-mono text-3xl font-black">₦{total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Secure Badge */}
                <div className="flex items-center gap-4 p-6 border border-border bg-muted/50">
                  <ShieldCheck size={24} className="text-[#25D366]" />
                  <div>
                    <p className="text-foreground font-black text-[10px] tracking-widest uppercase">Secure Checkout</p>
                    <p className="text-foreground/30 text-[9px] uppercase font-bold">SSL Encrypted & Paystack Verified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

