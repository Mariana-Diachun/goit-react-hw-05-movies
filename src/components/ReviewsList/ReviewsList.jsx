const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(review => {
        return (
          <li key={review.id}>
            <h3>Author name:</h3>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewsList;
