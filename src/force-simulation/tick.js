import m from 'mathjs';
const center = {
  x: 50,
  y: 50,
};
window.math = m;
export function defDx(circ, t) {
  let {dx, x} = circ;
  let ddx = -m.sign(x);
  return Object.assign(circ, {x: x + dx + ddx, dx: dx + ddx});
}
export function defDy(c1, c2 = center, t) {
  let {dy, y} = c1;
  console.log('distance:', distance(c1, c2));
  let ddy = -m.sign(y);
  return Object.assign(c1, {y: y + dy + ddy, dy: dy + ddy});
}

function distance(c1, c2) {
  let {y: y1, x: x1} = c1;
  let {y: y2, x: x2} = c2;
  let a = x1 - x2;
  let b = y1 - y2;
  // console.log("tan:" math.tan())
  return m.sqrt(a * a + b * b);
}
