import { randomUniform } from "d3";
import { defaultTick } from "../force-simulation";
import { createNodes } from "../force-simulation/createNodes";

export default function(
  state = createNodes(null, [{ r: 50, y: 100, x: 100, dx: 5, dy: -5 }], {
    r: randomUniform(20, 30),
    y: randomUniform(-100, 100),
    x: randomUniform(-100, 100)
  }),
  action
) {
  switch (action.type) {
    case "TICK":
      return defaultTick(action.t)(state);
    default:
      return state;
  }
}
