import Container from 'shared/components/Container';
import ShopsList from 'components/ShopsList';
import Products from 'components/Products';

import s from './shopPage.module.css';

const ShopsPage = () => {
  return (
    <Container>
      <div className={s.shopsWrapper}>
        <ShopsList />
      </div>
      <div className={s.productsWrapper}>
        <Products />
      </div>
    </Container>
  );
};

export default ShopsPage;
