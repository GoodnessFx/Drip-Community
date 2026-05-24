# DRIP COMMUNITY — Fashion Without Limit 👕

A production-grade, mobile-first e-commerce platform for a Nigerian streetwear clothing brand.

## 🚀 Features
- **Premium UI/UX**: Matte black aesthetic with cream and gold accents.
- **Mobile-First**: Pixel-perfect responsiveness across all devices.
- **Splash Screen**: Animated entry experience with session persistence.
- **Dynamic Shop**: Category filters, size/color swatches, and Quick View.
- **WhatsApp Integration**: Pre-filled order templates for direct customer-to-admin communication.
- **Multi-Step Checkout**: Nigerian-specific delivery calculation and payment methods.
- **Order Tracking**: Visual pipeline for order status updates.
- **Admin Dashboard**: Secure portal for order management, inventory, and analytics.

## 🛠 Tech Stack
- **Frontend**: Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **Animations**: Framer Motion
- **State Management**: Zustand (Cart & Wishlist)
- **Icons**: Lucide React
- **Notifications**: Sonner

## 📦 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Admin Access
Navigate to `/admin/login` to access the dashboard.
- **Quick Login**: Use the "Quick Login (Demo)" button on the login page.
- **Manual Credentials**: 
  - Email: `admin@drip.com`
  - Password: `admin123`

## 🔌 Database Note
The app currently uses a **Mock Data Layer** for local-only functionality. This allows you to test the entire flow (Cart, Checkout, Admin, Tracking) without needing external Supabase credentials. 

To connect a real Supabase instance:
1. Create a Supabase project.
2. Update `src/lib/supabase.ts` with the `createClient` initialization.
3. Set your environment variables in `.env`.

## 🇳🇬 Nigeria-First Optimizations
- **Currency**: All prices in ₦ (Naira).
- **Delivery**: Fees calculated by region (Lagos, Southwest, Rest of Nigeria).
- **Payments**: Paystack-ready, Bank Transfer, and Pay on Delivery options.
- **WhatsApp**: Deep-linked messaging for orders and tracking inquiries.

---
**Fashion Without Limit — Drip Community**
