import axios from "axios";

const ACCESS_KEY = '9V4a_hb5q5F0KtPwkcLtclZtSf9do5lW07dSckbfzEU';
// const SECRET_KEY = '3VSxRUyoi7syW_TgCc2yLgjRxyhIE-8R8UJJDpjpiWU';
const API_URL = 'https://api.unsplash.com';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
});

export const getPhotos = async (query) => {
  const response = await api.get('/search/photos', {
    params: {
      query,
      per_page: 10,
    },
  });
  return response.data.results;
};

export const getPhoto = async (id) => {
  const response = await api.get(`/photos/${id}`);
  return response.data;
};