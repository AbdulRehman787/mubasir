import { useReducer } from 'react';
import rootReducer from '../reducers';
import { createStore } from 'redux';

const initialState = {}; // Set your initial state here if needed

const store = createStore(rootReducer, initialState);

const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
