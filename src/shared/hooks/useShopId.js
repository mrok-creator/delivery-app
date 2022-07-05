import { useSelector, shallowEqual } from 'react-redux';

import { getShopId } from 'redux/shops/shops-selector';

const useShopId = () => {
  const shopId = useSelector(getShopId, shallowEqual);
  return shopId;
};

export default useShopId;
