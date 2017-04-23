import {compose} from 'ramda';
import {randomUniform} from 'd3';
import {getHsvGolden as getColor} from 'golden-colors';
import {defDy, defDx} from './tick';
window.getColor = getColor;

export const createEnv = fns => {
  const particleOperations = compose(...fns);
  return t => nodes => nodes.map(e => particleOperations(e, t));
};

export const defaultTick = createEnv([defDy, defDx]);

export const createNodes = (count, arr, defs) => {
  const randomX = randomUniform(-(window.width / 3), window.width / 3);
  const randomY = randomUniform(-(window.height / 3), window.height / 3);
  const def =
    defs ||
    function() {
      return {
        r: 30,
        x: randomX(),
        y: randomY(),
        dx: 0,
        dy: 0,
        color: getColor(0.5, 0.8).toHexString(),
      };
    };

  if (arr) {
    return arr.map(e => Object.assign(def(e), e));
  }
  return Array(count).fill('').map(def);
};

// export default {createEnv, createNodes};
