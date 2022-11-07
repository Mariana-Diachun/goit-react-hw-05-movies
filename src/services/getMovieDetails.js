import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getMovieDetails = async movieId => {
  try {
    const response = await axios.get(
      `movie/${movieId}?api_key=ae750ece0804f05464dc1609a148e97e`
    );
    return response.data;
    // console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};
