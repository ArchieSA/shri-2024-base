import { Tab } from "../tab/component";

export const CinemaTabs = ({ cinemas, onClick, activeIndex }) => {
  return (
    <div>
      {cinemas.map((cinema, index) => (
        <Tab
          key={cinema.id}
          onClick={() => onClick(index)}
          isActive={activeIndex === index}
        >
          {cinema.name}
        </Tab>
      ))}
    </div>
  );
};
