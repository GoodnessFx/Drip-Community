import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Package, 
  Users, 
  BarChart3, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  Search, 
  Bell, 
  TrendingUp, 
  ArrowUpRight, 
  Clock,
  Plus,
  Filter,
  MoreVertical,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner';

// Mock Data for Admin
const STATS = [
  { label: 'Total Revenue', value: '₦4,250,000', change: '+12.5%', icon: BarChart3, color: '#C9A96E' },
  { label: 'Total Orders', value: '156', change: '+18.2%', icon: ShoppingBag, color: '#E8002D' },
  { label: 'Active Customers', value: '1,240', change: '+5.4%', icon: Users, color: '#F5F5F0' },
  { label: 'Pending Drops', value: '3', change: 'Live', icon: Package, color: '#25D366' },
];

const RECENT_ORDERS = [
  { id: 'DRP-562381', customer: 'Emeka Obi', status: 'dispatched', total: 45000, date: '2 mins ago' },
  { id: 'DRP-562382', customer: 'Amina Bello', status: 'pending', total: 15000, date: '15 mins ago' },
  { id: 'DRP-562383', customer: 'Tunde Phillips', status: 'confirmed', total: 32000, date: '1 hr ago' },
  { id: 'DRP-562384', customer: 'Chidi Okafor', status: 'delivered', total: 85000, date: '3 hrs ago' },
];

export function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('drip_admin_token');
    if (!token) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('drip_admin_token');
    toast.success('Logged out successfully');
    navigate('/admin/login');
  };

  const navItems = [
    { label: 'Overview', icon: LayoutDashboard, path: '/admin' },
    { label: 'Orders', icon: ShoppingBag, path: '/admin/orders' },
    { label: 'Products', icon: Package, path: '/admin/products' },
    { label: 'Inventory', icon: BarChart3, path: '/admin/inventory' },
    { label: 'Customers', icon: Users, path: '/admin/customers' },
    { label: 'Settings', icon: Settings, path: '/admin/settings' },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 bg-card border-r border-border transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="flex flex-col h-full">
          <div className="p-6 flex items-center justify-between">
            <Link to="/admin" className={`text-2xl font-black tracking-tighter ${!isSidebarOpen && 'hidden'}`} style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              <span className="text-foreground">DRIP</span>
              <span className="text-secondary ml-1">ADMIN</span>
            </Link>
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-foreground/40 hover:text-foreground">
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all group ${
                  location.pathname === item.path ? 'bg-accent text-white' : 'text-foreground/40 hover:bg-foreground/5 hover:text-foreground'
                }`}
              >
                <item.icon size={20} className={location.pathname === item.path ? 'text-white' : 'group-hover:text-secondary'} />
                {isSidebarOpen && <span className="text-sm font-bold tracking-widest uppercase" style={{ fontSize: '11px' }}>{item.label}</span>}
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t border-border">
            <button
              onClick={handleLogout}
              className="flex items-center gap-4 px-4 py-3 w-full text-foreground/40 hover:bg-accent/10 hover:text-accent transition-all rounded-lg"
            >
              <LogOut size={20} />
              {isSidebarOpen && <span className="text-sm font-bold tracking-widest uppercase" style={{ fontSize: '11px' }}>Logout</span>}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'pl-64' : 'pl-20'}`}>
        {/* Top Header */}
        <header className="h-20 bg-background border-b border-border flex items-center justify-between px-8 sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <h2 className="text-foreground font-black text-xl tracking-widest uppercase" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              {navItems.find(i => i.path === location.pathname)?.label || 'Overview'}
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/20" size={16} />
              <input
                type="text"
                placeholder="Search orders, products..."
                className="bg-card border border-border text-foreground text-xs px-10 py-2.5 rounded-full focus:outline-none focus:border-accent w-64"
              />
            </div>
            <button className="relative text-foreground/40 hover:text-foreground">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-white text-[10px] rounded-full flex items-center justify-center font-bold">3</span>
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-border">
              <div className="text-right">
                <p className="text-foreground text-xs font-bold uppercase tracking-widest">Drip Admin</p>
                <p className="text-foreground/40 text-[10px] font-bold">Super Admin</p>
              </div>
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-black font-black">AD</div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8">
          <Routes>
            <Route path="/" element={<OverviewPanel />} />
            <Route path="/orders" element={<OrdersPanel />} />
            <Route path="/products" element={<ProductsPanel />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </main>
    </div>
  );
}

