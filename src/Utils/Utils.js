import axios from 'axios';

const api = axios.create({
  baseURL: 'https://vgram-rice-prediction.onrender.com', // replace with your API base URL
});

const get = async (endpoint, params = {}) => {
  try {
    const response = await api.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const post = async (endpoint, data = {}, params = {}) => {
  try {
    const response = await api.post(endpoint, data, params);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};