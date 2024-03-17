// ActionTypes.js
import {
  FETCH_SERVICE_SUCCESS,
  FETCH_SERVICE_IDS,
  API_ERROR
} from '../../reducers/serviceReducer';

// ApiActions.js
const apiUrl = 'https://localhost:7290'; // Your API URL

export const fetchServices= (id) => async dispatch => {
  try {
      // Fetch the service by ID
      const serviceResponse = await fetch(`${apiUrl}/service/${id}`);

      if (!serviceResponse.ok) throw new Error('Failed to fetch service');
      const serviceData = await serviceResponse.json();
     
      // Fetch the image data for the service's image ID
      const imageResponse = await fetch(`${apiUrl}/image/${serviceData.image}`);
      if (!imageResponse.ok) throw new Error('Failed to fetch image');
      const imageBlob = await imageResponse.blob();
      const imageUrl = URL.createObjectURL(imageBlob);
  

      // Combine service data with the image URL
      const combinedData = { ...serviceData, imageUrl };
 
      dispatch({ type: FETCH_SERVICE_SUCCESS, payload: combinedData });
 
  } catch (error) {
      dispatch({ type: API_ERROR, payload: error.toString() });
  }
};

export const fetchIds = () => async dispatch => {
  try {
      // Fetch the service IDs
      const serviceResponse = await fetch(`${apiUrl}/services`);
      if (!serviceResponse.ok) throw new Error('Failed to fetch service IDs');
      const serviceData = await serviceResponse.json();
      console.log("jess",serviceData)
      dispatch({ type: FETCH_SERVICE_IDS, payload: serviceData });
  } catch (error) {
      dispatch({ type: API_ERROR, payload: error.toString() });
  }
};



