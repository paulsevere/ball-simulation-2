import { compose, flatten } from "ramda";
import { randomUniform } from "d3";
import { getHsvGolden as getColor } from "golden-colors";
import { defDy, defDx } from "./tick";
import { getForce, reduceForces } from "./util";
import centerForce from "./center";
import chargeForce from "./charge";
window.getForce = getForce;

export const createEnv = fns => {
  return t => nodes => {
    let getDiffs = item => flatten(fns.map(fn => fn(nodes)(item, t)));
    return nodes.map(e => {
      let diffs = reduceForces(getDiffs(e));
      let dx = e.dx + diffs.dx / 100, dy = e.dy + diffs.dy / 100;
      return Object.assign(e, { x: e.x + dx, y: e.y + dy, dx, dy });
    });
  };
};

export const defaultTick = createEnv([
  centerForce(10),
  chargeForce(force => force * 10),
]);

export const createNodes = (count, arr, defs) => {
  const randomX = randomUniform(-(window.width / 3), window.width / 3);
  const randomY = randomUniform(-(window.height / 3), window.height / 3);
  const randomR = randomUniform(20, 60);
  const def = function() {
    return Object.assign(
      {
        r: randomR(),
        x: randomX(),
        y: randomY(),
        dx: 0,
        dy: 0,
        color: getColor(0.5, 0.9).toHexString(),
      },
      defs
    );
  };

  if (arr) {
    let els = arr.map(e => Object.assign(def(e), e));
    if (count) {
      return els.concat(Array(count).fill("").map(def));
    }
    return els;
  }
  return Array(count).fill("").map(def);
};

// export default {createEnv, createNodes};
