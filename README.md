# LuxeJewels - Premium Imitation Jewellery E-Commerce

## Implemented Features (Next Phases Complete)

### Authentication
- Register + Login with JWT + bcrypt
- Role-based (CUSTOMER / ADMIN)
- Protected routes via `getUserFromRequest`

### Product Management
- Full CRUD APIs (`/api/products`, `/api/products/[id]`)
- Category support
- Admin-only create/update/delete

### Cart & Orders
- Cart add/remove/list (`/api/cart`)
- Create order + Razorpay order (`/api/orders`)
- Payment signature verification (`/api/orders/verify`)

### Bulk Import
- Excel/CSV upload via `/api/admin/import`
- Upsert by SKU
- Success/failed counts + error report

### Admin
- Order status management (`/api/admin/orders`)
- Bulk import UI connected to real API

### Frontend
- Login / Register pages store token in localStorage
- Products page fetches from API
- Cart page with Razorpay checkout flow
- Admin import page with real upload

## Setup

```bash
git clone https://github.com/sowjanyamalla3124-collab/luxe-jewels-ecommerce.git
cd luxe-jewels-ecommerce
npm install
cp .env.example .env
# fill DATABASE_URL, JWT_SECRET, RAZORPAY_*, CLOUDINARY_*
npx prisma generate
npx prisma db push
npm run dev
```

## Remaining (optional next)
- Cloudinary multi-image upload UI
- OTP / Google login
- Wishlist persistence
- Reports & analytics charts
- Full product variant management
