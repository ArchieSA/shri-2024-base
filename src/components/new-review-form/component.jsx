import { useReducer } from "react";
import { Rating } from "../rating/component";

const initialValue = {
  name: "Tema",
  text: "TheBest",
  rating: 5,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "setName":
      return { ...initialValue, name: payload };
    case "setText":
      return { ...state, text: payload };
    case "setRating":
      return { ...state, rating: payload };

    default:
      return state;
  }
};

export const NewReviewForm = ({ className }) => {
  const [form, dispatch] = useReducer(reducer, initialValue);

  return (
    <div className={className}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={(event) =>
            dispatch({ type: "setName", payload: event.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="text">Text: </label>
        <input
          type="text"
          id="text"
          name="text"
          value={form.text}
          onChange={(event) =>
            dispatch({ type: "setText", payload: event.target.value })
          }
        />
      </div>
      <div>
        <Rating
          maxRating={10}
          value={form.rating}
          onChange={(rating) =>
            dispatch({ type: "setRating", payload: rating })
          }
        />
      </div>
    </div>
  );
};
