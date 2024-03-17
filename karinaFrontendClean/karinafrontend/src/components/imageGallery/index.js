import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImage, fetchImageIds, setCurrentIndex } from '../../store/actions/imageActions';

function ImageGallery() {
  const dispatch = useDispatch();
  const { imageIds, currentImage, currentIndex } = useSelector((state) => state.imagesStateSlice);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchImageIds());
  }, [dispatch]);

  useEffect(() => {
    if (imageIds.length > 0 && currentIndex < imageIds.length) {
      dispatch(fetchImage(imageIds[currentIndex]));
      setIsLoading(false);
    }
  }, [currentIndex, imageIds, dispatch]);

  const handleNext = () => {
    setIsLoading(true);
    const nextIndex = (currentIndex + 1) % imageIds.length;
    dispatch(setCurrentIndex(nextIndex));
  };

  const handlePrevious = () => {
    setIsLoading(true);
    const prevIndex = (currentIndex - 1 + imageIds.length) % imageIds.length;
    dispatch(setCurrentIndex(prevIndex));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <button onClick={handlePrevious} className="z-10 text-4xl font-bold text-white hover:text-blue-300 transition duration-300">
        ‹
      </button>
      <div className="flex flex-grow max-w-4xl h-[80vh] justify-center items-center mx-4 overflow-hidden shadow-xl rounded-xl bg-white-500 backdrop-blur-lg">
        {isLoading ? (
          <div className="flex justify-center items-center w-full h-full text-white text-xl">
            Loading...
          </div>
        ) : (
          <img src={currentImage} alt="Gallery" className="max-w-full max-h-full object-contain"/>
        )}
      </div>
      <button onClick={handleNext} className="z-10 text-4xl font-bold text-white hover:text-blue-300 transition duration-300">
        ›
      </button>
    </div>
  );
}

export default ImageGallery;

