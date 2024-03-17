import React, { useState } from 'react';

function ImageUpload() {
  const [name, setName] = useState('');
  const [file, setFile] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('file', file);

    try {
      const response = await fetch('https://localhost:7290/image', {
        method: 'POST',
        body: formData,
        // Don't set Content-Type header, so the browser sets it with the proper boundary.
        // headers: { 'Content-Type': 'multipart/form-data' }, // This line is commented out on purpose.
      });

      const isSuccess = await response.json();

      if (isSuccess) {
        alert('Image uploaded successfully');
      } else {
        alert('Image upload failed');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label htmlFor="file">File:</label>
        <input
          type="file"
          id="file"
          onChange={handleFileChange}
        />
      </div>
      <button type="submit">Upload Image</button>
    </form>
  );
}

export default ImageUpload;
