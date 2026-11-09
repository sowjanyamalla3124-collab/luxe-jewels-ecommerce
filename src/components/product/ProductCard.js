'use client'

import Link from 'next/link'
import { Heart, ShoppingBag } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProductCard({ product }) {
  const discount = product.discountPrice 
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : 0

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-champagne/20">
      <div className="relative aspect-square overflow-hidden bg-ivory">
        <img 
          src={product.image || '/placeholder-jewellery.jpg'} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition">
          <Heart size={18} className="text-charcoal hover:text-red-500" />
        </button>
        {discount > 0 && (
          <span className="absolute top-3 left-3 bg-gold text-white text-xs font-medium px-2 py-1 rounded-full">
            {discount}% OFF
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs text-gold uppercase tracking-wide mb-1">{product.category}</p>
        <Link href={`/products/${product.id}`}>
          <h3 className="font-serif text-lg text-charcoal group-hover:text-gold transition line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          {product.discountPrice ? (
            <>
              <span className="font-semibold text-charcoal">₹{product.discountPrice}</span>
              <span className="text-sm text-charcoal/50 line-through">₹{product.price}</span>
            </>
          ) : (
            <span className="font-semibold text-charcoal">₹{product.price}</span>
          )}
        </div>
        <button className="mt-4 w-full bg-charcoal text-white py-2.5 rounded-full text-sm font-medium hover:bg-gold transition flex items-center justify-center gap-2">
          <ShoppingBag size={16} /> Add to Cart
        </button>
      </div>
    </div>
  )
}
