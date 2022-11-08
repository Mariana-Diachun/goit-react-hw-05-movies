import axios from 'axios';

export const getMovieReviews = async movieId => {
  try {
    const response = await axios.get(
      `/movie/${movieId}/reviews?api_key=ae750ece0804f05464dc1609a148e97e`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
