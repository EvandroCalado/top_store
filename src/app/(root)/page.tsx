import { getLatestProducts } from '@/actions/product-actions';
import { ProductList } from '@/components/product';

const HomePage = async () => {
  const latestProducts = await getLatestProducts();

  return (
    <>
      <ProductList data={latestProducts} title='Newest Arrivals' />
    </>
  );
};

export default HomePage;