function OverviewPanel() {
  return (
    <div className="space-y-10">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border p-8 group hover:border-accent/30 transition-all"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${stat.color}10`, color: stat.color }}>
                <stat.icon size={24} />
              </div>
              <div className="flex items-center gap-1 text-[#25D366] text-xs font-bold">
                {stat.change}
                <TrendingUp size={12} />
              </div>
            </div>
            <p className="text-foreground/40 text-[10px] font-black tracking-widest uppercase mb-1">{stat.label}</p>
            <p className="text-3xl font-black text-foreground" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders Table */}
        <div className="lg:col-span-2 bg-card border border-border p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-foreground font-black text-2xl tracking-widest uppercase" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>RECENT ORDERS</h3>
            <Link to="/admin/orders" className="text-secondary text-[10px] font-black tracking-widest uppercase hover:underline">View All Orders</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-4 text-[10px] font-black tracking-widest text-foreground/40 uppercase">Ref ID</th>
                  <th className="pb-4 text-[10px] font-black tracking-widest text-foreground/40 uppercase">Customer</th>
                  <th className="pb-4 text-[10px] font-black tracking-widest text-foreground/40 uppercase">Status</th>
                  <th className="pb-4 text-[10px] font-black tracking-widest text-foreground/40 uppercase text-right">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {RECENT_ORDERS.map((order) => (
                  <tr key={order.id} className="group hover:bg-foreground/5 transition-colors">
                    <td className="py-4 font-mono text-xs font-bold text-foreground">{order.id}</td>
                    <td className="py-4 text-xs font-bold text-foreground">{order.customer}</td>
                    <td className="py-4">
                      <span className={`text-[9px] font-black tracking-widest px-2 py-1 uppercase ${
                        order.status === 'delivered' ? 'bg-[#25D366]/10 text-[#25D366]' :
                        order.status === 'pending' ? 'bg-accent/10 text-accent' :
                        'bg-secondary/10 text-secondary'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4 text-xs font-bold text-foreground text-right">₦{order.total.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sales Chart Placeholder */}
        <div className="bg-card border border-border p-8">
          <h3 className="text-foreground font-black text-2xl tracking-widest uppercase mb-8" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>SALES OVERVIEW</h3>
          <div className="h-64 flex flex-col items-center justify-center border-2 border-dashed border-border">
            <TrendingUp size={48} className="text-foreground/10 mb-4" />
            <p className="text-foreground/40 text-[10px] font-black tracking-widest uppercase">Analytics Dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrdersPanel() {
  return (
    <div className="bg-card border border-border p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <h2 className="text-4xl font-black text-foreground tracking-widest uppercase" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>ALL ORDERS</h2>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-background border border-border text-foreground px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-foreground hover:text-background transition-all">
            <Filter size={16} />
            Filter
          </button>
          <button className="flex items-center gap-2 bg-accent text-white px-6 py-3 text-xs font-bold tracking-widest uppercase hover:scale-105 transition-transform">
            <Plus size={16} />
            Export
          </button>
        </div>
      </div>
      
      {/* Search Bar */}
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30" size={18} />
        <input
          type="text"
          placeholder="Search by ID, name or phone..."
          className="w-full bg-background border border-border text-foreground px-12 py-4 text-sm focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-border">
              <th className="pb-6 text-[10px] font-black tracking-widest text-foreground/40 uppercase">Ref ID</th>
              <th className="pb-6 text-[10px] font-black tracking-widest text-foreground/40 uppercase">Date</th>
              <th className="pb-6 text-[10px] font-black tracking-widest text-foreground/40 uppercase">Customer</th>
              <th className="pb-6 text-[10px] font-black tracking-widest text-foreground/40 uppercase text-right">Total</th>
              <th className="pb-6 text-[10px] font-black tracking-widest text-foreground/40 uppercase text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {Array.from({ length: 10 }).map((_, i) => (
              <tr key={i} className="group hover:bg-foreground/5 transition-colors">
                <td className="py-6 font-mono text-xs font-bold text-foreground">DRP-{102456 + i}</td>
                <td className="py-6 text-[11px] font-bold text-foreground/60 uppercase tracking-tight">May {24 - (i % 5)}, 2026</td>
                <td className="py-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-black text-[10px]">EO</div>
                    <span className="text-xs font-bold text-foreground">Customer Name</span>
                  </div>
                </td>
                <td className="py-6 text-xs font-bold text-foreground text-right">₦45,000</td>
                <td className="py-6 text-right">
                  <button className="p-2 text-foreground/20 hover:text-foreground transition-colors">
                    <ChevronRight size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ProductsPanel() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <h2 className="text-4xl font-black text-foreground tracking-widest uppercase" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>PRODUCT CATALOG</h2>
        <button className="flex items-center gap-2 bg-accent text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:scale-105 transition-transform">
          <Plus size={20} />
          ADD NEW PRODUCT
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="bg-card border border-border overflow-hidden group">
            <div className="relative aspect-square bg-background">
              <img 
                src={`https://images.unsplash.com/photo-${1583743814966 + i}-8936f5b7be1a?w=400&q=80`} 
                alt="" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <button className="p-2 bg-background/80 backdrop-blur-md text-foreground hover:text-accent transition-colors">
                  <Settings size={14} />
                </button>
              </div>
            </div>
            <div className="p-6">
              <p className="text-[9px] font-black tracking-widest text-secondary uppercase mb-2">Oversized Tees</p>
              <h4 className="text-foreground font-bold mb-4 tracking-tight">Oversized "DRIP" Graphic Tee</h4>
              <div className="flex items-center justify-between">
                <p className="text-sm font-black text-foreground font-mono">₦15,000</p>
                <p className="text-[10px] font-bold text-foreground/30 uppercase tracking-widest">Stock: 42</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
