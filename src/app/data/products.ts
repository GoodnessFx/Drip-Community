export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  badge?: string;
  sizes?: string[];
  colors?: Array<{
    name: string;
    hex: string;
  }>;
  description?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Artistry Combo Set',
    price: 45000,
    image: '/images/products/Artistry Combo.jfif',
    category: 'Co-ords',
    badge: 'EXCLUSIVE',
  },
  {
    id: 2,
    name: 'Black Clean Co-ord',
    price: 45000,
    image: '/images/products/Black clean Combo.jfif',
    category: 'Co-ords',
    badge: 'BEST SELLER',
  },
  {
    id: 3,
    name: 'Blue Faded Denim',
    price: 25000,
    image: '/images/products/Blue Faded jean.jfif',
    category: 'Jeans',
    badge: 'NEW',
  },
  {
    id: 4,
    name: 'Blue Jean Jots',
    price: 22000,
    image: '/images/products/Blue jean Jots.jfif',
    category: 'Jeans',
  },
  {
    id: 5,
    name: 'Signature Drip Cap',
    price: 12000,
    image: '/images/products/Cap.jfif',
    category: 'Accessories',
  },
  {
    id: 6,
    name: 'Premium Jersey',
    price: 28000,
    image: '/images/products/Jersey.jfif',
    category: 'Shirts',
    badge: 'LIMITED',
  },
  {
    id: 7,
    name: 'Drip Sneakers',
    price: 45000,
    image: '/images/products/Sneakers.jfif',
    category: 'Shoes',
    badge: 'HOT',
  },
  {
    id: 8,
    name: 'White Clean Combo',
    price: 45000,
    image: '/images/products/White Clean Combo.jfif',
    category: 'Co-ords',
  },
  {
    id: 9,
    name: 'Army Snapback',
    price: 15000,
    image: '/images/products/army snapback.jfif',
    category: 'Accessories',
  },
  {
    id: 10,
    name: 'Signature Beanie',
    price: 10000,
    image: '/images/products/beanie.jfif',
    category: 'Accessories',
  },
  {
    id: 11,
    name: 'Leather Belt',
    price: 15000,
    image: '/images/products/belt.jfif',
    category: 'Accessories',
  },
  {
    id: 12,
    name: 'Classic Black Shirt',
    price: 18000,
    image: '/images/products/black shirt.jfif',
    category: 'Shirts',
  },
  {
    id: 13,
    name: 'Classic Blue Shirt',
    price: 18000,
    image: '/images/products/blue shirt.jfif',
    category: 'Shirts',
  },
  {
    id: 14,
    name: 'Classic Crocs',
    price: 20000,
    image: '/images/products/crocs.jfif',
    category: 'Shoes',
  },
  {
    id: 15,
    name: 'Custom Crocs',
    price: 22000,
    image: '/images/products/differnet crocs.jfif',
    category: 'Shoes',
  },
  {
    id: 16,
    name: 'Grey Denim',
    price: 25000,
    image: '/images/products/grey jean.jfif',
    category: 'Jeans',
  },
  {
    id: 17,
    name: 'Classic Denim',
    price: 25000,
    image: '/images/products/jean.jfif',
    category: 'Jeans',
  },
  {
    id: 18,
    name: 'Premium Loafers',
    price: 35000,
    image: '/images/products/loafers.jfif',
    category: 'Shoes',
  },
  {
    id: 19,
    name: 'Classic Red Shirt',
    price: 18000,
    image: '/images/products/red shirt.jfif',
    category: 'Shirts',
  },
  {
    id: 20,
    name: 'Timberland Boots',
    price: 65000,
    image: '/images/products/timberland.jfif',
    category: 'Shoes',
  },
  {
    id: 21,
    name: 'Premium Quality Crazy Denim Jeans',
    price: 45000,
    image: '/images/products/premium-quality-crazy-denim-jeans.jpeg',
    category: 'Jeans',
    badge: 'NEW',
    sizes: ['32', '33', '34', '35', '36', '37', '38'],
    colors: [
      { name: 'Light Wash', hex: '#8BB6E5' },
    ],
    description: 'Premium quality crazy denim jeans with a clean baggy fit, distressed detailing, and a bold streetwear finish. Available in sizes 32 to 38.',
  },
];
