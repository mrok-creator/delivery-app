import { useSelector, shallowEqual } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';

import Modal from 'shared/components/Modal';
import OrderForm from 'components/OrderForm';

import * as actions from 'redux/shops/shops-slice';
import { getProducts } from 'redux/shops/shops-selector';
import s from './cart.module.css';

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts, shallowEqual);

  const [modal, setModal] = useState({
    isOpen: false,
  });

  const totalPrice = products
    .reduce((acc, item) => acc + item.price, 0)
    .toFixed(2);
  // elements.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)

  const deleteProduct = useCallback(
    id => dispatch(actions.deleteProducts(id)),
    [dispatch]
  );

  const clearCart = useCallback(
    () => dispatch(actions.clearCart()),
    [dispatch]
  );

  const showModal = useCallback(() => {
    setModal({
      isOpen: true,
    });
  }, [setModal]);

  const closeModal = useCallback(() => {
    setModal({
      isOpen: false,
    });
  }, [setModal]);

  const elements = products.map(({ name, url, price, text, id }) => (
    <li key={id} className={s.cartCard}>
      <img src={url} alt={`Product ${name}`} className={s.cartImg} />
      <p className={s.title}>{name}</p>
      <p className={s.price}>Price: {price} $</p>
      <button
        type="button"
        className={s.deleteBtn}
        onClick={() => deleteProduct(id)}
      >
        Delete
      </button>
    </li>
  ));

  const { isOpen } = modal;
  return (
    <>
      <ul className={s.cart}>{elements}</ul>
      <div>
        <p className={s.total}>Total price {totalPrice} $</p>
        <button type="button" className={s.btn} onClick={showModal}>
          Create Order
        </button>
        <button type="button" className={s.btn} onClick={clearCart}>
          Clear cart
        </button>
      </div>
      {isOpen && (
        <Modal close={closeModal}>
          <OrderForm />
        </Modal>
      )}
    </>
  );
};

export default Cart;
