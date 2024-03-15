import React from 'react';
import whiteVolvo from '../../images/whiteVolvo.JPG';
import ServiceCard from '../../components/serviceCard';

const ServicePage = () => {
    return (
        <div className='p-20' style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${whiteVolvo})`, 
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}>
            <div className="grid grid-cols-3 gap-10 m-1 ">
                {/* No need for dynamic adjustment here, CSS Grid takes care of the layout */}
                {Array.from({ length: 30 }).map((_, index) => (
                    <ServiceCard key={index} />
                ))}
            </div>
        </div>
    );
};

export default ServicePage;
