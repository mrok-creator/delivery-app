import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://62c004aad40d6ec55cc963d5.mockapi.io/api/v1/customers',
});

export const addUser = async body => {
  const { data } = await instance.post('/', body);
  return data;
};

// export const getAllUser = async () => {
//   const { data } = await instance.get('/');
//   return data;
// };

// export const getById = async id => {
//   const { data } = await instance.get(`/${id}`);
//   return data;
// };

// export const deleteUser = async id => {
//   const { data } = await instance.delete(`/${id}`);
//   return data;
// };
