import { useState, useEffect } from 'react';
import SearchBar from 'components/SearchBar/SearchBar';
import { fetchFilms } from 'services/fetchFilms';
import { Link } from 'react-router-dom';

export const Movies = ({ query }) => {
  const [filmSearch, setFilmSearch] = useState('');
  const [films, setFilms] = useState([]);

  const handleFormSubmit = query => {
    setFilmSearch(query);
    // console.log(query);
  };

  useEffect(() => {
    if (filmSearch === '') return;

    fetchFilms(filmSearch).then(data => {
      setFilms([...data.results]);
      // console.log(films);
    });
  }, [filmSearch]);

  // console.log(films);

  return (
    <div>
      <SearchBar onSubmit={handleFormSubmit} />
      <ul>
        {films.map(item => {
          return (
            <li key={item.id}>
              <Link to={`${item.id}`}>{item.title} </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
