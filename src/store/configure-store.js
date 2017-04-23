import rootReducer from '../reducers';
import {createStore} from 'redux';

export default initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  window.store = store;
  return store;
};
