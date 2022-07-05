import { useState, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { nanoid } from 'nanoid';

import Loader from 'shared/components/Loader';
import ProductCard from 'shared/components/ProductCard';

import { getShopId } from 'redux/shops/shops-selector';
import * as api from 'shared/services/shop';

const Products = () => {
  const activeID = useSelector(getShopId, shallowEqual);
  const [productsList, setProducts] = useState({
    products: [],
    isLoading: false,
    error: null,
  });

  useEffect(() => {
    const fetchShop = async () => {
      setProducts(prevProd => ({
        isLoading: true,
        error: null,
      }));

      try {
        const shops = await api.getShopById(activeID);

        setProducts(prevProd => ({
          ...prevProd,
          isLoading: false,
          products: [...shops.products],
        }));
        console.log(shops.products);
        console.log(productsList);
      } catch (error) {
        setProducts(prevProd => ({
          ...prevProd,
          error: error.message,
          isLoading: false,
        }));
      }
    };
    if (activeID) {
      fetchShop();
    }
  }, []);

  const { products, isLoading, error } = productsList;

  const elements = products.map(products => (
    <ProductCard key={nanoid()} {...products} />
  ));

  return (
    <>
      {products.length > 0 && { products }}
      {!(products.length > 0) && !error && `There is no products to order, yet`}
      {isLoading && <Loader />}
      {error && <div> {`Something went wrong: ${error}`}</div>}
    </>
  );
};

export default Products;
