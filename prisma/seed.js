const { PrismaClient } = require('@prisma/client')
const fs = require('fs')
const path = require('path')

const prisma = new PrismaClient()

async function main() {
  console.log('Starting seed...')

  const catPath = path.join(__dirname, '../seed-categories.json')
  const prodPath = path.join(__dirname, '../seed-products.json')

  if (!fs.existsSync(catPath) || !fs.existsSync(prodPath)) {
    console.error('Missing seed-categories.json or seed-products.json in project root')
    process.exit(1)
  }

  const categories = JSON.parse(fs.readFileSync(catPath, 'utf8'))
  const products = JSON.parse(fs.readFileSync(prodPath, 'utf8'))

  console.log(`Seeding ${categories.length} categories...`)
  const categoryMap = {}

  for (const cat of categories) {
    const created = await prisma.category.upsert({
      where: { slug: cat.slug },
      update: { name: cat.name },
      create: { name: cat.name, slug: cat.slug }
    })
    categoryMap[cat.name] = created.id
  }

  console.log(`Seeding ${products.length} products in batches...`)
  const batchSize = 50
  let done = 0

  for (let i = 0; i < products.length; i += batchSize) {
    const batch = products.slice(i, i + batchSize)
    const data = batch.map(p => ({
      name: p.name,
      slug: p.slug,
      sku: String(p.sku),
      description: p.description || p.name,
      price: Number(p.price) || 0,
      discountPrice: p.discountPrice ? Number(p.discountPrice) : null,
      stock: Number(p.stock) || 0,
      categoryId: categoryMap[p.category],
      isActive: true
    })).filter(p => p.categoryId)

    if (data.length) {
      await prisma.product.createMany({
        data,
        skipDuplicates: true
      })
    }
    done += batch.length
    if (done % 500 === 0 || done >= products.length) {
      console.log(`Processed ${done}/${products.length}`)
    }
  }

  const count = await prisma.product.count()
  console.log(`Seed complete! Total products in DB: ${count}`)
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
