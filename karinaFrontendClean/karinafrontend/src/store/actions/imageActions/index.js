export const setImageIds = (imageIds) => ({
  type: 'SET_IMAGE_IDS',
  payload: imageIds,
});

export const setCurrentImage = (image) => ({
  type: 'SET_CURRENT_IMAGE',
  payload: image,
});

export const setCurrentIndex = (index) => ({
  type: 'SET_CURRENT_INDEX',
  payload: index,
});

export const fetchImageIds = () => {
  return (dispatch) => {
    fetch('https://localhost:7290/images/metadata')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setImageIds(data));
      });
  };
};

export const fetchImage = (id) => {
  return (dispatch) => {
    fetch(`https://localhost:7290/image/${id}`)
      .then((response) => response.blob())
      .then((blob) => {
        dispatch(setCurrentImage(URL.createObjectURL(blob)));
      });
  };
};
