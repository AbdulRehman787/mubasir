import {configureStore} from "@reduxjs/toolkit"

import rootReducer from '../reducers';

const Store = preloadedState => configureStore(
  rootReducer,
  preloadedState,
)

export default Store