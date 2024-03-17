import React, { useState, useEffect } from 'react';

const fetchServices = async (id) => {
  const apiUrl = 'https://localhost:7290';
  
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
    return { ...serviceData, imageUrl };
  } catch (error) {
    console.error("Fetching service failed:", error);
    return null; // Handle error as needed
  }
};

const ServiceCard = ({ id }) => {
  const [service, setService] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const serviceData = await fetchServices(id);
      setService(serviceData);
    };

    fetchData();
  }, [id]);

  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card shadow-lg bg-white">
      <img src={service.imageUrl} alt={service.title} className="card-img-top" />
      <div className="card-body text-center m-5">
        <h1>{service.title}</h1>
        <p className="card-text">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
