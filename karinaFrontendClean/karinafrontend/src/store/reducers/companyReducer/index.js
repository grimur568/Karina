import { FETCH_COMPANIES_BEGIN,
          FETCH_COMPANIES_SUCCESS,
          FETCH_COMPANIES_FAILURE,
          POST_COMPANY_BEGIN,
        POST_COMPANY_SUCCESS,
          POST_COMPANY_FAILURE } from '../../actions/companyActions/index.js';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function companyReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMPANIES_BEGIN:
        return {
            ...state,
            loading: true,
            error: null
        }
    case FETCH_COMPANIES_SUCCESS:
      console.log('response', action.payload)
        return {
            ...state,
            loading: false,
            items: action.payload
          };

    case FETCH_COMPANIES_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.payload,
            items: []
          };
    case POST_COMPANY_BEGIN:
   
      return {
        ...state,
        loading: true,
        error: null
      };
    case POST_COMPANY_SUCCESS:
    
      return {
        ...state,
        loading: false,
        items: [...state.items]
      };
    case POST_COMPANY_FAILURE:

      return {
        ...state,
        loading: false,
        error: action.payload,
        items: []
      };
          default:
      return state;
  }
}
