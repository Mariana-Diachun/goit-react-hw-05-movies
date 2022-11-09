import { useState, useEffect, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'services/getMovieDetails';
import { IMG_URL } from 'constans/imgUrl';
import BackLink from 'components/BackLink/BackLink';
import {
  Wrapper,
  Box,
  InfoBox,
  AdditionalInfo,
  Info,
  Title,
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
  const vote = Math.floor(movieDetails.vote_average * 10);

  // const goBack = () => {
  //   navigate(-1);
  // };

  return <Loader /> ? (
    <Box>
      {/* <button type="button" onClick={goBack}>
        Go back
      </button> */}
      <BackLink to={backLinkHref}>Go back</BackLink>
      <Wrapper>
        <img src={`${IMG_URL}/w300${movieDetails.poster_path}`} alt="" />
        <InfoBox>
          <Title>{movieDetails.title}</Title>
          <h3>Overview :</h3>
          <p> {movieDetails.overview}</p>
          <h3>User score:</h3>
          <p> {vote} %</p>
          <h3>Genres:</h3>
          <p>{genre}</p>
        </InfoBox>
      </Wrapper>
      <AdditionalInfo>
        <h2>Additional information</h2>
        <li>
          <Link to="cast">
            <Info>Cast:</Info>
          </Link>
        </li>
        <li>
          <Link to="reviews">
            <Info>Reviews:</Info>
          </Link>
        </li>

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
