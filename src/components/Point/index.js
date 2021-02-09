import { useState } from "react";

const Point = ({ lat, long, color, updateCity }) => {
  
  const [selected, setSelected] = useState(false);

  return (
    <circle
      cx={long}
      cy={lat}
      r="15"
      onMouseEnter={() => {
        setSelected(true);
        updateCity();
      }}
      onMouseLeave={() => {
        setSelected(false);
      }}
      fill={selected ? "red" : color}
      stroke="black"
    />
  );
};

export default Point;
