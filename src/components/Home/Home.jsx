import { useState, useEffect } from 'react';
import { fetchPopularFilms } from 'services/fetchPopularFilms';
import { MovieList } from 'components/MovieList/MovieList';

export const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchPopularFilms().then(data => {
      setFilms(data.results);
    });
  }, []);

  return (
    films.length > 0 && (
      <main>
        <h1>Trending today</h1>
        <MovieList movies={films}></MovieList>
      </main>
    )
  );
};
