import axios from 'axios';

export const providerApi = axios.create({
  baseURL: 'http://localhost:3000/provider',
});

export const getWFP = async () => {
  const response = await providerApi.get('/1');
  return response?.data;
};

export const getICRC = async () => {
  const response = await providerApi.get('/2');
  return response?.data;
};
