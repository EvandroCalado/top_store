'use server';

import { LATEST_PRODUCTS_LIMIT } from '@/lib/constants';
import { PrismaClient } from '@prisma/client';

export const getLatestProducts = async () => {
  const prisma = new PrismaClient();

  const products = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: 'desc' },
  });

  return products;
};