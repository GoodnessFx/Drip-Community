import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Filter, X, Heart, ShoppingBag, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { products as allProducts } from '../data/products';

export function ShopPage() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['All', 'Shirts', 'Oversized Tees', 'Co-ords', 'Hoodies', 'Jeans', 'Shoes', 'Accessories'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colors = [
    { name: 'Black', hex: '#000000' },
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Cream', hex: '#E8DCC8' },
    { name: 'Red', hex: '#E8002D' },
    { name: 'Gold', hex: '#C9A96E' },
    { name: 'Navy', hex: '#000080' },
    { name: 'Blue', hex: '#0000FF' },
  ];

  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes('All') || selectedCategories.includes(product.category);
    const matchesPrice = product.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  const products = filteredProducts;

  const toggleFilter = (set: React.Dispatch<React.SetStateAction<string[]>>, item: string) => {
    set(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedSizes([]);
    setSelectedColors([]);
    setPriceRange([0, 100000]);
  };

  const activeFiltersCount = selectedCategories.length + selectedSizes.length + selectedColors.length;

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1
                className="text-6xl md:text-8xl font-black text-foreground mb-2"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                THE SHOP
              </h1>
              <p className="text-[#C9A96E] font-bold tracking-[0.2em] text-sm uppercase">Fashion Without Limit</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30" size={18} />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full bg-card border border-border text-foreground px-12 py-4 text-sm focus:outline-none focus:border-[#E8002D] transition-colors"
                />
              </div>
              <button
                onClick={() => setShowFilters(true)}
                className="lg:hidden flex items-center gap-2 bg-[#E8002D] text-white px-6 py-4 font-black tracking-widest text-sm"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                <Filter size={18} />
                FILTERS
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Sidebar Filters (Desktop) */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-32 space-y-10">
              {/* Category */}
              <div>
                <h3 className="text-foreground font-black tracking-widest mb-6 border-b border-border pb-2" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  CATEGORY
                </h3>
                <div className="space-y-3">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => toggleFilter(setSelectedCategories, cat)}
                      className={`block w-full text-left text-sm font-bold tracking-wide transition-colors ${
                        selectedCategories.includes(cat) ? 'text-[#E8002D]' : 'text-foreground/60 hover:text-foreground'
                      }`}
                    >
                      {cat.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div>
                <h3 className="text-foreground font-black tracking-widest mb-6 border-b border-border pb-2" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  SIZE
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => toggleFilter(setSelectedSizes, size)}
                      className={`py-3 text-xs font-bold border transition-all ${
                        selectedSizes.includes(size)
                          ? 'bg-[#E8002D] border-[#E8002D] text-white'
                          : 'bg-card border-border text-foreground/60 hover:border-foreground/30'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Swatches */}
              <div>
                <h3 className="text-foreground font-black tracking-widest mb-6 border-b border-border pb-2" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  COLOUR
                </h3>
                <div className="flex flex-wrap gap-3">
                  {colors.map(color => (
                    <button
                      key={color.name}
                      onClick={() => toggleFilter(setSelectedColors, color.name)}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        selectedColors.includes(color.name) ? 'border-[#E8002D] scale-110' : 'border-border'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-foreground font-black tracking-widest mb-6 border-b border-border pb-2" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  PRICE RANGE
                </h3>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    step="5000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full accent-[#E8002D] h-1 bg-border rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs font-mono text-foreground/60">
                    <span>₦0</span>
                    <span className="text-[#C9A96E] font-bold text-sm">₦{priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="w-full py-4 text-xs font-black tracking-widest border border-[#E8002D] text-[#E8002D] hover:bg-[#E8002D] hover:text-white transition-all"
                  style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                >
                  CLEAR ALL FILTERS
                </button>
              )}
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden flex items-center justify-between mb-6 gap-4">
              <button
                onClick={() => setShowFilters(true)}
                className="flex-1 flex items-center justify-center gap-2 bg-accent text-white py-4 font-black tracking-widest text-xs"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                <Filter size={16} />
                FILTERS {activeFiltersCount > 0 && `(${activeFiltersCount})`}
              </button>
              <div className="bg-card border border-border px-4 py-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent text-secondary text-[10px] font-black focus:outline-none cursor-pointer uppercase tracking-widest"
                >
                  <option value="newest">NEWEST</option>
                  <option value="price-low">PRICE: LOW-HIGH</option>
                  <option value="price-high">PRICE: HIGH-LOW</option>
                  <option value="popular">POPULAR</option>
                </select>
              </div>
            </div>

            {/* Sort & Controls (Desktop) */}
            <div className="hidden lg:flex items-center justify-between mb-8 pb-4 border-b border-border">
              <p className="text-foreground/40 text-xs font-bold tracking-widest">
                SHOWING {products.length} PRODUCTS
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black text-foreground/40 tracking-widest uppercase">Sort By:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-transparent text-[#C9A96E] text-xs font-bold focus:outline-none cursor-pointer uppercase tracking-widest"
                  >
                    <option value="newest">Newest First</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="popular">Most Popular</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link to={`/product/${product.id}`}>
                    <div className="relative aspect-[4/5] bg-card overflow-hidden border border-border">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {product.badge && (
                        <div className="absolute top-2 left-2 md:top-4 md:left-4">
                          <span className="bg-accent text-white px-2 py-0.5 md:px-3 md:py-1 text-[8px] md:text-[10px] font-black tracking-widest">
                            {product.badge}
                          </span>
                        </div>
                      )}
                      {!product.available && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                          <span className="text-white font-black tracking-widest text-xs border border-white px-4 py-2">SOLD OUT</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-white text-black px-4 py-2 md:px-6 md:py-3 font-black tracking-widest text-[10px] md:text-sm" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                          VIEW DETAILS
                        </span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-foreground font-bold text-sm md:text-base mb-1 md:mb-2 line-clamp-1 group-hover:text-secondary transition-colors">{product.name}</h3>
                      <p className="font-mono text-sm md:text-lg font-bold text-secondary">₦{product.price.toLocaleString()}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-16 text-center">
              <button className="bg-[#1A1A1A] border border-white/10 text-white px-12 py-5 font-black tracking-widest text-sm hover:bg-white hover:text-black transition-all" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                LOAD 12 MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {showFilters && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowFilters(false)}
              className="fixed inset-0 bg-black/80 z-[70] backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[85%] bg-[#080808] z-[80] p-8 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-4xl font-black text-[#E8DCC8]" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>FILTERS</h2>
                <button onClick={() => setShowFilters(false)} className="text-white">
                  <X size={32} />
                </button>
              </div>

              {/* Mobile Filter Sections - Repeat same logic as desktop but stacked */}
              <div className="space-y-10">
                {/* Category */}
                <div>
                  <h3 className="text-[#C9A96E] font-black tracking-widest mb-6 text-xl" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>CATEGORY</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => toggleFilter(setSelectedCategories, cat)}
                        className={`px-4 py-2 text-[10px] font-black tracking-widest border ${
                          selectedCategories.includes(cat) ? 'bg-[#E8002D] border-[#E8002D] text-white' : 'border-white/10 text-white/60'
                        }`}
                      >
                        {cat.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size */}
                <div>
                  <h3 className="text-[#C9A96E] font-black tracking-widest mb-6 text-xl" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>SIZE</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => toggleFilter(setSelectedSizes, size)}
                        className={`py-4 text-xs font-black tracking-widest border ${
                          selectedSizes.includes(size) ? 'bg-[#E8002D] border-[#E8002D] text-white' : 'border-white/10 text-white/60'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div>
                  <h3 className="text-[#C9A96E] font-black tracking-widest mb-6 text-xl" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>PRICE RANGE</h3>
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    step="5000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full accent-[#E8002D] h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between mt-2 font-mono text-sm text-[#E8DCC8]">
                    <span>₦0</span>
                    <span>₦{priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="mt-12 space-y-4">
                <button
                  onClick={() => setShowFilters(false)}
                  className="w-full bg-[#E8002D] text-white py-5 font-black tracking-widest"
                  style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                >
                  APPLY FILTERS
                </button>
                <button
                  onClick={clearFilters}
                  className="w-full border border-white/20 text-white/60 py-5 font-black tracking-widest"
                  style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                >
                  CLEAR ALL
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
