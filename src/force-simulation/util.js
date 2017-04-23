import math from "mathjs";
const radDeg = 360 / math.pi / 2;
const deg = rad => radDeg * rad;
function getDistance(a, b) {
  return { d: math.sqrt(math.square(b.x - a.x) + math.square(b.y - a.y)) };
}

function getAngle(a, b) {
  let fy = force => force * math.sin(math.atan2(b.y - a.y, b.x - a.x));
  let fx = force => force * math.sin(math.atan2(b.x - a.x, b.y - a.y));
  return { fy, fx };
}

function getForce(a, b) {
  return { ...getAngle(a, b), ...getDistance(a, b) };
}

function reduceForces(diffs) {
  return diffs.reduce((acc, diff) => {
    return { dx: acc.dx + diff.dx, dy: acc.dy + diff.dy };
  });
}

module.exports = { getForce, reduceForces };
