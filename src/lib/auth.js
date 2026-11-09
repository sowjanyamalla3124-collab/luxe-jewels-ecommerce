import jwt from 'jsonwebtoken'
import { prisma } from './prisma'

export function verifyToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET)
  } catch {
    return null
  }
}

export async function getUserFromRequest(request) {
  const authHeader = request.headers.get('authorization')
  if (!authHeader?.startsWith('Bearer ')) return null
  const token = authHeader.split(' ')[1]
  const decoded = verifyToken(token)
  if (!decoded) return null
  return prisma.user.findUnique({ where: { id: decoded.id } })
}
