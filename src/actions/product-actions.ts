'use server';

import { prisma } from '@/db/prisma';
import { LATEST_PRODUCTS_LIMIT } from '@/lib/constants';

export const getLatestProducts = async () => {
  const products = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: 'desc' },
  });

  return products;
};
