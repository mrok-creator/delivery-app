import { useDispatch } from 'react-redux';

import { addProducts } from 'redux/shops/shops-slice';
import s from './productCard.module.css';

const ProductCard = ({ url, text, name }) => {
  const dispatch = useDispatch();

  const addToCart = data => {
    dispatch(addProducts(data));
  };

  const price = Math.floor(Math.random() * (300 - 30 + 1) + 30);
  return (
    <div className={s.productCard}>
      <img src={url} alt={`Product ${name}`} className={s.img} />
      <h3 className={s.title}>{name}</h3>
      <p className={s.text}>{text}</p>
      <button
        type="button"
        className={s.orderBtn}
        onClick={() => addToCart({ url, text, name, price })}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
