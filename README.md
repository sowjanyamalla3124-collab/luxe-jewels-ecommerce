# LuxeJewels - Premium Imitation Jewellery E-Commerce

## Architecture

- **Frontend**: Next.js App Router (JavaScript), Tailwind CSS, Framer Motion
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL + Prisma ORM
- **Storage**: Cloudinary (recommended)
- **Payments**: Razorpay

## Folder Structure

```
src/
├── app/
│   ├── page.js              # Homepage
│   ├── products/page.js     # Product listing
│   ├── admin/page.js        # Admin dashboard
│   ├── api/products/route.js
│   └── layout.js
├── components/
│   ├── layout/Header.js, Footer.js
│   └── product/ProductCard.js
├── prisma/schema.prisma     # Database schema
└── lib/                     # Utilities
```

## Setup

1. `cd jewellery-store`
2. `npm install`
3. Create `.env` with `DATABASE_URL` and Razorpay keys
4. `npx prisma generate && npx prisma db push`
5. `npm run dev`

## Features Implemented (Core)

- Premium luxury UI with gold/ivory palette
- Responsive product cards with hover animations
- Homepage with hero and new arrivals
- Admin dashboard stats
- Prisma schema for Users, Products, Orders, ImportJobs, etc.
- Sample API routes

## Next Steps for Full Implementation

1. Authentication (JWT + OTP + Google)
2. Full product CRUD with image upload (Cloudinary)
3. Cart, Wishlist, Checkout with Razorpay
4. Bulk import engine (xlsx, csv, pdf parsing)
5. Admin product management with drag-drop images
6. Order management and reports

This is a production-oriented foundation. Expand each module following the requirements.
