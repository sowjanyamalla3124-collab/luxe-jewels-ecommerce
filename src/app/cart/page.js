'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function CartPage() {
  const [items] = useState([
    { id: 1, name: 'Golden Drop Earrings', price: 1999, qty: 1 },
    { id: 2, name: 'Pearl Necklace Set', price: 3999, qty: 1 },
  ])

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif mb-8">Shopping Cart</h1>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded-xl border">
            <div>
              <h3 className="font-serif">{item.name}</h3>
              <p className="text-sm text-charcoal/60">Qty: {item.qty}</p>
            </div>
            <p className="font-semibold">₹{item.price}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 bg-white p-6 rounded-2xl border">
        <div className="flex justify-between text-xl font-serif mb-4">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
        <Link href="/checkout" className="block w-full bg-gold text-white text-center py-3 rounded-full hover:bg-gold/90">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  )
}
