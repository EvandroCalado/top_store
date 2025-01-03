import { CreateProductSchema } from '@/lib/validators';
import { z } from 'zod';

export type Product = z.infer<typeof CreateProductSchema> & {
  id: string;
  rating: string;
  createdAt: Date;
  updatedAt: Date;
};
