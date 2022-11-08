import { getMovieCredits } from 'services/getMovieCredits';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CastList from 'components/CastList/CastList';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId).then(data => {
      setCast(data.cast);
    });
  }, [movieId]);

  return <CastList actors={cast} />;
};

export default Cast;
