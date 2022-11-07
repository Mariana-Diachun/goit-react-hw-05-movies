import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchFilms = async query => {
  //   console.log(query);
  try {
    const response = await axios.get(
      `search/movie?api_key=ae750ece0804f05464dc1609a148e97e&language=en-US&query=${query}&page=1&include_adult=false`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
