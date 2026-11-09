'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'

const sampleProducts = [
  { id: 1, name: 'Golden Drop Earrings', price: 2499, discountPrice: 1999, image: '/placeholder-jewellery.jpg', category: 'Earrings' },
  { id: 2, name: 'Pearl Necklace Set', price: 4999, discountPrice: 3999, image: '/placeholder-jewellery.jpg', category: 'Necklaces' },
  { id: 3, name: 'Diamond Look Ring', price: 1799, discountPrice: 1299, image: '/placeholder-jewellery.jpg', category: 'Rings' },
  { id: 4, name: 'Traditional Mangalsutra', price: 3499, discountPrice: 2799, image: '/placeholder-jewellery.jpg', category: 'Mangalsutra' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-br from-ivory to-champagne/30 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 px-4"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-charcoal mb-6">
            Timeless Elegance
          </h1>
          <p className="text-xl md:text-2xl text-charcoal/80 mb-8 max-w-2xl mx-auto">
            Discover premium imitation jewellery that captures the essence of luxury.
          </p>
          <Link href="/products" className="inline-flex items-center gap-2 bg-gold text-white px-8 py-4 rounded-full hover:bg-gold/90 transition shadow-lg">
            Shop Collection <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-charcoal">New Arrivals</h2>
            <p className="text-charcoal/70 mt-2">Fresh designs just for you</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sampleProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-10">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Earrings', 'Necklaces', 'Rings', 'Bangles'].map((cat) => (
              <Link key={cat} href={`/products?category=${cat.toLowerCase()}`} className="group">
                <div className="aspect-square bg-champagne/20 rounded-2xl flex items-center justify-center group-hover:bg-champagne/40 transition">
                  <span className="font-serif text-xl">{cat}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
