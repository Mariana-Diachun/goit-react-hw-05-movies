import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesListBySearch = ({ films }) => {
  const location = useLocation();

  return (
    <div>
      <ul>
        {films.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link state={{ from: location }} to={`/movies/${id}`}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

MoviesListBySearch.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    })
  ),
};

export default MoviesListBySearch;
