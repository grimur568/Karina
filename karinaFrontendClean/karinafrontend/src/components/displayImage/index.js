import React, { useEffect, useState } from 'react';

function DisplayImage({ imageId }) {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`https://localhost:7290/image/${imageId}`);
        if (!response.ok) {
          throw new Error('Image could not be fetched.');
        }
        const imageBlob = await response.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImageUrl(imageObjectURL);
      } catch (error) {
        console.error('Error fetching image:', error);
        // Handle the error according to your needs
      }
    };

    fetchImage();
  }, [imageId]); // Re-fetch if the imageId changes

  return (
    <div>
      {imageUrl ? <img src={imageUrl} alt="Fetched from API" /> : <p>Loading image...</p>}
    </div>
  );
}

export default DisplayImage;