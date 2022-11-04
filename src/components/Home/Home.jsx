import { useState, useEffect } from 'react';
import { fetchPopularFilms } from 'components/services/fetchPopularFilms';
import { Link, Outlet } from 'react-router-dom';

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
        <ul>
          {films.map(item => {
            return (
              <li key={item.id}>
                <Link to={`${item.id}`}>{item.title} </Link>
              </li>
            );
          })}
        </ul>
      </main>
    )
  );
};
