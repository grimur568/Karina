import axios from "axios";
 export const LOGIN_REQUEST = 'LOGIN_REQUEST';
 export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
 export const LOGIN_FAILURE = 'LOGIN_FAILURE';
 export const LOGOUT = 'LOGOUT';

 export const loginRequest = () => ({
    type: LOGIN_REQUEST
  });
  
  export const loginSuccess = (token) => {
    // Save token to sessionStorage
    sessionStorage.setItem('jwtToken', token);
    console.log('token', token)
    return {
      type: LOGIN_SUCCESS,
      payload: token
    };
  };
  
  export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error
  });



export const login = (username, password) => async (dispatch) => {
    console.log('in actions')
    dispatch(loginRequest());
    console.log('in actions')
    try {
      const response = await axios.post('https://localhost:7290/auth/login', { username, password });
      console.log('response', response);
      const { token } = response.data; // Assuming the server returns a token upon successful login
      dispatch(loginSuccess(token));
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };

  export const logout = () => {
    
    sessionStorage.removeItem('jwtToken'); // Remove the JWT token from sessionStorage
    return {
      type: LOGOUT
    };
  };