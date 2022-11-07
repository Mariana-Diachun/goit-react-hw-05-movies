import { getMovieCredits } from 'services/getMovieCredits';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_URL } from 'constans/imgUrl';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId).then(data => {
      setCast(data.cast);
      console.log(data.cast);
    });
  }, [movieId]);

  return (
    <ul>
      {cast.map(actor => {
        return (
          <li key={actor.id}>
            <img src={`${IMG_URL}/w300${actor.profile_path}`} alt="" />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        );
      })}
    </ul>
  );
};
