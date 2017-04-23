import React from "react";

export default function({ x, y }) {
  return (
    <g>
      <path
        d={`M ${-x} 0 L ${x} 0 M 0 ${-y}  L 0 ${y}`}
        stroke={"rgba(230, 207, 207,.2)"}
        fill={"rgba(0,0,0,0)"}
      />
      <circle className="radii" cx={0} cy={0} r={400} />
      <circle className="radii" cx={0} cy={0} r={300} />
      <circle className="radii" cx={0} cy={0} r={200} />
      <circle className="radii" cx={0} cy={0} r={100} />
    </g>
  );
}
