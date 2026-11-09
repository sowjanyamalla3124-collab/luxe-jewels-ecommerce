'use client'

import { useState } from 'react'
import ProductCard from '@/components/product/ProductCard'
import { Filter } from 'lucide-react'

const products = [
  { id: 1, name: 'Golden Drop Earrings', price: 2499, discountPrice: 1999, image: '/placeholder.jpg', category: 'Earrings' },
  { id: 2, name: 'Pearl Necklace Set', price: 4999, discountPrice: 3999, image: '/placeholder.jpg', category: 'Necklaces' },
  { id: 3, name: 'Diamond Look Ring', price: 1799, discountPrice: 1299, image: '/placeholder.jpg', category: 'Rings' },
  { id: 4, name: 'Traditional Mangalsutra', price: 3499, discountPrice: 2799, image: '/placeholder.jpg', category: 'Mangalsutra' },
  { id: 5, name: 'Elegant Bangles Set', price: 2199, discountPrice: 1699, image: '/placeholder.jpg', category: 'Bangles' },
  { id: 6, name: 'Party Wear Anklets', price: 999, discountPrice: 799, image: '/placeholder.jpg', category: 'Anklets' },
]

export default function ProductsPage() {
  const [filterOpen, setFilterOpen] = useState(false)

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-serif">All Jewellery</h1>
        <button onClick={() => setFilterOpen(!filterOpen)} className="flex items-center gap-2 border px-4 py-2 rounded-full">
          <Filter size={18} /> Filters
        </button>
      </div>

      {filterOpen && (
        <div className="mb-6 p-4 bg-white rounded-xl border">
          <p className="text-sm text-charcoal/70">Category, Price, Colour filters will appear here.</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
