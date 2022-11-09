import { useState, useEffect } from 'react';
import SearchBar from 'components/SearchBar/SearchBar';
import { fetchFilms } from 'services/fetchFilms';
import MoviesListBySearch from 'components/MoviesListBySearch/MoviesListBySearch';

const Movies = () => {
  const [filmSearch, setFilmSearch] = useState('');
  const [films, setFilms] = useState([]);

  const handleFormSubmit = query => {
    setFilmSearch(query);
  };

  useEffect(() => {
    if (filmSearch === '') return;

    fetchFilms(filmSearch).then(data => {
      setFilms([...data.results]);
    });
  }, [filmSearch]);

  return (
    <div>
      <SearchBar onSubmit={handleFormSubmit} />
      <MoviesListBySearch films={films} />
    </div>
  );
};
export default Movies;
