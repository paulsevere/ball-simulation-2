import React from "react";
import { pretty } from "js-object-pretty-print";

export default props => {
  const { x, y, r, color, dx, dy } = props;
  return (
    <g>

      <circle cx={x} cy={y} fill={color} r={r} />
      <text className="full-info" textAnchor="middle" x={x} y={y + 10}>
        {pretty({ x, y, r, color, dx, dy }, null, "PRINT")
          .slice(1, -2)
          .split(",")
          .filter(e => e.indexOf("color") === -1)
          .map((e, i) => (
            <tspan x={x} y={-(y + 20 - i * 13)} key={i}>{e.trim()}</tspan>
          ))}

      </text>
    </g>
  );
};
