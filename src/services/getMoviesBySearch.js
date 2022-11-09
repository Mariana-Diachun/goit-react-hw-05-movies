import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getMoviesBySearch = async query => {
  try {
    const response = await axios.get(
      `search/movie?api_key=ae750ece0804f05464dc1609a148e97e&language=en-US&query=${query}&page=1&include_adult=false`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
