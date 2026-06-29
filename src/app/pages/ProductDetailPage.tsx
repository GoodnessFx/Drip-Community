import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { Heart, Share2, ChevronLeft, ChevronRight, ShoppingBag, Ruler, Info, Truck, RefreshCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner';
import { RecentlyViewed } from '../components/RecentlyViewed';
import { WhatsAppIcon } from '../components/Icons/WhatsAppIcon';
import { products } from '../data/products';

export function ProductDetailPage() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Find product from data
  const productData = products.find(p => p.id === Number(id)) || products[0];
  const productSizes = productData.sizes || ['S', 'M', 'L', 'XL', 'XXL'];
  const productColors = productData.colors || [
    { name: 'Black', hex: '#000000' },
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Cream', hex: '#E8DCC8' },
  ];
  const [selectedColor, setSelectedColor] = useState(productColors[0]?.name || 'Black');

  const product = {
    id: productData.id.toString(),
    name: productData.name,
    category: productData.category,
    price: productData.price,
    oldPrice: Math.round(productData.price * 1.2),
    stock: 10,
    images: [
      productData.image,
    ],
    sizes: productSizes,
    availableSizes: productSizes,
    colors: productColors,
    description: productData.description || `Elevate your street style with our signature ${productData.name}. Crafted from premium materials, this piece offers a structured yet breathable fit that lasts. Part of the Drip Community ${productData.category} collection.`,
  };

  useEffect(() => {
    // Add to recently viewed
    const recentlyViewed = JSON.parse(localStorage.getItem('drip_recently_viewed') || '[]');
    const newProduct = { id: product.id, name: product.name, price: product.price, image: product.images[0] };
    const updated = [newProduct, ...recentlyViewed.filter((p: any) => p.id !== product.id)].slice(0, 10);
    localStorage.setItem('drip_recently_viewed', JSON.stringify(updated));
    window.scrollTo(0, 0);
    setSelectedSize('');
    setSelectedColor(product.colors[0]?.name || 'Black');
    setQuantity(1);
    setCurrentImageIndex(0);
  }, [product.id, product.name, product.price, product.images, product.colors]);

  const addToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }

    const cart = JSON.parse(localStorage.getItem('drip_cart') || '[]');
    const existingItem = cart.find((item: any) => item.id === product.id && item.size === selectedSize && item.color === selectedColor);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        size: selectedSize,
        color: selectedColor,
        quantity: quantity,
        image: product.images[0],
      });
    }

    localStorage.setItem('drip_cart', JSON.stringify(cart));
    toast.success('Added to cart!', {
      style: {
        background: 'var(--background)',
        color: 'var(--foreground)',
        border: '1px solid var(--accent)',
      }
    });
  };

  const orderViaWhatsApp = () => {
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }

    const message = encodeURIComponent(
      `Hi Drip Community! 👕\nI want to order:\n\n👕 Item: ${product.name}\n🎨 Colour: ${selectedColor}\n📏 Size: ${selectedSize}\n🔢 Qty: ${quantity}\n💰 Total: ₦${(product.price * quantity).toLocaleString()}\n\n📦 Deliver to: [to confirm]\n📱 My number: [Phone]\n\nIs this available? Let's go! 🔥`
    );
    window.open(`https://wa.me/2348133733316?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-foreground/40 uppercase mb-8">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight size={10} />
          <Link to="/shop" className="hover:text-foreground">Shop</Link>
          <ChevronRight size={10} />
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Product Images */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[4/5] bg-card overflow-hidden border border-border">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.stock < 5 && (
                <div className="absolute top-6 left-6">
                  <span className="bg-accent text-white px-4 py-1.5 text-xs font-black tracking-widest uppercase">
                    Low Stock
                  </span>
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImageIndex(i)}
                  className={`aspect-square bg-card border-2 transition-all ${
                    currentImageIndex === i ? 'border-accent' : 'border-border opacity-50'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:col-span-5 flex flex-col pt-4">
            <div className="mb-10 border-b border-border pb-10">
              <p className="text-[#C9A96E] font-black tracking-[0.3em] text-[10px] md:text-xs uppercase mb-4">DRIP COMMUNITY EXCLUSIVE</p>
              <h1
                className="text-5xl md:text-7xl font-black text-foreground leading-[0.9] mb-6"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                {product.name.toUpperCase()}
              </h1>
              <div className="flex items-baseline gap-4">
                <p className="font-mono text-3xl md:text-4xl font-black text-secondary">₦{product.price.toLocaleString()}</p>
              </div>
            </div>

            <div className="space-y-10 mb-12">
              {/* Size Selector */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-[10px] font-black tracking-widest text-foreground/40 uppercase">Select Size</h3>
                  <button className="text-[10px] font-black tracking-widest text-accent border-b border-accent uppercase">Size Guide</button>
                </div>
                <div className="grid grid-cols-5 gap-3">
                  {product.availableSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-4 text-sm font-black transition-all border ${
                        selectedSize === size
                          ? 'bg-accent border-accent text-white'
                          : 'bg-card border-border text-foreground/60 hover:border-foreground/30'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-foreground/50 text-[10px] font-black tracking-widest uppercase mb-4">QUANTITY</label>
                <div className="inline-flex items-center bg-card border border-border p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center text-foreground hover:text-accent transition-colors"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-mono font-bold text-foreground">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="w-12 h-12 flex items-center justify-center text-foreground hover:text-accent transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-4 mb-10">
              <button
                onClick={addToCart}
                className="w-full bg-foreground text-background py-6 font-black tracking-[0.2em] text-sm hover:bg-accent hover:text-white transition-all flex items-center justify-center gap-3 uppercase shadow-xl"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                <ShoppingBag size={20} />
                ADD TO BAG
              </button>
              <button
                onClick={orderViaWhatsApp}
                className="w-full bg-[#25D366] text-white py-6 font-black tracking-[0.2em] text-sm hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 uppercase shadow-lg shadow-green-500/20"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                <WhatsAppIcon size={20} />
                ORDER VIA WHATSAPP
              </button>
            </div>

            {/* Wishlist & Share */}
            <div className="flex gap-8 mb-12 pb-12 border-b border-border">
              <button className="flex items-center gap-2 text-foreground/50 text-[10px] font-black tracking-widest uppercase hover:text-accent transition-colors">
                <Heart size={16} />
                Add to Wishlist
              </button>
              <button className="flex items-center gap-2 text-foreground/50 text-[10px] font-black tracking-widest uppercase hover:text-secondary transition-colors">
                <Share2 size={16} />
                Share Product
              </button>
            </div>

            {/* Accordion Info */}
            <div className="space-y-2">
              <details className="group border-b border-border py-4">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-foreground font-black tracking-widest text-sm uppercase flex items-center gap-3" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                    <Info size={18} className="text-secondary" />
                    DESCRIPTION & STORY
                  </span>
                  <span className="text-foreground/30 group-open:rotate-180 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-foreground/60 text-sm leading-relaxed font-medium">
                  {product.description}
                </p>
              </details>

              <details className="group border-b border-border py-4">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-foreground font-black tracking-widest text-sm uppercase flex items-center gap-3" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                    <Truck size={18} className="text-secondary" />
                    SHIPPING & DELIVERY
                  </span>
                  <span className="text-foreground/30 group-open:rotate-180 transition-transform">+</span>
                </summary>
                <div className="mt-4 text-foreground/60 text-sm space-y-2 font-medium">
                  <p>🚚 Lagos: Same-day delivery (Order before 12PM)</p>
                  <p>📦 Nationwide: 2-4 Business Days</p>
                  <p>✅ Pickup: Available at our Lagos store</p>
                </div>
              </details>

              <details className="group border-b border-border py-4">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-foreground font-black tracking-widest text-sm uppercase flex items-center gap-3" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                    <RefreshCcw size={18} className="text-secondary" />
                    RETURNS & EXCHANGE
                  </span>
                  <span className="text-foreground/30 group-open:rotate-180 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-foreground/60 text-sm leading-relaxed font-medium">
                  We offer a 7-day exchange policy for size issues. Items must be unworn, with original tags and packaging intact. No refunds, exchanges only.
                </p>
              </details>
            </div>
          </div>
        </div>

        {/* You Might Also Like */}
        <section className="mt-32">
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-12" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>YOU MIGHT ALSO LIKE</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((item) => (
              <div key={item.id} className="group bg-card border border-border">
                <Link to={`/product/${item.id}`}>
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={item.image}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      alt={item.name}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-foreground font-bold text-sm mb-2 group-hover:text-secondary transition-colors line-clamp-1">{item.name}</h3>
                    <p className="text-secondary font-mono font-bold text-sm">₦{item.price.toLocaleString()}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
        {/* Recently Viewed */}
        <RecentlyViewed currentProductId={product.id} />
      </div>
    </div>
  );
}
