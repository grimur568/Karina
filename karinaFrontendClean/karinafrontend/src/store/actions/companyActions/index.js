import axios from 'axios';
export const FETCH_COMPANIES_BEGIN = 'FETCH_COMPANIES_BEGIN';
export const FETCH_COMPANIES_SUCCESS = 'FETCH_COMPANIES_SUCCESS';
export const FETCH_COMPANIES_FAILURE = 'FETCH_COMPANIES_FAILURE';

export const POST_COMPANY_BEGIN = 'POST_COMPANY_BEGIN';
export const POST_COMPANY_SUCCESS = 'POST_COMPANY_SUCCESS';
export const POST_COMPANY_FAILURE = 'POST_COMPANY_FAILURE';

const axiosWithAuth = () => {
  // Retrieve the token from sessionStorage
  const token = sessionStorage.getItem('jwtToken');

  // Create a new instance of axios
  const instance = axios.create({
    baseURL: 'https://localhost:7290',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : '' // Set the Authorization header with the JWT token if it exists
    }
  });

  return instance;
};

// Async Action Creator
export const fetchCompanies = () => async (dispatch) => {
  dispatch({ type: FETCH_COMPANIES_BEGIN });
  try {
    const axiosInstance = axiosWithAuth();
    const response = await axiosInstance.get('/company');
    
    dispatch({ type: FETCH_COMPANIES_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_COMPANIES_FAILURE, payload: error });
  }
  };


export const postCompany = (company) => async (dispatch) => {
  dispatch({ type: FETCH_COMPANIES_BEGIN });
  try {
    const response = await axios.post('https://localhost:7290/company', company);
    const responsedata  = await axios.get('https://localhost:7290/company');
    dispatch({ type: FETCH_COMPANIES_SUCCESS, payload: responsedata.data });
    console.log('response', response);
  } catch (error) {
    console.log('error', error);
    dispatch({ type: FETCH_COMPANIES_FAILURE, payload: error });
  }
};
