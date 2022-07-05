import { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { setActiveId } from 'redux/shops/shops-slice';
import s from './shopItem.module.css';

const ShopItem = ({ name, avatar, id }) => {
  const dispatch = useDispatch();

  const activeId = useSelector(state => state.shops.activeId, shallowEqual);

  const getActive = id => {
    if (activeId === id) {
      return s.active;
    }
    return s.shopItem;
  };

  const setId = useCallback(
    id => {
      dispatch(setActiveId(id));
    },
    [dispatch]
  );

  return (
    <div className={getActive(id)} onClick={() => setId(id)}>
      <img src={avatar} alt={`${name} logo`} className={s.img} />
      <h3 className={s.title}>{name}</h3>
    </div>
  );
};

export default ShopItem;
