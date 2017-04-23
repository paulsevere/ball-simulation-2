import React from 'react';

export default ({x, y, r, color, dx, dy}) => {
  return (
    <g>
      <circle cx={x} cy={y} fill={color} r={r} />
      <text x={x} y={y}>
        {dx}
      </text>
    </g>
  );
};
