You are a world-class UI/UX designer and senior full-stack developer with 15+ years of experience building high-converting, award-winning fashion and sneaker e-commerce platforms. Your references are Kith.com, END Clothing, GOAT, StockX, and Bodega — but what you build must feel uniquely Nigerian, unapologetically Lagos, and premium at every single touchpoint.

Build a complete, fully functional, pixel-perfect, mobile-first e-commerce website for a sneaker and fashion brand called "DRIP COMMUNITY" — the go-to sneaker plug in Nigeria. No AI-generic templates. No lazy layouts. Every screen must look like it was designed by a creative director at a top-tier agency, built by a senior engineer, and tested by a conversion rate optimiser.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BRAND IDENTITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Brand Name: DRIP COMMUNITY
Tagline: "Fashion Without Limit"
Products: Sneakers (Nike, Jordan, Adidas, New Balance, Asics, and rare/exclusive kicks)
Location: Nigeria (Lagos-based, ships nationwide)
WhatsApp: +2348133733316 / +2349035658994
Instagram: @dripcommunity007
X (Twitter): @Dripcommunity00
Vibe: Raw street culture meets editorial luxury. Think StockX grids + Supreme drops + Lagos energy. Not a store — a community.

Color Palette:
- Primary: Pure matte black (#0A0A0A)
- Secondary: Bright electric white (#F5F5F0)
- Accent: Vivid signal red (#E8002D) — used sparingly like a drop announcement
- Warm neutral: Aged parchment (#D4C5A9)
- Metallic: Brushed champagne (#C9A96E)
Typography:
- Display headlines: Ultra-heavy condensed font (e.g. Bebas Neue or similar — massive, architectural)
- Body: Sharp clean grotesque (e.g. Inter or DM Sans — zero decoration, maximum legibility)
- Mono details: Pricing, stock counts, product codes in monospace — gives it a data/marketplace feel

Design Philosophy:
- Asymmetric tension layouts — not boring centered boxes
- Full-bleed photography with aggressive crop
- Negative space used as a design element
- Numbers as design — big, raw, dominant
- Micro-animations on every interaction — nothing is static
- Dark mode first, light mode toggle available

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SPLASH / LOADING SCREEN (non-negotiable)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

On first load:
- Full screen matte black
- DRIP logo lettermark animates in — each letter drops independently with stagger delay (D — R — I — P)
- Under it: "COMMUNITY" tracks in letter-by-letter at 2px spacing
- Sub-line fades in: "Fashion Without Limit"
- Progress bar (thin red line) sweeps across bottom
- Splash fades out into homepage — no jarring cut, smooth dissolve
- Only shows on first visit per session — cached via sessionStorage

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. HOME PAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Navigation:
- Logo top-left (D+R interlocked monogram — clean SVG)
- On desktop: Home | Shop | Drops | Community | About | Contact
- Cart icon with live item count badge (red dot) + hamburger for mobile
- On scroll: nav compresses, becomes sticky, slight frosted-glass blur effect
- On mobile: full-screen dark nav drawer with staggered link animations

Hero Section (Full Viewport):
- Full-bleed lifestyle photo background — model in fire sneakers, Lagos street backdrop
- Text overlay: Massive headline — "FRESH KICKS. REAL DRIP." — in condensed display font, near-full width
- Sub-line: "The sneaker plug you've been looking for."
- Two buttons side by side:
  → "SHOP NOW" — solid red, sharp corners
  → "NEW DROPS" — outline white, hover fills red
- Scroll indicator: thin animated line pointing down
- Faint watermark text reading "DRIP COMMUNITY" repeating diagonally in background at 5% opacity

Marquee Ticker (below hero):
Continuously scrolling red-background ticker:
"NEW ARRIVALS ✦ AUTHENTIC KICKS ✦ JORDAN 1s ✦ AIR FORCE 1 ✦ NEW BALANCE 550 ✦ FAST DELIVERY NATIONWIDE ✦ DM TO ORDER ✦ DRIP COMMUNITY ✦"

Featured Drops Section:
- Section title: "LATEST DROPS" — huge left-aligned heading
- 3-column grid on desktop, horizontal scroll on mobile (like StockX browse cards)
- Each card shows: product photo (full fill), name, retail/resale price, "SHOP THIS" button
- Hover: card lifts with red accent border, second photo cross-fades
- "SOLD OUT" overlay on unavailable pairs — blurred background, white text stamp

Drop Alert Section:
- Black section with animated red pulsing dot
- Text: "Be first to know. Join the community."
- Single WhatsApp CTA: "JOIN DROP ALERTS ON WHATSAPP" — opens wa.me/+2348133733316 with pre-filled: "Hi Drip Community 👟 Add me to drop alerts!"
- Below: input for phone number (optional local backup)

Brand Trust Strip:
4 equally-spaced pillars with icon + text:
→ 100% Authentic | Verified pairs only
→ Nationwide Delivery | Lagos same-day available
→ Bulk Orders | Resellers welcome
→ Community Built | 1000+ happy customers

Instagram Feed Section:
- Section: "FOLLOW THE DRIP — @DRIPCOMMUNITY007"
- Auto-loading Instagram-style grid (6 photos) with hover overlay + "View on Instagram" link
- Each post shows like count and caption snippet

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. SHOP / PRODUCT LISTING PAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Layout:
- Masonry-style grid — not uniform boxes. Mix portrait and landscape cards like an editorial spread.
- 2 columns mobile, 3 on tablet, 4 on desktop
- Infinite scroll or "Load 12 more" — no pagination pages

Filter System:
- Slide-in drawer on mobile, sticky sidebar on desktop
- Filters: Brand (Nike / Jordan / Adidas / New Balance / Asics / Other), Size (UK sizes — multi-select), Colour, Price Range (slider), Availability (In Stock / Pre-Order / All)
- Active filters shown as dismissible red chips above grid
- Sort: Newest Drop / Price Low–High / Price High–Low / Most Popular / On Sale

Product Cards:
- Clean full-bleed photo on black card background
- Monospace price — "₦85,000" — raw and confident
- Brand tag top-left (pill badge)
- "NEW DROP" badge in red, "LAST PAIR" in amber, "SOLD OUT" stamp in gray
- Hover: second product image slides in (pair at angle vs flat lay)
- Quick View button appears on hover — opens modal without leaving page
- Save to Wishlist heart icon (saves to localStorage — no account needed)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. SINGLE PRODUCT PAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Left column (60%): Image gallery
- Swipeable on mobile, thumbnail strip on desktop
- Angles: hero shot, side profile, sole, lace-up detail, lifestyle/on-foot
- Click to zoom — full lightbox
- 360° rotation if assets available

Right column (40%): Product info
- Brand / colourway line (small, muted — "Nike / Black/White")
- Product name — large display font, 2–3 words, dominant
- Monospace price — "₦85,000"
- Stock indicator: "3 pairs left" in amber with pulsing dot
- Size selector — full UK size run, unavailable sizes crossed-out
- Condition: Deadstock / Brand New / Pre-Order (badge)
- Quantity selector (min 1, max stock count)

Two primary CTAs:
→ "ADD TO CART" — full-width, solid black
→ "ORDER VIA WHATSAPP" — full-width, green with WhatsApp icon

WhatsApp message format (pre-filled, sent to +2348133733316):
"Hi Drip Community! 👟

I want to cop these:

👟 Sneaker: [Product Name]
🎨 Colourway: [Colour]
📏 Size: [UK Size]
🔢 Quantity: [Qty]
💰 Total: ₦[Amount]

📦 Deliver to: [City/Address]
📱 My number: [Phone]

Are these available? Let's make it happen!"

Product detail accordion tabs:
- Description & Story
- Size & Fit Guide (popup with foot measurement diagram)
- Authenticity Guarantee
- Shipping & Delivery info
- Return Policy

Bottom sections:
- "YOU MIGHT ALSO WANT" — 4 related products carousel
- Customer photo reviews with star ratings
- Share strip: WhatsApp / X / Copy link

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. CART PAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Layout: Clean editorial — wide two-column on desktop (items left, summary right), stacked on mobile

Cart items:
- Product photo | Name + colourway + size | Price | Qty stepper | Remove
- "SAVE FOR LATER" option — moves to wishlist

Summary panel:
- Subtotal
- Delivery fee (calculated by state selection or "TBD at checkout")
- Promo code field (red CTA to apply)
- Bold total in ₦
- Savings shown in green if discount active

Two checkout CTAs:
→ "CHECKOUT ONLINE" — proceeds to checkout form
→ "ORDER ALL VIA WHATSAPP" — generates full cart summary as WhatsApp message

WhatsApp cart message auto-format:
"Hi Drip Community! 👟
Here's my full cart:

[Product 1] — Size [X] — ₦[Price]
[Product 2] — Size [X] — ₦[Price]

🛒 Subtotal: ₦[X]
🚚 Delivery: TBD
💰 Total: ₦[X]

📦 Deliver to: [to be confirmed]
📱 My number: [Phone]

Please confirm availability!"

Cart persists in localStorage — survives tab close.
Show "abandoned cart" reminder popup on return visit after 24hrs.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. CHECKOUT PAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Multi-step — clean step indicator at top (1 → 2 → 3 → 4)

Step 1 — Contact Info:
Full name, phone, WhatsApp number (auto-fill if same), email (optional)

Step 2 — Delivery:
Full address, city, state, closest landmark (crucial for Lagos delivery precision)
Delivery method: Home delivery (fee applies) or Pickup (Drip Community location)

Step 3 — Review Order:
Full item list, quantities, selected sizes, subtotal + delivery + total

Step 4 — Payment:
- Bank Transfer: Account name, number, bank shown clearly
- Upload payment screenshot
- Pay on Delivery (Lagos only — seller discretion)
- Paystack card/USSD/bank option

On confirmation:
- Customer sees: "Order placed! 🔥 Drip Community will confirm within 1 hour via WhatsApp."
- Automatic WhatsApp message sent to +2348133733316 with full order details
- Confirmation screen has order reference number + "Track My Order" link

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. DROPS PAGE (unique to sneaker culture)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is what separates Drip Community from a generic shop.

- Countdown timers for upcoming drops
- "COMING SOON" cards with blurred product teaser + reveal date
- "NOTIFY ME" button per upcoming drop → saves number to WhatsApp blast list
- Past drops archive — shows sold-out pairs with "MISSED IT" stamp
- Raffle/Draw mechanic for limited pairs — customers enter via WhatsApp message
- Drop history timeline — shows every previous drop chronologically

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7. COMMUNITY PAGE (brand differentiator)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This page turns buyers into believers.

- Customer fit-pics / WDYWT wall — submitted via WhatsApp, displayed in masonry grid
- "DRIP OF THE WEEK" featured customer section
- Community stats: "1,000+ customers served | 500+ pairs moved | Lagos to Abuja to PH"
- Testimonials with photo + name + city
- "RESELLERS WELCOME" CTA — bulk pricing enquiry via WhatsApp
- X feed embed (@Dripcommunity00) — live community chatter

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
8. ABOUT PAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Brand origin story — how Drip Community started, what it means, who it's for
- Mission: "Fashion Without Limit — We believe no one should be priced out of style."
- Authenticity guarantee section — how products are verified
- "THE PLUG" section — founder note (optional photo/text)
- Values: Community · Authenticity · Accessibility · Lagos-made

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
9. CONTACT PAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Two WhatsApp numbers displayed as large tappable buttons
- Contact form: Name, Phone, Message → submits via WhatsApp link
- Social links: Instagram @dripcommunity007, X @Dripcommunity00
- Business hours
- Google Maps embed (Lagos location)
- QR code linking to WhatsApp (mirrors the Drip Community flier design)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
10. TRACK ORDER PAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Customer enters phone number or order reference
- Status pipeline: Order Received → Confirmed → Packed → Dispatched → Delivered
- WhatsApp follow-up button: "Where's My Order?" pre-filled message
- Estimated delivery date shown

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GLOBAL FEATURES — NON-NEGOTIABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Performance:
- Lazy loading on all images
- WebP format for all product photos
- Compressed assets — sub-2s load on mobile data
- Core Web Vitals green

UX must-haves:
- Custom cursor on desktop — small red dot that scales on hover
- Smooth scroll — CSS scroll-behavior or Lenis
- All transitions: 0.25s cubic-bezier(0.16, 1, 0.3, 1) — not linear, not ease-in-out — premium feel
- Page transitions — content fades out/in on navigation
- Back to top button (appears after 300px scroll)
- Search bar — instant results with product photo + price dropdown
- Recently viewed section (localStorage)
- Wishlist saved in localStorage — no account needed
- Dark/light mode toggle in nav

Social proof engine:
- Live ticker: "Tunde from Lagos just copped Air Force 1 ⚡" — rotating notifications
- Stock urgency: "Only 2 left in your size" — amber, pulsing
- View count: "14 people viewing this right now"

SEO:
- Meta titles, descriptions, OG tags for WhatsApp/Twitter sharing
- JSON-LD structured data for products
- Sitemap + robots.txt
- Descriptive alt text on all images

Legal / misc:
- Cookie consent banner (minimal, bottom bar)
- 404 page — branded, with "Shop Anyway" CTA
- WhatsApp floating bubble — fixed bottom-right, every page, opens to +2348133733316
- Pop-up for first-time visitors: "Join the community — get first dibs on new drops." → WhatsApp opt-in

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ADMIN DASHBOARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Password-protected dashboard for the Drip Community owner:
- Orders panel: view, update status (Confirmed / Packed / Dispatched / Delivered)
- Inventory: update stock counts per size per product — auto-triggers "Sold Out" at 0
- Add products: name, photos, price, sizes, brand, condition, drop date
- Discount codes: create percentage or fixed-amount codes
- Analytics: total orders, revenue, best-selling pairs, top cities
- Drop scheduler: set upcoming drops with reveal date + countdown
- Customer list: WhatsApp numbers of drop alert subscribers
- Export orders as CSV or WhatsApp to self as summary

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
E-COMMERCE LOGIC
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Per-size inventory tracking (size 9 might be sold out, size 11 in stock)
- Pre-order mechanic — sell pairs before they arrive, ETA shown
- Bulk pricing — auto-discount at 3+ pairs or 5+ pairs threshold
- Promo code system — percentage or flat ₦ off
- Bundle builder — "Buy 2 pairs, save 10%"
- Gift option at checkout — "This is a gift, add a note card"
- Refer-a-friend — share link, both get discount
- Abandoned cart recovery popup (returns after 24hrs)
- Guest checkout — no forced account creation
- Optional account — saves order history, sizes, addresses

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TECH STACK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Recommended full custom build:
- Frontend: Next.js 14 (App Router) + Tailwind CSS
- Animations: Framer Motion for all transitions and entrance animations
- CMS: Sanity.io — product management, drop scheduling, blog/community posts
- Payments: Paystack (Nigeria-first — cards, bank transfer, USSD)
- WhatsApp: wa.me pre-filled links (no API needed, zero cost, works instantly)
- Hosting: Vercel (automatic preview deploys, global CDN)
- Database: PlanetScale or Supabase for orders + customer data
- Domain: dripcommunity.ng or dripcommunity.com.ng
- Analytics: Vercel Analytics + Google Analytics 4

Fast-launch alternative (non-developer):
- Shopify + custom theme (Dawn base, custom coded) + WhatsApp Order Button app
- Paystack for Shopify plugin
- Sanity for CMS still possible via Shopify headless

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DESIGN REFERENCES TO CHANNEL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Aesthetic references (not copies — channel their energy):
- kith.com — editorial product photography, editorial calm
- endclothing.com — clean dark product grid, size filtering UX
- goat.com — trusted marketplace energy, size-first UI
- bodega.com — high-culture sneaker store, minimal but textured
- Off-White website — aggressive typography, editorial boldness

But the result must feel undeniably Lagos — fast, confident, community-driven.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FINAL QUALITY STANDARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before calling this done, ask yourself:
1. Would a customer in Lagos trust this enough to pay ₦80,000 without seeing the shoes in person?
2. Does every single interaction feel intentional — not default?
3. Is the WhatsApp flow so frictionless that even a first-time online shopper can complete an order in under 60 seconds?
4. Does the homepage make someone stop scrolling and say "who built this"?
5. Does it load fast enough on a 4G Glo connection in Surulere?

If the answer to all 5 is YES — ship it.