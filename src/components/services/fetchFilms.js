import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchFilms = async () => {
  try {
    const response = await axios.get(
      'trending/movie/day?api_key=ae750ece0804f05464dc1609a148e97e'
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
