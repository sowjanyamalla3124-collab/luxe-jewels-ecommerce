import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getUserFromRequest } from '@/lib/auth'
import { razorpay } from '@/lib/razorpay'

export async function POST(request) {
  const user = await getUserFromRequest(request)
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { items, addressId, total } = await request.json()

  const order = await prisma.order.create({
    data: {
      userId: user.id,
      addressId,
      total,
      status: 'PENDING',
      items: {
        create: items.map(i => ({
          productId: i.productId,
          quantity: i.quantity,
          price: i.price
        }))
      }
    },
    include: { items: true }
  })

  const razorpayOrder = await razorpay.orders.create({
    amount: Math.round(total * 100),
    currency: 'INR',
    receipt: order.id,
    notes: { orderId: order.id }
  })

  await prisma.order.update({
    where: { id: order.id },
    data: { paymentId: razorpayOrder.id }
  })

  return NextResponse.json({ order, razorpayOrderId: razorpayOrder.id, key: process.env.RAZORPAY_KEY_ID })
}
