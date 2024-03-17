

export const FETCH_SERVICE_SUCCESS = 'FETCH_SERVICE_SUCCESS';
export const API_ERROR = 'API_ERROR';
export const FETCH_SERVICE_IDS = 'FETCH_SERVICE_IDS';



const initialState = {
  services: null,
  serv:[],
  error: null,
};

const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SERVICE_SUCCESS':
      return { ...state, service: action.payload, error: null };
    
    case 'FETCH_SERVICE_IDS':
      return { ...state, serv: action.payload, error: null };
    case 'API_ERROR':
      return { ...state, error: action.payload, service: null };
            default:
              return state;
  }
};

export default serviceReducer;
