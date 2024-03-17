import React from 'react';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../../actions/loginActions/index.js';



const initialState = {
    token: null,
    loading: false,
    error: null
  };
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          token: action.payload
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
        case LOGOUT:
          // Reset authentication state
          return {
            ...state,
            isLoggedIn: false,
            token: null,
          };
      default:
        return state;
    }
  };
  
  export default loginReducer;
