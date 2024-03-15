import React from 'react';
import whiteVolvo from '../../images/whiteVolvo.JPG';
import MachineCard from '../../components/machineCard';

const ServicePage = () => {
    return (
        <div className='p-20' style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${whiteVolvo})`, 
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}>
            <div className="grid grid-cols-2 gap-10 m-1 place-items-center">
                {/* No need for dynamic adjustment here, CSS Grid takes care of the layout */}
                {Array.from({ length: 29 }).map((_, index) => (
                    <MachineCard key={index} />
                ))}
            </div>
        </div>
    );
};

export default ServicePage;
