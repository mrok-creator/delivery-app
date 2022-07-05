import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://62c004aad40d6ec55cc963d5.mockapi.io/api/v1/Shops',
});

export const getShops = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const addShop = async body => {
  const { data } = await instance.post('/', body);
  return data;
};

export const getShopById = async id => {
  const { data } = await instance.get(`/${id}`);
  return data;
};

export const deleteShop = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};
