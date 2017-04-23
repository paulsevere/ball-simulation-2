import { getForce } from "./util";

const charge = mult => circ => circ2 => {
  const { fx, fy, d } = getForce(circ, circ2);
  if (d === 0) {
    return { dx: 0, dy: 0 };
  }
  const force = circ2.r / d;
  return { dx: mult(fx(force)), dy: mult(fy(force)) };
};

export default mult => nodes => circ => {
  const ch = charge(mult)(circ);
  return nodes.map(e => ch(e));
  // return circ;
};
