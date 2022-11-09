import { IMG_URL } from 'constans/imgUrl';
import PropTypes from 'prop-types';

const CastList = ({ actors }) => {
  return (
    <ul>
      {actors.map(actor => {
        return (
          <li key={actor.id}>
            {actor.profile_path ? (
              <img
                src={`${IMG_URL}/w300${actor.profile_path}`}
                alt=""
                width="150"
                height="230"
              />
            ) : (
              <img src="Error.src" alt="" />
            )}

            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        );
      })}
    </ul>
  );
};

CastList.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};

export default CastList;
