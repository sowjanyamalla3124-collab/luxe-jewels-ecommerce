import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getUserFromRequest } from '@/lib/auth'
import * as XLSX from 'xlsx'

export async function POST(request) {
  const user = await getUserFromRequest(request)
  if (!user || user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Admin only' }, { status: 403 })
  }

  const formData = await request.formData()
  const file = formData.get('file')
  if (!file) return NextResponse.json({ error: 'No file' }, { status: 400 })

  const buffer = Buffer.from(await file.arrayBuffer())
  const workbook = XLSX.read(buffer, { type: 'buffer' })
  const sheet = workbook.Sheets[workbook.SheetNames[0]]
  const rows = XLSX.utils.sheet_to_json(sheet)

  let success = 0, failed = 0
  const errors = []

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i]
    try {
      if (!row.name || !row.sku || !row.price) {
        throw new Error('Missing required fields: name, sku, price')
      }
      await prisma.product.upsert({
        where: { sku: String(row.sku) },
        update: {
          name: row.name,
          price: Number(row.price),
          discountPrice: row.discountPrice ? Number(row.discountPrice) : null,
          stock: Number(row.stock || 0),
          description: row.description || ''
        },
        create: {
          name: row.name,
          slug: String(row.name).toLowerCase().replace(/\s+/g, '-'),
          sku: String(row.sku),
          price: Number(row.price),
          discountPrice: row.discountPrice ? Number(row.discountPrice) : null,
          stock: Number(row.stock || 0),
          description: row.description || '',
          categoryId: row.categoryId || (await prisma.category.findFirst())?.id
        }
      })
      success++
    } catch (e) {
      failed++
      errors.push({ row: i + 2, message: e.message })
    }
  }

  return NextResponse.json({ success, failed, errors: errors.slice(0, 10) })
}
