import { PrismaClient } from '@prisma/client';

import sampleData from './sample-data';

const main = async () => {
  const prisma = new PrismaClient();

  // clear db
  await prisma.product.deleteMany();

  // create products
  await prisma.product.createMany({ data: sampleData.products });

  console.log('Database seeded successfully!');
};

main();
