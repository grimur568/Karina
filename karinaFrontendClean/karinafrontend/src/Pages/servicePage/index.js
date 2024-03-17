import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIds } from './../../store/actions/serviceActions';
import whiteVolvo from '../../images/whiteVolvo.JPG';
import ServiceCard from '../../components/serviceCard';

const ServicePage = () => {
    const dispatch = useDispatch();
    const service = useSelector(state => state.serviceStateSlice.serv);

    useEffect(() => {
        dispatch(fetchIds());
    }, [dispatch]);
    return (
        <div className='p-20' style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${whiteVolvo})`, 
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}>
            <div className="grid grid-cols-3 gap-10 m-1 ">
                {/* No need for dynamic adjustment here, CSS Grid takes care of the layout */}
                {service.map((id, index) => (
                    <ServiceCard id={id.id} key={index} />
                ))}
            </div>
        </div>
    );
};

export default ServicePage;
