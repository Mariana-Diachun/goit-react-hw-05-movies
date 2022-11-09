import PropTypes from 'prop-types';
import { Wrap, Title } from 'components/ReviewsList/ReviewsList.styled';

const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(review => {
        return (
          <li key={review.id}>
            <Wrap>
              <Title>Author name:</Title>
              <p>{review.author}</p>
            </Wrap>
            <p>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

export default ReviewsList;
