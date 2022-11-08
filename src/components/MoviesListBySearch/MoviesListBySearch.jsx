import { Link } from 'react-router-dom';

const MoviesListBySearch = ({ films }) => {
  return (
    <ul>
      {films.map(item => {
        return (
          <li key={item.id}>
            <Link to={`${item.id}`}>{item.title} </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesListBySearch;
