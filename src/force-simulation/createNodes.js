import { getHsvGolden as getColor } from "golden-colors";
import { randomUniform } from "d3";

export const createNodes = (count, arr, defs) => {
  const randomX = randomUniform(-(window.width / 3), window.width / 3);
  const randomY = randomUniform(-(window.height / 3), window.height / 3);
  const randomR = randomUniform(20, 60);
  console.log(
    Object.keys(defs).reduce(
      (acc, e) => {
        if (typeof defs[e] == "function") {
          acc[e] = defs[e]();
        } else {
          acc[e] = defs[e];
        }
        return acc;
      },
      {}
    )
  );
  const def = function() {
    return Object.assign(
      {
        r: randomR(),
        x: randomX(),
        y: randomY(),
        dx: 0,
        dy: 0,
        color: getColor(0.5, 0.9).toHexString()
      },
      Object.keys(defs).reduce(
        (acc, e) => {
          if (typeof defs[e] == "function") {
            acc[e] = defs[e]();
          } else {
            acc[e] = defs[e];
          }
          return acc;
        },
        {}
      )
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
