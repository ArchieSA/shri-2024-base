import { Review } from "../review/component";

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews</h3>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};
