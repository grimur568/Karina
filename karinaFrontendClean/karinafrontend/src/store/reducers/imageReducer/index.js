import { SET_IMAGE_IDS, SET_CURRENT_IMAGE,SET_CURRENT_INDEX } from "../../actions/imageActions";

const initialState = {
    imageIds: [],
    currentImage: '',
    currentIndex: 0,
  };
  
  export default function imagesReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_IMAGE_IDS':
        return { ...state, imageIds: action.payload };
      case 'SET_CURRENT_IMAGE':
        return { ...state, currentImage: action.payload };
      case 'SET_CURRENT_INDEX':
        return { ...state, currentIndex: action.payload };
      default:
        return state;
    }
  }