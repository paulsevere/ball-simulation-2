import { randomUniform } from "d3";
import { createNodes, defaultTick } from "../force-simulation";

export default function(
  state = createNodes(10, [{ r: 50, y: 0, x: 0 }], { r: 20, y: 200 }),
  action
) {
  switch (action.type) {
    case "TICK":
      return defaultTick(action.t)(state);
    default:
      return state;
  }
}
