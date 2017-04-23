import {randomUniform} from 'd3';
import {createNodes, defaultTick} from '../force-simulation';

export default function(state = createNodes(1), action) {
  switch (action.type) {
    case 'TICK':
      return defaultTick(action.t)(state);
    default:
      return state;
  }
}
