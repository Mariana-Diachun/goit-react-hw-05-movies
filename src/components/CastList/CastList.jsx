import { IMG_URL } from 'constans/imgUrl';

const CastList = ({ actors }) => {
  return (
    <ul>
      {actors.map(actor => {
        return (
          <li key={actor.id}>
            <img
              src={`${IMG_URL}/w300${actor.profile_path}`}
              alt=""
              width="150"
              height="230"
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default CastList;
