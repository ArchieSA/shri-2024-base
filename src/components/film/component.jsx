import { useCount } from "../../hooks/use-count";
import { useUserContext } from "../../contexts/user";

export const Film = ({ film }) => {
  const { count, increment, decrement } = useCount();
  const { user } = useUserContext();

  if (!film) {
    return null;
  }

  return (
    <div>
      <div>{film.name}</div>
      {user && (
        <div>
          <button onClick={decrement} disabled={count === 0}>
            -
          </button>
          {count}
          <button onClick={increment} disabled={count === 6}>
            +
          </button>
        </div>
      )}
    </div>
  );
};
