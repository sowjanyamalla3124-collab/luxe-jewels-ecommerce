'use client'

import { DollarSign, ShoppingBag, Users, Package } from 'lucide-react'

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Revenue', value: '₹12,45,890', icon: DollarSign },
    { label: 'Total Orders', value: '1,284', icon: ShoppingBag },
    { label: 'Customers', value: '856', icon: Users },
    { label: 'Products', value: '342', icon: Package },
  ]

  return (
    <div className="p-6">
      <h1 className="text-3xl font-serif mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-2xl shadow-sm border border-champagne/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-charcoal/60">{stat.label}</p>
                <p className="text-2xl font-semibold mt-1">{stat.value}</p>
              </div>
              <stat.icon className="text-gold" size={32} />
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white p-6 rounded-2xl border">
        <h2 className="text-xl font-serif mb-4">Recent Orders</h2>
        <p className="text-charcoal/60">Order management table will be here.</p>
      </div>
    </div>
  )
}
