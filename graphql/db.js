import axios from 'axios';
const API_URL = 'https://yts.mx/api/v2/list_movies.json?limit=50';

export const getMovies = async (limit, rating) => {
  let REQUEST_URL = API_URL;
  if (limit > 0) {
    REQUEST_URL += `&limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  const res = await axios(REQUEST_URL);
  return res.data.data.movies;
};
