import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loader from 'shared/components/Loader';

const LayOut = lazy(() => import('components/LayOut'));

const ShopsPage = lazy(() => import('pages/ShopsPage'));
const CartPage = lazy(() => import('pages/CartPage'));

const NavigationRoutes = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route path="/shop" element={<ShopsPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default NavigationRoutes;
