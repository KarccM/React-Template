import axios from 'axios';

export const userApi = axios.create({
  baseURL: 'http://localhost:3000/users',
  headers: {
    'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

export const getUsers = async () => {
  const response = await userApi.get('/');
  return response.data;
};

export const getUserById = async ({ queryKey }) => {
  const id = queryKey[1];
  const response = await userApi.get(`/${id}`);
  return response.data;
};
export const addUsers = async (user) => {
  return await userApi.post('/', user);
};
export const updateUsers = async ({ user }) => {
  return await userApi.patch(`/${user.id}`, user);
};
export const deleteUsers = async ({ id }) => await userApi.delete(`/${id}`);
