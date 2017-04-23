import React from 'react';
import Circle from './Circle';

export default ({circles}) => {
  let x = window.width / 2;
  let y = window.height / 2;

  return (
    <svg viewBox={`${-x} ${-y} ${x * 2} ${y * 2}`}>
      {circles.map((e, i) => {
        return <Circle {...e} key={i} />;
      })}
    </svg>
  );
};
