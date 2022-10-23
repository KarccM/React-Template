import axios from 'axios';

export const login = async (data) => {
  const response = await axios.post(
    'http://192.168.1.102:3005/auth/admin/login',
    data
  );
  return response.data;
};
