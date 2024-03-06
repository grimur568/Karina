import React from 'react';
import Excavator from '../../images/grafan.png';
import './../../index.css';
import ContentBox from '../../components/contentBox';
import Title from '../../components/title';

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
        <div style={{ height: '1em' }} />
        {/* Display the excavator image */}
        <img src={Excavator} alt="Excavator" style={{ maxWidth: '100%', height: 'auto' }} />
        <Title/>
      </div>
      <div className="bg-black h-screen">
        <ContentBox />
      </div>
    </div>
  );
};

export default FrontPage;
