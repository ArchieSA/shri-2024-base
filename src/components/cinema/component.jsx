import { Films } from "../films/component";
import { NewReviewForm } from "../new-review-form/component";
import { Reviews } from "../reviews/component";

export const Cinema = ({ cinema }) => {
  const { name, films, reviews } = cinema;

  return (
    <div>
      <h2>{name}</h2>
      <Films films={films} />
      <Reviews reviews={reviews} />
      <NewReviewForm />
    </div>
  );
};
