import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { prisma } from '@/lib/prisma'

export async function POST(request) {
  try {
    const { email, password } = await request.json()
    const user = await prisma.user.findUnique({ where: { email } })
    if (!user || !await bcrypt.compare(password, user.password)) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' })
    return NextResponse.json({ token, user: { id: user.id, email: user.email, role: user.role } })
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
