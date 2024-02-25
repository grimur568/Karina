import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk'; // Corrected the import statement here
import companyReducer from './reducers/companyReducer';
import loginReducer from './reducers/loginReducer';
// Import additional reducers as needed
// import yourReducer from './reducers/yourReducer';

// Combine reducers
const rootReducer = combineReducers({
  companyStateSlice: companyReducer,
  loginStateSlice: loginReducer,
  // yourStateSlice: yourReducer, // Uncomment and replace 'yourReducer' with your actual reducer
  // Add more reducers as needed
});

// Create the Redux store with the root reducer and middleware
const store = createStore(
  rootReducer,
  applyMiddleware(thunk) // Apply middleware like thunk or logger here
);

export default store;
