// reducers/index.js

import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import orderReducer from './orderReducer';
import { registerReducer } from './registerReducer';
//import cartReducer from './cartReducer'; // Import your cartReducer and any other reducers

const rootReducer = combineReducers({
  cart: cartReducer,
  order: orderReducer,
  registration: registerReducer,
  // Add other reducers here if needed
});

export default rootReducer;
