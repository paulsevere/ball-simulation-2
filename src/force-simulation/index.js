import { compose, flatten } from "ramda";
import { defDy, defDx } from "./tick";
import { getForce, reduceForces } from "./util";
import centerForce from "./center";
import chargeForce from "./charge";
window.getForce = getForce;

export const createEnv = fns => {
  return t =>
    nodes => {
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
  chargeForce(force => force * 10)
]);

// export default {createEnv, createNodes};
