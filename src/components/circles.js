import React from "react";
import Circle from "./Circle";
import Guide from "./Guide";

export default ({ circles }) => {
  let x = window.width / 2;
  let y = window.height / 2;

  return (
    <svg transform="scale(1,-1)" viewBox={`${-x} ${-y} ${x * 2} ${y * 2}`}>
      <Guide x={x} y={y} />

      {circles.map((e, i) => {
        return <Circle {...e} key={i} />;
      })}
    </svg>
  );
};
