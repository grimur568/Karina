import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServices } from './../../store/actions/serviceActions';

const ServicesDetails = ({id}) => {
  const dispatch = useDispatch();
  const service = useSelector(state => state.serviceStateSlice.service);
  const error = useSelector(state => state.serviceStateSlice.error); // Assuming error is stored at `state.error`


  useEffect(() => {
      dispatch(fetchServices(id));
  }, [dispatch, id]);

  if (error) {
    return <div>Error loading the service: {error}</div>;
  }

  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{service.title}</h2>
      <p>{service.description}</p>
      {service.imageUrl && <img src={service.imageUrl} alt="Service" />}
    </div>
  );
};

export default ServicesDetails;
