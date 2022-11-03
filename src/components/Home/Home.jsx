import { useState, useEffect } from 'react';
import { fetchFilms } from 'components/services/fetchFilms';

export const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchFilms().then(data => {
      setFilms(data.results);
    });
  }, []);

  return (
    films.length > 0 && (
      <ul>
        {films.map(item => {
          return <li key={item.id}>{item.title} </li>;
        })}
      </ul>
    )
  );
};
