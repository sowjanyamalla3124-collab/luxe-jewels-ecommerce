import { NextResponse } from 'next/server'

// Sample data - replace with Prisma in production
const products = [
  { id: '1', name: 'Golden Drop Earrings', price: 2499, discountPrice: 1999, stock: 50, category: 'Earrings' },
  { id: '2', name: 'Pearl Necklace Set', price: 4999, discountPrice: 3999, stock: 30, category: 'Necklaces' },
]

export async function GET() {
  return NextResponse.json(products)
}

export async function POST(request) {
  const body = await request.json()
  // Validate and save with Prisma
  return NextResponse.json({ message: 'Product created', data: body }, { status: 201 })
}
