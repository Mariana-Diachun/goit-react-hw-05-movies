import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/getMovieReviews';
import ReviewsList from 'components/ReviewsList/ReviewsList';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(data => {
      setReviews(data.results);
    });
  }, [movieId]);

  return reviews.length > 0 ? (
    <ReviewsList reviews={reviews} />
  ) : (
    <p>No reviews yet</p>
  );
};

export default Reviews;
