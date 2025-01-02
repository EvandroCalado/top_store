import { ProductCard } from '../product-card';

export type Product = {
  name: string;
  slug: string;
  category: string;
  description: string;
  images: string[];
  price: number;
  brand: string;
  rating: number;
  numReviews: number;
  stock: number;
  isFeatured: boolean;
  banner: string | null;
};

type ProductListProps = {
  data: Product[];
  title?: string;
};

export const ProductList = ({ data, title }: ProductListProps) => {
  return (
    <div>
      <h2 className='h2-bold mb-4'>{title}</h2>

      {data.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {data.map((product: Product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div> No products found</div>
      )}
    </div>
  );
};
