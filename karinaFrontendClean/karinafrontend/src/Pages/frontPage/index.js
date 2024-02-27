import React from 'react';
import Excavator from '../../images/grafa.webp';
import './../../index.css';

const FrontPage = () => {
  return (
    <div
      className="bg-black  h-screen"
      style={{

      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
        }}
      >

        {/* Display the excavator image */}
        <img src={Excavator} alt="Excavator" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
    </div>
  );
};

export default FrontPage;
