import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'services/getMovieDetails';
import { IMG_URL } from 'constans/imgUrl';
import BackLink from 'components/BackLink/BackLink';
import {
  Wrapper,
  Box,
  InfoBox,
  AdditionalInfo,
} from 'pages/MovieDetails/MovieDetails.styled';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [genres, setGenres] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? -1;

  useEffect(() => {
    getMovieDetails(movieId).then(data => {
      setMovieDetails(data);
      setGenres(data.genres);
    });
  }, [movieId]);

  const getGenresName = () => {
    return genres.map(genre => genre.name).join(', ');
  };
  const genre = getGenresName();

  return <Loader /> ? (
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
          <p>{genre}</p>
        </InfoBox>
      </Wrapper>
      <AdditionalInfo>
        <h3>Additional information</h3>
        <Link to="cast">
          <b>Cast:</b>
        </Link>
        <Link to="reviews">
          <b>Reviews:</b>
        </Link>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </AdditionalInfo>
    </Box>
  ) : (
    <Loader />
  );
};

export default MovieDetails;
