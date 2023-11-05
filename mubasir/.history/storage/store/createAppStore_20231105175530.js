import {configureStore} from "@reduxjs/toolkit"

import rootReducer from '../reducers';

const configureStore = preloadedState => configureStore(
  rootReducer,
  preloadedState,
)

export default configureStore