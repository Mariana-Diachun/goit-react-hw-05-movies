import { useState, useEffect } from 'react';
import { fetchPopularFilms } from 'services/fetch';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchPopularFilms().then(data => {
      setFilms(data.results);
    });
  }, []);

  return (
    films.length && (
      <main>
        <h1>Trending today</h1>
        <MovieList movies={films}></MovieList>
      </main>
    )
  );
};
export default Home;
