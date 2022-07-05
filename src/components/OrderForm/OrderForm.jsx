import { useState, useCallback } from 'react';

import { Notify } from 'notiflix';

import { addUser } from 'shared/services/customer';
import s from './orderForm.module.css';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserData = useCallback(async data => {
    setIsLoading(prevState => true);
    setError(prevState => null);
    try {
      const userData = await addUser(data);
      setIsLoading(prevState => false);
      Notify.success(
        `${userData.name}, your order was successfully accepted, our manager will contact you ASAP`
      );
    } catch (error) {
      setError(prevState => error);
      Notify.error(` order was not accepted, please try again later`);
    }
  }, []);

  const handleChange = useCallback(
    ({ target }) => {
      const { name, value } = target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value,
      }));
    },
    [setFormData]
  );

  const createOrder = useCallback(
    async e => {
      e.preventDefault();
      console.log(formData);
      const data = await fetchUserData(formData);
      console.log(data);
      setFormData({ name: '', phone: '', email: '', address: '' });
    },
    [fetchUserData, formData]
  );

  const { name, phone, email, address } = formData;

  return (
    <form className={s.form} onSubmit={createOrder}>
      <label htmlFor="name" className={s.label}>
        Name
      </label>
      <input
        onChange={handleChange}
        required
        className={s.input}
        value={name}
        name="name"
        type="text"
        id="name"
        placeholder="Name"
      />
      <label htmlFor="email" className={s.label}>
        Email
      </label>
      <input
        onChange={handleChange}
        required
        className={s.input}
        value={email}
        name="email"
        type="email"
        id="email"
        placeholder="Email"
      />
      <label htmlFor="phone" className={s.label}>
        Phone
      </label>
      <input
        onChange={handleChange}
        required
        className={s.input}
        value={phone}
        name="phone"
        type="phone"
        id="phone"
        placeholder="Phone"
      />
      <label htmlFor="address" className={s.label}>
        Address
      </label>
      <input
        onChange={handleChange}
        required
        className={s.input}
        value={address}
        name="address"
        type="text"
        id="address"
        placeholder="Address"
      />
      <button className={s.button} type="submit">
        {isLoading ? 'Loading...' : 'Order'}
      </button>

      {error && <p className={s.error}>{error.message}</p>}
    </form>
  );
};
export default OrderForm;
