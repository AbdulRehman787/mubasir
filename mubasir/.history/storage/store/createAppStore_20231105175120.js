import { createStore } from 'redux';
import createSto
import rootReducer from '../reducers';

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
)

export default configureStore