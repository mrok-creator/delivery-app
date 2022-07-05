import { useState, useEffect } from 'react';

import ShopItem from './ShopItem';
import Loader from 'shared/components/Loader';

import * as api from 'shared/services/shop';
import s from './shopsList.module.css';

const Shops = () => {
  const [shopsList, setShops] = useState({
    shops: [],
    isLoading: false,
    error: null,
  });

  useEffect(() => {
    const fetchShops = async () => {
      setShops(prevShops => ({ ...prevShops, isLoading: true, error: null }));

      const shops = await api.getShops();

      try {
        setShops(prevShops => ({ ...prevShops, isLoading: false, shops }));
      } catch (error) {
        setShops(prevShops => ({
          ...prevShops,
          error: error.message,
          isLoading: false,
        }));
      }
    };
    fetchShops();
  }, []);

  const { shops, isLoading, error } = shopsList;

  const elements = shops.map(shop => (
    <ShopItem
      key={shop.id}
      id={shop.id}
      avatar={shop.avatar}
      name={shop.name}
    />
  ));

  return (
    <>
      {shops.length > 0 && (
        <>
          <h2 className={s.title}>Shops</h2>
          {elements}
        </>
      )}

      {isLoading && <Loader />}
      {error && <div>{error}</div>}
    </>
  );
};

export default Shops;
