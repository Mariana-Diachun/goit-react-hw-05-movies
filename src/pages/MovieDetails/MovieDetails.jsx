import { useState, useEffect, Suspense } from 'react';
import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';
import { GoChevronLeft } from 'react-icons/go';
import { getMovieDetails } from 'services/fetch';
import { IMG_URL } from 'constans/imgUrl';
import {
  Wrapper,
  Box,
  InfoBox,
  AdditionalInfo,
  Info,
  Title,
  Button,
} from 'pages/MovieDetails/MovieDetails.styled';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [genres, setGenres] = useState([]);

  const { movieId } = useParams();
  const navigate = useNavigate();

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

  const goBack = () => {
    navigate(-1);
  };

  return <Loader /> ? (
    <Box>
      <Button onClick={goBack}>
        <GoChevronLeft />
        Go back
      </Button>
      <Wrapper>
        {movieDetails.poster_path ? (
          <img src={`${IMG_URL}/w300${movieDetails.poster_path}`} alt="" />
        ) : (
          <img src="Error.src" alt="" />
        )}

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
          <Link replace to="cast">
            <Info>Cast:</Info>
          </Link>
        </li>
        <li>
          <Link replace to="reviews">
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
