import { useState } from "react";
import { Cinema } from "../cinema/component";
import { CinemaTabs } from "../cinema-tabs/component";

export const Cinemas = ({ cinemas }) => {
  const [activeCinemaIndex, setActiveCinemaIndex] = useState(0);

  const cinema = cinemas[activeCinemaIndex];

  return (
    <div>
      <CinemaTabs
        cinemas={cinemas}
        onClick={setActiveCinemaIndex}
        activeIndex={activeCinemaIndex}
      />
      <Cinema key={cinema.id} cinema={cinema} />
    </div>
  );
};
