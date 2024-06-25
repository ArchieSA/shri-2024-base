import { Film } from "../film/component";

export const Films = ({ films }) => {
  return (
    <div>
      <h3>Films</h3>
      {films.map((film) => (
        <Film key={film.id} film={film} />
      ))}
    </div>
  );
};
