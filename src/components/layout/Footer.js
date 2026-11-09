export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-serif text-gold mb-4">LuxeJewels</h3>
          <p className="text-sm opacity-80">Premium imitation jewellery crafted with elegance.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/products?category=earrings">Earrings</a></li>
            <li><a href="/products?category=necklaces">Necklaces</a></li>
            <li><a href="/products?category=rings">Rings</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Policies</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/shipping">Shipping</a></li>
            <li><a href="/returns">Returns</a></li>
            <li><a href="/privacy">Privacy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm">hello@luxejewels.com</p>
          <p className="text-sm">+91 98765 43210</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm opacity-70">
        © {new Date().getFullYear()} LuxeJewels. All rights reserved.
      </div>
    </footer>
  )
}
