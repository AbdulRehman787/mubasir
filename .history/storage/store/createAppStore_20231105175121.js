import { createStore } from 'redux';
import createStor
import rootReducer from '../reducers';

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
)

export default configureStore