import { useState, useEffect } from 'react';
import SearchBar from 'components/SearchBar/SearchBar';
import { useSearchParams } from 'react-router-dom';
import { getMoviesBySearch } from 'services/fetch';
import MoviesListBySearch from 'components/MovieList/MoviesListSearch';

const Movies = () => {
  const [searchFilms, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      const fetchSearchMovies = async () => {
        try {
          const data = await getMoviesBySearch(query);
          setSearchMovies(data.results);
        } catch (error) {
          console.error(error);
        }
      };
      fetchSearchMovies();
    }
    return;
  }, [query]);

  const handleFormSubmit = q => {
    setSearchParams({ query: q });
  };

  return (
    <div>
      <SearchBar onSubmit={handleFormSubmit} />
      <MoviesListBySearch films={searchFilms} />
    </div>
  );
};
export default Movies;
