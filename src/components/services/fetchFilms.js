import axios from 'axios';

axios.defaults.baseURL = 'https://image.tmdb.org';

export const fetchFilms = async () => {
  try {
    const response = await axios.get('/trending/movie/day');
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
