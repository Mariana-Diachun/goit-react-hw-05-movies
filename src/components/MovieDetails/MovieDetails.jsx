import { useState, useEffect, useMemo } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'services/getMovieDetails';
import { IMG_URL } from 'constans/imgUrl';
import { BackLink } from 'components/BackLink/BackLink';
import {
  Wrapper,
  Box,
  InfoBox,
} from 'components/MovieDetails/MovieDetails.styled';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getMovieDetails(movieId).then(data => {
      setMovieDetails(data);
      // console.log(data);
    });
  }, [movieId]);

  // const genres = useMemo(() => {
  //   return movieDetails.genres.map(genre => genre.name).join(', ');
  // }, [movieDetails]);

  return (
    <Box>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <Wrapper>
        <img src={`${IMG_URL}/w300${movieDetails.poster_path}`} alt="" />
        <InfoBox>
          <h2>{movieDetails.title}</h2>
          <h3>Overview :</h3>
          <p> {movieDetails.overview}</p>
          <h3>User score:</h3>
          <p> {movieDetails.vote_average}</p>
          <h3>Genres:</h3>
          {/* <p>{genres}</p> */}
        </InfoBox>
      </Wrapper>
      <div>
        <h3>Additional information</h3>
        <Link to="cast">Cast:</Link>
        <Link to="reviews">Reviews:</Link>
        <Outlet />
      </div>
    </Box>
  );
};
