import { createStore } from 'redux';
import createS
import rootReducer from '../reducers';

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
)

export default configureStore