import s from './orderForm.module.css';

const OrderForm = () => {
  return (
    <form action="" className={s.form}>
      <label htmlFor="name" className={s.label}>
        Name
      </label>
      <input className={s.input} type="text" id="name" placeholder="Name" />
      <label htmlFor="email" className={s.label}>
        Email
      </label>
      <input className={s.input} type="email" id="email" placeholder="Email" />
      <label htmlFor="phone" className={s.label}>
        Phone
      </label>
      <input className={s.input} type="text" id="phone" placeholder="Phone" />
      <label htmlFor="address" className={s.label}>
        Address
      </label>
      <input
        className={s.input}
        type="text"
        id="address"
        placeholder="Address"
      />
      <button className={s.button} type="submit">
        {' '}
        Order{' '}
      </button>
    </form>
  );
};
export default OrderForm;
