import { api } from './api';
import axios from 'axios';

export const fetchPopularFilms = async () => {
  try {
    const response = await axios.get(
      `${api.baseUrl}trending/movie/day?api_key=${api.apiKey}`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getMoviesBySearch = async query => {
  try {
    const response = await axios.get(
      `${api.baseUrl}search/movie?api_key=${api.apiKey}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getMovieDetails = async movieId => {
  try {
    const response = await axios.get(
      `${api.baseUrl}movie/${movieId}?api_key=${api.apiKey}`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getMovieCredits = async movieId => {
  try {
    const response = await axios.get(
      `${api.baseUrl}/movie/${movieId}/credits?api_key=${api.apiKey}`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getMovieReviews = async movieId => {
  try {
    const response = await axios.get(
      `${api.baseUrl}/movie/${movieId}/reviews?api_key=${api.apiKey}`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
