const { PrismaClient } = require('@prisma/client')
const fs = require('fs')
const path = require('path')

const prisma = new PrismaClient()

async function main() {
  console.log('Starting seed...')

  const categories = JSON.parse(fs.readFileSync(path.join(__dirname, '../seed-categories.json'), 'utf8'))
  const products = JSON.parse(fs.readFileSync(path.join(__dirname, '../seed-products.json'), 'utf8'))

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
  const batchSize = 100
  let done = 0

  for (let i = 0; i < products.length; i += batchSize) {
    const batch = products.slice(i, i + batchSize)
    const data = batch.map(p => ({
      name: p.name,
      slug: p.slug,
      sku: p.sku,
      description: p.description,
      price: p.price,
      discountPrice: p.discountPrice,
      stock: p.stock,
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
    if (done % 500 === 0 || done === products.length) {
      console.log(`Processed ${done}/${products.length}`)
    }
  }

  console.log('Seed complete!')
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
