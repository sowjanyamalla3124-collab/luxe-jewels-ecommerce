'use client'

import { useState } from 'react'
import { Heart, ShoppingBag, Star } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProductDetail({ params }) {
  const [qty, setQty] = useState(1)
  const product = {
    id: params.id,
    name: 'Golden Drop Earrings',
    price: 2499,
    discountPrice: 1999,
    description: 'Elegant gold-plated drop earrings with intricate detailing. Perfect for everyday and special occasions.',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    stock: 25,
    category: 'Earrings'
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="aspect-square bg-ivory rounded-2xl overflow-hidden mb-4">
            <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
          </div>
        </div>
        <div>
          <p className="text-gold uppercase text-sm tracking-wide">{product.category}</p>
          <h1 className="text-4xl font-serif mt-2 mb-4">{product.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-gold"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} /></div>
            <span className="text-sm text-charcoal/60">(128 reviews)</span>
          </div>
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-3xl font-semibold">₹{product.discountPrice}</span>
            <span className="text-xl text-charcoal/50 line-through">₹{product.price}</span>
          </div>
          <p className="text-charcoal/80 mb-6 leading-relaxed">{product.description}</p>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border rounded-full">
              <button onClick={() => setQty(Math.max(1, qty-1))} className="px-4 py-2">-</button>
              <span className="px-4">{qty}</span>
              <button onClick={() => setQty(qty+1)} className="px-4 py-2">+</button>
            </div>
            <span className="text-sm text-green-600">{product.stock} in stock</span>
          </div>
          <div className="flex gap-4">
            <motion.button whileTap={{ scale: 0.98 }} className="flex-1 bg-charcoal text-white py-4 rounded-full flex items-center justify-center gap-2 hover:bg-gold transition">
              <ShoppingBag size={20} /> Add to Cart
            </motion.button>
            <button className="px-6 border border-charcoal rounded-full hover:bg-charcoal hover:text-white transition">
              <Heart size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
