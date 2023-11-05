
import { createStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
)

export default configureStore