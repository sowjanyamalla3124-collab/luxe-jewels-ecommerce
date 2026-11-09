'use client'

import Link from 'next/link'
import { ShoppingBag, Heart, User, Search, Menu } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-champagne/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-serif font-bold text-gold tracking-wide">
            LuxeJewels
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="/products" className="text-charcoal hover:text-gold transition">Shop</Link>
            <Link href="/collections" className="text-charcoal hover:text-gold transition">Collections</Link>
            <Link href="/about" className="text-charcoal hover:text-gold transition">About</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:text-gold transition"><Search size={20} /></button>
            <Link href="/wishlist" className="p-2 hover:text-gold transition relative">
              <Heart size={20} />
            </Link>
            <Link href="/cart" className="p-2 hover:text-gold transition relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-gold text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
            </Link>
            <Link href="/account" className="p-2 hover:text-gold transition"><User size={20} /></Link>
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}><Menu size={20} /></button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white border-t"
        >
          <div className="px-4 py-3 space-y-2">
            <Link href="/products" className="block py-2">Shop</Link>
            <Link href="/collections" className="block py-2">Collections</Link>
          </div>
        </motion.div>
      )}
    </header>
  )
}
