import {combineReducers} from 'redux';
import nodes from './nodes';
import pause from './run_state';

const rootReducer = combineReducers({nodes, pause});

export default rootReducer;
