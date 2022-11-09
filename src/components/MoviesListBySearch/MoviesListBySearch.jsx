import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

MoviesListBySearch.propTypes = {
  films: PropTypes.array,
};

export default MoviesListBySearch;
