export const Rating = ({ maxRating = 5, value, onChange }) => {
  return (
    <div>
      {new Array(maxRating).fill(null).map((_, index) => (
        <button
          key={index}
          onClick={() => onChange(index + 1)}
          disabled={index === value - 1}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};
