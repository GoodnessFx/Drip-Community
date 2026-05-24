import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';

interface Product {
  id: string | number;
  name: string;
  price: number;
  image: string;
}

export function RecentlyViewed({ currentProductId }: { currentProductId: string | number }) {
  const [recentProducts, setRecentProducts] = useState<Product[]>([]);

  useEffect(() => {
    const recentlyViewed = JSON.parse(localStorage.getItem('drip_recently_viewed') || '[]');
    setRecentProducts(recentlyViewed.filter((p: Product) => p.id !== currentProductId).slice(0, 4));
  }, [currentProductId]);

  if (recentProducts.length === 0) return null;

  return (
    <section className="mt-32">
      <h2 className="text-3xl md:text-5xl font-black text-[#E8DCC8] mb-12 uppercase" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Recently Viewed</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {recentProducts.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group bg-[#1A1A1A] border border-white/5"
          >
            <Link to={`/product/${product.id}`}>
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt={product.name}
                />
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold text-xs mb-2 group-hover:text-[#C9A96E] transition-colors line-clamp-1">{product.name}</h3>
                <p className="text-[#E8DCC8] font-mono font-bold text-sm">₦{product.price.toLocaleString()}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
