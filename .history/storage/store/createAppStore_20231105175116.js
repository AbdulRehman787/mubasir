import { createStore } from 'redux';
import creatr
import rootReducer from '../reducers';

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
)

export default configureStore