import axios from 'axios';

export const userApi = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getUsers = async () => {
  const response = await userApi.get('/users');
  return response.data;
};
export const addUsers = async (user) => await userApi.post('/users', user);
export const updateUsers = async (user) =>
  await userApi.patch(`/users/${user.id}`, user);
export const deleteUsers = async ({ id }) =>
  await userApi.delete(`/users/${id}`);
