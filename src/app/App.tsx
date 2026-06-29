import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import { AnimatePresence } from 'motion/react';
import { Toaster } from 'sonner';

import { Navigation } from './components/Layout/Navigation';
import { Footer } from './components/Layout/Footer';
import { WhatsAppFloat } from './components/Layout/WhatsAppFloat';
import { SplashScreen } from './components/SplashScreen';

import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { DropsPage } from './pages/DropsPage';
import { CommunityPage } from './pages/CommunityPage';
import { TrackOrderPage } from './pages/TrackOrderPage';
import { AccountPage } from './pages/AccountPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Admin Pages
import { AdminLogin } from './pages/admin/AdminLogin';
import { AdminDashboard } from './pages/admin/AdminDashboard';

export default function App() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(() => sessionStorage.getItem('drip_splash_seen') !== 'true');

  useEffect(() => {
    const theme = localStorage.getItem('drip_theme') || 'dark';
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, []);

  const handleSplashComplete = () => {
    sessionStorage.setItem('drip_splash_seen', 'true');
    setShowSplash(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      </AnimatePresence>

      <Navigation />

      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/drops" element={<DropsPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/track" element={<TrackOrderPage />} />
            <Route path="/account" element={<AccountPage />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/*" element={<AdminDashboard />} />
            
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
      <WhatsAppFloat />

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'var(--card)',
            color: 'var(--foreground)',
            border: '1px solid var(--accent)',
          },
        }}
      />
    </div>
  );
}
