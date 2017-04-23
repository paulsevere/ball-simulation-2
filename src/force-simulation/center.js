import { getForce } from "./util";

// const centerForce = circ => {
//   const { fx, fy } = getForce(circ, { x: 0, y: 0, r: 100 });
//   var { dx, dy } = circ;
//   dx += fx(1);
//   dy += fy(1);
//   return Object.assign(circ, {
//     dx,
//     dy,
//   });
// };

const charge = circ => circ2 => {
  const { fx, fy } = getForce(circ, circ2);
  return { dx: fx(circ2.r), dy: fy(circ2.r) };
};

export default size => nodes => circ => {
  const ch = charge(circ);
  return ch({ x: 0, y: 0, r: size });
  // return circ;
};
