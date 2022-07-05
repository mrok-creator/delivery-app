import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://62c004aad40d6ec55cc963d5.mockapi.io/api/v1/customers',
});

export const getAllUser = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const getById = async id => {
  const { data } = await instance.get(`/${id}`);
  return data;
};

export const addUser = async body => {
  const { data } = await instance.post('/', body);
  return data;
};

export const deleteDelete = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};
