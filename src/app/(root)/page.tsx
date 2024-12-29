import { ProductList } from '@/components/product';
import sampleData from '@/db/sample-data';

const HomePage = () => {
  return (
    <>
      <ProductList data={sampleData.products} title='Newest Arrivals' />
    </>
  );
};

export default HomePage;
