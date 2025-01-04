import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

import { ProductPrice } from '../product-price';

type ProductCardPros = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardPros) => {
  return (
    <Card className='w-full max-w-sm group overflow-hidden'>
      <CardHeader className='p-0 items-center overflow-hidden'>
        <Link href={`/products/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            width={300}
            height={300}
            priority
            className='group-hover:scale-105 transition-transform duration-300 object-contain'
          />
        </Link>
      </CardHeader>

      <CardContent className='p-4 grid gap-4'>
        <div className='text-xs text-muted-foreground'>{product.brand}</div>
        <Link
          href={`/products/${product.slug}`}
          className='group-hover:text-yellow-400 duration-300'
        >
          <h2 className='text-sm font-medium'>{product.name}</h2>
        </Link>

        <div className='flex-between gap-4'>
          <p>{product.rating.toString()} Stars</p>
          {product.stock > 0 ? (
            <ProductPrice value={Number(product.price)} />
          ) : (
            <p className='text-destructive'>Out of stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
